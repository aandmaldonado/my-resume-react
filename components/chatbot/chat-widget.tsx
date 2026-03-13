"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2, Minimize2, User, Building2, Linkedin, Briefcase, Search, AlertCircle, Bot } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { ChatMessage } from "./chat-message";
import { cn } from "@/lib/utils";
import { sendGAEvent } from "@next/third-parties/google";

interface Message {
    role: "user" | "assistant";
    content: string;
}

interface LeadData {
    name: string;
    email: string;
    company: string;
    linkedin: string;
    role: string;
}

export function ChatWidget() {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [showTooltip, setShowTooltip] = useState(true);
    const [step, setStep] = useState<"lead" | "chat">("lead");
    const [isResearching, setIsResearching] = useState(false);
    const [isOffline, setIsOffline] = useState(false);
    const [companyEnrichment, setCompanyEnrichment] = useState("");
    const [leadInfo, setLeadInfo] = useState<LeadData>({
        name: "",
        email: "",
        company: "",
        linkedin: "",
        role: "",
    });
    const [emailError, setEmailError] = useState(false);

    const [chatSettings, setChatSettings] = useState({
        botName: "Alvi",
        ownerName: "Álvaro Maldonado",
        ownerShortName: "Álvaro"
    });

    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
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
    }, [messages, step, isResearching]);

    const toggleChat = () => {
        setIsOpen(!isOpen);
        setShowTooltip(false);

        safeTrack("cta_click", {
            button_label: !isOpen ? "chat_open" : "chat_close",
            location: "floating_widget"
        });
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
        if (!leadInfo.linkedin || !leadInfo.name || !leadInfo.company) return;

        setIsResearching(true);

        try {
            let enrichment = "";
            let researchFailed = false;

            // 1. Intentar Deep Research de la empresa (pero no bloquear si falla)
            try {
                const researchRes = await fetch("/api/research", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ company: leadInfo.company, name: leadInfo.name }),
                });

                if (researchRes.ok) {
                    const researchData = await researchRes.json();
                    enrichment = researchData.enrichment || "";
                    setCompanyEnrichment(enrichment);
                } else if (researchRes.status === 429) {
                    researchFailed = true; // Solo para log interno, no bloqueamos
                }
            } catch (e) {
                console.error("Non-blocking research error:", e);
            }

            // Normalizar URL de LinkedIn antes de enviar (si falta el dominio)
            let finalLinkedin = leadInfo.linkedin.trim();
            if (finalLinkedin && !finalLinkedin.startsWith("http")) {
                // Si empieza por /in/, lo pegamos, si no, asumimos que es el slug
                const path = finalLinkedin.startsWith("/") ? finalLinkedin : `/${finalLinkedin}`;
                const fullPath = path.startsWith("/in/") ? path : `/in${path}`;
                finalLinkedin = `https://www.linkedin.com${fullPath}`;
            }

            // 2. Enviar correo de Lead inicial (usando la URL normalizada)
            try {
                await fetch("/api/lead", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        ...leadInfo,
                        linkedin: finalLinkedin, // Enviamos corregido
                        enrichment: enrichment
                    }),
                });
            } catch (e) {
                console.error("Silent error sending lead email:", e);
            }

            // 3. Track lead capture in GA
            safeTrack("chat_lead_captured", {
                lead_name: leadInfo.name,
                lead_email: leadInfo.email,
                lead_company: leadInfo.company,
                lead_role: leadInfo.role,
                lead_linkedin: finalLinkedin,
                has_enrichment: !!enrichment,
                research_failed: researchFailed
            });

            setStep("chat");

            // 4. Bienvenida (Siempre simple para no condicionar)
            setMessages([
                {
                    role: "assistant",
                    content: tp('chatbot.welcome_simple', { name: leadInfo.name }),
                },
            ]);
        } catch (error) {
            console.error("Error starting chat:", error);
            setIsOffline(true);
        } finally {
            setIsResearching(false);
        }
    };

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage: Message = { role: "user", content: input };
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
                            linkedin: leadInfo.linkedin,
                            enrichment: companyEnrichment
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

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="mb-4 flex h-[550px] w-[350px] flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-950 sm:w-[400px]"
                    >
                        <div className="flex items-center justify-between bg-blue-600 p-4 text-white">
                            <div className="flex items-center gap-3">
                                <div className="relative h-9 w-9 overflow-hidden rounded-full bg-white/20 flex items-center justify-center border border-white/10 shadow-inner">
                                    <Bot size={20} className="text-white" />
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-sm font-semibold">{tp('chatbot.header')}</h3>
                                        <span className="rounded-full bg-white/20 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-white backdrop-blur-sm border border-white/10">
                                            Beta
                                        </span>
                                    </div>
                                    <p className="text-[10px] opacity-80">
                                        {isOffline ? tp('chatbot.status_offline') : tp('chatbot.status_online')}
                                    </p>
                                </div>
                            </div>
                            <button onClick={toggleChat} className="rounded-full p-1 hover:bg-white/10 transition-colors">
                                <Minimize2 size={18} />
                            </button>
                        </div>

                        {isOffline ? (
                            <div className="flex flex-1 flex-col items-center justify-center p-8 text-center space-y-4">
                                <AlertCircle className="text-red-500" size={48} />
                                <div className="space-y-2">
                                    <h4 className="font-bold text-zinc-900 dark:text-white">{tp('chatbot.status_offline')}</h4>
                                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{tp('chatbot.error_offline')}</p>
                                </div>
                            </div>
                        ) : isResearching ? (
                            <div className="flex flex-1 flex-col items-center justify-center p-8 text-center space-y-8">
                                <div className="relative flex h-20 w-20 items-center justify-center">
                                    <motion.div
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ repeat: Infinity, duration: 2 }}
                                        className="absolute inset-0 rounded-full bg-blue-100 blur-xl dark:bg-blue-900/30"
                                    />
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                                        className="absolute inset-0 rounded-full border-2 border-dashed border-blue-600 dark:border-blue-500"
                                    />
                                    <motion.div
                                        animate={{ opacity: [0.5, 1, 0.5] }}
                                        transition={{ repeat: Infinity, duration: 1.5 }}
                                        className="relative z-10"
                                    >
                                        <MessageCircle className="text-blue-600" size={32} />
                                    </motion.div>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="font-bold text-zinc-900 dark:text-white">{tp('chatbot.loading_syncing')}</h4>
                                    <p className="text-xs text-zinc-500 dark:text-zinc-400">{tp('chatbot.loading_desc')}</p>
                                </div>
                            </div>
                        ) : step === "lead" ? (
                            <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
                                <div className="mb-6 text-center">
                                    <h4 className="text-lg font-bold text-zinc-900 dark:text-white">{tp('chatbot.form_title')}</h4>
                                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{tp('chatbot.form_subtitle')}</p>
                                </div>

                                <form onSubmit={startChat} className="space-y-4">
                                    <div className="space-y-1">
                                        <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider">{tp('chatbot.label_name')}</label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
                                            <input
                                                required
                                                type="text"
                                                data-testid="chat-lead-name"
                                                placeholder={tp('chatbot.placeholder_name')}
                                                className="w-full rounded-xl border border-zinc-200 bg-zinc-50 py-2 pl-10 pr-4 text-sm outline-none focus:border-blue-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
                                                value={leadInfo.name}
                                                onChange={(e) => setLeadInfo({ ...leadInfo, name: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider">{tp('chatbot.label_linkedin')}</label>
                                        <div className="relative">
                                            <Linkedin className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500" size={16} />
                                            <input
                                                required
                                                type="text"
                                                placeholder={tp('chatbot.placeholder_linkedin')}
                                                className="w-full rounded-xl border border-zinc-200 bg-zinc-50 py-2 pl-10 pr-4 text-sm outline-none focus:border-blue-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
                                                value={leadInfo.linkedin}
                                                onChange={(e) => setLeadInfo({ ...leadInfo, linkedin: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider">{tp('chatbot.label_email')}</label>
                                        <div className="relative">
                                            <Send className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
                                            <input
                                                required
                                                type="email"
                                                data-testid="chat-lead-email"
                                                placeholder={tp('chatbot.placeholder_email')}
                                                className={cn(
                                                    "w-full rounded-xl border bg-zinc-50 py-2 pl-10 pr-4 text-sm outline-none focus:border-blue-500 dark:bg-zinc-900 dark:text-white",
                                                    emailError ? "border-red-500" : "border-zinc-200 dark:border-zinc-800"
                                                )}
                                                value={leadInfo.email}
                                                onChange={(e) => {
                                                    setLeadInfo({ ...leadInfo, email: e.target.value });
                                                    if (emailError) setEmailError(false);
                                                }}
                                            />
                                        </div>
                                        {emailError && (
                                            <p className="mt-1 text-xs text-red-500">{tp('chatbot.error_email')}</p>
                                        )}
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider">{tp('chatbot.label_company')}</label>
                                            <div className="relative">
                                                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
                                                <input
                                                    required
                                                    type="text"
                                                    data-testid="chat-lead-company"
                                                    placeholder={tp('chatbot.placeholder_company')}
                                                    className="w-full rounded-xl border border-zinc-200 bg-zinc-50 py-2 pl-10 pr-4 text-sm outline-none focus:border-blue-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
                                                    value={leadInfo.company}
                                                    onChange={(e) => setLeadInfo({ ...leadInfo, company: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider">{tp('chatbot.label_role')}</label>
                                            <div className="relative">
                                                <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
                                                <select
                                                    required
                                                    className="w-full appearance-none rounded-xl border border-zinc-200 bg-zinc-50 py-2 pl-10 pr-4 text-sm outline-none focus:border-blue-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
                                                    value={leadInfo.role}
                                                    onChange={(e) => setLeadInfo({ ...leadInfo, role: e.target.value })}
                                                >
                                                    <option value="" disabled hidden>{tp('chatbot.placeholder_role')}</option>
                                                    <option value="recruiter">{tp('chatbot.role_recruiter')}</option>
                                                    <option value="it_person">{tp('chatbot.role_it_person')}</option>
                                                    <option value="other">{tp('chatbot.role_other')}</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3 pt-2">
                                        <input
                                            required
                                            id="privacy"
                                            type="checkbox"
                                            className="mt-1 h-4 w-4 rounded border-zinc-300 text-blue-600 focus:ring-blue-500"
                                        />
                                        <label htmlFor="privacy" className="text-[11px] leading-tight text-zinc-500 dark:text-zinc-400">
                                            {tp('chatbot.privacy_text')}
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        data-testid="chat-lead-submit"
                                        className="mt-4 w-full rounded-xl bg-blue-600 py-3 text-sm font-bold text-white shadow-lg transition-transform active:scale-[0.98] hover:bg-blue-700 disabled:opacity-50"
                                    >
                                        {tp('chatbot.button_start')}
                                    </button>
                                </form>
                            </div>
                        ) : (
                            <>
                                <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-2">
                                    {messages.map((m, i) => (
                                        <ChatMessage key={i} role={m.role} content={m.content} />
                                    ))}
                                    {isLoading && (
                                        <div className="flex justify-start">
                                            <div className="rounded-2xl bg-zinc-100 px-4 py-2 dark:bg-zinc-800">
                                                <Loader2 className="h-4 w-4 animate-spin text-zinc-500" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="border-t border-zinc-100 p-4 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/50 backdrop-blur-sm">
                                    <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex gap-2">
                                        <input
                                            type="text"
                                            maxLength={2000}
                                            data-testid="chat-input"
                                            placeholder={tp('chatbot.input_placeholder')}
                                            className="flex-1 bg-transparent text-sm outline-none dark:text-white"
                                            value={input}
                                            onChange={(e) => setInput(e.target.value)}
                                            disabled={isLoading}
                                        />
                                        <button type="submit" disabled={isLoading || !input.trim()} className="rounded-full bg-blue-600 p-2 text-white transition-opacity hover:bg-blue-700 disabled:opacity-50">
                                            <Send size={18} />
                                        </button>
                                    </form>
                                    <p className="mt-2 text-[10px] text-center text-zinc-400 dark:text-zinc-500">
                                        {tp('chatbot.ai_disclaimer')}
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
                            {tp('chatbot.tooltip')}
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
                    isOpen ? "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-white" : "bg-blue-600 text-white"
                )}
            >
                {isOpen ? <X size={24} /> : (
                    <>
                        <MessageCircle size={24} />
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
