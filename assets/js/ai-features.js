// 🤖 AI Features JavaScript - Kleverr 2035
// Interactive AI demos, voice search, chatbot, and futuristic interactions

class KleverrAI {
  constructor() {
    this.initializeFeatures();
    this.setupEventListeners();
    this.startAnimations();
  }

  initializeFeatures() {
    // Initialize AI features
    this.chatbotOpen = false;
    this.voiceSearchActive = false;
    this.darkMode = localStorage.getItem('darkMode') === 'true';
    this.setupDarkMode();
    this.createChatbot();
    this.createQuantumParticles();
  }

  // 🎙️ Voice Search Implementation
  setupVoiceSearch() {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      console.log('Voice search not supported');
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    this.recognition = new SpeechRecognition();
    this.recognition.continuous = false;
    this.recognition.interimResults = true;
    this.recognition.lang = 'en-US';

    this.recognition.onstart = () => {
      document.querySelector('.voice-search-btn')?.classList.add('listening');
      this.showNotification('Listening... Speak your query');
    };

    this.recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map(result => result[0].transcript)
        .join('');
      
      if (event.results[0].isFinal) {
        this.processVoiceCommand(transcript);
      }
    };

    this.recognition.onerror = (event) => {
      console.error('Voice recognition error:', event.error);
      this.showNotification('Voice search error. Please try again.');
    };

    this.recognition.onend = () => {
      document.querySelector('.voice-search-btn')?.classList.remove('listening');
    };
  }

  processVoiceCommand(command) {
    const lowerCommand = command.toLowerCase();
    
    // AI command processing
    if (lowerCommand.includes('show services')) {
      this.scrollToSection('#it-services');
    } else if (lowerCommand.includes('contact')) {
      window.location.href = 'contact.html';
    } else if (lowerCommand.includes('ai automation')) {
      this.scrollToSection('#ai-automation');
    } else if (lowerCommand.includes('dark mode')) {
      this.toggleDarkMode();
    } else if (lowerCommand.includes('tell me about')) {
      this.generateAIResponse(command);
    } else {
      this.showNotification(`Searching for: ${command}`);
      // Implement actual search functionality
    }
  }

  // 💬 AI Chatbot
  createChatbot() {
    const chatbotHTML = `
      <div class="ai-chat-bubble" id="aiChatBubble">
        <span>💬</span>
      </div>
      <div class="ai-chat-window" id="aiChatWindow" style="display: none;">
        <div class="chat-header">
          <h3>Kleverr AI Assistant</h3>
          <span class="close-chat" id="closeChat">×</span>
        </div>
        <div class="chat-messages" id="chatMessages"></div>
        <div class="chat-input-area">
          <input type="text" id="chatInput" placeholder="Ask me anything...">
          <button id="sendMessage">Send</button>
        </div>
      </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', chatbotHTML);
  }

  // 🎯 AI Response Generator (Mock - Replace with actual API)
  async generateAIResponse(query) {
    // Mock AI responses - Replace with OpenAI API call
    const responses = {
      'services': 'We offer Digital Transformation, AI Automation, Custom Software Development, Cloud Solutions, and more.',
      'ai': 'Our AI solutions include Machine Learning models, Natural Language Processing, Computer Vision, and Predictive Analytics.',
      'contact': 'You can reach us at support@kleverr.io or visit our contact page for more options.',
      'pricing': 'Our pricing is customized based on your needs. Schedule a free consultation to discuss your project.',
      'default': 'I\'m here to help! Could you please be more specific about what you\'d like to know?'
    };

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Find matching response
    let response = responses.default;
    for (const [key, value] of Object.entries(responses)) {
      if (query.toLowerCase().includes(key)) {
        response = value;
        break;
      }
    }

    return response;
  }

  // 🎪 AI Tools Showcase
  async loadAITools() {
    const tools = [
      {
        icon: '🤖',
        title: 'Intelligent Automation',
        description: 'Automate complex workflows with AI',
        demo: () => this.demoAutomation()
      },
      {
        icon: '🧠',
        title: 'Predictive Analytics',
        description: 'Forecast trends with machine learning',
        demo: () => this.demoPredictive()
      },
      {
        icon: '💬',
        title: 'Natural Language AI',
        description: 'Process and understand human language',
        demo: () => this.demoNLP()
      },
      {
        icon: '👁️',
        title: 'Computer Vision',
        description: 'Visual recognition and analysis',
        demo: () => this.demoVision()
      },
      {
        icon: '🔮',
        title: 'Quantum Computing',
        description: 'Next-gen computational power',
        demo: () => this.demoQuantum()
      },
      {
        icon: '🛡️',
        title: 'AI Security',
        description: 'Intelligent threat detection',
        demo: () => this.demoSecurity()
      }
    ];

    const container = document.querySelector('.ai-grid');
    if (!container) return;

    tools.forEach((tool, index) => {
      const card = document.createElement('div');
      card.className = 'ai-tool-card glass-card';
      card.innerHTML = `
        <div class="ai-tool-icon">${tool.icon}</div>
        <h3>${tool.title}</h3>
        <p>${tool.description}</p>
        <button class="demo-btn" data-demo="${index}">Try Demo</button>
      `;
      card.style.animationDelay = `${index * 0.1}s`;
      container.appendChild(card);
    });

    // Add demo event listeners
    document.querySelectorAll('.demo-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const index = e.target.getAttribute('data-demo');
        tools[index].demo();
      });
    });
  }

  // 🎯 Demo Functions
  demoAutomation() {
    this.showNotification('Running automation demo...');
    // Simulate automation process
    this.animateProcess(['Data Input', 'Processing', 'AI Analysis', 'Output Generated']);
  }

  demoPredictive() {
    this.showNotification('Generating predictions...');
    // Show mock prediction chart
    this.generatePredictionChart();
  }

  demoNLP() {
    const text = prompt('Enter text to analyze:');
    if (text) {
      // Mock sentiment analysis
      const sentiment = Math.random() > 0.5 ? 'Positive' : 'Neutral';
      this.showNotification(`Sentiment: ${sentiment}, Keywords: ${text.split(' ').slice(0, 3).join(', ')}`);
    }
  }

  demoVision() {
    this.showNotification('Computer Vision demo: Upload an image to analyze');
    // Create file input for demo
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      this.showNotification('Analyzing image... Objects detected: Person, Computer, Office');
    };
    input.click();
  }

  demoQuantum() {
    this.showNotification('Quantum simulation running...');
    this.createQuantumVisualization();
  }

  demoSecurity() {
    this.showNotification('Security scan complete: All systems secure ✓');
    this.animateSecurityScan();
  }

  // 📊 ROI Calculator
  setupROICalculator() {
    const calculator = document.getElementById('roiCalculator');
    if (!calculator) return;

    calculator.innerHTML = `
      <h3>ROI Calculator</h3>
      <input type="number" id="currentCost" placeholder="Current Monthly Cost ($)" class="roi-input">
      <input type="number" id="employees" placeholder="Number of Employees" class="roi-input">
      <input type="number" id="hoursWasted" placeholder="Hours Wasted Weekly" class="roi-input">
      <button id="calculateROI">Calculate Savings</button>
      <div id="roiResult" class="roi-result"></div>
    `;

    document.getElementById('calculateROI')?.addEventListener('click', () => {
      const cost = parseFloat(document.getElementById('currentCost').value) || 0;
      const emp = parseFloat(document.getElementById('employees').value) || 0;
      const hours = parseFloat(document.getElementById('hoursWasted').value) || 0;
      
      // Calculate potential savings
      const hourlyRate = 50; // Average hourly rate
      const weeklySavings = hours * emp * hourlyRate;
      const monthlySavings = weeklySavings * 4;
      const efficiency = cost * 0.3; // 30% efficiency gain
      const totalSavings = monthlySavings + efficiency;
      
      document.getElementById('roiResult').innerHTML = `
        <h2>$${totalSavings.toLocaleString()}</h2>
        <p>Estimated Monthly Savings</p>
      `;
    });
  }

  // 🌌 Quantum Particles Animation
  createQuantumParticles() {
    const particleCount = 20;
    const container = document.body;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'quantum-particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 10 + 's';
      particle.style.animationDuration = (10 + Math.random() * 10) + 's';
      container.appendChild(particle);
    }
  }

  // 🌓 Dark Mode
  setupDarkMode() {
    const toggle = document.createElement('div');
    toggle.className = 'dark-mode-toggle';
    if (this.darkMode) {
      toggle.classList.add('active');
      document.body.classList.add('dark-mode');
    }
    document.body.appendChild(toggle);
    
    toggle.addEventListener('click', () => this.toggleDarkMode());
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark-mode');
    document.querySelector('.dark-mode-toggle').classList.toggle('active');
    localStorage.setItem('darkMode', this.darkMode);
    this.showNotification(`Dark mode ${this.darkMode ? 'enabled' : 'disabled'}`);
  }

  // 📢 Notifications
  showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'ai-notification';
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 15px 30px;
      border-radius: 50px;
      z-index: 10000;
      animation: slideDown 0.5s ease;
    `;
    
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
  }

  // 🎮 Event Listeners
  setupEventListeners() {
    // Voice search button
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('voice-search-btn')) {
        this.startVoiceSearch();
      }
    });

    // Chatbot
    document.addEventListener('click', (e) => {
      if (e.target.id === 'aiChatBubble') {
        this.toggleChatbot();
      }
      if (e.target.id === 'closeChat') {
        this.toggleChatbot();
      }
      if (e.target.id === 'sendMessage') {
        this.sendChatMessage();
      }
    });

    // Enter key for chat
    document.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && e.target.id === 'chatInput') {
        this.sendChatMessage();
      }
    });

    // Scroll animations
    this.setupScrollAnimations();
  }

  // 📜 Scroll Animations
  setupScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all animatable elements
    document.querySelectorAll('.glass-card, .ai-tool-card, .case-card').forEach(el => {
      observer.observe(el);
    });
  }

  // 🚀 Start Animations
  startAnimations() {
    // Load AI tools when section is visible
    const aiSection = document.querySelector('#ai-automation');
    if (aiSection) {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          this.loadAITools();
          observer.disconnect();
        }
      });
      observer.observe(aiSection);
    }

    // Setup ROI Calculator
    this.setupROICalculator();
    
    // Initialize voice search
    this.setupVoiceSearch();
  }

  // 💬 Chatbot Functions
  toggleChatbot() {
    const chatWindow = document.getElementById('aiChatWindow');
    this.chatbotOpen = !this.chatbotOpen;
    chatWindow.style.display = this.chatbotOpen ? 'block' : 'none';
    
    if (this.chatbotOpen && !this.chatInitialized) {
      this.addChatMessage('bot', 'Hello! I\'m Kleverr AI. How can I help you today?');
      this.chatInitialized = true;
    }
  }

  async sendChatMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    if (!message) return;

    // Add user message
    this.addChatMessage('user', message);
    input.value = '';

    // Generate bot response
    const response = await this.generateAIResponse(message);
    this.addChatMessage('bot', response);
  }

  addChatMessage(sender, message) {
    const messagesContainer = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${sender}`;
    messageDiv.innerHTML = `
      <span class="message-sender">${sender === 'bot' ? '🤖 AI' : '👤 You'}</span>
      <p>${message}</p>
    `;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  startVoiceSearch() {
    if (this.recognition) {
      this.recognition.start();
    } else {
      this.showNotification('Voice search not supported in your browser');
    }
  }

  scrollToSection(selector) {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Animation helpers
  animateProcess(steps) {
    let index = 0;
    const interval = setInterval(() => {
      if (index < steps.length) {
        this.showNotification(`Step ${index + 1}: ${steps[index]}`);
        index++;
      } else {
        clearInterval(interval);
        this.showNotification('✓ Process Complete!');
      }
    }, 1500);
  }

  generatePredictionChart() {
    // Mock prediction visualization
    this.showNotification('📈 Sales predicted to increase 45% next quarter');
  }

  createQuantumVisualization() {
    // Create quantum computing visualization
    this.showNotification('⚛️ Quantum state: Superposition achieved');
  }

  animateSecurityScan() {
    const messages = ['Scanning network...', 'Checking vulnerabilities...', 'Analyzing threats...', '✓ All secure'];
    let index = 0;
    const interval = setInterval(() => {
      if (index < messages.length) {
        this.showNotification(messages[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 1000);
  }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  window.kleverrAI = new KleverrAI();
  
  // Add futuristic loading animation
  setTimeout(() => {
    document.querySelector('.quantum-loader')?.classList.remove('active');
  }, 1000);
});