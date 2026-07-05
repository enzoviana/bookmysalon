import { defineStore } from 'pinia'

interface User {
  id: string
  nom: string
  prenom: string
  email: string
  [key: string]: any
}

interface AuthState {
  user: User | null
}

/**
 * Store Pinia pour la gestion de l'authentification
 * Le token est géré via cookie dans le composable useAuth
 */
export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null
  }),

  getters: {
    isAuthenticated: (state) => !!state.user,
    currentUser: (state) => state.user
  },

  actions: {
    /**
     * Définit l'utilisateur connecté
     */
    setUser(userData: User | null) {
      this.user = userData
    },

    /**
     * Nettoie les données d'authentification
     */
    clearUser() {
      this.user = null
    },

    /**
     * Met à jour partiellement les données utilisateur
     */
    updateUser(userData: Partial<User>) {
      if (this.user) {
        this.user = { ...this.user, ...userData }
      }
    }
  }
})
