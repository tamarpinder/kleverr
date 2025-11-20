/**
 * Success Stories Carousel
 * CSS Scroll Snap Gallery with Navigation & Animations
 */

(function() {
  'use strict';

  // Wait for DOM to be ready
  document.addEventListener('DOMContentLoaded', () => {
    initSuccessCarousel();
  });

  function initSuccessCarousel() {
    const carousel = document.getElementById('successCarousel');
    const prevBtn = document.getElementById('prevProject');
    const nextBtn = document.getElementById('nextProject');
    const dotsContainer = document.getElementById('carouselDots');

    if (!carousel) return; // Exit if carousel doesn't exist

    const cards = Array.from(carousel.querySelectorAll('.story-card'));
    const totalSlides = cards.length;
    let currentIndex = 0;

    // Initialize dots
    const dots = Array.from(dotsContainer?.querySelectorAll('.dot') || []);

    // Scroll to specific slide
    function scrollToSlide(index) {
      if (index < 0 || index >= totalSlides) return;

      const targetCard = cards[index];
      if (targetCard) {
        // Calculate scroll position to center the card
        const cardWidth = targetCard.offsetWidth;
        const gap = 40; // Gap between cards from CSS
        const scrollLeft = index * (cardWidth + gap);

        carousel.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });

        currentIndex = index;
        updateUI();
      }
    }

    // Update UI elements
    function updateUI() {
      // Update dots
      dots.forEach((dot, index) => {
        if (index === currentIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });

      // Update button states (CSS handles styling via :disabled)
      if (prevBtn) {
        prevBtn.disabled = currentIndex === 0;
      }

      if (nextBtn) {
        nextBtn.disabled = currentIndex === totalSlides - 1;
      }
    }

    // Previous button
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
          scrollToSlide(currentIndex - 1);
        }
      });
    }

    // Next button
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (currentIndex < totalSlides - 1) {
          scrollToSlide(currentIndex + 1);
        }
      });
    }

    // Dot navigation
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        scrollToSlide(index);
      });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (!carousel) return;

      // Only handle if carousel is in viewport
      const rect = carousel.getBoundingClientRect();
      const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;

      if (!isInViewport) return;

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (currentIndex > 0) scrollToSlide(currentIndex - 1);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        if (currentIndex < totalSlides - 1) scrollToSlide(currentIndex + 1);
      }
    });

    // Track scroll position to update current slide
    let scrollTimeout;
    carousel.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        const scrollLeft = carousel.scrollLeft;
        const cardWidth = cards[0]?.offsetWidth || 900;
        const gap = 40;
        const newIndex = Math.round(scrollLeft / (cardWidth + gap));

        if (newIndex !== currentIndex && newIndex >= 0 && newIndex < totalSlides) {
          currentIndex = newIndex;
          updateUI();
          animateMetrics(cards[currentIndex]);
        }
      }, 100);
    });

    // Intersection Observer for metric animations
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateMetrics(entry.target);
        }
      });
    }, observerOptions);

    // Observe all cards
    cards.forEach(card => observer.observe(card));

    // Animate metrics with count-up effect
    function animateMetrics(card) {
      const metricValues = card.querySelectorAll('.metric-value');

      metricValues.forEach(metricEl => {
        // Check if already animated
        if (metricEl.dataset.animated === 'true') return;

        const targetValue = parseFloat(metricEl.dataset.count);
        if (isNaN(targetValue)) return;

        const duration = 2000; // 2 seconds
        const startTime = performance.now();
        const startValue = 0;

        function updateCount(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          // Easing function (ease-out)
          const easeOut = 1 - Math.pow(1 - progress, 3);
          const currentValue = startValue + (targetValue - startValue) * easeOut;

          // Format the number
          if (metricEl.textContent.includes('$')) {
            metricEl.textContent = '$' + Math.round(currentValue);
          } else if (metricEl.textContent.includes('K')) {
            metricEl.textContent = Math.round(currentValue) + 'K';
          } else if (targetValue % 1 !== 0) {
            // Decimal number (like 99.9)
            metricEl.textContent = currentValue.toFixed(1);
          } else {
            metricEl.textContent = Math.round(currentValue);
          }

          if (progress < 1) {
            requestAnimationFrame(updateCount);
          } else {
            metricEl.dataset.animated = 'true';
          }
        }

        requestAnimationFrame(updateCount);
      });
    }

    // Initialize UI
    updateUI();

    // Animate first card metrics on load
    setTimeout(() => {
      animateMetrics(cards[0]);
    }, 500);

    // Touch swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    carousel.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });

    function handleSwipe() {
      const swipeThreshold = 50;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          // Swiped left (next)
          if (currentIndex < totalSlides - 1) {
            scrollToSlide(currentIndex + 1);
          }
        } else {
          // Swiped right (previous)
          if (currentIndex > 0) {
            scrollToSlide(currentIndex - 1);
          }
        }
      }
    }

    // Auto-play (optional - commented out by default)
    /*
    let autoplayInterval;
    const autoplayDelay = 6000; // 6 seconds

    function startAutoplay() {
      autoplayInterval = setInterval(() => {
        if (currentIndex < totalSlides - 1) {
          scrollToSlide(currentIndex + 1);
        } else {
          scrollToSlide(0); // Loop back to start
        }
      }, autoplayDelay);
    }

    function stopAutoplay() {
      clearInterval(autoplayInterval);
    }

    // Start autoplay on load
    startAutoplay();

    // Pause on hover
    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);

    // Pause on interaction
    carousel.addEventListener('click', () => {
      stopAutoplay();
      setTimeout(startAutoplay, 10000); // Resume after 10 seconds
    });
    */
  }

})();
