import { defineSitemapEventHandler } from '#imports'

export default defineSitemapEventHandler(() => {
  return [
    // Pages principales
    {
      loc: '/',
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 1.0
    },
    {
      loc: '/search',
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 0.9
    },
    {
      loc: '/categorie',
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.7
    },
    {
      loc: '/espace-pro',
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.6
    },

    // Pages légales
    {
      loc: '/cgu',
      lastmod: new Date().toISOString(),
      changefreq: 'yearly',
      priority: 0.3
    },
    {
      loc: '/cgv',
      lastmod: new Date().toISOString(),
      changefreq: 'yearly',
      priority: 0.3
    },
    {
      loc: '/PolitiqueConfidentialite',
      lastmod: new Date().toISOString(),
      changefreq: 'yearly',
      priority: 0.3
    },
    {
      loc: '/MentionsLegales',
      lastmod: new Date().toISOString(),
      changefreq: 'yearly',
      priority: 0.3
    }
  ]
})
