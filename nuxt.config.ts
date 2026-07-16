// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  
  // Active les devtools UNIQUEMENT en local, empêche le crash sur Vercel
  devtools: { enabled: process.env.NODE_ENV !== 'production' },

  // Define source directories at project root (not in app/ directory)
  srcDir: '.',

  dir: {
    pages: 'pages',
    layouts: 'layouts',
    middleware: 'middleware',
    plugins: 'plugins',
    public: 'public'
  },

  // Modules
  modules: [
    '@nuxt/icon',
    '@pinia/nuxt',
    '@nuxtjs/seo',
    '@vercel/analytics'
  ],

  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {}
    }
  },

  // Runtime config for environment variables
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'https://bookmysalon-967a856b16b6.herokuapp.com',
      googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY || ''
    }
  },

  // CSS
  css: [
    '~/assets/css/tailwind.css', 
    '@fortawesome/fontawesome-free/css/all.min.css'
  ],

  // Route rules for hybrid rendering
  routeRules: {
    // SSR for SEO pages
    '/': { ssr: true },
    '/search': { ssr: true },
    '/etablissement/**': { ssr: true },
    '/salon/**': { ssr: true },
    '/villes/**': { ssr: true },
    '/reserver/**': { ssr: true },
    '/categorie': { ssr: true },
    '/services/**': { ssr: true },
    '/espace-pro': { ssr: true },

    // CSR for protected/dynamic pages
    '/userAccount': { ssr: false },
    '/rendez-vous/**': { ssr: false },
    '/mes-rendez-vous': { ssr: false },
    '/signup': { ssr: false },
    '/espace-pro/LoginPro': { ssr: false },
    '/auth/google/callback': { ssr: false },
    '/confirmation': { ssr: false },
    '/annulation': { ssr: false },

    // Prerender for static pages
    '/cgu': { prerender: true },
    '/cgv': { prerender: true },
    '/PolitiqueConfidentialite': { prerender: true },
    '/MentionsLegales': { prerender: true },
    '/espace-pro/cgu-cgv': { prerender: true }
  },

  // Nitro configuration
  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
      failOnError: false, 
      routes: ['/cgu', '/cgv', '/PolitiqueConfidentialite', '/MentionsLegales', '/espace-pro/cgu-cgv']
    }
  },

  // SEO configuration
  site: {
    url: 'https://www.bookmysalon.fr',
    name: 'BookMySalon',
    description: 'Réservez vos rendez-vous beauté et bien-être en ligne',
    defaultLocale: 'fr'
  },

  // Sitemap configuration - hérite automatiquement de site.url
  sitemap: {
    exclude: [
      '/userAccount',
      '/mes-rendez-vous',
      '/rendez-vous/**',
      '/signup',
      '/auth/**',
      '/confirmation',
      '/annulation'
    ],
    sources: [
      '/api/__sitemap__/urls',
      '/api/__sitemap__/salons'
    ],
    strictNuxtContentPaths: true
  },

  ogImage: {
    enabled: false
  },

  // App configuration
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'fr'
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})