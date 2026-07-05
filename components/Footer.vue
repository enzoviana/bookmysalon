<template>
  <footer class="border-t pt-20 pb-12 relative z-10 font-light text-left transition-colors duration-200"
    :class="isDark
      ? 'bg-zinc-950 border-zinc-900 text-zinc-400'
      : 'bg-[#FDFCF8] border-[#E5E0D8] text-[#7A7367]'">
    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-16">

      <div class="space-y-6">
        <img src="~/assets/svg/Bookmysalon_White.svg" alt="BookMySalon Logo" class="h-9 w-auto" :class="{ 'brightness-0 contrast-200': !isDark }">
        <p class="text-[11px] leading-relaxed font-light max-w-xs m-0" :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">
          Infrastructure d'intermédiation et de réservation instantanée pour les écosystèmes coiffure, barber, soins holistiques et instituts spécialisés.
        </p>
      </div>

      <div>
        <h4 class="text-[10px] font-bold uppercase tracking-widest mb-6 pb-2 border-b transition-colors duration-200"
          :class="isDark ? 'text-white border-zinc-900' : 'text-[#2D2924] border-[#E5E0D8]'">Pour les clients</h4>
        <ul class="space-y-3 text-xs p-0 m-0 list-none font-light">
          <li><a href="#categories" class="transition-colors" :class="isDark ? 'hover:text-[#D5CCBC]' : 'hover:text-[#A69B88]'">Catégories de soins</a></li>
          <li><a href="#top-salons" class="transition-colors" :class="isDark ? 'hover:text-[#D5CCBC]' : 'hover:text-[#A69B88]'">Établissements Élite</a></li>
          <li><a href="#app" class="transition-colors" :class="isDark ? 'hover:text-[#D5CCBC]' : 'hover:text-[#A69B88]'">Plateforme Mobile Native</a></li>
          <li><a href="#faq" class="transition-colors" :class="isDark ? 'hover:text-[#D5CCBC]' : 'hover:text-[#A69B88]'">Centre d'Assistance</a></li>
        </ul>
      </div>

      <div>
        <h4 class="text-[10px] font-bold uppercase tracking-widest mb-6 pb-2 border-b transition-colors duration-200"
          :class="isDark ? 'text-white border-zinc-900' : 'text-[#2D2924] border-[#E5E0D8]'">Pour les professionnels</h4>
        <ul class="space-y-3 text-xs p-0 m-0 list-none font-light">
          <li><a href="/pro/signup" class="font-medium transition-colors" :class="isDark ? 'text-white hover:text-[#D5CCBC]' : 'text-[#2D2924] hover:text-[#A69B88]'">Rejoindre le Réseau</a></li>
          <li><a href="/pro/dashboard" class="transition-colors" :class="isDark ? 'hover:text-[#D5CCBC]' : 'hover:text-[#A69B88]'">Console Management</a></li>
          <li><a href="/pro/pricing" class="transition-colors" :class="isDark ? 'hover:text-[#D5CCBC]' : 'hover:text-[#A69B88]'">Grille de Tarification SaaS</a></li>
        </ul>
      </div>

      <div class="space-y-6">
        <div>
          <h4 class="text-[10px] font-bold uppercase tracking-widest mb-3 transition-colors duration-200"
            :class="isDark ? 'text-white' : 'text-[#2D2924]'">Newsletter Intelligence</h4>
          <p class="text-[11px] leading-relaxed m-0 transition-colors duration-200"
            :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">Analyses de tendances beauté et lancements d'adresses exclusives.</p>
        </div>

        <form class="flex flex-col gap-2" @submit.prevent="handleNewsletter">
          <input
            v-model="email"
            type="email"
            placeholder="votre_adresse@email.com"
            class="w-full px-4 py-3 text-xs rounded-xl border focus:outline-none transition-all duration-300 font-light"
            :class="isDark
              ? 'border-zinc-900 bg-zinc-900/50 text-white placeholder-zinc-600 focus:border-zinc-700 focus:bg-zinc-900'
              : 'border-[#E5E0D8] bg-[#F7F5F0] text-[#2D2924] placeholder-[#8C8579] focus:border-[#D6D0C5]'"
          />
          <button type="submit" class="w-full py-3 rounded-xl text-[10px] uppercase tracking-wider font-bold border transition-all duration-300"
            :class="isDark
              ? 'bg-zinc-900 hover:bg-white text-zinc-400 hover:text-black border-zinc-800'
              : 'bg-[#F7F5F0] hover:bg-[#2D2924] text-[#7A7367] hover:text-white border-[#E5E0D8]'">
            S'abonner
          </button>
        </form>

        <div class="flex items-center gap-4 pt-1 transition-colors duration-200"
          :class="isDark ? 'text-zinc-600' : 'text-[#8C8579]'">
          <a href="#" class="transition-colors duration-300" :class="isDark ? 'hover:text-white' : 'hover:text-[#2D2924]'">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="#" class="transition-colors duration-300" :class="isDark ? 'hover:text-white' : 'hover:text-[#2D2924]'">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="#" class="transition-colors duration-300" :class="isDark ? 'hover:text-white' : 'hover:text-[#2D2924]'">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
        </div>
      </div>

    </div>

    <div class="max-w-7xl mx-auto px-6 border-t mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] transition-colors duration-200"
      :class="isDark ? 'border-zinc-900/60 text-zinc-600' : 'border-[#E5E0D8] text-[#8C8579]'">
      <p class="m-0">© 2026 BookMySalon. Architecture Développée par DataFuse.</p>
      <div class="flex flex-wrap gap-x-6 gap-y-2 justify-center font-normal">
        <NuxtLink to="/cgu" class="transition-colors" :class="isDark ? 'hover:text-zinc-400' : 'hover:text-[#2D2924]'">Clauses Légales</NuxtLink>
        <NuxtLink to="/PolitiqueConfidentialite" class="transition-colors" :class="isDark ? 'hover:text-zinc-400' : 'hover:text-[#2D2924]'">Confidentialité</NuxtLink>
        <NuxtLink to="/cgv" class="transition-colors" :class="isDark ? 'hover:text-zinc-400' : 'hover:text-[#2D2924]'">CGV</NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { isDark } = useTheme()
const email = ref('')

const handleNewsletter = () => {
  // TODO: Implement newsletter subscription
  console.log('Newsletter subscription for:', email.value)
  email.value = ''
}
</script>
