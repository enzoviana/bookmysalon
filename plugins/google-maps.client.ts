import { Loader } from '@googlemaps/js-api-loader'

/**
 * Plugin Google Maps pour Nuxt 3
 * Client-only car nécessite le window object
 */
export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const apiKey = config.public.googleMapsApiKey as string

  // Si pas de clé API, ne pas initialiser
  if (!apiKey) {
    console.warn('Google Maps API key not found. Maps functionality will be disabled.')
    return {
      provide: {
        googleMapsLoader: null
      }
    }
  }

  const loader = new Loader({
    apiKey,
    version: 'weekly',
    libraries: ['places', 'geometry']
  })

  return {
    provide: {
      googleMapsLoader: loader
    }
  }
})
