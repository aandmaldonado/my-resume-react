import React from "react";
import Image from "next/image";
import { Send, Minus } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ChatbotSectionProps {
  setIsChatbotVisible: (visible: boolean) => void;
}

const ChatbotSection: React.FC<ChatbotSectionProps> = ({ setIsChatbotVisible }) => {
  const { t } = useTranslation();

  return (
    <div className="fixed bottom-20 right-4 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-lg w-80 flex flex-col h-[400px]">
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
          <p className="text-sm text-green-500">{t("chatbot.online_status")}</p>
        </div>
        <button
          onClick={() => setIsChatbotVisible(false)}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
        >
          <Minus className="w-6 h-6" />
        </button>
      </div>

      {/* Chat Messages Area */}
      <div className="flex-1 p-4 overflow-y-auto">
        <p className="text-gray-700 dark:text-gray-300 mb-2">{t("chatbot.welcome_message")}</p>
      </div>

      {/* Input and Send Button */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex items-center">
        <textarea
          placeholder={t("chatbot.input_placeholder")}
          className="flex-1 p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          rows={1}
        />
        <button className="ml-2 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ChatbotSection; 