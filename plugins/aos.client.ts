import AOS from 'aos'
import 'aos/dist/aos.css'

/**
 * Plugin AOS (Animate On Scroll) pour Nuxt 3
 * Client-only car nécessite le DOM
 */
export default defineNuxtPlugin((nuxtApp) => {
  // Initialiser AOS après le chargement de la page
  nuxtApp.hook('page:finish', () => {
    AOS.refresh()
  })

  // Initialiser AOS au montage
  if (process.client) {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  }

  return {
    provide: {
      aos: AOS
    }
  }
})
