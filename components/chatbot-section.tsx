"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Send, Minus } from "lucide-react";
import { useTranslation } from "react-i18next";

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

const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8080/api/v1';

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
  const isInitialized = useRef(false);

  // Función para agregar mensajes
  const addMessage = (type: 'user' | 'bot', content: string, isHTML = false) => {
    setMessages(prev => [...prev, { type, content, isHTML }]);
  };


  // Scroll automático al final
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  // Función para enviar mensaje
  const sendMessage = async () => {
    const message = messageInput.trim();
    if (!message || isLoading) return;

    // Mostrar mensaje del usuario
    addMessage('user', message);
    setMessageInput('');
    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          message,
          session_id: sessionId  // ← SIEMPRE EL MISMO session_id
        })
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.detail || 'Error en la respuesta');
      }

      const data = await response.json();
      
      // Mostrar respuesta
      let botMessage = data.message;

      addMessage('bot', botMessage, true);

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
    const count = messageInput.length;
    const maxLength = 600;
    
    if (count === maxLength) {
      return 'text-red-500 dark:text-red-400'; // Rojo solo cuando alcanza 600
    } else if (count > maxLength * 0.83) { // > 500 caracteres
      return 'text-yellow-500 dark:text-yellow-400'; // Amarillo
    } else {
      return 'text-green-500 dark:text-green-400'; // Verde
    }
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
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={t("chatbot.input_placeholder")}
            maxLength={600}
            className="flex-1 p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            rows={1}
            disabled={isLoading}
          />
          <button
            onClick={sendMessage}
            disabled={isLoading || !messageInput.trim()}
            className="ml-2 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        {/* Contador de caracteres */}
        <div className={`text-xs mt-1 text-right ${getCharCountColor()}`}>
          {messageInput.length}/600
        </div>
      </div>
    </div>
  );
};

export default ChatbotSection; 