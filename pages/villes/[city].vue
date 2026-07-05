<template>
  <div class="min-h-screen transition-colors duration-300 font-sans text-left"
    :class="isDark ? 'bg-black text-zinc-300' : 'bg-[#FDFCF8] text-[#7A7367]'">
    
    <header class="relative border-b py-16 md:py-24 overflow-hidden select-none"
      :class="isDark ? 'border-zinc-900 bg-zinc-950/40' : 'border-[#E5E0D8] bg-[#F7F5F0]/40'">
      <div class="max-w-7xl mx-auto px-6 relative z-10 space-y-4">
        <div class="text-[10px] font-bold uppercase tracking-[0.25em]" :class="isDark ? 'text-zinc-500' : 'text-[#A69B88]'">
          Exploration Locale Élite
        </div>
        <h1 class="text-3xl md:text-5xl font-semibold tracking-tight max-w-3xl leading-none" :class="isDark ? 'text-white' : 'text-[#2D2924]'">
          Salons de beauté & coiffure à <span class="italic font-serif font-light text-[#A69B88]">{{ cityName || citySlug }}</span>
        </h1>
        <p class="text-xs md:text-sm font-light max-w-xl leading-relaxed font-mono opacity-80">
          Actuellement {{ totalSalons }} adresses d'exception référencées et prêtes pour vos réservations instantanées.
        </p>
      </div>
    </header>

    <main class="max-w-7xl mx-auto px-6 py-12 md:py-16 space-y-12">
      
      <section class="rounded-2xl border p-6 md:p-8 space-y-6 transition-all"
        :class="isDark ? 'bg-zinc-950/20 border-zinc-900' : 'bg-white border-[#E5E0D8] shadow-sm shadow-zinc-950/5'">
        <div class="space-y-1.5">
          <h2 class="text-base font-semibold tracking-tight" :class="isDark ? 'text-white' : 'text-[#2D2924]'">
            Réservez votre instant beauté à {{ cityName || citySlug }}
          </h2>
          <p class="text-xs font-light leading-relaxed max-w-3xl" :class="isDark ? 'text-zinc-400' : 'text-[#8C8579]'">
            BookMySalon orchestre la mise en relation avec les plus grands spécialistes de {{ cityName || citySlug }}. 
            Coiffeurs studios, coloristes émérites, rituels holistiques ou manucures haut de gamme : planifiez votre exigence.
          </p>
        </div>

        <div class="space-y-3">
          <h3 class="text-[10px] font-bold uppercase tracking-wider" :class="isDark ? 'text-zinc-500' : 'text-[#A69B88]'">
            Prestations ciblées à {{ cityName }}
          </h3>
          <div class="flex flex-wrap gap-2.5">
            <router-link
              v-for="service in popularServices"
              :key="service.slug"
              :to="`/reserver/${service.slug}/${citySlug}`"
              class="px-4 py-2 rounded-xl text-[11px] font-semibold uppercase tracking-wider transition-all duration-200 border"
              :class="isDark 
                ? 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:bg-zinc-850 hover:text-white' 
                : 'bg-[#FDFCF8] border-[#E5E0D8] text-[#7A7367] hover:border-[#A69B88] hover:text-[#2D2924] shadow-sm'"
            >
              {{ service.label }} à {{ cityName }}
            </router-link>
          </div>
        </div>
      </section>

      <div v-if="loading" class="flex flex-col items-center justify-center py-20 space-y-4">
        <div class="w-6 h-6 border-2 rounded-full animate-spin border-transparent"
          :class="isDark ? 'border-t-white' : 'border-t-[#2D2924]'"></div>
        <p class="text-[11px] font-mono uppercase tracking-widest opacity-60">Synchronisation de la carte...</p>
      </div>

      <div v-else>
        <div v-if="salons.length === 0" class="text-center py-16 border border-dashed rounded-2xl"
          :class="isDark ? 'border-zinc-900 text-zinc-600' : 'border-[#E5E0D8] text-[#8C8579]'">
          <svg class="w-6 h-6 mx-auto mb-2 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25gA7.5 7.5 0 1119.5 10.5z" /><circle cx="12" cy="10" r="3" stroke-linecap="round" stroke-linejoin="round" /></svg>
          <p class="text-xs font-light">Aucun établissement haut de gamme n'est encore disponible à {{ cityName }}.</p>
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SalonCard
            v-for="salon in salons"
            :key="salon._id || salon.id"
            :salon="salon"
            class="transition-transform duration-300 hover:scale-[1.01]"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router'; // 1. Corrigé : Importation du bon composable depuis vue-router
import { useTheme } from '@/composables/useTheme';
import axios from 'axios';

import SalonCard from '@/components/SalonCard.vue';

export default {
  name: 'CityPageView',
  components: { SalonCard },
  setup() {
    const route = useRoute(); // 2. Corrigé : Initialisation de la route active
    const { isDark } = useTheme();

    // 3. Corrigé : Utilisation correcte de route.params.city via l'instance initialisée
    const citySlug = computed(() => route.params.city);
    const cityName = ref('');
    const salons = ref([]);
    const totalSalons = ref(0);
    const loading = ref(true);

    // Tableau de configuration pour générer proprement ton maillage dynamique conforme au routeur
    const popularServices = [
      { label: 'Coiffeur', slug: 'coiffeur' },
      { label: 'Esthéticienne', slug: 'esthetique' },
      { label: 'Barbier', slug: 'barber' },
      { label: 'Institut de Massage', slug: 'spa' }
    ];

    const fetchCityData = async () => {
      try {
        const response = await axios.get(
          `https://bookmysalon-967a856b16b6.herokuapp.com/api/seo/city/${citySlug.value}`
        );

        cityName.value = response.data.city || citySlug.value;
        salons.value = [...(response.data.firms || []), ...(response.data.prospects || [])];
        totalSalons.value = response.data.total || 0;

        // Mise à jour de tes balises pour coller au standing Élite


        loading.value = false;
      } catch (error) {
        console.error('Erreur lors de la synchronisation de la ville :', error);
        loading.value = false;
      }
    };

    onMounted(fetchCityData);

    return {
      isDark,
      citySlug,
      cityName,
      salons,
      totalSalons,
      loading,
      popularServices    
    };
  }
};
</script>
