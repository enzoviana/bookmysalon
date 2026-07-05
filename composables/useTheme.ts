/**
 * Composable pour gérer le thème light/dark avec Nuxt 3
 * Utilise cookies pour SSR-safe et éviter le flash
 */
export const useTheme = () => {
  const THEME_STORAGE_KEY = 'frontend-theme'

  // Cookie pour stocker le thème (SSR-safe)
  const themeCookie = useCookie<string>(THEME_STORAGE_KEY, {
    default: () => 'auto',
    maxAge: 60 * 60 * 24 * 365 // 1 an
  })

  // État global partagé
  const currentTheme = useState<string>('theme', () => themeCookie.value || 'auto')
  const isDark = useState<boolean>('isDark', () => false)

  /**
   * Détecte le thème système
   * @returns 'dark' ou 'light'
   */
  const getSystemTheme = (): 'dark' | 'light' => {
    if (process.client) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    return 'light'
  }

  /**
   * Applique le thème sur le document (client-only)
   * @param theme - 'dark', 'light', ou 'auto'
   */
  const applyTheme = (theme: string) => {
    if (!process.client) return

    // Détermine le thème effectif
    const effectiveTheme = theme === 'auto' ? getSystemTheme() : theme
    isDark.value = effectiveTheme === 'dark'

    // Applique les classes sur <html>
    if (isDark.value) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
    }
  }

  /**
   * Change le thème
   * @param theme - 'dark', 'light', ou 'auto'
   */
  const setTheme = (theme: string) => {
    currentTheme.value = theme
    themeCookie.value = theme
    applyTheme(theme)
  }

  /**
   * Écoute les changements de préférences système
   */
  const watchSystemTheme = () => {
    if (!process.client) return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handler = () => {
      if (currentTheme.value === 'auto') {
        applyTheme('auto')
      }
    }

    mediaQuery.addEventListener('change', handler)

    // Cleanup (retourné pour pouvoir être nettoyé si nécessaire)
    return () => mediaQuery.removeEventListener('change', handler)
  }

  // Initialisation côté client
  if (process.client) {
    onMounted(() => {
      applyTheme(currentTheme.value)
      watchSystemTheme()
    })
  }

  return {
    currentTheme,
    isDark,
    setTheme,
    getSystemTheme
  }
}
