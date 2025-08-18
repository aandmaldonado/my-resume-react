"use client"

import { useState, useEffect, useRef } from "react"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { Download, Shield, AlertTriangle, RefreshCw } from "lucide-react"
import { generateCVHTML } from "@/lib/cv-generator"
import { useReCaptcha } from "@/components/recaptcha-provider"

// Rate limiting configuration
const RATE_LIMIT = {
  maxDownloads: 5, // Maximum downloads per session
  timeWindow: 60000, // 1 minute window
  cooldownPeriod: 300000, // 5 minutes cooldown after limit reached
  maxAttemptsPerHour: 20, // Maximum attempts per hour
  suspiciousActivityThreshold: 10 // Threshold for suspicious activity
}

// CAPTCHA configuration
const CAPTCHA_CONFIG = {
  maxAttempts: 3, // Maximum attempts before lockout
  lockoutTime: 300000 // 5 minutes lockout after max attempts
}

export default function CVDownloadModal() {
  const { t, i18n } = useTranslation()
  const { verifyReCaptcha, isLoaded: isReCaptchaLoaded } = useReCaptcha()
  const [isOpening, setIsOpening] = useState(false)
  const [downloadCount, setDownloadCount] = useState(0)
  const [isRateLimited, setIsRateLimited] = useState(false)
  const [lastDownloadTime, setLastDownloadTime] = useState(0)
  const [showCaptcha, setShowCaptcha] = useState(false)
  const [captchaCorrect, setCaptchaCorrect] = useState(false)
  const [captchaAttempts, setCaptchaAttempts] = useState(0)
  const [isCaptchaLocked, setIsCaptchaLocked] = useState(false)
  const [lockoutEndTime, setLockoutEndTime] = useState(0)
  const downloadHistoryRef = useRef<number[]>([])
  const [suspiciousActivity, setSuspiciousActivity] = useState(false)
  const [hourlyAttempts, setHourlyAttempts] = useState(0)

  // Check rate limiting on component mount
  useEffect(() => {
    const storedCount = sessionStorage.getItem('cv_download_count')
    const storedTime = sessionStorage.getItem('cv_last_download')
    const storedHourlyAttempts = sessionStorage.getItem('cv_hourly_attempts')
    const storedHourlyTime = sessionStorage.getItem('cv_hourly_time')
    
    if (storedCount) {
      setDownloadCount(parseInt(storedCount))
    }
    
    if (storedHourlyAttempts && storedHourlyTime) {
      const hourlyTime = parseInt(storedHourlyTime)
      const now = Date.now()
      
      // Reset hourly counter if 1 hour has passed
      if (now - hourlyTime > 3600000) { // 1 hour in milliseconds
        setHourlyAttempts(0)
        sessionStorage.setItem('cv_hourly_attempts', '0')
        sessionStorage.setItem('cv_hourly_time', now.toString())
      } else {
        setHourlyAttempts(parseInt(storedHourlyAttempts))
      }
    }
    
    if (storedTime) {
      const lastTime = parseInt(storedTime)
      const now = Date.now()
      
      // Reset counter if time window has passed
      if (now - lastTime > RATE_LIMIT.timeWindow) {
        setDownloadCount(0)
        sessionStorage.setItem('cv_download_count', '0')
      }
      
      // Check if user is in cooldown period
      if (now - lastTime < RATE_LIMIT.cooldownPeriod && downloadCount >= RATE_LIMIT.maxDownloads) {
        setIsRateLimited(true)
      }
    }

    // Check CAPTCHA lockout
    const storedLockout = sessionStorage.getItem('cv_captcha_lockout')
    if (storedLockout) {
      const lockoutTime = parseInt(storedLockout)
      const now = Date.now()
      if (now < lockoutTime) {
        setIsCaptchaLocked(true)
        setLockoutEndTime(lockoutTime)
      } else {
        // Lockout expired, reset
        sessionStorage.removeItem('cv_captcha_lockout')
        setCaptchaAttempts(0)
        setIsCaptchaLocked(false)
      }
    }
  }, [downloadCount])

  // Initialize reCAPTCHA when modal opens
  const initializeReCaptcha = () => {
    // reCAPTCHA will be automatically initialized when the modal opens
    setCaptchaCorrect(false)
    setCaptchaAttempts(0)
  }

  // Verify reCAPTCHA
  const verifyCaptcha = async () => {
    if (!isReCaptchaLoaded) {
      console.error('reCAPTCHA not loaded yet')
      return
    }

    try {
      const token = await verifyReCaptcha('download_cv')
      if (token) {
        setCaptchaCorrect(true)
        setCaptchaAttempts(0)
        setShowCaptcha(false)
        // Proceed with download
        handleDownloadCV()
      } else {
        // reCAPTCHA verification failed
        const newAttempts = captchaAttempts + 1
        setCaptchaAttempts(newAttempts)
        
        if (newAttempts >= CAPTCHA_CONFIG.maxAttempts) {
          // Lockout user
          const lockoutEnd = Date.now() + CAPTCHA_CONFIG.lockoutTime
          setIsCaptchaLocked(true)
          setLockoutEndTime(lockoutEnd)
          sessionStorage.setItem('cv_captcha_lockout', lockoutEnd.toString())
          setShowCaptcha(false)
        }
      }
    } catch (error) {
      console.error('reCAPTCHA verification error:', error)
      const newAttempts = captchaAttempts + 1
      setCaptchaAttempts(newAttempts)
      
      if (newAttempts >= CAPTCHA_CONFIG.maxAttempts) {
        // Lockout user
        const lockoutEnd = Date.now() + CAPTCHA_CONFIG.lockoutTime
        setIsCaptchaLocked(true)
        setLockoutEndTime(lockoutEnd)
        sessionStorage.setItem('cv_captcha_lockout', lockoutEnd.toString())
        setShowCaptcha(false)
      }
    }
  }

  // Reset CAPTCHA lockout
  const resetCaptchaLockout = () => {
    setIsCaptchaLocked(false)
    setCaptchaAttempts(0)
    sessionStorage.removeItem('cv_captcha_lockout')
  }

  const checkRateLimit = (): boolean => {
    const now = Date.now()
    
    // Clean old download history
    downloadHistoryRef.current = downloadHistoryRef.current.filter(
      time => now - time < RATE_LIMIT.timeWindow
    )
    
    // Check if user has exceeded download limit
    if (downloadHistoryRef.current.length >= RATE_LIMIT.maxDownloads) {
      setIsRateLimited(true)
      return false
    }
    
    return true
  }

  const updateRateLimit = () => {
    const now = Date.now()
    downloadHistoryRef.current.push(now)
    setDownloadCount(prev => {
      const newCount = prev + 1
      sessionStorage.setItem('cv_download_count', newCount.toString())
      sessionStorage.setItem('cv_last_download', now.toString())
      return newCount
    })
  }

  const handleDownloadCV = async () => {
    // Check rate limiting before proceeding
    if (!checkRateLimit()) {
      return
    }

    setIsOpening(true)
    try {
      // Update rate limit counter
      updateRateLimit()
      
      // Generate HTML of CV with real icons
      const htmlContent = generateCVHTML(i18n.language)
      
      // Create temporary element to render HTML
      const tempDiv = document.createElement('div')
      tempDiv.innerHTML = htmlContent
      document.body.appendChild(tempDiv)
      
      // html2pdf.js configuration
      const opt = {
        margin: [10, 10, 10, 10],
        filename: `CV_Alvaro_Maldonado_${i18n.language.toUpperCase()}_${new Date().toISOString().slice(0, 10)}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
          scale: 2,
          useCORS: true,
          allowTaint: true
        },
        jsPDF: { 
          unit: 'mm', 
          format: 'a4', 
          orientation: 'portrait' 
        }
      }
      
      // Generate PDF using html2pdf.js
      const html2pdf = (await import('html2pdf.js')).default
      await html2pdf().from(tempDiv).set(opt).save()
      
      // Clean up temporary element
      document.body.removeChild(tempDiv)
      
      // Success - no console logging for security
    } catch (error) {
      // Error handling without exposing internal details
      // Silent error handling for security
      
      // Fallback method if html2pdf fails
      try {
        const link = document.createElement('a')
        link.download = `CV_Alvaro_Maldonado_${i18n.language.toUpperCase()}_${new Date().toISOString().slice(0, 10)}.pdf`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      } catch (fallbackError) {
        // Silent error handling
      }
    } finally {
      setIsOpening(false)
    }
  }

  const handleDownloadClick = () => {
    if (isCaptchaLocked) {
      return
    }
    
    // Check hourly attempts
    if (hourlyAttempts >= RATE_LIMIT.maxAttemptsPerHour) {
      setSuspiciousActivity(true)
      return
    }
    
    // Increment hourly attempts
    const newHourlyAttempts = hourlyAttempts + 1
    setHourlyAttempts(newHourlyAttempts)
    sessionStorage.setItem('cv_hourly_attempts', newHourlyAttempts.toString())
    sessionStorage.setItem('cv_hourly_time', Date.now().toString())
    
    // Show CAPTCHA before download
    setShowCaptcha(true)
    initializeReCaptcha()
  }

  const resetRateLimit = () => {
    setDownloadCount(0)
    setIsRateLimited(false)
    downloadHistoryRef.current = []
    sessionStorage.removeItem('cv_download_count')
    sessionStorage.removeItem('cv_last_download')
  }

  // Show CAPTCHA lockout warning
  if (isCaptchaLocked) {
    const remainingTime = Math.ceil((lockoutEndTime - Date.now()) / 1000 / 60)
    return (
      <div className="inline-flex flex-col sm:flex-row items-center gap-2 px-3 sm:px-6 py-3 bg-red-600 text-white font-semibold rounded-lg text-center">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
          <span className="text-sm sm:text-base">
          {t("captcha.too_many_attempts").replace("{minutes}", remainingTime.toString())}
        </span>
        </div>
        <Button 
          onClick={resetCaptchaLockout}
          variant="outline"
          size="sm"
          className="text-xs sm:text-sm text-red-600 bg-white hover:bg-red-50 whitespace-nowrap"
        >
          {t("captcha.reset")}
        </Button>
      </div>
    )
  }

  // Show suspicious activity warning
  if (suspiciousActivity) {
    return (
      <div className="inline-flex flex-col sm:flex-row items-center gap-2 px-3 sm:px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg text-center">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
          <span className="text-sm sm:text-base">{t("captcha.suspicious_activity")}</span>
        </div>
        <Button 
          onClick={() => {
            setSuspiciousActivity(false)
            setHourlyAttempts(0)
            sessionStorage.removeItem('cv_hourly_attempts')
            sessionStorage.removeItem('cv_hourly_time')
          }}
          variant="outline"
          size="sm"
          className="text-xs sm:text-sm text-purple-600 bg-white hover:bg-purple-50 whitespace-nowrap"
        >
          {t("captcha.reset")}
        </Button>
      </div>
    )
  }

  // Show rate limit warning
  if (isRateLimited) {
    return (
      <div className="inline-flex flex-col sm:flex-row items-center gap-2 px-3 sm:px-6 py-3 bg-yellow-600 text-white font-semibold rounded-lg text-center">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
          <span className="text-sm sm:text-base">{t("captcha.rate_limit_exceeded")}</span>
        </div>
        <Button 
          onClick={resetRateLimit}
          variant="outline"
          size="sm"
          className="text-xs sm:text-sm text-yellow-600 bg-white hover:bg-yellow-50 whitespace-nowrap"
        >
          {t("captcha.reset")}
        </Button>
      </div>
    )
  }

  // Show CAPTCHA modal
  if (showCaptcha) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 w-full max-w-sm sm:max-w-md mx-auto shadow-2xl border border-gray-200 dark:border-gray-700">
          <div className="text-center mb-4 sm:mb-6">
            <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {t("captcha.title")}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              {t("captcha.subtitle")}
            </p>
          </div>
          
          <div className="mb-4 sm:mb-6">
            <div className="text-center mb-3 sm:mb-4">
              <span className="text-xl sm:text-2xl font-bold text-blue-600">
                {isReCaptchaLoaded ? "Verificación automática" : "Cargando verificación..."}
              </span>
            </div>
            
            <div className="flex justify-center">
              <Button
                onClick={verifyCaptcha}
                disabled={!isReCaptchaLoaded}
                className="px-8 py-3 text-base bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isReCaptchaLoaded ? t("captcha.verify") : "Cargando..."}
              </Button>
            </div>
            
            <div className="text-center mt-4">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {t("captcha.attempts")}: {captchaAttempts}/{CAPTCHA_CONFIG.maxAttempts}
              </span>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button
              onClick={() => setShowCaptcha(false)}
              variant="outline"
              className="flex-1 text-sm sm:text-base text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {t("captcha.cancel")}
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="inline-flex items-center gap-2">
      <Button 
        onClick={handleDownloadClick}
        disabled={isOpening}
        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
      >
        {isOpening ? (
          <>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            {i18n.language === 'es' ? 'Generando...' : 'Generating...'}
          </>
        ) : (
          <>
            <Download className="w-5 h-5" />
            {t("hero.download_cv")}
          </>
        )}
      </Button>
      
              {/* Rate limit indicator */}
        {downloadCount > 0 && (
          <div className="flex items-center gap-1 text-xs text-gray-100">
            <Shield className="w-3 h-3 flex-shrink-0" />
            <span className="hidden xs:inline">{downloadCount}/{RATE_LIMIT.maxDownloads}</span>
            <span className="xs:hidden">{downloadCount}</span>
          </div>
        )}
    </div>
  )
}