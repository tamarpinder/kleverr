// ==========================================
// GLOBAL PAGE TRANSITION LOADER
// ==========================================
// Shows the quantum loader on all page transitions

(function() {
  'use strict';

  // Hide loader on page load (after 1 second)
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      const loader = document.querySelector('.quantum-loader');
      if (loader) {
        loader.classList.remove('active');
      }
    }, 1000);
  });

  // Show loader when clicking internal links
  document.addEventListener('click', (e) => {
    // Find if click is on a link or inside a link
    const link = e.target.closest('a');

    if (!link) return;

    const href = link.getAttribute('href');

    // Check if it's an internal link (not external, not hash, not mailto, not tel)
    if (
      href &&
      !href.startsWith('#') &&
      !href.startsWith('mailto:') &&
      !href.startsWith('tel:') &&
      !href.startsWith('http://') &&
      !href.startsWith('https://') &&
      !link.hasAttribute('target') &&
      !link.hasAttribute('download')
    ) {
      // Show loader before navigation
      const loader = document.querySelector('.quantum-loader');
      if (loader) {
        loader.classList.add('active');
      }
    }
  });

  // Also show loader on browser back/forward buttons
  window.addEventListener('beforeunload', () => {
    const loader = document.querySelector('.quantum-loader');
    if (loader) {
      loader.classList.add('active');
    }
  });

  // Handle page visibility (when returning to tab)
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      setTimeout(() => {
        const loader = document.querySelector('.quantum-loader');
        if (loader) {
          loader.classList.remove('active');
        }
      }, 500);
    }
  });
})();
