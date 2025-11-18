// Footer Accordion System for Mobile - Kleverr 2035
// Collapsible footer sections on mobile devices only

class FooterAccordion {
  constructor() {
    this.isMobile = window.innerWidth <= 767;
    this.accordions = [];
    this.init();
  }

  init() {
    // Only initialize on mobile
    if (!this.isMobile) {
      this.ensureDesktopState();
      window.addEventListener('resize', () => this.handleResize());
      return;
    }

    // Initialize accordion functionality
    this.setupAccordions();

    // Re-check on resize
    window.addEventListener('resize', () => this.handleResize());
  }

  setupAccordions() {
    const headers = document.querySelectorAll('.footer-accordion-header');

    headers.forEach((header, index) => {
      // Find the content section (next sibling or within parent)
      const parent = header.closest('.footer-accordion-section');
      let content = header.nextElementSibling;

      // If next sibling is not the content, look for it within the parent
      if (!content || !content.classList.contains('footer-accordion-content')) {
        content = parent.querySelector('.footer-accordion-content');
      }

      if (!content) return;

      // Set initial state - first accordion open by default
      if (index === 0) {
        header.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
        content.classList.add('active');
      } else {
        content.style.maxHeight = '0';
      }

      // Add click event
      header.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleAccordion(header, content);
      });

      // Store reference
      this.accordions.push({ header, content });
    });

    console.log('📱 Footer accordions initialized for mobile');
  }

  toggleAccordion(header, content) {
    const isActive = header.classList.contains('active');

    if (isActive) {
      // Close this accordion
      header.classList.remove('active');
      content.classList.remove('active');
      content.style.maxHeight = '0';
    } else {
      // Open this accordion
      header.classList.add('active');
      content.classList.add('active');
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  }

  ensureDesktopState() {
    // Ensure all accordions are open/visible on desktop
    const contents = document.querySelectorAll('.footer-accordion-content');
    const headers = document.querySelectorAll('.footer-accordion-header');

    contents.forEach(content => {
      content.style.maxHeight = 'none';
      content.classList.add('active');
    });

    headers.forEach(header => {
      header.classList.add('active');
    });
  }

  handleResize() {
    const wasMobile = this.isMobile;
    this.isMobile = window.innerWidth <= 767;

    // If switching from desktop to mobile or vice versa
    if (wasMobile !== this.isMobile) {
      // Clear existing accordions
      this.accordions = [];

      // Remove all click events by cloning and replacing
      const headers = document.querySelectorAll('.footer-accordion-header');
      headers.forEach(header => {
        const newHeader = header.cloneNode(true);
        header.parentNode.replaceChild(newHeader, header);
      });

      if (this.isMobile) {
        this.setupAccordions();
      } else {
        this.ensureDesktopState();
      }
    }
  }
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Wait for Lucide icons to be ready
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Initialize footer accordion
  window.kleverrFooterAccordion = new FooterAccordion();

  // Re-initialize Lucide icons after any DOM changes
  setTimeout(() => {
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }, 100);
});

// Also listen for language changes to re-render icons
window.addEventListener('languageChanged', () => {
  setTimeout(() => {
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }, 100);
});
