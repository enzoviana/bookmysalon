/**
 * Middleware pour protéger les routes nécessitant une authentification
 * Vérifie si l'utilisateur est connecté et redirige vers /signup si nécessaire
 */
export default defineNuxtRouteMiddleware((to, from) => {
  const { isAuthenticated } = useAuth()

  // Si pas authentifié, rediriger vers la page de connexion
  if (!isAuthenticated.value) {
    return navigateTo({
      path: '/signup',
      query: { redirect: to.fullPath }
    })
  }
})
