"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import { Send, Minus, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import DataCaptureModal from "./data-capture-modal";
import GDPRConsentModal from "./gdpr-consent-modal";

interface Message {
  type: 'user' | 'bot';
  content: string;
  isHTML?: boolean;
}

interface ChatbotSectionProps {
  setIsChatbotVisible: (visible: boolean) => void;
  messages: Message[];
  setMessages: (messages: Message[] | ((prev: Message[]) => Message[])) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  status: { text: string; isError: boolean };
  setStatus: (status: { text: string; isError: boolean }) => void;
  sessionId: string;
}

const ChatbotSection: React.FC<ChatbotSectionProps> = ({ 
  setIsChatbotVisible, 
  messages, 
  setMessages, 
  isLoading, 
  setIsLoading, 
  status, 
  setStatus,
  sessionId
}) => {
  const { t } = useTranslation();
  const [messageInput, setMessageInput] = useState('');
  const chatContainerRef = useRef<HTMLDivElement>(null);
  
  // Estados para banners y modales
  const [messageCount, setMessageCount] = useState(0);
  const [dataCaptured, setDataCaptured] = useState(false);
  const [gdprConsentGiven, setGdprConsentGiven] = useState(false);
  const [dataCaptureBannerShown, setDataCaptureBannerShown] = useState(false);
  const [gdprBannerShown, setGdprBannerShown] = useState(false);
  const [showDataCaptureModal, setShowDataCaptureModal] = useState(false);
  const [showGDPRModal, setShowGDPRModal] = useState(false);
  const [showDataCaptureBanner, setShowDataCaptureBanner] = useState(false);
  const [showGDPRBanner, setShowGDPRBanner] = useState(false);
  const [showDataCaptureChangeMindBanner, setShowDataCaptureChangeMindBanner] = useState(false);
  const [showGDPRChangeMindBanner, setShowGDPRChangeMindBanner] = useState(false);
  
  // Estado para el tipo de usuario
  const [userType, setUserType] = useState<string>('OT'); // Por defecto 'OT' (Other/Otro)

  // Función para agregar mensajes
  const addMessage = (type: 'user' | 'bot', content: string, isHTML = false) => {
    setMessages(prev => [...prev, { type, content, isHTML }]);
  };

  // Función para detectar comandos de reactivación
  const detectReactivationCommands = (message: string): boolean => {
    const lowerMessage = message.toLowerCase();
    
    // Comandos para reactivar captura de datos (español e inglés)
    if (lowerMessage.includes('compartir datos') || 
        lowerMessage.includes('quiero compartir') ||
        lowerMessage.includes('cambiar de opinión') ||
        lowerMessage.includes('datos de contacto') ||
        lowerMessage.includes('share data') ||
        lowerMessage.includes('share my data') ||
        lowerMessage.includes('change my mind') ||
        lowerMessage.includes('contact data') ||
        lowerMessage.includes('provide information') ||
        lowerMessage.includes('give my data')) {
      if (!dataCaptured && dataCaptureBannerShown) {
        setShowDataCaptureChangeMindBanner(true);
        return true;
      }
    }
    
    // Comandos para reactivar GDPR (español e inglés)
    if (lowerMessage.includes('consentimiento') || 
        lowerMessage.includes('gdpr') ||
        lowerMessage.includes('aceptar términos') ||
        lowerMessage.includes('procesar datos') ||
        lowerMessage.includes('consent') ||
        lowerMessage.includes('give consent') ||
        lowerMessage.includes('accept terms') ||
        lowerMessage.includes('process data') ||
        lowerMessage.includes('data processing') ||
        lowerMessage.includes('privacy consent')) {
      if (!gdprConsentGiven && gdprBannerShown) {
        setShowGDPRChangeMindBanner(true);
        return true;
      }
    }
    
    return false;
  };

  // Manejar flujo discreto (no intrusivo)
  const handleDiscreteFlow = () => {
    // Mostrar banner de captura de datos después del 3er mensaje (timing tardío)
    if (messageCount >= 2 && !dataCaptured && !dataCaptureBannerShown) {
      setTimeout(() => {
        setShowDataCaptureBanner(true);
        setDataCaptureBannerShown(true);
      }, 2000); // 2 segundos después de la respuesta
    }

    // Mostrar banner GDPR después de capturar datos
    if (dataCaptured && !gdprConsentGiven && !gdprBannerShown) {
      setTimeout(() => {
        setShowGDPRBanner(true);
        setGdprBannerShown(true);
      }, 2000);
    }
  };


  // Scroll automático al final
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  // Limpiar textarea cuando hay error
  useEffect(() => {
    if (status.isError) {
      setMessageInput('');
    }
  }, [status.isError]);

  // Asegurar que el textarea esté vacío cuando hay error
  const textareaValue = useMemo(() => {
    if (status.isError) {
      return '';
    }
    return messageInput;
  }, [status.isError, messageInput]);

  // Función para enviar mensaje
  const sendMessage = async () => {
    const message = messageInput.trim();
    if (!message || isLoading) return;

    // Detectar comandos de reactivación antes de enviar
    if (detectReactivationCommands(message)) {
      addMessage('user', message);
      setMessageInput('');
      return; // No enviar al backend, solo mostrar banner
    }

    // Mostrar mensaje del usuario
    addMessage('user', message);
    setMessageInput('');
    setIsLoading(true);

    try {
      console.log('Sending message with user_type:', userType);
      
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          message,
          session_id: sessionId,
          user_type: userType // Usar el tipo de usuario actual (por defecto 'OT')
        })
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.detail || 'Error en la respuesta');
      }

      const data = await response.json();
      
      // Incrementar contador de mensajes
      setMessageCount(prev => prev + 1);
      
      // Mostrar respuesta
      let botMessage = data.message;
      addMessage('bot', botMessage, true);

      // Manejar banners discretos después de mostrar la respuesta
      handleDiscreteFlow();

    } catch (error: any) {
      setStatus({ text: `❌ ${t("chatbot.error_status")}`, isError: true });
      addMessage('bot', t("chatbot.error_message"));
    } finally {
      setIsLoading(false);
    }
  };

  // Manejar Enter para enviar
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Función para obtener el color del contador de caracteres
  const getCharCountColor = () => {
    const count = textareaValue.length;
    const maxLength = 600;
    
    if (count === maxLength) {
      return 'text-red-500 dark:text-red-400'; // Rojo solo cuando alcanza 600
    } else if (count > maxLength * 0.83) { // > 500 caracteres
      return 'text-yellow-500 dark:text-yellow-400'; // Amarillo
    } else {
      return 'text-green-500 dark:text-green-400'; // Verde
    }
  };

  // Funciones para manejar formularios
  const handleDataCaptureSubmit = async (data: any) => {
    try {
      const response = await fetch('/api/capture-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          session_id: sessionId,
          ...data
        })
      });

      if (response.ok) {
        setDataCaptured(true);
        console.log('Updating user_type from', userType, 'to', data.user_type);
        setUserType(data.user_type); // Actualizar el tipo de usuario con el valor del formulario
        addMessage('bot', t("data_capture.success_message"));
        
        // Mostrar banner GDPR después de capturar datos
        setTimeout(() => {
          setShowGDPRBanner(true);
          setGdprBannerShown(true);
        }, 2000);
      } else {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.detail || 'Error al capturar datos');
      }
    } catch (error: any) {
      console.error('Error submitting data capture:', error);
      addMessage('bot', t("data_capture.error_message"));
      throw error;
    }
  };

  const handleGDPRSubmit = async (consentTypes: string[]) => {
    try {
      const response = await fetch('/api/gdpr/consent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          session_id: sessionId,
          consent_types: consentTypes
        })
      });

      if (response.ok) {
        setGdprConsentGiven(true);
        addMessage('bot', t("gdpr.success_message"));
        
        // Ocultar banner GDPR si está visible
        setShowGDPRBanner(false);
      } else {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.detail || 'Error al registrar consentimiento');
      }
    } catch (error: any) {
      console.error('Error submitting GDPR consent:', error);
      addMessage('bot', t("gdpr.error_message"));
      throw error;
    }
  };

  // Funciones para manejar banners
  const handleRejectDataCapture = () => {
    setDataCaptured(false);
    setDataCaptureBannerShown(true);
    setShowDataCaptureBanner(false);
    addMessage('bot', '✅ Entendido. Puedes continuar con la conversación sin compartir datos adicionales.');
    
    // Mostrar banner de "cambio de opinión" después de 30 segundos
    setTimeout(() => {
      setShowDataCaptureChangeMindBanner(true);
    }, 30000);
  };

  const handleRejectGDPR = () => {
    setGdprConsentGiven(false);
    setGdprBannerShown(true);
    setShowGDPRBanner(false);
    addMessage('bot', '✅ Entendido. Continuaremos sin procesar datos adicionales según GDPR.');
    
    // Mostrar banner de "cambio de opinión" después de 30 segundos
    setTimeout(() => {
      setShowGDPRChangeMindBanner(true);
    }, 30000);
  };

  // Función para ocultar todos los banners
  const hideAllBanners = () => {
    setShowDataCaptureBanner(false);
    setShowGDPRBanner(false);
    setShowDataCaptureChangeMindBanner(false);
    setShowGDPRChangeMindBanner(false);
  };

  return (
    <div className="fixed bottom-20 right-4 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-lg w-80 flex flex-col h-[400px] z-50">

      {/* Chatbot Header */}
      <div className="flex items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-t-lg shadow-sm">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-3">
          <Image
            src="/chatbot/profile.jpeg"
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t("chatbot.name")}</h3>
          <p className={`text-sm ${status.isError ? 'text-red-500' : 'text-green-500'}`}>
            {status.text || `🟢 ${t("chatbot.online_status")}`}
          </p>
        </div>
        <button
          onClick={() => setIsChatbotVisible(false)}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
        >
          <Minus className="w-6 h-6" />
        </button>
      </div>

      {/* Banners discretos - DENTRO del chat entre header y mensajes */}
      {(showDataCaptureBanner || showGDPRBanner || showDataCaptureChangeMindBanner || showGDPRChangeMindBanner) && (
        <div className="px-4 py-2">
          {showDataCaptureBanner && (
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-3 mb-2">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <span className="text-blue-800 dark:text-blue-200 text-sm">
                    {t("banners.data_capture.message")}
                  </span>
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() => {
                        hideAllBanners();
                        setShowDataCaptureModal(true);
                      }}
                      className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1 rounded transition-colors"
                    >
                      {t("banners.data_capture.accept")}
                    </button>
                    <button
                      onClick={handleRejectDataCapture}
                      className="bg-gray-500 hover:bg-gray-600 text-white text-xs px-3 py-1 rounded transition-colors"
                    >
                      {t("banners.data_capture.reject")}
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => setShowDataCaptureBanner(false)}
                  className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 ml-2 flex-shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
          
          {showGDPRBanner && (
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-3 mb-2">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <span className="text-blue-800 dark:text-blue-200 text-sm">
                    {t("banners.gdpr.message")}
                  </span>
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() => {
                        hideAllBanners();
                        setShowGDPRModal(true);
                      }}
                      className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1 rounded transition-colors"
                    >
                      {t("banners.gdpr.accept")}
                    </button>
                    <button
                      onClick={handleRejectGDPR}
                      className="bg-gray-500 hover:bg-gray-600 text-white text-xs px-3 py-1 rounded transition-colors"
                    >
                      {t("banners.gdpr.reject")}
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => setShowGDPRBanner(false)}
                  className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 ml-2 flex-shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
          
          {showDataCaptureChangeMindBanner && (
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-3 mb-2">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <span className="text-blue-800 dark:text-blue-200 text-sm">
                    {t("banners.data_capture_change_mind.message")}
                  </span>
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() => {
                        hideAllBanners();
                        setShowDataCaptureModal(true);
                      }}
                      className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1 rounded transition-colors"
                    >
                      {t("banners.data_capture_change_mind.accept")}
                    </button>
                    <button
                      onClick={() => setShowDataCaptureChangeMindBanner(false)}
                      className="bg-gray-500 hover:bg-gray-600 text-white text-xs px-3 py-1 rounded transition-colors"
                    >
                      {t("banners.data_capture_change_mind.reject")}
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => setShowDataCaptureChangeMindBanner(false)}
                  className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 ml-2 flex-shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
          
          {showGDPRChangeMindBanner && (
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-3 mb-2">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <span className="text-blue-800 dark:text-blue-200 text-sm">
                    {t("banners.gdpr_change_mind.message")}
                  </span>
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() => {
                        hideAllBanners();
                        setShowGDPRModal(true);
                      }}
                      className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1 rounded transition-colors"
                    >
                      {t("banners.gdpr_change_mind.accept")}
                    </button>
                    <button
                      onClick={() => setShowGDPRChangeMindBanner(false)}
                      className="bg-gray-500 hover:bg-gray-600 text-white text-xs px-3 py-1 rounded transition-colors"
                    >
                      {t("banners.gdpr_change_mind.reject")}
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => setShowGDPRChangeMindBanner(false)}
                  className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 ml-2 flex-shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Chat Messages Area */}
      <div ref={chatContainerRef} className="flex-1 p-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-3 p-2 rounded-lg ${
              msg.type === 'user'
                ? 'bg-blue-500 text-white ml-8 text-right'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white mr-8'
            }`}
          >
            {msg.isHTML ? (
              <div dangerouslySetInnerHTML={{ __html: msg.content }} />
            ) : (
              <p>{msg.content}</p>
            )}
          </div>
        ))}
        {isLoading && (
          <div className="text-gray-500 dark:text-gray-400 italic">
            ✍🏼 {t("chatbot.writing_status")}
          </div>
        )}
      </div>

      {/* Input and Send Button */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center">
          <textarea
            value={textareaValue}
            onChange={(e) => {
              if (!status.isError) {
                setMessageInput(e.target.value);
              }
            }}
            onKeyDown={handleKeyDown}
            placeholder={status.isError ? t("chatbot.input_error") : t("chatbot.input_placeholder")}
            maxLength={600}
            className={`flex-1 p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
              status.isError ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            rows={1}
            disabled={isLoading || status.isError}
          />
          <button
            onClick={sendMessage}
            disabled={isLoading || !messageInput.trim() || status.isError}
            className="ml-2 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        {/* Contador de caracteres */}
        <div className={`text-xs mt-1 text-right ${getCharCountColor()}`}>
          {textareaValue.length}/600
        </div>
      </div>

      {/* Modales */}
      <DataCaptureModal
        isOpen={showDataCaptureModal}
        onClose={() => setShowDataCaptureModal(false)}
        onSubmit={handleDataCaptureSubmit}
      />
      
      <GDPRConsentModal
        isOpen={showGDPRModal}
        onClose={() => setShowGDPRModal(false)}
        onSubmit={handleGDPRSubmit}
      />
    </div>
  );
};

export default ChatbotSection; 