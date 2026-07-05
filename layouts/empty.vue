<template>
  <div class="min-h-screen transition-colors duration-200"
    :class="isDark ? 'bg-zinc-950' : 'bg-[#FDFCF8]'">
    <slot />
  </div>
</template>

<script setup lang="ts">
const { isDark } = useTheme()
</script>
