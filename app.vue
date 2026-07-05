<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
/**
 * Script inline pour éviter le flash du dark mode
 * S'exécute avant l'hydration pour appliquer le thème depuis le cookie
 */
useHead({
  script: [
    {
      children: `
        (function() {
          try {
            const theme = document.cookie.match(/frontend-theme=([^;]+)/)?.[1] || 'auto';
            const getSystemTheme = () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            const effectiveTheme = theme === 'auto' ? getSystemTheme() : theme;

            if (effectiveTheme === 'dark') {
              document.documentElement.classList.add('dark');
              document.documentElement.classList.remove('light');
            } else {
              document.documentElement.classList.add('light');
              document.documentElement.classList.remove('dark');
            }
          } catch (e) {
            console.error('Error initializing theme:', e);
          }
        })();
      `,
      tagPosition: 'head',
      type: 'text/javascript'
    }
  ],
  htmlAttrs: {
    lang: 'fr'
  }
})
</script>
