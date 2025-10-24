"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { X } from "lucide-react";

interface GDPRConsentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (consentTypes: string[]) => Promise<void>;
}

const GDPRConsentModal: React.FC<GDPRConsentModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const { t } = useTranslation();
  const [consentTypes, setConsentTypes] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleConsentChange = (consentType: string, checked: boolean) => {
    if (checked) {
      setConsentTypes(prev => [...prev, consentType]);
    } else {
      setConsentTypes(prev => prev.filter(type => type !== consentType));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (consentTypes.length === 0) {
      return;
    }

    setIsSubmitting(true);
    try {
      await onSubmit(consentTypes);
      setConsentTypes([]);
      onClose();
    } catch (error) {
      console.error('Error submitting GDPR consent:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl w-full max-w-md">
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {t("gdpr.title")}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {t("gdpr.description")}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="analyticsConsent"
                  checked={consentTypes.includes('analytics')}
                  onChange={(e) => handleConsentChange('analytics', e.target.checked)}
                  className="mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  disabled={isSubmitting}
                />
                <div>
                  <label htmlFor="analyticsConsent" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t("gdpr.analytics_consent")}
                  </label>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {t("gdpr.analytics_description")}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="dataProcessingConsent"
                  checked={consentTypes.includes('data_processing')}
                  onChange={(e) => handleConsentChange('data_processing', e.target.checked)}
                  className="mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  disabled={isSubmitting}
                />
                <div>
                  <label htmlFor="dataProcessingConsent" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t("gdpr.data_processing_consent")}
                  </label>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {t("gdpr.data_processing_description")}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-600 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
                disabled={isSubmitting}
              >
{t("gdpr.cancel")}
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting || consentTypes.length === 0}
              >
{isSubmitting ? t("gdpr.processing") : t("gdpr.accept")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GDPRConsentModal;
