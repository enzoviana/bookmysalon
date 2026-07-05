/**
 * Middleware pour les pages réservées aux invités (non connectés)
 * Redirige vers /userAccount si l'utilisateur est déjà connecté
 */
export default defineNuxtRouteMiddleware((to, from) => {
  const { isAuthenticated } = useAuth()

  // Si l'utilisateur est déjà connecté, rediriger vers le compte
  if (isAuthenticated.value) {
    return navigateTo('/userAccount')
  }
})
