/**
 * Composable pour gérer l'authentification avec Nuxt 3
 * Utilise cookies au lieu de localStorage pour SSR-safe
 */
export const useAuth = () => {
  // Cookie pour le token (SSR-safe)
  const token = useCookie<string | null>('clientToken', {
    maxAge: 60 * 60 * 24 * 7, // 7 jours
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    watch: true
  })

  // Cookie pour les données utilisateur (SSR-safe)
  // Nuxt's useCookie gère automatiquement la sérialisation JSON
  const userCookie = useCookie<any>('clientUser', {
    maxAge: 60 * 60 * 24 * 7, // 7 jours
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    watch: true
  })

  // État global pour l'utilisateur (initialisé depuis le cookie)
  // useCookie désérialise automatiquement le JSON
  const user = useState<any>('user', () => userCookie.value)
  const isAuthenticated = computed(() => !!token.value && !!user.value)

  /**
   * Définit l'utilisateur connecté
   * @param userData - Données de l'utilisateur
   */
  const setUser = (userData: any) => {
    console.log('💾 [setUser] Stockage utilisateur:', userData)
    user.value = userData
    // Nuxt's useCookie sérialise automatiquement en JSON
    userCookie.value = userData
    // Stocker l'ID utilisateur dans localStorage pour compatibilité backend
    if (process.client && userData?._id) {
      localStorage.setItem('USERID', userData._id)
    }
    console.log('✅ [setUser] Utilisateur stocké:', userData.email || userData.nom || 'Utilisateur')
  }

  /**
   * Définit le token d'authentification
   * @param tokenValue - Le token JWT
   */
  const setToken = (tokenValue: string) => {
    token.value = tokenValue
  }

  /**
   * Nettoie l'authentification (déconnexion)
   */
  const clearAuth = () => {
    token.value = null
    user.value = null
    userCookie.value = null // Supprimer le cookie utilisateur
    // Nettoyer aussi le localStorage
    if (process.client) {
      localStorage.removeItem('USERID')
      localStorage.removeItem('clientToken')
    }
  }

  /**
   * Vérifie la validité du token
   * @returns true si le token et l'utilisateur existent
   */
  const verifyToken = (): boolean => {
    return !!token.value && !!user.value
  }

  /**
   * Connecte un utilisateur
   * @param email - Email de l'utilisateur
   * @param password - Mot de passe
   * @returns Données de l'utilisateur
   */
  const login = async (email: string, password: string) => {
    const { fetchApi } = useApi()

    try {
      console.log('📡 [login] Appel API /api/clients/login')
      const response: any = await fetchApi('/api/clients/login', {
        method: 'POST',
        body: { email, password }
      })

      console.log('✅ [login] Réponse reçue:', {
        hasToken: !!response.token,
        hasClient: !!response.client,
        client: response.client
      })

      setToken(response.token)
      setUser(response.client)

      console.log('💾 [login] Token et utilisateur stockés')
      console.log('👤 [login] Utilisateur:', user.value)

      return response
    } catch (error) {
      console.error('❌ [login] Erreur:', error)
      throw error
    }
  }

  /**
   * Déconnecte l'utilisateur
   * @param redirect - Si true, redirige vers la page d'accueil
   */
  const logout = (redirect: boolean = false) => {
    clearAuth()

    if (redirect && process.client) {
      navigateTo('/')
    }
  }

  /**
   * Récupère les informations de l'utilisateur connecté depuis le cookie
   * @returns Les données utilisateur ou null
   */
  const fetchUser = () => {
    if (!token.value) {
      console.log('⚠️ [fetchUser] Pas de token disponible')
      return null
    }

    // Retourner les données depuis l'état global (déjà initialisé depuis le cookie)
    const userData = user.value

    if (userData) {
      console.log('✅ [fetchUser] Données utilisateur disponibles:', userData.email || userData.nom)
      return userData
    } else {
      console.log('⚠️ [fetchUser] Aucune donnée utilisateur')
      return null
    }
  }

  return {
    token,
    user,
    isAuthenticated,
    setUser,
    setToken,
    clearAuth,
    verifyToken,
    login,
    logout,
    fetchUser
  }
}
