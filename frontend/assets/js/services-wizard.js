// AI-Guided Services Wizard & Bento Grid
// Kleverr 2026 - Ultra-Modern Service Discovery

// ==========================================
// SERVICE DATA (All 17 Services)
// ==========================================

const servicesData = [
  // Traditional Services
  {
    id: 'digital-transformation',
    name: 'Digital Transformation',
    icon: 'monitor-smartphone',
    tagline: 'Modernize your entire business ecosystem',
    description: 'Customized digital transformation strategies that meet your unique business needs. We analyze and identify areas for optimal digitization, helping you stay competitive in the digital age.',
    category: 'consulting',
    features: [
      'Comprehensive digital strategy assessment',
      'Technology roadmap development',
      'Change management support',
      'Legacy system modernization'
    ],
    benefits: [
      'Increased operational efficiency by 40%',
      'Improved customer satisfaction scores',
      'Reduced operational costs',
      'Enhanced competitive positioning'
    ],
    perfectFor: 'Businesses ready to embrace digital-first operations, enterprises looking to modernize legacy systems, and organizations seeking competitive advantage through technology.',
    metrics: [
      { value: '40%', label: 'Efficiency Increase' },
      { value: '60%', label: 'Cost Reduction' }
    ],
    challenges: ['modernize', 'scale'],
    featured: true,
    relatedServices: ['application-development', 'ai-workflow', 'cloud-solutions']
  },
  {
    id: 'application-development',
    name: 'Application Development',
    icon: 'code-2',
    tagline: 'Custom software built for your business',
    description: 'Agile development methodologies ensure efficient, cost-effective, and on-time solutions with precision and attention to detail. We build scalable applications that grow with your business.',
    category: 'development',
    features: [
      'Custom web and mobile applications',
      'Agile development methodology',
      'Cloud-native architecture',
      'Continuous integration & deployment'
    ],
    benefits: [
      'Faster time to market',
      'Scalable and maintainable code',
      '99.9% uptime guarantee',
      'Ongoing support and updates'
    ],
    perfectFor: 'Startups needing MVP development, enterprises requiring custom solutions, and businesses looking to digitize manual processes.',
    metrics: [
      { value: '3x', label: 'Faster Development' },
      { value: '99.9%', label: 'Uptime' }
    ],
    challenges: ['scale', 'modernize'],
    featured: false,
    relatedServices: ['web-mobile', 'mobile-apps', 'digital-transformation']
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    icon: 'megaphone',
    tagline: 'Data-driven growth strategies',
    description: 'Inbound marketing strategies that attract customers with relevant content, building trust and loyalty for increased sales. Multi-channel campaigns optimized for maximum ROI.',
    category: 'marketing',
    features: [
      'Multi-channel campaign management',
      'Content marketing strategy',
      'Marketing automation',
      'Performance analytics & reporting'
    ],
    benefits: [
      '3x increase in qualified leads',
      '60% lower cost per acquisition',
      'Improved brand awareness',
      'Data-driven decision making'
    ],
    perfectFor: 'B2B companies looking to generate leads, SaaS businesses needing growth, and e-commerce stores wanting to scale.',
    metrics: [
      { value: '3x', label: 'Lead Growth' },
      { value: '60%', label: 'Lower CPA' }
    ],
    challenges: ['revenue'],
    featured: true,
    relatedServices: ['seo', 'social-media', 'ad-creative']
  },
  {
    id: 'it-managed',
    name: 'IT Managed Solutions',
    icon: 'server',
    tagline: 'Your dedicated IT department',
    description: 'Strategic IT partnership dedicated to maximizing your investments while keeping your business ahead in the digital landscape. 24/7 monitoring and support.',
    category: 'consulting',
    features: [
      '24/7 IT support and monitoring',
      'Infrastructure management',
      'Security and compliance',
      'Disaster recovery planning'
    ],
    benefits: [
      'Reduced IT costs by 40%',
      'Increased system uptime',
      'Enhanced security posture',
      'Focus on core business'
    ],
    perfectFor: 'Small to mid-size businesses without IT staff, growing companies needing scalable support, and enterprises requiring specialized expertise.',
    metrics: [
      { value: '40%', label: 'Cost Savings' },
      { value: '99.9%', label: 'Uptime' }
    ],
    challenges: ['costs', 'scale'],
    featured: false,
    relatedServices: ['digital-transformation', 'cloud-solutions', 'it-security']
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce Solutions',
    icon: 'shopping-cart',
    tagline: 'Convert browsers into buyers',
    description: 'Best-in-class, mobile-optimized eCommerce websites with advanced merchandising, payments, and customer loyalty programs. Built for conversion and scale.',
    category: 'development',
    features: [
      'Custom e-commerce platform development',
      'Payment gateway integration',
      'Inventory management systems',
      'Mobile-first responsive design'
    ],
    benefits: [
      '2.5x increase in conversion rate',
      'Seamless checkout experience',
      'Automated inventory management',
      'Multi-currency support'
    ],
    perfectFor: 'Retailers going online, B2B companies enabling self-service, and businesses scaling their online presence.',
    metrics: [
      { value: '2.5x', label: 'Conversion Increase' },
      { value: '85%', label: 'Cart Recovery' }
    ],
    challenges: ['revenue', 'scale'],
    featured: false,
    relatedServices: ['web-mobile', 'digital-marketing', 'mobile-apps']
  },
  {
    id: 'web-mobile',
    name: 'Web & Mobile Experiences',
    icon: 'layout',
    tagline: 'Beautiful interfaces that convert',
    description: 'Comprehensive web design and development services that engage visitors, tell your story, and connect with customers. User-centered design that drives results.',
    category: 'development',
    features: [
      'Responsive web design',
      'Progressive web applications',
      'UX/UI optimization',
      'Cross-browser compatibility'
    ],
    benefits: [
      'Improved user engagement',
      'Higher conversion rates',
      'Better SEO performance',
      'Faster load times'
    ],
    perfectFor: 'Businesses needing a digital presence refresh, companies launching new products, and brands wanting to stand out online.',
    metrics: [
      { value: '50%', label: 'Load Time Reduction' },
      { value: '35%', label: 'Conversion Boost' }
    ],
    challenges: ['revenue', 'modernize'],
    featured: false,
    relatedServices: ['mobile-apps', 'digital-marketing', 'seo']
  },
  {
    id: 'mobile-apps',
    name: 'Mobile Applications',
    icon: 'smartphone',
    tagline: 'Apps users love to use',
    description: 'Native and cross-platform mobile applications delivering exceptional user experiences on iOS and Android devices. From concept to App Store.',
    category: 'development',
    features: [
      'iOS and Android development',
      'Cross-platform frameworks',
      'App Store optimization',
      'Push notifications & analytics'
    ],
    benefits: [
      'Reach customers anywhere',
      'Improved customer engagement',
      'Direct marketing channel',
      'Increased brand loyalty'
    ],
    perfectFor: 'Businesses wanting direct customer access, service providers needing on-demand apps, and brands building loyalty programs.',
    metrics: [
      { value: '4.8★', label: 'Average Rating' },
      { value: '200K+', label: 'Downloads' }
    ],
    challenges: ['revenue', 'scale'],
    featured: false,
    relatedServices: ['web-mobile', 'application-development', 'ai-customer']
  },
  {
    id: 'seo',
    name: 'Search Engine Optimization',
    icon: 'search',
    tagline: 'Get found by customers searching for you',
    description: 'Strategic SEO optimization that increases visibility, drives organic traffic, and establishes industry authority. Sustainable long-term growth.',
    category: 'marketing',
    features: [
      'Technical SEO audits',
      'Keyword research & strategy',
      'Content optimization',
      'Link building campaigns'
    ],
    benefits: [
      '150% increase in organic traffic',
      'Higher quality leads',
      'Improved search rankings',
      'Better ROI than paid ads'
    ],
    perfectFor: 'Businesses wanting sustainable growth, local service providers, and companies competing for high-value keywords.',
    metrics: [
      { value: '150%', label: 'Traffic Growth' },
      { value: '#1', label: 'Rankings Achieved' }
    ],
    challenges: ['revenue'],
    featured: false,
    relatedServices: ['digital-marketing', 'ad-creative', 'content-creation']
  },
  {
    id: 'social-media',
    name: 'Social Media Management',
    icon: 'share-2',
    tagline: 'Build communities, drive engagement',
    description: 'Build communities with strategic content creation, engagement management, and data-driven social campaigns. Multi-platform expertise.',
    category: 'marketing',
    features: [
      'Social media strategy',
      'Content creation & scheduling',
      'Community management',
      'Performance tracking & reporting'
    ],
    benefits: [
      '250% increase in engagement',
      'Consistent brand voice',
      'Better customer relationships',
      'Measurable business impact'
    ],
    perfectFor: 'B2C brands building awareness, companies engaging customers, and businesses wanting thought leadership.',
    metrics: [
      { value: '250%', label: 'Engagement Up' },
      { value: '50K+', label: 'Followers Gained' }
    ],
    challenges: ['revenue'],
    featured: false,
    relatedServices: ['digital-marketing', 'ad-creative', 'brand-reputation']
  },
  {
    id: 'ad-creative',
    name: 'Ad Creative & Campaigns',
    icon: 'image',
    tagline: 'Creative that converts',
    description: 'High-performance creative campaigns across all channels. Designs that help your brand stand out and thrive in competitive markets.',
    category: 'marketing',
    features: [
      'Multi-channel ad design',
      'A/B testing & optimization',
      'Brand consistency',
      'Performance-focused creative'
    ],
    benefits: [
      '4x better click-through rates',
      'Lower cost per conversion',
      'Stronger brand recall',
      'Scalable creative systems'
    ],
    perfectFor: 'E-commerce brands, SaaS companies running paid ads, and businesses scaling acquisition.',
    metrics: [
      { value: '4x', label: 'Better CTR' },
      { value: '45%', label: 'CPA Reduction' }
    ],
    challenges: ['revenue'],
    featured: false,
    relatedServices: ['digital-marketing', 'social-media', 'brand-reputation']
  },
  {
    id: 'brand-reputation',
    name: 'Brand & Reputation Management',
    icon: 'shield-check',
    tagline: 'Protect and enhance your brand',
    description: 'Monitor, manage, and enhance your online presence, turning brand culture into brand advocacy. Proactive reputation management.',
    category: 'marketing',
    features: [
      'Online reputation monitoring',
      'Review management',
      'Crisis communication',
      'Brand sentiment analysis'
    ],
    benefits: [
      'Improved online reputation',
      'Faster crisis response',
      'Better customer trust',
      'Positive brand perception'
    ],
    perfectFor: 'Service businesses relying on reviews, enterprise brands, and companies in competitive markets.',
    metrics: [
      { value: '4.7★', label: 'Avg Rating' },
      { value: '98%', label: 'Positive Sentiment' }
    ],
    challenges: ['revenue'],
    featured: false,
    relatedServices: ['social-media', 'digital-marketing', 'pr-management']
  },

  // AI-Powered Services
  {
    id: 'ai-workflow',
    name: 'AI Workflow Automation',
    icon: 'bot',
    tagline: 'Automate repetitive tasks intelligently',
    description: 'Intelligent automation that learns and optimizes. Eliminate repetitive tasks and reduce operational costs by up to 40%. AI that works while you focus on growth.',
    category: 'ai',
    isAI: true,
    features: [
      'Process automation with AI',
      'Intelligent document processing',
      'Workflow optimization',
      'Custom automation solutions'
    ],
    benefits: [
      '40% reduction in operational costs',
      '80% faster task completion',
      '99% accuracy in processing',
      'Continuous learning & improvement'
    ],
    perfectFor: 'Businesses with repetitive manual processes, companies scaling operations, and organizations wanting competitive advantage.',
    metrics: [
      { value: '40%', label: 'Cost Savings' },
      { value: '80%', label: 'Faster Processing' }
    ],
    challenges: ['costs', 'scale'],
    featured: true,
    relatedServices: ['ai-document', 'ai-analytics', 'application-development']
  },
  {
    id: 'ai-analytics',
    name: 'Intelligent Business Analytics',
    icon: 'bar-chart-3',
    tagline: 'Real-time intelligence for better decisions',
    description: 'AI-powered analytics platforms providing real-time intelligence, predictive forecasting, and automated reporting. Turn data into actionable insights.',
    category: 'ai',
    isAI: true,
    features: [
      'Real-time dashboards',
      'Predictive analytics',
      'Automated reporting',
      'Natural language queries'
    ],
    benefits: [
      'Faster data-driven decisions',
      'Predictive insights',
      'Automated report generation',
      'Accessible to non-technical users'
    ],
    perfectFor: 'Data-driven organizations, growing businesses needing insights, and companies wanting predictive capabilities.',
    metrics: [
      { value: '5x', label: 'Faster Insights' },
      { value: '90%', label: 'Prediction Accuracy' }
    ],
    challenges: ['scale', 'modernize'],
    featured: false,
    relatedServices: ['ai-predictive', 'ai-workflow', 'bi-solutions']
  },
  {
    id: 'ai-customer',
    name: 'AI-Powered Customer Engagement',
    icon: 'message-circle',
    tagline: '24/7 intelligent customer support',
    description: '24/7 intelligent chatbots with natural language processing. Reduce support costs by 60% with instant responses. Customer service that never sleeps.',
    category: 'ai',
    isAI: true,
    features: [
      'AI chatbots with NLP',
      '24/7 customer support',
      'Multi-language support',
      'Seamless human handoff'
    ],
    benefits: [
      '60% reduction in support costs',
      'Instant response times',
      'Higher customer satisfaction',
      'Scalable support capacity'
    ],
    perfectFor: 'E-commerce businesses, SaaS companies, and service providers with high support volume.',
    metrics: [
      { value: '60%', label: 'Cost Reduction' },
      { value: '24/7', label: 'Availability' }
    ],
    challenges: ['costs', 'revenue'],
    featured: true,
    relatedServices: ['ai-workflow', 'mobile-apps', 'digital-transformation']
  },
  {
    id: 'ai-document',
    name: 'Intelligent Document Processing',
    icon: 'file-scan',
    tagline: 'Automate document workflows with AI',
    description: 'Automate document extraction and processing with 99%+ accuracy. Reduce processing time by 80%. Transform unstructured data into actionable information.',
    category: 'ai',
    isAI: true,
    features: [
      'Optical character recognition (OCR)',
      'Intelligent data extraction',
      'Document classification',
      'Workflow integration'
    ],
    benefits: [
      '80% faster document processing',
      '99%+ accuracy',
      'Reduced manual data entry',
      'Compliance & audit trails'
    ],
    perfectFor: 'Financial institutions, healthcare providers, legal firms, and businesses processing high document volumes.',
    metrics: [
      { value: '80%', label: 'Faster Processing' },
      { value: '99%', label: 'Accuracy' }
    ],
    challenges: ['costs', 'scale'],
    featured: false,
    relatedServices: ['ai-workflow', 'ai-analytics', 'enterprise-automation']
  },
  {
    id: 'ai-predictive',
    name: 'Predictive Business Optimization',
    icon: 'trending-up',
    tagline: 'See the future, act today',
    description: 'Stay ahead with AI-powered forecasting. Predict demand, optimize inventory, and identify growth opportunities before your competition.',
    category: 'ai',
    isAI: true,
    features: [
      'Demand forecasting',
      'Inventory optimization',
      'Sales predictions',
      'Market trend analysis'
    ],
    benefits: [
      '25% reduction in inventory costs',
      'Improved demand accuracy',
      'Better resource allocation',
      'Proactive decision making'
    ],
    perfectFor: 'Retail businesses, manufacturers, distributors, and companies with inventory challenges.',
    metrics: [
      { value: '25%', label: 'Cost Reduction' },
      { value: '95%', label: 'Forecast Accuracy' }
    ],
    challenges: ['costs', 'scale'],
    featured: false,
    relatedServices: ['ai-analytics', 'ai-workflow', 'supply-chain']
  },
  {
    id: 'ai-content',
    name: 'AI-Enhanced Content Creation',
    icon: 'sparkles',
    tagline: 'Create content at scale',
    description: 'Generate, optimize, and personalize content at scale. Reduce content creation time by 70%. Maintain quality while increasing output.',
    category: 'ai',
    isAI: true,
    features: [
      'AI content generation',
      'SEO optimization',
      'Multi-language support',
      'Brand voice consistency'
    ],
    benefits: [
      '70% faster content creation',
      'Consistent brand voice',
      'SEO-optimized output',
      'Scalable content production'
    ],
    perfectFor: 'Content marketers, e-commerce businesses needing product descriptions, and agencies managing multiple clients.',
    metrics: [
      { value: '70%', label: 'Time Saved' },
      { value: '10x', label: 'Content Output' }
    ],
    challenges: ['revenue', 'scale'],
    featured: false,
    relatedServices: ['digital-marketing', 'seo', 'social-media']
  }
];

// ==========================================
// PERSONALIZATION LOGIC
// ==========================================

const recommendationMap = {
  revenue: ['digital-marketing', 'seo', 'ecommerce', 'ai-customer', 'ad-creative', 'social-media'],
  costs: ['ai-workflow', 'it-managed', 'ai-document', 'ai-predictive', 'application-development'],
  scale: ['application-development', 'web-mobile', 'ai-analytics', 'it-managed', 'digital-transformation', 'mobile-apps'],
  modernize: ['digital-transformation', 'ai-workflow', 'application-development', 'web-mobile', 'ai-analytics', 'cloud-solutions']
};

const challengeTitles = {
  revenue: 'Services to Increase Revenue',
  costs: 'Services to Reduce Costs',
  scale: 'Services to Scale Operations',
  modernize: 'Services to Modernize Tech'
};

const challengeReasons = {
  'digital-marketing': {
    revenue: '74% of businesses using our digital marketing see 3x lead growth'
  },
  'seo': {
    revenue: 'Organic search drives 53% of all website traffic and converts better'
  },
  'ecommerce': {
    revenue: 'Well-optimized e-commerce increases conversion rates by 2.5x'
  },
  'ai-customer': {
    revenue: 'AI chat reduces response time to seconds, increasing sales by 35%',
    costs: 'Reduce customer support costs by 60% while improving satisfaction'
  },
  'ai-workflow': {
    costs: 'Automate 60% of manual tasks, reduce operational costs by 40%'
  },
  'it-managed': {
    costs: 'Reduce IT costs by 40% compared to in-house teams'
  },
  'ai-document': {
    costs: 'Eliminate 80% of manual data entry, reduce processing costs'
  },
  'application-development': {
    scale: 'Build infrastructure that handles 10x traffic without breaking'
  },
  'digital-transformation': {
    modernize: 'Legacy system replacement with modern, cloud-native solutions'
  }
};

// ==========================================
// GLOBAL STATE
// ==========================================

let currentChallenge = null;
let currentCategory = 'all';
let currentService = null;

// ==========================================
// INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  initializeWizard();
  initializeModal();

  // Reinitialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Check if user came from homepage with service hash
  const hash = window.location.hash.substring(1); // Remove the # symbol
  if (hash) {
    // Find the service with matching ID
    const service = servicesData.find(s => s.id === hash);

    if (service) {
      // Small delay to ensure everything is initialized
      setTimeout(() => {
        // Show all services view first
        showAllServices();
        // Wait a bit more, then open the specific service modal
        setTimeout(() => {
          openServiceModal(service);
        }, 200);
      }, 300);
    }
  }
});

// ==========================================
// WIZARD FUNCTIONALITY
// ==========================================

function initializeWizard() {
  // Wizard option click handlers
  const wizardOptions = document.querySelectorAll('.wizard-option');
  wizardOptions.forEach(option => {
    option.addEventListener('click', () => {
      const challenge = option.getAttribute('data-challenge');
      showRecommendedServices(challenge);
    });
  });

  // Browse all services button
  const browseAllBtn = document.getElementById('show-all-services');
  if (browseAllBtn) {
    browseAllBtn.addEventListener('click', () => {
      showAllServices();
    });
  }

  // Back to wizard button
  const backToWizardBtn = document.getElementById('back-to-wizard');
  if (backToWizardBtn) {
    backToWizardBtn.addEventListener('click', () => {
      showWizard();
    });
  }

  // Category filter buttons
  const categoryBtns = document.querySelectorAll('.category-btn');
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-category');
      filterByCategory(category);

      // Update active state
      categoryBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

function showWizard() {
  document.getElementById('wizard-view').style.display = 'block';
  document.getElementById('services-grid-view').style.display = 'none';
  currentChallenge = null;
  currentCategory = 'all';

  // Reinitialize Lucide icons
  if (typeof lucide !== 'undefined') {
    setTimeout(() => lucide.createIcons(), 100);
  }
}

function showRecommendedServices(challenge) {
  currentChallenge = challenge;
  const recommendedIds = recommendationMap[challenge];
  const recommendedServices = servicesData.filter(s => recommendedIds.includes(s.id));

  // Update title
  document.getElementById('grid-title').textContent = challengeTitles[challenge];

  // Render services
  renderServices(recommendedServices, true);

  // Show grid view
  document.getElementById('wizard-view').style.display = 'none';
  document.getElementById('services-grid-view').style.display = 'block';

  // Reset category filter to "all"
  currentCategory = 'all';
  const categoryBtns = document.querySelectorAll('.category-btn');
  categoryBtns.forEach(btn => {
    if (btn.getAttribute('data-category') === 'all') {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Reinitialize Lucide icons
  if (typeof lucide !== 'undefined') {
    setTimeout(() => lucide.createIcons(), 100);
  }
}

function showAllServices() {
  currentChallenge = null;
  document.getElementById('grid-title').textContent = 'All Services';
  renderServices(servicesData, false);

  document.getElementById('wizard-view').style.display = 'none';
  document.getElementById('services-grid-view').style.display = 'block';

  // Reinitialize Lucide icons
  if (typeof lucide !== 'undefined') {
    setTimeout(() => lucide.createIcons(), 100);
  }
}

function filterByCategory(category) {
  currentCategory = category;

  let filteredServices = servicesData;
  if (category !== 'all') {
    filteredServices = servicesData.filter(s => s.category === category);
  }

  renderServices(filteredServices, false);

  // Reinitialize Lucide icons
  if (typeof lucide !== 'undefined') {
    setTimeout(() => lucide.createIcons(), 100);
  }
}

// ==========================================
// RENDERING FUNCTIONS
// ==========================================

function renderServices(services, showRecommendations = false) {
  const grid = document.getElementById('services-grid');
  if (!grid) return;

  grid.innerHTML = '';

  services.forEach((service, index) => {
    const card = createServiceCard(service, showRecommendations, index);
    grid.appendChild(card);
  });

  // Stagger animations
  const cards = grid.querySelectorAll('.service-card-bento');
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.05}s`;
  });

  // Reinitialize Lucide icons
  if (typeof lucide !== 'undefined') {
    setTimeout(() => lucide.createIcons(), 100);
  }
}

function createServiceCard(service, showRecommendation, index) {
  const card = document.createElement('div');
  card.className = 'service-card-bento';

  // Add featured/wide classes for asymmetric grid
  if (service.featured && index < 2) {
    card.classList.add('featured');
  } else if (service.isAI && index % 5 === 0) {
    card.classList.add('wide');
  }

  // AI Badge
  const aiBadge = service.isAI ? '<div class="ai-badge-bento">AI POWERED</div>' : '';

  // Recommendation badge
  let recommendationBadge = '';
  if (showRecommendation && currentChallenge) {
    const reason = challengeReasons[service.id]?.[currentChallenge];
    if (reason) {
      recommendationBadge = `
        <div class="recommended-badge">
          <i data-lucide="lightbulb"></i>
          <span>Recommended because: ${reason}</span>
        </div>
      `;
    }
  }

  card.innerHTML = `
    ${aiBadge}
    <div class="service-icon-bento ${service.isAI ? 'ai-icon' : ''}">
      <i data-lucide="${service.icon}"></i>
    </div>
    <h3 class="service-name-bento">${service.name}</h3>
    <p class="service-desc-bento">${service.tagline}</p>
    ${recommendationBadge}
    <a href="#" class="service-cta-bento">
      <span>Learn More</span>
      <i data-lucide="arrow-right"></i>
    </a>
  `;

  // Click handler
  card.addEventListener('click', (e) => {
    e.preventDefault();
    openServiceModal(service);
  });

  return card;
}

// ==========================================
// MODAL FUNCTIONALITY
// ==========================================

function initializeModal() {
  const modal = document.getElementById('service-modal');
  const closeBtn = modal.querySelector('.modal-close');
  const backdrop = modal.querySelector('.modal-backdrop');

  // Close button
  closeBtn.addEventListener('click', closeModal);

  // Backdrop click
  backdrop.addEventListener('click', closeModal);

  // ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      closeModal();
    }
  });

  // Tab switching
  const tabs = modal.querySelectorAll('.modal-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabName = tab.getAttribute('data-tab');
      switchTab(tabName);

      // Update active state
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });
}

function openServiceModal(service) {
  currentService = service;
  const modal = document.getElementById('service-modal');

  // Populate modal content
  populateModalContent(service);

  // Show modal
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';

  // Reinitialize Lucide icons
  if (typeof lucide !== 'undefined') {
    setTimeout(() => lucide.createIcons(), 100);
  }
}

function closeModal() {
  const modal = document.getElementById('service-modal');
  modal.style.display = 'none';
  document.body.style.overflow = '';
  currentService = null;
}

function populateModalContent(service) {
  // Icon
  const iconContainer = document.getElementById('modal-icon');
  iconContainer.innerHTML = `<i data-lucide="${service.icon}"></i>`;
  if (service.isAI) {
    iconContainer.style.background = 'linear-gradient(135deg, #00ff88, #00d4ff)';
  } else {
    iconContainer.style.background = 'linear-gradient(135deg, #8000FF, #6B46C1)';
  }

  // Title & tagline
  document.getElementById('modal-title').textContent = service.name;
  document.getElementById('modal-tagline').textContent = service.tagline;

  // Description
  document.getElementById('modal-description').textContent = service.description;

  // Features
  const featuresList = document.getElementById('modal-features');
  featuresList.innerHTML = service.features.map(f => `<li>${f}</li>`).join('');

  // Perfect for
  document.getElementById('modal-perfect-for').textContent = service.perfectFor;

  // Benefits
  const benefitsList = document.getElementById('modal-benefits');
  benefitsList.innerHTML = service.benefits.map(b => `<li>${b}</li>`).join('');

  // Metrics
  if (service.metrics && service.metrics.length > 0) {
    const metricsContainer = document.getElementById('modal-metrics');
    metricsContainer.innerHTML = service.metrics.map(m => `
      <div class="metric-card">
        <div class="metric-value">${m.value}</div>
        <div class="metric-label">${m.label}</div>
      </div>
    `).join('');
  }

  // Related services
  if (service.relatedServices && service.relatedServices.length > 0) {
    const relatedContainer = document.getElementById('related-services');
    relatedContainer.innerHTML = service.relatedServices
      .map(id => {
        const relatedService = servicesData.find(s => s.id === id);
        return relatedService ? `<span class="related-chip">${relatedService.name}</span>` : '';
      })
      .filter(Boolean)
      .join('');
  }
}

function switchTab(tabName) {
  // Hide all tab contents
  const tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(content => content.classList.remove('active'));

  // Show selected tab
  const selectedTab = document.getElementById(`tab-${tabName}`);
  if (selectedTab) {
    selectedTab.classList.add('active');
  }
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

// Reinitialize Lucide icons on dynamic content
function reinitializeLucide() {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

// Export for external use
window.KleverrServices = {
  showWizard,
  showAllServices,
  openServiceModal,
  closeModal
};
