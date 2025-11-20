// 🚀 Kleverr Service Worker - 2035 Edition
// Offline functionality, caching, and PWA features

const CACHE_NAME = 'kleverr-v3.1.0';
const STATIC_CACHE = 'kleverr-static-v3.1';
const DYNAMIC_CACHE = 'kleverr-dynamic-v3.1';

// Files to cache for offline functionality
const STATIC_FILES = [
  '/',
  '/index.html',
  '/about.html',
  '/services.html',
  '/contact.html',
  '/insights.html',
  '/assets/css/normalize.css',
  '/assets/css/webflow.css',
  '/assets/css/kleverr.webflow.css',
  '/assets/css/futuristic.css',
  '/assets/js/webflow.js',
  '/assets/js/ai-features.js',
  '/assets/images/Mask-group_1.svg',
  '/assets/images/favicon.png',
  '/manifest.json'
];

// Install event - cache static files
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('[Service Worker] Caching static files');
        return cache.addAll(STATIC_FILES);
      })
      .catch((error) => {
        console.error('[Service Worker] Cache failed:', error);
      })
  );
  
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating...');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => {
            return cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE;
          })
          .map((cacheName) => {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          })
      );
    })
  );
  
  self.clients.claim();
});

// Fetch event - serve files from cache or network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests and external domains
  if (request.method !== 'GET' || !url.origin.includes('kleverr.io') && !url.origin.includes('localhost')) {
    return;
  }

  // Network-first strategy for HTML pages (always get latest version)
  if (request.destination === 'document' || url.pathname.endsWith('.html') || url.pathname === '/' || url.pathname.match(/^\/(about|services|contact|insights|case-studies)$/)) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Cache the new version
          if (response && response.status === 200) {
            const responseToCache = response.clone();
            caches.open(DYNAMIC_CACHE)
              .then((cache) => {
                console.log('[Service Worker] Caching updated HTML:', request.url);
                cache.put(request, responseToCache);
              });
          }
          return response;
        })
        .catch(() => {
          // Fallback to cache if offline
          console.log('[Service Worker] Network failed, serving from cache:', request.url);
          return caches.match(request).then((cachedResponse) => {
            return cachedResponse || caches.match('/offline.html');
          });
        })
    );
    return;
  }

  // Cache-first strategy for static assets (CSS, JS, images)
  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        // Return cached version if available
        if (cachedResponse) {
          console.log('[Service Worker] Serving from cache:', request.url);
          return cachedResponse;
        }

        // Fetch from network and cache dynamically
        return fetch(request)
          .then((response) => {
            // Don't cache non-200 responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone response for caching
            const responseToCache = response.clone();

            // Cache dynamic content
            caches.open(DYNAMIC_CACHE)
              .then((cache) => {
                console.log('[Service Worker] Caching dynamic:', request.url);
                cache.put(request, responseToCache);
              });

            return response;
          })
          .catch(() => {
            // Serve placeholder for images
            if (request.destination === 'image') {
              return new Response('<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#f0f0f0"/><text x="100" y="100" text-anchor="middle" fill="#999">Image Offline</text></svg>', {
                headers: { 'Content-Type': 'image/svg+xml' }
              });
            }
          });
      })
  );
});

// Background Sync for offline actions
self.addEventListener('sync', (event) => {
  console.log('[Service Worker] Background sync:', event.tag);
  
  if (event.tag === 'contact-form') {
    event.waitUntil(syncContactForm());
  }
  
  if (event.tag === 'consultation-request') {
    event.waitUntil(syncConsultationRequest());
  }
});

// Push notifications
self.addEventListener('push', (event) => {
  console.log('[Service Worker] Push received');
  
  const options = {
    body: event.data ? event.data.text() : 'New update from Kleverr!',
    icon: '/assets/images/favicon.png',
    badge: '/assets/images/badge.png',
    image: '/assets/images/notification-image.jpg',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Explore',
        icon: '/assets/images/checkmark.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/assets/images/xmark.png'
      }
    ],
    requireInteraction: true,
    silent: false
  };
  
  event.waitUntil(
    self.registration.showNotification('Kleverr AI Update', options)
  );
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  console.log('[Service Worker] Notification click:', event.action);
  
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  } else if (event.action === 'close') {
    // Just close the notification
    return;
  } else {
    // Default click action
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Message handling for client communication
self.addEventListener('message', (event) => {
  console.log('[Service Worker] Message received:', event.data);
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
  
  if (event.data && event.data.type === 'CACHE_URLS') {
    event.waitUntil(
      caches.open(DYNAMIC_CACHE)
        .then((cache) => {
          return cache.addAll(event.data.urls);
        })
    );
  }
});

// Sync functions
async function syncContactForm() {
  try {
    // Retrieve stored form data
    const formData = await getStoredData('contact-form');
    if (!formData) return;
    
    // Attempt to send form
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    
    if (response.ok) {
      // Clear stored data on success
      await clearStoredData('contact-form');
      console.log('[Service Worker] Contact form synced successfully');
    }
  } catch (error) {
    console.error('[Service Worker] Contact form sync failed:', error);
  }
}

async function syncConsultationRequest() {
  try {
    const requestData = await getStoredData('consultation-request');
    if (!requestData) return;
    
    const response = await fetch('/api/consultation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    });
    
    if (response.ok) {
      await clearStoredData('consultation-request');
      console.log('[Service Worker] Consultation request synced successfully');
    }
  } catch (error) {
    console.error('[Service Worker] Consultation sync failed:', error);
  }
}

// IndexedDB helpers
function getStoredData(key) {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('KleverrDB', 1);
    
    request.onerror = () => reject(request.error);
    
    request.onsuccess = (event) => {
      const db = event.target.result;
      const transaction = db.transaction(['offline-data'], 'readonly');
      const store = transaction.objectStore('offline-data');
      const getRequest = store.get(key);
      
      getRequest.onsuccess = () => resolve(getRequest.result?.data);
      getRequest.onerror = () => reject(getRequest.error);
    };
    
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains('offline-data')) {
        db.createObjectStore('offline-data', { keyPath: 'key' });
      }
    };
  });
}

function clearStoredData(key) {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('KleverrDB', 1);
    
    request.onsuccess = (event) => {
      const db = event.target.result;
      const transaction = db.transaction(['offline-data'], 'readwrite');
      const store = transaction.objectStore('offline-data');
      const deleteRequest = store.delete(key);
      
      deleteRequest.onsuccess = () => resolve();
      deleteRequest.onerror = () => reject(deleteRequest.error);
    };
  });
}

// AI Model caching for offline AI features
self.addEventListener('message', (event) => {
  if (event.data.type === 'CACHE_AI_MODEL') {
    event.waitUntil(
      caches.open('ai-models')
        .then((cache) => {
          return cache.addAll([
            '/assets/models/sentiment-model.json',
            '/assets/models/nlp-model.json',
            '/assets/models/prediction-model.json'
          ]);
        })
    );
  }
});

console.log('[Service Worker] Kleverr Service Worker loaded successfully 🚀');