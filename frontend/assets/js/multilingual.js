// Multilingual Support - Kleverr 2035
// AI-Assisted Translation System for Dominican Republic and Global Markets

class KleverrMultilingual {
  constructor() {
    this.currentLanguage = 'en';
    this.translations = {};
    this.detectionComplete = false;
    this.aiTranslationBadge = false; // Silent AI translation - no notification
  }

  // 🔍 Language Detection System
  async detectLanguage() {
    try {
      // Primary: Browser language detection
      const browserLang = navigator.language || navigator.userLanguage;
      let detectedLang = browserLang.toLowerCase().startsWith('es') ? 'es' : 'en';
      
      console.log('Browser language detected:', browserLang, '→', detectedLang);

      // Secondary: IP Geolocation for Dominican Republic
      if (detectedLang === 'en') {
        try {
          const response = await fetch('https://ipapi.co/json/');
          const data = await response.json();
          
          console.log('📍 Location detected:', data.country_name, `(${data.country_code})`);
          
          // Prioritize Dominican Republic and Spanish-speaking countries
          if (['DO', 'ES', 'MX', 'AR', 'CO', 'PE', 'VE', 'CL', 'EC', 'GT', 'CU', 'BO', 'HN', 'PY', 'SV', 'NI', 'CR', 'PA', 'UY'].includes(data.country_code)) {
            detectedLang = 'es';
            console.log('Spanish-speaking region detected, switching to Spanish');
          }
        } catch (geoError) {
          console.log('📍 Geolocation detection failed, using browser language fallback');
        }
      }

      // Check for stored preference
      const storedLang = localStorage.getItem('kleverr_language');
      if (storedLang && ['en', 'es'].includes(storedLang)) {
        detectedLang = storedLang;
        console.log('💾 Stored language preference:', detectedLang);
      }

      this.currentLanguage = detectedLang;
      this.detectionComplete = true;
      
      return detectedLang;
    } catch (error) {
      console.error('🚨 Language detection error:', error);
      this.currentLanguage = 'en'; // Safe fallback
      this.detectionComplete = true;
      return 'en';
    }
  }

  // 📥 Load Translation Files
  async loadTranslations() {
    try {
      const [enResponse, esResponse] = await Promise.all([
        fetch('/assets/i18n/en.json'),
        fetch('/assets/i18n/es.json')
      ]);

      this.translations.en = await enResponse.json();
      this.translations.es = await esResponse.json();
      
      console.log('📚 Translation files loaded successfully');
      return true;
    } catch (error) {
      console.error('🚨 Failed to load translations:', error);
      return false;
    }
  }

  // 🔄 Initialize i18next
  async initI18next() {
    if (typeof i18next === 'undefined') {
      console.error('🚨 i18next library not loaded');
      return false;
    }

    try {
      await i18next.init({
        lng: this.currentLanguage,
        fallbackLng: 'en',
        resources: {
          en: { translation: this.translations.en },
          es: { translation: this.translations.es }
        },
        interpolation: {
          escapeValue: false
        }
      });

      console.log(`✅ i18next initialized with language: ${this.currentLanguage}`);
      return true;
    } catch (error) {
      console.error('🚨 i18next initialization failed:', error);
      return false;
    }
  }

  // 🎨 Update DOM Content
  updateContent() {
    // Update elements with data-i18n attributes
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = i18next.t(key);

      if (translation && translation !== key) {
        if (element.tagName === 'INPUT') {
          if (element.type === 'text' || element.type === 'email') {
            element.placeholder = translation;
          }
        } else if (element.tagName === 'BUTTON') {
          // For buttons, update text content
          element.textContent = translation;
        } else {
          element.textContent = translation;
        }
      }
    });

    // Handle custom placeholder attribute (data-i18n-placeholder)
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
      const key = element.getAttribute('data-i18n-placeholder');
      const translation = i18next.t(key);
      if (translation && translation !== key) {
        element.placeholder = translation;
      }
    });

    // Handle custom value attribute (data-i18n-value) for submit buttons
    document.querySelectorAll('[data-i18n-value]').forEach(element => {
      const key = element.getAttribute('data-i18n-value');
      const translation = i18next.t(key);
      if (translation && translation !== key) {
        element.value = translation;
      }
    });

    // Update meta tags
    this.updateMetaTags();

    // Update HTML lang attribute
    document.documentElement.lang = this.currentLanguage;

    console.log(`🔄 Content updated to ${this.currentLanguage}`);
  }

  // 🏷️ Update Meta Tags
  updateMetaTags() {
    const isSpanish = this.currentLanguage === 'es';
    
    // Update title
    const title = document.querySelector('title');
    if (title) {
      title.textContent = isSpanish 
        ? 'Kleverr - Construyendo Un Mundo Laboral Más Inteligente | Consultoría TI y Soluciones de Software'
        : 'Kleverr - Building A Smarter Working World | IT Consulting & Software Solutions';
    }

    // Update description
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.content = isSpanish
        ? 'Transforma tu negocio con las soluciones innovadoras de consultoría TI y software de Kleverr. Aprovechamos tecnología de vanguardia para redefinir posibilidades para empresas en Florida, Las Bahamas y República Dominicana.'
        : 'Transform your business with Kleverr\'s innovative IT consulting and software solutions. We leverage cutting-edge technology to redefine possibilities for businesses across Florida, The Bahamas, and Dominican Republic.';
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.content = isSpanish 
        ? 'Kleverr - Construyendo Un Mundo Laboral Más Inteligente'
        : 'Kleverr - Building A Smarter Working World';
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.content = isSpanish
        ? 'Transforma tu negocio con las soluciones innovadoras de consultoría TI y software de Kleverr. Haciendo posibles negocios reales para todos.'
        : 'Transform your business with Kleverr\'s innovative IT consulting and software solutions. Making real business possible for everyone.';
    }

    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.content = isSpanish 
        ? 'Kleverr - Construyendo Un Mundo Laboral Más Inteligente'
        : 'Kleverr - Building A Smarter Working World';
    }

    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.content = isSpanish
        ? 'Transforma tu negocio con las soluciones innovadoras de consultoría TI y software de Kleverr.'
        : 'Transform your business with Kleverr\'s innovative IT consulting and software solutions.';
    }
  }

  // 🔄 Change Language
  async changeLanguage(newLang) {
    if (!['en', 'es'].includes(newLang) || newLang === this.currentLanguage) {
      return;
    }

    this.currentLanguage = newLang;
    localStorage.setItem('kleverr_language', newLang);
    
    await i18next.changeLanguage(newLang);
    this.updateContent();
    
    // Update language toggle UI
    this.updateLanguageToggle();
    
    // Show AI translation notification
    if (this.aiTranslationBadge) {
      this.showTranslationNotification();
    }
    
    console.log(`🔄 Language changed to: ${newLang}`);
    
    // Trigger custom event for other components
    window.dispatchEvent(new CustomEvent('languageChanged', { 
      detail: { language: newLang } 
    }));
  }

  // 🎮 Setup Language Toggle
  setupLanguageToggle() {
    const toggle = document.getElementById('language-toggle');
    if (!toggle) return;

    toggle.addEventListener('change', (e) => {
      this.changeLanguage(e.target.value);
    });

    // Set initial value
    toggle.value = this.currentLanguage;
  }

  // 🔄 Update Language Toggle State
  updateLanguageToggle() {
    const toggle = document.getElementById('language-toggle');
    if (toggle) {
      toggle.value = this.currentLanguage;
    }
  }

  // 🤖 AI Translation Notification - Purple Brand
  showTranslationNotification() {
    const notification = document.createElement('div');
    notification.className = 'ai-translation-notification';
    notification.innerHTML = `
      <button class="notification-close" aria-label="Close notification">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      <div class="ai-badge">
        AI-Assisted Translation
      </div>
      <div class="translation-message">
        ${this.currentLanguage === 'es' ? 'Traducción optimizada para República Dominicana' : 'Translation optimized for Dominican Republic'}
      </div>
    `;

    document.body.appendChild(notification);

    // Close button handler
    const closeBtn = notification.querySelector('.notification-close');
    const dismissNotification = () => {
      if (notification.parentNode) {
        notification.style.animation = 'slideOutRight 0.5s cubic-bezier(0.4, 0, 1, 1)';
        setTimeout(() => notification.remove(), 500);
      }
    };

    closeBtn.addEventListener('click', dismissNotification);

    // Auto-dismiss after 5 seconds
    setTimeout(dismissNotification, 5000);
  }

  // 🚀 Initialize Everything
  async init() {
    console.log('Initializing Kleverr Multilingual System...');
    
    try {
      // Load translations first
      const translationsLoaded = await this.loadTranslations();
      if (!translationsLoaded) {
        console.error('🚨 Failed to load translations, falling back to English');
        return false;
      }

      // Detect language
      await this.detectLanguage();
      
      // Initialize i18next
      const i18nextReady = await this.initI18next();
      if (!i18nextReady) {
        console.error('🚨 i18next initialization failed');
        return false;
      }

      // Update content and setup toggle
      this.updateContent();
      this.setupLanguageToggle();
      
      // Show initial AI badge for Spanish users
      if (this.currentLanguage === 'es' && this.aiTranslationBadge) {
        setTimeout(() => this.showTranslationNotification(), 1000);
      }

      console.log('✅ Multilingual system initialized successfully');
      return true;
      
    } catch (error) {
      console.error('🚨 Multilingual initialization error:', error);
      return false;
    }
  }

  // 🎯 Get Current Language
  getCurrentLanguage() {
    return this.currentLanguage;
  }

  // 📊 Get Translation
  t(key) {
    return i18next.t(key);
  }
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', async () => {
  // Wait for i18next to load
  if (typeof i18next === 'undefined') {
    console.log('⏳ Waiting for i18next to load...');
    const checkI18next = setInterval(() => {
      if (typeof i18next !== 'undefined') {
        clearInterval(checkI18next);
        initializeMultilingual();
      }
    }, 100);
  } else {
    initializeMultilingual();
  }
});

async function initializeMultilingual() {
  window.kleverrMultilingual = new KleverrMultilingual();
  await window.kleverrMultilingual.init();
  
  console.log('Multilingual system ready. Use kleverrMultilingual.changeLanguage("es") to switch languages.');
}