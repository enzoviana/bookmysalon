/**
 * Composable pour gérer l'API avec Nuxt 3
 * Utilise $fetch et runtime config pour l'URL de l'API
 */
export const useApi = () => {
  const config = useRuntimeConfig()
  const API_URL = config.public.apiBase
  const { token } = useAuth()

  /**
   * Effectue une requête API avec authentification automatique
   * @param endpoint - L'endpoint de l'API
   * @param options - Options de la requête
   * @returns Promise avec la réponse
   */
  const fetchApi = async <T = any>(endpoint: string, options: any = {}): Promise<T> => {
    // Nettoyer l'endpoint
    const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`
    const url = `${API_URL}${cleanEndpoint}`

    // Ajouter le token d'authentification si disponible
    const headers: any = {
      ...options.headers
    }

    if (token.value) {
      headers.Authorization = `Bearer ${token.value}`
    }

    try {
      return await $fetch<T>(url, {
        ...options,
        headers
      })
    } catch (error: any) {
      // Gérer les erreurs 401 (non authentifié)
      if (error.response?.status === 401) {
        // Nettoyer l'authentification
        const { clearAuth } = useAuth()
        clearAuth()

        // Rediriger vers la page de connexion si côté client
        if (process.client) {
          navigateTo('/signup')
        }
      }
      throw error
    }
  }

  /**
   * Construit l'URL complète pour un endpoint
   * @param endpoint - L'endpoint
   * @returns L'URL complète
   */
  const getUrl = (endpoint: string): string => {
    const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`
    return `${API_URL}${cleanEndpoint}`
  }

  return {
    API_URL,
    fetchApi,
    getUrl
  }
}
