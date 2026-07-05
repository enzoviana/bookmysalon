<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="show" class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
        <div class="relative bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl p-8 max-w-sm w-full mx-4 border dark:border-zinc-800">

          <!-- Loading -->
          <div v-if="state === 'loading'" class="flex flex-col items-center space-y-6">
            <div class="relative">
              <div class="w-20 h-20 border-4 border-gray-200 dark:border-zinc-800 rounded-full"></div>
              <div class="absolute top-0 left-0 w-20 h-20 border-4 border-amber-500 dark:border-[#D5CCBC] border-t-transparent rounded-full animate-spin"></div>
            </div>
            <div class="text-center space-y-2">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ title }}</h3>
              <p class="text-sm text-gray-500 dark:text-zinc-400">{{ message }}</p>
            </div>
          </div>

          <!-- Success -->
          <div v-else-if="state === 'success'" class="flex flex-col items-center space-y-6">
            <div class="relative">
              <div class="w-20 h-20 bg-emerald-100 dark:bg-emerald-950 rounded-full flex items-center justify-center animate-scaleIn">
                <svg class="w-10 h-10 text-emerald-600 dark:text-emerald-400 animate-checkmark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <div class="text-center space-y-2">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ title }}</h3>
              <p class="text-sm text-gray-500 dark:text-zinc-400">{{ message }}</p>
            </div>
          </div>

          <!-- Error -->
          <div v-else-if="state === 'error'" class="flex flex-col items-center space-y-6">
            <div class="relative">
              <div class="w-20 h-20 bg-rose-100 dark:bg-rose-950 rounded-full flex items-center justify-center animate-scaleIn">
                <svg class="w-10 h-10 text-rose-600 dark:text-rose-400 animate-errorShake" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
            <div class="text-center space-y-2">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ title }}</h3>
              <p class="text-sm text-gray-500 dark:text-zinc-400">{{ message }}</p>
            </div>
            <button
              @click="$emit('close')"
              class="w-full py-2.5 rounded-xl text-sm font-medium transition-colors bg-gray-200 hover:bg-gray-300 text-gray-700 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-zinc-300"
            >
              Fermer
            </button>
          </div>

        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
defineProps<{
  show: boolean
  state: 'loading' | 'success' | 'error'
  title: string
  message: string
}>()

defineEmits<{
  close: []
}>()
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes scaleIn {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes checkmark {
  0% {
    stroke-dasharray: 0 50;
  }
  100% {
    stroke-dasharray: 50 50;
  }
}

@keyframes errorShake {
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-5px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(5px);
  }
}

.animate-scaleIn {
  animation: scaleIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.animate-checkmark {
  stroke-dasharray: 50 50;
  stroke-dashoffset: 50;
  animation: checkmark 0.6s ease-in-out 0.2s forwards;
}

.animate-errorShake {
  animation: errorShake 0.5s ease-in-out;
}
</style>
