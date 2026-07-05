<template>
  <nav
    :class="[
      'w-full z-50 transition-all duration-500 backdrop-blur-xl left-0 top-0',
      isHome
        ? 'fixed'
        : isDark
          ? 'relative bg-zinc-950 border-b border-zinc-900'
          : 'relative bg-[#FDFCF8] border-b border-[#E5E0D8]',
      isHome && isScrolled
        ? isDark
          ? 'bg-zinc-950/80 border-b border-zinc-900 shadow-2xl shadow-black/10'
          : 'bg-[#FDFCF8]/80 border-b border-[#E5E0D8] shadow-xl shadow-[#E5E0D8]/30'
        : '',
      isHome && !isScrolled
        ? 'bg-transparent border-b border-transparent'
        : ''
    ]"
  >
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex items-center justify-between h-20">

        <NuxtLink to="/" class="relative z-50 flex items-center transition-transform duration-300 hover:scale-[1.01]">
          <img
            class="h-10 w-auto transition-all duration-500 ease-out"
            :class="{ 'brightness-0 contrast-200': !isDark }"
            src="~/assets/svg/Bookmysalon_White.svg"
            alt="BookMySalon Logo"
          >
        </NuxtLink>

        <div class="hidden md:flex items-center gap-8">
          <div class="flex items-center gap-6 pr-6 border-r transition-colors duration-200"
            :class="isDark ? 'border-zinc-800/60' : 'border-[#E5E0D8]'">
            <a
              v-for="link in links"
              :key="link.href"
              :href="isHome ? link.href : '/' + link.href"
              :class="[
                'text-[11px] uppercase tracking-[0.15em] font-semibold transition-all duration-300 relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:transition-all hover:after:w-full',
                isDark
                  ? 'after:bg-[#D5CCBC] text-zinc-400 hover:text-white'
                  : 'after:bg-[#A69B88] text-[#7A7367] hover:text-[#2D2924]',
                (isHome && !isScrolled)
                  ? 'text-zinc-200 hover:text-white after:bg-[#D5CCBC]'
                  : ''
              ]"
            >
              {{ link.label }}
            </a>
          </div>

          <div class="flex items-center gap-4">
            <ThemeToggle />

            <div v-if="isAuthenticated" class="relative">
              <button
                @click="dropdownOpen = !dropdownOpen"
                class="px-5 py-2.5 rounded-xl text-[11px] uppercase tracking-wider font-bold transition-all duration-300 border flex items-center gap-2 focus:outline-none"
                :class="(isHome && !isScrolled)
                  ? 'bg-zinc-900/40 hover:bg-zinc-800 text-white border-zinc-800/80 backdrop-blur-md'
                  : isDark
                    ? 'bg-zinc-900 hover:bg-zinc-800 text-white border-zinc-800'
                    : 'bg-[#FDFCF8] hover:bg-[#F7F5F0] text-[#2D2924] border-[#E5E0D8]'"
              >
                <span>{{ user?.prenom || 'Compte' }}</span>
                <svg class="w-3 h-3 transition-transform duration-300" :class="{ 'rotate-180': dropdownOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>

              <div v-if="dropdownOpen" class="absolute right-0 mt-2 w-52 rounded-xl shadow-2xl border p-1.5 backdrop-blur-xl z-50 transition-all duration-200"
                :class="isDark ? 'bg-zinc-950/95 border-zinc-900 text-white' : 'bg-white/95 border-[#E5E0D8] text-[#2D2924]'">
                <NuxtLink to="/userAccount" @click="dropdownOpen = false" class="flex items-center gap-2.5 px-4 py-3 text-[11px] uppercase tracking-wider font-medium rounded-lg hover:bg-zinc-900/40 transition-colors">
                  <svg class="w-4 h-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                  Mon Compte
                </NuxtLink>
                <NuxtLink to="/mes-rendez-vous" @click="dropdownOpen = false" class="flex items-center gap-2.5 px-4 py-3 text-[11px] uppercase tracking-wider font-medium rounded-lg hover:bg-zinc-900/40 transition-colors">
                  <svg class="w-4 h-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  Mes Rendez-vous
                </NuxtLink>
                <hr :class="isDark ? 'border-zinc-900' : 'border-[#E5E0D8]'" class="my-1">
                <button @click="handleLogout" class="w-full flex items-center gap-2.5 px-4 py-3 text-[11px] uppercase tracking-wider font-bold text-rose-500 rounded-lg hover:bg-rose-500/10 transition-colors text-left">
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                  Déconnexion
                </button>
              </div>
            </div>

            <NuxtLink
              v-else
              to="/signup"
              class="px-5 py-2.5 rounded-xl text-[11px] uppercase tracking-wider font-bold transition-all duration-300 border text-center"
              :class="(isHome && !isScrolled)
                ? 'bg-zinc-900/40 hover:bg-zinc-800 text-white border-zinc-800/80 backdrop-blur-md'
                : isDark
                  ? 'bg-zinc-900 hover:bg-zinc-800 text-white border-zinc-800'
                  : 'bg-[#FDFCF8] hover:bg-[#F7F5F0] text-[#2D2924] border-[#E5E0D8]'"
            >
              Se connecter
            </NuxtLink>

            <NuxtLink
              to="/espace-pro"
              class="px-5 py-2.5 rounded-xl text-[11px] uppercase tracking-wider font-bold border transition-all duration-300 shadow-sm text-center"
              :class="(isHome && !isScrolled)
                ? 'bg-[#D5CCBC] hover:bg-white text-zinc-950 border-transparent'
                : isDark
                  ? 'bg-white hover:bg-[#D5CCBC] text-zinc-950 border-transparent'
                  : 'bg-[#2D2924] hover:bg-[#A69B88] text-white border-transparent'"
            >
              Espace Pro
            </NuxtLink>
          </div>
        </div>

        <div class="md:hidden relative z-50">
          <button
            @click="mobileMenu = !mobileMenu"
            class="p-2 focus:outline-none flex flex-col justify-center items-center gap-1.5 w-8 h-8 group"
            :class="(isHome && !isScrolled) ? 'text-white' : isDark ? 'text-white' : 'text-[#2D2924]'"
            aria-label="Menu"
          >
            <span :class="['w-6 h-[1px] transition-all duration-300 origin-center', isDark || (isHome && !isScrolled) ? 'bg-white' : 'bg-[#2D2924]', mobileMenu ? 'rotate-45 translate-y-[3.5px]' : '']"></span>
            <span :class="['w-6 h-[1px] transition-all duration-300', isDark || (isHome && !isScrolled) ? 'bg-white' : 'bg-[#2D2924]', mobileMenu ? 'opacity-0 scale-0' : '']"></span>
            <span :class="['w-6 h-[1px] transition-all duration-300 origin-center', isDark || (isHome && !isScrolled) ? 'bg-white' : 'bg-[#2D2924]', mobileMenu ? '-rotate-45 -translate-y-[3.5px]' : '']"></span>
          </button>
        </div>

      </div>
    </div>

    <Transition
      enter-active-class="transition duration-400 ease-out"
      enter-from-class="opacity-0 translate-y-[-15px]"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-[-15px]"
    >
      <div v-if="mobileMenu" class="fixed inset-0 z-40 flex flex-col justify-between p-6 pt-28 pb-8 md:hidden h-screen"
        :class="isDark ? 'bg-zinc-950' : 'bg-[#FDFCF8]'">

        <div class="flex flex-col gap-4 text-left">
          <a
            v-for="link in links"
            :key="link.href"
            :href="isHome ? link.href : '/' + link.href"
            @click="mobileMenu = false"
            class="text-xl font-medium tracking-wide py-2 transition-colors border-b"
            :class="isDark
              ? 'text-zinc-300 border-zinc-900/60 hover:text-[#D5CCBC]'
              : 'text-[#2D2924] border-[#E5E0D8]/60 hover:text-[#A69B88]'"
          >
            {{ link.label }}
          </a>
        </div>

        <div class="flex flex-col gap-3 pt-6 border-t transition-colors duration-200 mt-12"
          :class="isDark ? 'border-zinc-900' : 'border-[#E5E0D8]'">

          <template v-if="isAuthenticated">
            <NuxtLink to="/userAccount" @click="mobileMenu = false" class="w-full py-3.5 px-4 rounded-xl border font-bold text-[11px] uppercase tracking-wider transition-colors duration-200 flex items-center justify-center gap-2"
              :class="isDark ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-white border-[#E5E0D8] text-[#2D2924]'">
              <svg class="w-4 h-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              <span>Mon Compte ({{ user?.prenom }})</span>
            </NuxtLink>

            <NuxtLink to="/mes-rendez-vous" @click="mobileMenu = false" class="w-full py-3.5 px-4 rounded-xl border font-bold text-[11px] uppercase tracking-wider transition-colors duration-200 flex items-center justify-center gap-2"
              :class="isDark ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-white border-[#E5E0D8] text-[#2D2924]'">
              <svg class="w-4 h-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              <span>Mes Rendez-vous</span>
            </NuxtLink>

            <button @click="handleLogout" class="w-full py-3.5 rounded-xl font-bold text-[11px] uppercase tracking-wider transition-colors duration-200 bg-rose-500/10 text-rose-500 border border-transparent flex items-center justify-center gap-2">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
              <span>Déconnexion</span>
            </button>
          </template>

          <template v-else>
            <NuxtLink to="/signup" @click="mobileMenu = false" class="w-full py-3.5 rounded-xl border font-bold text-[11px] uppercase tracking-wider transition-colors duration-200 flex items-center justify-center gap-2"
              :class="isDark ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-white border-[#E5E0D8] text-[#2D2924]'">
              <svg class="w-4 h-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
              Se connecter
            </NuxtLink>
          </template>

          <NuxtLink to="/espace-pro" @click="mobileMenu = false" class="w-full py-3.5 rounded-xl font-bold text-[11px] uppercase tracking-wider transition-colors duration-200 flex items-center justify-center gap-2"
            :class="isDark ? 'bg-white text-black' : 'bg-[#2D2924] text-white'">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            Espace Professionnel
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
const { isDark } = useTheme()
const { isAuthenticated, user, logout } = useAuth()
const route = useRoute()

const isScrolled = ref(false)
const mobileMenu = ref(false)
const dropdownOpen = ref(false)

const links = [
  { label: 'Catégories', href: '#categories' },
  { label: 'Top salons', href: '#top-salons' },
  { label: 'Avantages', href: '#benefits' },
  { label: 'Application', href: '#app' }
]

const isHome = computed(() => route.path === '/')

const handleScroll = () => {
  isScrolled.value = window.scrollY > 40
}

const handleLogout = () => {
  dropdownOpen.value = false
  mobileMenu.value = false
  logout(true)
}

// Gestion du scroll pour la homepage uniquement
watch(isHome, (newVal) => {
  if (process.client) {
    if (newVal) {
      window.addEventListener('scroll', handleScroll)
      handleScroll()
    } else {
      window.removeEventListener('scroll', handleScroll)
      isScrolled.value = false
    }
  }
})

// Initialisation au montage
onMounted(() => {
  if (isHome.value) {
    window.addEventListener('scroll', handleScroll)
  }
})

onBeforeUnmount(() => {
  if (process.client) {
    window.removeEventListener('scroll', handleScroll)
  }
})
</script>
