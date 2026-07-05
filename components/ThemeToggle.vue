<template>
  <div class="relative">
    <button
      @click="isOpen = !isOpen"
      class="p-2 rounded-lg transition-colors duration-200"
      :class="isDark
        ? 'hover:bg-zinc-800 text-zinc-400'
        : 'hover:bg-gray-100 text-gray-600'"
      aria-label="Toggle theme"
    >
      <!-- Icône Soleil (Mode Light) -->
      <svg v-if="!isDark" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
      <!-- Icône Lune (Mode Dark) -->
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    </button>

    <!-- Dropdown Menu -->
    <Transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-if="isOpen"
        class="absolute right-0 mt-2 w-48 rounded-lg shadow-lg border z-50 transition-colors duration-200"
        :class="isDark
          ? 'bg-zinc-900 border-zinc-800'
          : 'bg-white border-gray-200'"
      >
        <div class="py-1">
          <button
            v-for="option in themeOptions"
            :key="option.value"
            @click="selectTheme(option.value)"
            class="w-full px-4 py-2 text-left text-sm flex items-center gap-3 transition-colors duration-200"
            :class="[
              currentTheme === option.value
                ? isDark
                  ? 'bg-zinc-800 text-white'
                  : 'bg-gray-100 text-gray-900'
                : isDark
                  ? 'text-zinc-400 hover:bg-zinc-800 hover:text-white'
                  : 'text-gray-700 hover:bg-gray-50',
            ]"
          >
            <span>{{ option.icon }}</span>
            <span>{{ option.label }}</span>
          </button>
        </div>
      </div>
    </Transition>

    <!-- Backdrop pour fermer le menu -->
    <div
      v-if="isOpen"
      @click="isOpen = false"
      class="fixed inset-0 z-40"
    ></div>
  </div>
</template>

<script setup lang="ts">
const { currentTheme, isDark, setTheme } = useTheme()
const isOpen = ref(false)

const themeOptions = [
  { value: 'light', label: 'Clair', icon: '☀️' },
  { value: 'dark', label: 'Sombre', icon: '🌙' },
  { value: 'auto', label: 'Automatique', icon: '💻' }
]

const selectTheme = (theme: string) => {
  setTheme(theme)
  isOpen.value = false
}
</script>
