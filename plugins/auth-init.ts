/**
 * Plugin d'initialisation de l'authentification
 * Les données utilisateur sont automatiquement chargées depuis les cookies
 */
export default defineNuxtPlugin((nuxtApp) => {
  // Exécuter uniquement côté client
  if (process.server) return

  const { token, user } = useAuth()

  // Les données utilisateur sont automatiquement restaurées depuis userCookie dans le composable
  if (token.value && user.value) {
    console.log('✅ [Auth Init] Utilisateur connecté:', user.value.email || user.value.nom || 'Utilisateur')

    // Restaurer l'ID utilisateur dans localStorage pour compatibilité backend
    if (user.value._id && !localStorage.getItem('USERID')) {
      localStorage.setItem('USERID', user.value._id)
    }
  } else if (token.value && !user.value) {
    console.log('⚠️ [Auth Init] Token présent mais pas de données utilisateur - session invalide')
    token.value = null
  } else {
    console.log('ℹ️ [Auth Init] Pas de token, utilisateur non connecté')
  }
})
