"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { X } from "lucide-react";

interface DataCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: DataCaptureFormData) => Promise<void>;
}

interface DataCaptureFormData {
  email: string;
  linkedin?: string;
  user_type: string;
}

const DataCaptureModal: React.FC<DataCaptureModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<DataCaptureFormData>({
    email: '',
    linkedin: '',
    user_type: ''
  });
  const [errors, setErrors] = useState<Partial<DataCaptureFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<DataCaptureFormData> = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = t("data_capture.errors.email_required");
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = t("data_capture.errors.email_invalid");
    }

    // LinkedIn validation (optional but must be valid if provided)
    if (formData.linkedin?.trim()) {
      const linkedinRegex = /^(https?:\/\/)?(www\.)?linkedin\.com\/(in\/)?[\w\-\.]+\/?$|^[\w\-\.]+$/;
      if (!linkedinRegex.test(formData.linkedin)) {
        newErrors.linkedin = t("data_capture.errors.linkedin_invalid");
      }
    }

    // User type validation
    if (!formData.user_type) {
      newErrors.user_type = t("data_capture.errors.user_type_required");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await onSubmit(formData);
      setFormData({ email: '', linkedin: '', user_type: '' });
      setErrors({});
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof DataCaptureFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl w-full max-w-md">
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {t("data_capture.title")}
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
            {t("data_capture.description")}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t("data_capture.email_label")}
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.email 
                    ? 'border-red-500 dark:border-red-400' 
                    : 'border-gray-300 dark:border-gray-600'
                } bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                placeholder={t("data_capture.email_placeholder")}
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t("data_capture.linkedin_label")}
              </label>
              <input
                type="text"
                value={formData.linkedin}
                onChange={(e) => handleInputChange('linkedin', e.target.value)}
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.linkedin 
                    ? 'border-red-500 dark:border-red-400' 
                    : 'border-gray-300 dark:border-gray-600'
                } bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                placeholder={t("data_capture.linkedin_placeholder")}
                disabled={isSubmitting}
              />
              {errors.linkedin && (
                <p className="text-red-500 text-sm mt-1">{errors.linkedin}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t("data_capture.user_type_label")}
              </label>
              <select
                value={formData.user_type}
                onChange={(e) => handleInputChange('user_type', e.target.value)}
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.user_type 
                    ? 'border-red-500 dark:border-red-400' 
                    : 'border-gray-300 dark:border-gray-600'
                } bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                disabled={isSubmitting}
              >
                <option value="">{t("data_capture.user_type_placeholder")}</option>
                <option value="HR">{t("data_capture.user_type_options.hr")}</option>
                <option value="IT">{t("data_capture.user_type_options.it")}</option>
                <option value="OT">{t("data_capture.user_type_options.other")}</option>
              </select>
              {errors.user_type && (
                <p className="text-red-500 text-sm mt-1">{errors.user_type}</p>
              )}
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-600 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
                disabled={isSubmitting}
              >
{t("data_capture.cancel")}
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
{isSubmitting ? t("data_capture.submitting") : t("data_capture.submit")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DataCaptureModal;
