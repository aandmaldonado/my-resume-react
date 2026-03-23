"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2, ChevronDown, User, Building2, Linkedin, Briefcase, Contrast, AlertCircle, Bot, RotateCcw, Plus, Minus, Mic, BotMessageSquare, Sun, Moon, Mail, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { ChatMessage } from "./chat-message";
import { StarRating } from "./star-rating";
import { cn } from "@/lib/utils";
import { sendGAEvent } from "@next/third-parties/google";

interface Message {
    role: "user" | "assistant";
    content: string;
}

interface LeadData {
    name: string;
    email: string;
    linkedin: string;
}

export function ChatWidget() {
    const { t, i18n } = useTranslation();
    const [botTheme, setBotTheme] = useState<'light' | 'dark'>('dark');
    const isDark = botTheme === 'dark';
    const [isOpen, setIsOpen] = useState(false);
    const [showTooltip, setShowTooltip] = useState(true);
    const [step, setStep] = useState<"lead" | "chat">("chat");
    const [isOffline, setIsOffline] = useState(false);
    const [leadInfo, setLeadInfo] = useState<LeadData>({
        name: "",
        email: "",
        linkedin: "",
    });
    const [showLeadCapture, setShowLeadCapture] = useState(false);
    const [showFeedback, setShowFeedback] = useState(false);
    const [userRating, setUserRating] = useState(0);
    const [emailError, setEmailError] = useState(false);

    const [chatSettings, setChatSettings] = useState({
        botName: "Alvi",
        ownerName: "Álvaro Maldonado",
        ownerShortName: "Álvaro"
    });
    const [fontSize, setFontSize] = useState<"sm" | "md" | "lg">("md");
    const [highContrast, setHighContrast] = useState(false);

    const [messages, setMessages] = useState<Message[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [bookingDate, setBookingDate] = useState("");
    const [bookingTime, setBookingTime] = useState("");
    const [bookingError, setBookingError] = useState<string | null>(null);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    const [recordingError, setRecordingError] = useState<string | null>(null);
    const recognitionRef = useRef<any>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    // --- HELPER PARA RASTREO SEGURO (GA) ---
    const safeTrack = (eventName: string, params: Record<string, any> = {}) => {
        try {
            if (typeof window !== "undefined" && (window as any).gtag) {
                sendGAEvent({
                    event: eventName,
                    ...params
                });
            } else if (process.env.NODE_ENV === "development") {
                console.log(`[GA Simulado] Evento: ${eventName}`, params);
            }
        } catch (e) {
            console.warn("GA tracking error caught:", e);
        }
    };

    useEffect(() => {
        // Fetch chat settings for i18n placeholders
        fetch("/api/portfolio/info")
            .then(res => res.json())
            .then(data => {
                if (data.ownerName) setChatSettings(data);
            })
            .catch(console.error);
    }, []);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, step]);
    
    // --- LÓGICA DE VOZ ---
    const toggleVoiceInput = async () => {
        if (isRecording) {
            recognitionRef.current?.stop();
            setIsRecording(false);
            return;
        }

        // Intento de forzar el permiso de hardware real
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            stream.getTracks().forEach(track => track.stop());
        } catch (err) {
            console.error("Microphone hardware access denied:", err);
            setRecordingError(tp('chatbot.voice_error_permission'));
            return;
        }

        const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
        
        if (!SpeechRecognition) {
            setRecordingError(tp('chatbot.voice_error_not_supported'));
            return;
        }

        const recognition = new SpeechRecognition();
        recognition.continuous = false; // Cambiado a false para auto-stop por silencio
        recognition.interimResults = true;
        recognition.lang = i18n.language === 'en' ? 'en-US' : 'es-ES';

        recognition.onstart = () => {
            setIsRecording(true);
            setRecordingError(null);
            safeTrack("voice_input_start");
        };

        recognition.onresult = (event: any) => {
            let interimTranscript = "";
            let finalTranscript = "";

            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    finalTranscript += event.results[i][0].transcript;
                } else {
                    interimTranscript += event.results[i][0].transcript;
                }
            }

            const newText = (input + finalTranscript + interimTranscript).slice(0, 500);
            setInput(newText);
            
            if (newText.length >= 500) {
                recognition.stop();
            }
        };

        recognition.onerror = (event: any) => {
            console.error("Speech recognition error:", event.error);
            if (event.error === 'not-allowed') {
                setRecordingError(tp('chatbot.voice_error_permission'));
            } else if (event.error === 'no-speech') {
                setIsRecording(false);
            } else {
                setRecordingError(`Error: ${event.error}`);
            }
            setIsRecording(false);
        };

        recognition.onend = () => {
            setIsRecording(false);
            recognitionRef.current = null;
        };

        recognitionRef.current = recognition;

        try {
            recognition.start();
        } catch (e) {
            console.error("Critical start error:", e);
            setIsRecording(false);
        }
    };

    useEffect(() => {
        if (recordingError) {
            const timer = setTimeout(() => setRecordingError(null), 5000);
            return () => clearTimeout(timer);
        }
    }, [recordingError]);

    useEffect(() => {
        return () => {
            if (recognitionRef.current) {
                recognitionRef.current.stop();
            }
        };
    }, []);

    // Enviar saludo inicial al abrir el chat si está vacío (Paso 2.1)
    useEffect(() => {
        if (isOpen) {
            if (messages.length === 0) {
                setMessages([
                    {
                        role: "assistant",
                        content: tp('chatbot.welcome_simple'),
                    },
                ]);
                setShowSuggestions(true);
            } else if (messages.length === 1 && messages[0].role === "assistant") {
                // Si solo existe el mensaje inicial, lo actualizamos al nuevo idioma si este cambia
                setMessages([
                    {
                        role: "assistant",
                        content: tp('chatbot.welcome_simple'),
                    },
                ]);
            }
        }
    }, [isOpen, i18n.language, messages.length]);

    const toggleChat = () => {
        setIsOpen(!isOpen);
        setShowTooltip(false);

        safeTrack("cta_click", {
            button_label: !isOpen ? "chat_open" : "chat_close",
            location: "floating_widget"
        });
    };

    const resetSession = () => {
        setMessages([]);
        setShowSuggestions(false);
        setInput("");
        setStep("chat");
        setLeadInfo({ name: "", email: "", linkedin: "" });
        setShowLeadCapture(false);
        setShowFeedback(false);
        setUserRating(0);
        setIsOffline(false);
        setShowDatePicker(false);
        setBookingDate("");
        setBookingTime("");
        setBookingError(null);
        safeTrack("chat_session_reset", {});
    };

    const handleSuggestionClick = (suggestion: string) => {
        // Mapeamos el chip a una pregunta natural para que el LLM reciba contexto real
        const questionMap: Record<string, string> = {
            [tp('chatbot.suggestion_experience')]: tp('chatbot.q_experience'),
            [tp('chatbot.suggestion_tech')]: tp('chatbot.q_tech'),
            [tp('chatbot.suggestion_education')]: tp('chatbot.q_education'),
            [tp('chatbot.suggestion_schedule')]: tp('chatbot.q_schedule'),
        };
        const question = questionMap[suggestion] || suggestion;
        setShowSuggestions(false);
        setInput(question);
    };

    // Helper para traducciones parametrizadas
    const tp = (key: string, options?: any): string => {
        return t(key, {
            ...chatSettings,
            ...options
        }) as string;
    };

    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const startChat = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateEmail(leadInfo.email)) {
            setEmailError(true);
            return;
        }
        setEmailError(false);
        if (!leadInfo.linkedin || !leadInfo.name) return;

        try {
            // Normalizar URL de LinkedIn antes de enviar
            let finalLinkedin = leadInfo.linkedin.trim();
            if (finalLinkedin && !finalLinkedin.startsWith("http")) {
                const path = finalLinkedin.startsWith("/") ? finalLinkedin : `/${finalLinkedin}`;
                const fullPath = path.startsWith("/in/") ? path : `/in${path}`;
                finalLinkedin = `https://www.linkedin.com${fullPath}`;
            }

            // 2. Enviar correo de Lead inicial
            try {
                const leadController = new AbortController();
                const leadTimeoutId = setTimeout(() => leadController.abort(), 3000);

                await fetch("/api/lead", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        ...leadInfo,
                        linkedin: finalLinkedin, 
                    }),
                    signal: leadController.signal
                });

                clearTimeout(leadTimeoutId);
            } catch (e) {
                console.error("Silent error sending lead email:", e);
            }

            // 3. Track lead capture in GA
            safeTrack("chat_lead_captured", {
                lead_name: leadInfo.name,
                lead_email: leadInfo.email,
                lead_linkedin: finalLinkedin
            });

            setStep("chat");

            // 4. Bienvenida + chips de sugerencias
            setMessages([
                {
                    role: "assistant",
                    content: tp('chatbot.welcome_simple', { name: leadInfo.name }),
                },
            ]);
            setShowSuggestions(true);
        } catch (error) {
            console.error("Error starting chat:", error);
            setIsOffline(true);
        }
    };

    const handleSend = async (textOverride?: string) => {
        const textToSend = textOverride || input || "";
        if (!textToSend.trim() || isLoading) return;

        // Detener grabación de voz al enviar
        if (isRecording) {
            recognitionRef.current?.stop();
            setIsRecording(false);
        }

        const userMessage: Message = { role: "user", content: textToSend };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        safeTrack("chat_message_sent", {
            message_length: input.length
        });

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    messages: [...messages, userMessage],
                    leadInfo,
                    // enrichment ya NO se pasa al chat para evitar alucinaciones
                }),
            });

            if (!response.ok) {
                if (response.status === 429) {
                    setIsOffline(true);
                    safeTrack("chat_error_trigger", {
                        error_type: "rate_limit",
                        error_message: "Groq/Tavily Rate Limit Reached",
                        api_endpoint: "/api/chat"
                    });
                    setMessages((prev) => [
                        ...prev,
                        { role: "assistant", content: tp('chatbot.rate_limit') },
                    ]);
                    setIsLoading(false);
                    return;
                }
                throw new Error("Chat API failed");
            }

            const data = await response.json();
            if (data.error) throw new Error(data.error);

            let botContent = data.content;
            let bookingJson: string | null = null;

            // 1. Detectar y limpiar el tag de agendamiento
            if (botContent.includes("[TRIGGER_BOOKING:")) {
                const match = botContent.match(/\[TRIGGER_BOOKING:\s*(\{.*?\})\]/);
                if (match) {
                    bookingJson = match[1];
                    botContent = botContent.replace(match[0], "").trim();
                }
            }

            // 1.5. Detectar tag de DatePicker
            if (botContent.includes("[ACTION_DATEPICKER]")) {
                botContent = botContent.replace("[ACTION_DATEPICKER]", "").trim();
                setShowDatePicker(true);
            }

            // 1.7 Detector de Feedback
            if (botContent.includes("[ACTION_FEEDBACK]")) {
                botContent = botContent.replace("[ACTION_FEEDBACK]", "").trim();
                setShowFeedback(true);
            }

            // 2. Mostrar el mensaje del bot (ya limpio)
            if (botContent.trim()) {
                setMessages((prev) => [...prev, { role: "assistant", content: botContent }]);
            }

            // 3. Procesar el agendamiento si existe el tag
            if (bookingJson) {
                try {
                    const bookingData = JSON.parse(bookingJson);
                    const bookingRes = await fetch("/api/booking", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            ...bookingData,
                            linkedin: leadInfo.linkedin.startsWith('/in/') 
                                ? `https://www.linkedin.com${leadInfo.linkedin}` 
                                : leadInfo.linkedin,
                        }),
                    });

                    if (bookingRes.ok) {
                        safeTrack("chat_booking_success", {
                            booking_date: bookingData.date,
                            booking_time: bookingData.time
                        });
                        setMessages((prev) => [...prev, {
                            role: "assistant",
                            content: tp('chatbot.booking_success')
                        }]);
                    } else {
                        const errorData = await bookingRes.json();
                        console.error("Booking API Error:", errorData);
                        throw new Error("Booking failed");
                    }
                } catch (e) {
                    console.error("Error processing booking:", e);
                    setMessages((prev) => [...prev, {
                        role: "assistant",
                        content: tp('chatbot.error_friendly')
                    }]);
                }
            }
        } catch (error: any) {
            safeTrack("chat_error_trigger", {
                error_type: "api_failure",
                error_message: error.message || "Unknown error"
            });
            setMessages((prev) => [
                ...prev,
                { role: "assistant", content: tp('chatbot.error_friendly') },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleBookingSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // 1. Validaciones básicas de campos vacíos
        if (!bookingDate || !bookingTime || !leadInfo.name || !leadInfo.email || !leadInfo.linkedin) {
            setBookingError("Todos los campos son obligatorios / All fields are required");
            return;
        }

        // 2. Validar formato email
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(leadInfo.email)) {
            setBookingError("Email inválido / Invalid email");
            return;
        }

        // 3. Validar formato LinkedIn slug (/in/...)
        if (!leadInfo.linkedin.startsWith('/in/')) {
            setBookingError("LinkedIn debe empezar por /in/ (ej: /in/pepe)");
            return;
        }

        const fullLinkedin = leadInfo.linkedin.startsWith('http') 
            ? leadInfo.linkedin 
            : `https://www.linkedin.com${leadInfo.linkedin}`;

        const [y, m, d] = bookingDate.split('-');
        const formattedDate = `${d}-${m}-${y}`;

        const selectionText = i18n.language === 'en'
            ? `I'd like to schedule the call for **${formattedDate}** at **${bookingTime} (CET)**. 🗓️\n\n**My details:**\n- **Name:** ${leadInfo.name}\n- **Email:** ${leadInfo.email}\n- **LinkedIn:** ${fullLinkedin}`
            : `Me gustaría agendar la llamada para el **${formattedDate}** a las **${bookingTime} (CET)**. 🗓️\n\n**Mis datos:**\n- **Nombre:** ${leadInfo.name}\n- **Email:** ${leadInfo.email}\n- **LinkedIn:** ${fullLinkedin}`;

        setShowDatePicker(false);
        const userMessage: Message = { role: "user", content: selectionText };
        setMessages((prev) => [...prev, userMessage]);

        setIsLoading(true);
        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    messages: [...messages, userMessage],
                    leadInfo: { ...leadInfo, linkedin: fullLinkedin },
                }),
            });

            if (response.ok) {
                const data = await response.json();
                let botContent = data.content;
                let bookingJson: string | null = null;

                if (botContent.includes("[TRIGGER_BOOKING:")) {
                    const match = botContent.match(/\[TRIGGER_BOOKING:\s*(\{.*?\})\]/);
                    if (match) {
                        bookingJson = match[1];
                        botContent = botContent.replace(match[0], "").trim();
                    }
                }

                if (botContent.includes("[ACTION_FEEDBACK]")) {
                    botContent = botContent.replace("[ACTION_FEEDBACK]", "").trim();
                    setShowFeedback(true);
                }

                if (botContent.trim()) {
                    setMessages((prev) => [...prev, { role: "assistant", content: botContent }]);
                }

                if (bookingJson) {
                    const bookingData = JSON.parse(bookingJson);
                    await fetch("/api/booking", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            ...bookingData,
                            linkedin: fullLinkedin,
                        }),
                    });
                }
            }
        } catch (error) {
            console.error("Error during booking confirmation:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className={cn(
                            "mb-4 flex h-[550px] w-[350px] flex-col overflow-hidden rounded-2xl border shadow-2xl sm:w-[400px]",
                            botTheme === 'dark' ? "bg-zinc-950 border-zinc-800" : "bg-white border-zinc-200"
                        )}
                    >
                        <div className="flex items-center justify-between bg-blue-600 p-4 text-white">
                            <div className="flex items-center gap-3">
                                <div className="relative h-9 w-9 overflow-hidden rounded-full bg-white flex items-center justify-center border border-white/10 shadow-inner">
                                    <img 
                                        src="/logo.png" 
                                        alt="Bot Avatar" 
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-sm font-semibold">{tp('chatbot.header')}</h3>
                                    <div className="flex items-center gap-2 mt-0.5">
                                        <p className="text-[10px] opacity-80">
                                            {isOffline ? tp('chatbot.status_offline') : tp('chatbot.status_online')}
                                        </p>
                                        <span className="rounded-full bg-white/20 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-white backdrop-blur-sm border border-white/10 leading-none">
                                            Beta
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                {step === "chat" && (
                                    <>
                                        <button
                                            onClick={() => setBotTheme(botTheme === 'light' ? 'dark' : 'light')}
                                            className="rounded-full p-1.5 hover:bg-white/10 transition-colors"
                                            title={botTheme === 'light' ? 'Modo oscuro' : 'Modo claro'}
                                        >
                                            {botTheme === 'light' ? <Moon size={15} /> : <Sun size={15} />}
                                        </button>
                                        <button
                                            onClick={resetSession}
                                            aria-label={tp('chatbot.reset_session')}
                                            title={tp('chatbot.reset_session')}
                                            className="rounded-full p-1.5 hover:bg-white/10 transition-colors"
                                        >
                                            <RotateCcw size={15} />
                                        </button>
                                    </>
                                )}
                                <button onClick={toggleChat} aria-label="Minimizar chat" className="rounded-full p-1 hover:bg-white/10 transition-colors">
                                    <ChevronDown size={20} />
                                </button>
                            </div>
                        </div>
                        {isOffline ? (
                            <div className="flex flex-1 flex-col items-center justify-center p-8 text-center space-y-4">
                                <AlertCircle className="text-red-500" size={48} />
                                <div className="space-y-2">
                                    <h4 className="font-bold text-zinc-900 dark:text-white">{tp('chatbot.status_offline')}</h4>
                                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{tp('chatbot.error_offline')}</p>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className="flex-1 flex flex-col overflow-hidden relative min-h-0">
                                    <div ref={scrollRef} className={cn(
                                        "flex-1 overflow-y-auto p-4 space-y-2 transition-colors duration-300",
                                        highContrast 
                                            ? (isDark ? "bg-black" : "bg-white") 
                                            : (isDark ? "bg-zinc-900/50" : "bg-zinc-50")
                                    )}>
                                        {messages.map((m, i) => (
                                            <ChatMessage
                                                key={i}
                                                role={m.role}
                                                content={m.content}
                                                fontSize={fontSize}
                                                isAlternate={i % 2 === 0}
                                                highContrast={highContrast}
                                                botTheme={botTheme}
                                            />
                                        ))}
                                        {isLoading && (
                                            <motion.div 
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                className="flex justify-start items-center gap-3 mb-4"
                                            >
                                                 <div className={cn(
                                                     "h-8 w-8 rounded-full flex items-center justify-center shadow-sm border",
                                                     isDark ? "bg-zinc-900 border-zinc-800" : "bg-white border-zinc-200"
                                                 )}>
                                                     <Bot size={16} className="text-blue-600 animate-bounce" style={{ animationDuration: '3s' }} />
                                                 </div>
                                                 <span className={cn(
                                                    "text-xs italic font-medium",
                                                    isDark ? "text-zinc-400" : "text-zinc-500"
                                                 )}>
                                                    {tp('chatbot.thinking')}
                                                 </span>
                                            </motion.div>
                                        )}

                                        {/* Captura integrada */}
                                        <AnimatePresence>
                                            {showLeadCapture && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 5 }}
                                                    className={cn(
                                                        "rounded-2xl border p-4 transition-colors duration-300",
                                                        isDark ? "border-blue-900/30 bg-blue-900/10" : "border-blue-100 bg-blue-50/50"
                                                    )}
                                                >
                                                    <div className={cn("mb-3 flex items-center gap-2", isDark ? "text-blue-400" : "text-blue-600")}>
                                                        <AlertCircle size={16} />
                                                        <span className="text-xs font-bold uppercase tracking-tight">{tp('chatbot.form_subtitle')}</span>
                                                    </div>
                                                    <div className="space-y-3">
                                                        <div className="relative">
                                                            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={14} />
                                                            <input
                                                                type="text"
                                                                placeholder={tp('chatbot.placeholder_name')}
                                                                className={cn(
                                                                    "w-full rounded-xl border py-2 pl-9 pr-3 text-xs outline-none focus:border-blue-500 transition-colors",
                                                                    isDark ? "border-zinc-800 bg-zinc-900 text-white" : "border-zinc-200 bg-white text-zinc-900"
                                                                )}
                                                                value={leadInfo.name}
                                                                onChange={(e) => setLeadInfo({ ...leadInfo, name: e.target.value })}
                                                            />
                                                        </div>
                                                        <div className="relative">
                                                            <Send className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={14} />
                                                            <input
                                                                type="email"
                                                                placeholder={tp('chatbot.placeholder_email')}
                                                                className={cn(
                                                                    "w-full rounded-xl border py-2 pl-9 pr-3 text-xs outline-none focus:border-blue-500 transition-colors",
                                                                    isDark ? "bg-zinc-900 text-white" : "bg-white text-zinc-900",
                                                                    emailError ? "border-red-500" : (isDark ? "border-zinc-800" : "border-zinc-200")
                                                                )}
                                                                value={leadInfo.email}
                                                                onChange={(e) => {
                                                                    setLeadInfo({ ...leadInfo, email: e.target.value });
                                                                    if (emailError) setEmailError(false);
                                                                }}
                                                            />
                                                        </div>
                                                        <div className="relative">
                                                            <Linkedin className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={14} />
                                                            <input
                                                                type="text"
                                                                placeholder={tp('chatbot.placeholder_linkedin')}
                                                                className="w-full rounded-xl border border-zinc-200 bg-white py-2 pl-9 pr-3 text-xs outline-none focus:border-blue-500 dark:border-zinc-800 dark:bg-zinc-900"
                                                                value={leadInfo.linkedin}
                                                                onChange={(e) => setLeadInfo({ ...leadInfo, linkedin: e.target.value })}
                                                            />
                                                        </div>
                                                        <button
                                                            onClick={(e) => {
                                                                setShowLeadCapture(false);
                                                                handleBookingSubmit(e);
                                                            }}
                                                            className="w-full rounded-xl bg-blue-600 py-2.5 text-xs font-bold text-white shadow-md hover:bg-blue-700"
                                                        >
                                                            {tp('chatbot.confirm_booking')}
                                                        </button>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        {/* Sistema de Feedback */}
                                        <AnimatePresence>
                                            {showFeedback && (
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    className="py-2"
                                                >
                                                    <StarRating
                                                        currentRating={userRating}
                                                        onRate={(rating) => {
                                                            setUserRating(rating);
                                                            safeTrack("chat_feedback_rated", { rating });
                                                            setShowFeedback(false);
                                                            const feedbackMsg = i18n.language === 'en'
                                                                ? "Thank you for your feedback! ⭐️ It was a pleasure to help you."
                                                                : "¡Muchas gracias por tu feedback! ⭐️ Ha sido un gusto ayudarte.";
                                                            setMessages(prev => [...prev, { role: "assistant", content: feedbackMsg }]);
                                                        }}
                                                        botTheme={botTheme}
                                                    />
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        {/* Chips de sugerencias */}
                                        <AnimatePresence>
                                            {showSuggestions && !isLoading && !showDatePicker && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 8 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 4 }}
                                                    className="flex flex-wrap gap-2 pt-1 pb-2"
                                                >
                                                    {[
                                                        tp('chatbot.suggestion_experience'),
                                                        tp('chatbot.suggestion_tech'),
                                                        tp('chatbot.suggestion_education'),
                                                        tp('chatbot.suggestion_schedule'),
                                                    ].map((suggestion) => (
                                                        <button
                                                            key={suggestion}
                                                            onClick={() => handleSuggestionClick(suggestion)}
                                                            className={cn(
                                                                "rounded-full border px-3 py-1 text-xs transition-colors duration-200",
                                                                isDark 
                                                                    ? "border-blue-800 bg-blue-950/40 text-blue-300 hover:bg-blue-900/50" 
                                                                    : "border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100"
                                                            )}
                                                        >
                                                            {suggestion}
                                                        </button>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        {/* DatePicker Interactivo */}
                                        <AnimatePresence>
                                            {showDatePicker && (
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.95 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    className={cn(
                                                        "mt-2 rounded-2xl border p-4 shadow-xl",
                                                        isDark ? "border-zinc-800 bg-zinc-900" : "border-zinc-200 bg-white"
                                                    )}
                                                >
                                                    <div className={cn("mb-2 flex items-center gap-2 text-xs font-bold", isDark ? "text-zinc-100" : "text-zinc-800")}>
                                                        <Bot size={16} className="text-blue-600" />
                                                        {tp('chatbot.contact_form_title')}
                                                    </div>
                                                    <form onSubmit={handleBookingSubmit} className="space-y-2">
                                                        <div className="space-y-2">
                                                            {/* Nombre */}
                                                            <div className="relative">
                                                                <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                                                                <input
                                                                    required
                                                                    type="text"
                                                                    placeholder={tp('chatbot.placeholder_name')}
                                                                    className={cn(
                                                                        "w-full rounded-lg border py-2 pl-9 pr-3 text-xs outline-none focus:border-blue-500",
                                                                        isDark ? "border-zinc-800 bg-zinc-800 text-white" : "border-zinc-200 bg-zinc-50 text-zinc-900"
                                                                    )}
                                                                    value={leadInfo.name}
                                                                    onChange={(e) => setLeadInfo(prev => ({ ...prev, name: e.target.value }))}
                                                                />
                                                            </div>

                                                            {/* Email */}
                                                            <div className="relative">
                                                                <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                                                                <input
                                                                    required
                                                                    type="email"
                                                                    placeholder={tp('chatbot.placeholder_email')}
                                                                    className={cn(
                                                                        "w-full rounded-lg border py-2 pl-9 pr-3 text-xs outline-none focus:border-blue-500",
                                                                        isDark ? "border-zinc-800 bg-zinc-800 text-white" : "border-zinc-200 bg-zinc-50 text-zinc-900"
                                                                    )}
                                                                    value={leadInfo.email}
                                                                    onChange={(e) => setLeadInfo(prev => ({ ...prev, email: e.target.value }))}
                                                                />
                                                            </div>

                                                            {/* LinkedIn */}
                                                            <div className="relative">
                                                                <Linkedin size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                                                                <input
                                                                    required
                                                                    type="text"
                                                                    placeholder={tp('chatbot.placeholder_linkedin')}
                                                                    className={cn(
                                                                        "w-full rounded-lg border py-2 pl-9 pr-3 text-xs outline-none focus:border-blue-500",
                                                                        isDark ? "border-zinc-800 bg-zinc-800 text-white" : "border-zinc-200 bg-zinc-50 text-zinc-900"
                                                                    )}
                                                                    value={leadInfo.linkedin}
                                                                    onChange={(e) => setLeadInfo(prev => ({ ...prev, linkedin: e.target.value }))}
                                                                />
                                                            </div>

                                                            <div className="grid grid-cols-2 gap-2">
                                                                {/* Fecha */}
                                                                <div className="relative">
                                                                    <input
                                                                        required
                                                                        type="date"
                                                                        min={(() => {
                                                                            const d = new Date();
                                                                            d.setDate(d.getDate() + 7);
                                                                            return d.toISOString().split('T')[0];
                                                                        })()}
                                                                        className={cn(
                                                                            "w-full rounded-lg border p-2 pr-1 text-[11px] outline-none focus:border-blue-500",
                                                                            isDark ? "border-zinc-800 bg-zinc-800 text-white" : "border-zinc-200 bg-zinc-50 text-zinc-900"
                                                                        )}
                                                                        value={bookingDate}
                                                                        onChange={(e) => {
                                                                            const selectedDate = new Date(e.target.value);
                                                                            const day = selectedDate.getUTCDay();
                                                                            if (day === 0 || day === 6) {
                                                                                setBookingError(tp('chatbot.weekend_error'));
                                                                                setBookingDate("");
                                                                            } else {
                                                                                setBookingError(null);
                                                                                setBookingDate(e.target.value);
                                                                            }
                                                                        }}
                                                                    />
                                                                </div>

                                                                {/* Hora */}
                                                                <div className="relative">
                                                                    <Clock size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" />
                                                                    <select
                                                                        required
                                                                        className={cn(
                                                                            "w-full appearance-none rounded-lg border p-2 pr-8 text-[11px] outline-none focus:border-blue-500",
                                                                            isDark ? "border-zinc-800 bg-zinc-800 text-white" : "border-zinc-200 bg-zinc-50 text-zinc-900"
                                                                        )}
                                                                        value={bookingTime}
                                                                        onChange={(e) => setBookingTime(e.target.value)}
                                                                    >
                                                                        <option value="">--:--</option>
                                                                        {["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00"].map(t => (
                                                                            <option key={t} value={t}>{t}</option>
                                                                        ))}
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {bookingError && (
                                                            <p className="text-[10px] text-red-500 font-medium animate-pulse">
                                                                {bookingError}
                                                            </p>
                                                        )}
                                                        <button
                                                            type="submit"
                                                            disabled={!!bookingError || !bookingDate || !bookingTime || !leadInfo.email}
                                                            className="w-full rounded-xl bg-blue-600 py-2.5 text-xs font-bold text-white shadow-lg transition-transform hover:bg-blue-700 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                                                        >
                                                            {tp('chatbot.confirm_booking')}
                                                        </button>
                                                    </form>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* Controles de fuente flotantes */}
                                    <div className={cn(
                                        "absolute bottom-2 right-2 z-20 flex flex-col gap-0.5 backdrop-blur-md p-0.5 rounded-md border shadow-md group transition-all duration-300",
                                        isDark 
                                            ? "bg-zinc-900/80 border-blue-500/20 hover:bg-zinc-900" 
                                            : "bg-white/80 border-blue-200/50 hover:bg-white"
                                    )}>
                                        <button
                                            type="button"
                                            onClick={() => setFontSize(fontSize === "sm" ? "md" : "lg")}
                                            className="rounded-sm p-1 text-zinc-500 hover:bg-blue-50 hover:text-blue-600 dark:text-zinc-400 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors"
                                            title="Zoom In"
                                        >
                                            <Plus size={10} />
                                        </button>
                                        <div className={cn("h-[0.5px] w-full", isDark ? "bg-zinc-800/50" : "bg-zinc-200/50")} />
                                        <button
                                            type="button"
                                            onClick={() => setFontSize(fontSize === "lg" ? "md" : "sm")}
                                            className="rounded-sm p-1 text-zinc-500 hover:bg-blue-50 hover:text-blue-600 dark:text-zinc-400 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors"
                                            title="Zoom Out"
                                        >
                                            <Minus size={10} />
                                        </button>
                                    </div>
                                </div>

                                {/* Barra de entrada */}
                                <div className={cn(
                                    "border-t p-4 backdrop-blur-sm transition-colors duration-300",
                                    isDark ? "border-zinc-800 bg-zinc-950/50" : "border-zinc-100 bg-white/50"
                                )}>
                                    <div className="flex items-center gap-2 max-w-4xl mx-auto">
                                        {/* Botón de Micrófono (Futura funcionalidad) */}
                                        {/* Botón de Micrófono */}
                                        <button
                                            type="button"
                                            onClick={toggleVoiceInput}
                                            className={cn(
                                                "p-2 transition-all shrink-0 rounded-full",
                                                isRecording 
                                                    ? "text-red-500 bg-red-500/10 animate-pulse scale-110" 
                                                    : "text-zinc-400 hover:text-blue-600 hover:bg-blue-500/5"
                                            )}
                                            title={isRecording ? "Detener grabación" : "Dictar mensaje"}
                                        >
                                            <Mic size={20} />
                                        </button>

                                        {/* Chip de Input */}
                                        <form
                                            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                                            className={cn(
                                                "flex-1 flex items-center rounded-2xl px-4 py-2 group focus-within:ring-1 focus-within:ring-blue-500/30 transition-all border border-transparent",
                                                isDark ? "bg-zinc-800/70 focus-within:border-blue-500/20" : "bg-zinc-100/70 focus-within:border-blue-500/20"
                                            )}
                                        >
                                            <input
                                                type="text"
                                                maxLength={500}
                                                data-testid="chat-input"
                                                placeholder={tp('chatbot.input_placeholder')}
                                                className={cn(
                                                    "flex-1 bg-transparent text-sm outline-none py-1",
                                                    isDark ? "text-white" : "text-zinc-900"
                                                )}
                                                value={input}
                                                onChange={(e) => setInput(e.target.value)}
                                                disabled={isLoading}
                                            />

                                            {/* Contador de caracteres */}
                                            <span className={cn(
                                                "text-[10px] ml-2 shrink-0 transition-colors",
                                                input.length >= 450 ? "text-orange-500 font-medium" : (isDark ? "text-zinc-500" : "text-zinc-400"),
                                                input.length >= 500 ? "text-red-500 font-bold" : ""
                                            )}>
                                                {input.length}/500
                                            </span>
                                        </form>

                                        {/* Botón de Enviar */}
                                        <button
                                            type="button"
                                            onClick={() => handleSend()}
                                            aria-label="Enviar mensaje"
                                            disabled={isLoading || !input.trim()}
                                            className="shrink-0 rounded-full bg-blue-600 p-2.5 text-white transition-all hover:bg-blue-700 disabled:opacity-30 disabled:hover:bg-blue-600 shadow-md hover:shadow-lg active:scale-95"
                                        >
                                            <Send size={18} />
                                        </button>
                                    </div>
                                    <p className={cn("mt-2 text-[10px] text-center transition-colors", 
                                        recordingError ? "text-red-500 font-medium" : (isDark ? "text-zinc-500" : "text-zinc-400")
                                    )}>
                                        {recordingError || tp('chatbot.ai_disclaimer')}
                                    </p>
                                </div>
                            </>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {!isOpen && showTooltip && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        onClick={toggleChat}
                        className="mb-4 mr-2 cursor-pointer relative group"
                    >
                        <div className="bg-zinc-900 dark:bg-zinc-800 text-white text-[13px] py-3 px-5 rounded-2xl shadow-xl border border-zinc-700/50 whitespace-nowrap relative">
                            {tp('chatbot.tooltip').split(/(\*\*.*?\*\*)/g).map((part, index) => 
                                part.startsWith('**') && part.endsWith('**') 
                                    ? <strong key={index} className="font-bold">{part.slice(2, -2)}</strong> 
                                    : part
                            )}
                            {/* Flecha del tooltip */}
                            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-zinc-900 dark:bg-zinc-800 border-r border-b border-zinc-700/50 rotate-45" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleChat}
                data-testid="chat-toggle"
                className={cn(
                    "relative flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-colors focus:outline-none",
                    isOpen 
                        ? (isDark ? "bg-zinc-800 text-white" : "bg-zinc-100 text-zinc-900") 
                        : "bg-blue-600 text-white"
                )}
            >
                {isOpen ? <X size={24} /> : (
                    <>
                        <BotMessageSquare size={24} />
                        {!isOpen && showTooltip && (
                            <div className="absolute -top-1 -right-1">
                                <motion.div
                                    animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
                                    transition={{ repeat: Infinity, duration: 1.5 }}
                                    className="absolute inset-0 rounded-full bg-red-500"
                                />
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="relative flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white border-2 border-white dark:border-zinc-900 shadow-md"
                                >
                                    1
                                </motion.div>
                            </div>
                        )}
                    </>
                )}
            </motion.button>
        </div>
    );
}
