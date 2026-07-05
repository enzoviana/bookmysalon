<template>
  <div class="min-h-screen transition-colors duration-200"
    :class="isDark ? 'bg-zinc-950' : 'bg-[#FDFCF8]'">
    <Navigation />
    <main class="min-h-screen">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
const { isDark } = useTheme()

// Récupérer l'utilisateur si authentifié au chargement
const { isAuthenticated, fetchUser } = useAuth()

onMounted(async () => {
  if (isAuthenticated.value) {
    await fetchUser()
  }
})
</script>
