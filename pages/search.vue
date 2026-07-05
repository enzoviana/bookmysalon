<template>
  <section class="min-h-screen md:pt-6 transition-colors duration-500"
    :class="isDark ? 'bg-[#09090b] text-zinc-100' : 'bg-[#FAF9F5] text-[#1E1B18]'">
    <section class="py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">

        <!-- En-tête Principal -->
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 class="text-2xl font-normal tracking-tight md:text-3xl">
              Établissements disponibles
            </h2>
            <p class="text-xs sm:text-sm mt-1" :class="isDark ? 'text-zinc-400' : 'text-[#8C8375]'">
              {{ filteredSalons.length }} {{ filteredSalons.length > 1 ? 'résultats trouvés' : 'résultat trouvé' }}
            </p>
          </div>

          <!-- Sélecteur de vue épuré (Visible uniquement si pas de chargement) -->
        <div v-if="!loading && filteredSalons.length" 
     class="hidden md:flex items-center p-1 rounded-xl border self-start md:self-auto"
     :class="isDark ? 'border-zinc-800 bg-zinc-900/50' : 'border-[#EBE6DD] bg-[#F2ECE0]/30'">
  <button v-for="mode in ['grid', 'list', 'map']" :key="mode" @click="viewMode = mode" 
    class="px-3 py-1.5 rounded-lg transition-all duration-200 capitalize text-xs font-medium flex items-center gap-1.5"
    :class="viewMode === mode
      ? (isDark ? 'bg-zinc-800 text-white shadow-sm' : 'bg-white text-[#1E1B18] shadow-sm')
      : (isDark ? 'text-zinc-500 hover:text-zinc-300' : 'text-[#8C8375] hover:text-[#1E1B18]')">
    
    <!-- SVG GRILLE -->
    <svg v-if="mode === 'grid'" class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
    </svg>

    <!-- SVG LISTE -->
    <svg v-else-if="mode === 'list'" class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5m-16.5 5.25h16.5m-16.5-10.5h16.5" />
    </svg>

    <!-- SVG CARTE -->
    <svg v-else-if="mode === 'map'" class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6.75V15m-10.5-3v.75m15-3v.75M3.75 6.75c0-.608.406-1.127.992-1.27l4.781-1.157a1.5 1.5 0 01.693.023l5.068 1.448a1.5 1.5 0 00.693.023l4.781-1.157a1.5 1.5 0 011.662 1.458v10.353c0 .608-.406 1.127-.992 1.27l-4.781 1.157a1.5 1.5 0 01-.693-.023l-5.068-1.448a1.5 1.5 0 00-.693-.023L4.743 18.232a1.5 1.5 0 01-1.662-1.458V6.75z" />
    </svg>

    <span class="hidden sm:inline">{{ mode === 'grid' ? 'Grille' : mode === 'list' ? 'Liste' : 'Carte' }}</span>
  </button>
</div>
        </div>

        <!-- BARRE DE RECHERCHE PRINCIPALE (Zéro frein : Accessible instantanément) -->
        <div class="p-2 rounded-2xl border flex flex-col md:flex-row gap-2 shadow-sm transition-all"
          :class="isDark ? 'bg-zinc-900/40 border-zinc-800/80' : 'bg-white border-[#EBE6DD]'">
          
          <div class="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2 divide-y sm:divide-y-0 sm:divide-x"
            :class="isDark ? 'divide-zinc-800' : 'divide-[#EBE6DD]'">
            <!-- Quoi ? -->
            <div class="relative flex items-center px-3 py-2 sm:py-0">
              <svg class="w-4 h-4 mr-2.5 shrink-0 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              <input type="text" v-model="filters.query" placeholder="Coiffeur, institut, soin..." 
                class="w-full bg-transparent text-sm focus:outline-none placeholder-zinc-400" />
            </div>
            <!-- Où ? -->
            <div class="relative flex items-center px-3 pt-2 sm:pt-0">
              <svg class="w-4 h-4 mr-2.5 shrink-0 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
              <input type="text" v-model="filters.location" @input="onLocationInput" @focus="showSuggestions = true" @blur="hideSuggestions" placeholder="Ville ou code postal..." 
                class="w-full bg-transparent text-sm focus:outline-none placeholder-zinc-400" />
              <!-- Suggestions de villes -->
              <ul v-if="showSuggestions && suggestions.length" class="absolute left-0 right-0 top-full z-30 mt-2 max-h-60 overflow-y-auto rounded-xl border shadow-xl text-sm"
                :class="isDark ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-white border-[#D9D2C5] text-[#1E1B18]'">
                <li v-for="suggestion in suggestions" :key="suggestion.place_id" @mousedown="selectSuggestion(suggestion.description)"
                  class="px-4 py-2.5 cursor-pointer transition-colors" :class="isDark ? 'hover:bg-zinc-800' : 'hover:bg-[#F2ECE0]/40'">
                  {{ suggestion.description }}
                </li>
              </ul>
            </div>
          </div>

          <!-- Actions de la barre -->
          <div class="flex items-center gap-2 pt-2 md:pt-0 border-t md:border-t-0" :class="isDark ? 'border-zinc-800' : 'border-[#EBE6DD]'">
            <button @click="toggleFilterSidebar" class="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 h-11 rounded-xl text-xs font-semibold uppercase border transition-all"
              :class="isDark ? 'border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-300' : 'border-[#D9D2C5] bg-white hover:bg-[#F2ECE0] text-[#4A4338]'">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
              Filtres
              <span v-if="activeFiltersCount > 0" class="px-1.5 py-0.5 text-[10px] rounded-full font-bold bg-amber-500 text-black">{{ activeFiltersCount }}</span>
            </button>
            <button @click="handleSearch" class="flex-1 md:flex-none px-6 h-11 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all shadow-sm"
              :class="isDark ? 'bg-zinc-100 text-zinc-950 hover:bg-white' : 'bg-[#1E1B18] text-white hover:bg-[#322d27]'">
              Rechercher
            </button>
          </div>
        </div>

        <!-- FILTRES RAPIDES (Badges horizontaux) -->
        <div class="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          <button v-for="(val, key) in quickFilters" :key="key" @click="toggleQuickFilter(key)"
            class="px-4 py-2 rounded-full text-xs font-medium border transition-all whitespace-nowrap shrink-0"
            :class="val
              ? (isDark ? 'border-white bg-white text-zinc-950 font-semibold' : 'border-[#1E1B18] bg-[#1E1B18] text-white font-semibold')
              : (isDark ? 'border-zinc-800/80 bg-zinc-900/30 text-zinc-400 hover:bg-zinc-900' : 'border-[#EBE6DD] bg-white text-[#7A7161] hover:bg-[#F2ECE0]/50')">
            {{ key === 'today' ? "Dispo aujourd'hui" : key === 'open' ? 'Ouvert maintenant' : 'Offres spéciales' }}
          </button>
        </div>

        <!-- ÉTAT DE CHARGEMENT -->
        <div v-if="loading" :class="viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' : 'flex flex-col gap-5 max-w-4xl'">
          <div v-for="i in 3" :key="i" class="rounded-2xl overflow-hidden border animate-pulse" :class="[isDark ? 'bg-zinc-900/50 border-zinc-800' : 'bg-white border-[#EBE6DD]', viewMode === 'list' ? 'flex flex-col md:flex-row h-52' : '']">
            <div class="bg-zinc-700/20" :class="viewMode === 'list' ? 'w-full md:w-56 h-full' : 'h-48 w-full'"></div>
            <div class="p-5 flex-1 space-y-4">
              <div class="h-4 bg-zinc-700/20 rounded w-1/3"></div>
              <div class="h-6 bg-zinc-700/20 rounded w-2/3"></div>
              <div class="h-4 bg-zinc-700/20 rounded w-1/2"></div>
            </div>
          </div>
        </div>

        <!-- VUE CARTE INTERACTIVE -->
        <SalonMap v-if="viewMode === 'map' && !loading && filteredSalons.length"
          :salons="filteredSalons"
          :center-location="filters.location" class="rounded-2xl overflow-hidden border min-h-[60vh]" :class="isDark ? 'border-zinc-800' : 'border-[#EBE6DD]'" />

        <!-- LISTE DES SALONS (Grid / List) -->
        <div v-else-if="paginatedSalons.length"
          :class="viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'flex flex-col gap-4 max-w-4xl'">
          
          <article v-for="salon in paginatedSalons" :key="salon.id || salon._id" @click="goToSalon(salon)"
            class="group cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 border text-left bg-transparent"
            :class="[
              isDark ? 'border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/20' : 'border-[#EAE6DF] hover:border-zinc-300 hover:bg-white hover:shadow-lg hover:shadow-zinc-900/[0.02]',
              viewMode === 'list' ? 'flex flex-col sm:flex-row sm:h-48' : 'flex flex-col'
            ]">
            
            <!-- Image Zone -->
            <div class="relative overflow-hidden bg-zinc-100 shrink-0"
              :class="viewMode === 'list' ? 'w-full sm:w-48 h-40 sm:h-full' : 'w-full h-44'">
              <img :src="salon.logo || salon.image || 'https://www.milanabeauty.fr/images/cover-soins-visage.jpg'" :alt="salon.nom_societe || salon.nom"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" loading="lazy" />
              <div class="absolute top-3 left-3 px-2 py-0.5 rounded-md text-[10px] font-bold tracking-wide backdrop-blur-md shadow-sm"
                :class="isDark ? 'bg-black/60 text-zinc-300' : 'bg-white/90 text-[#4A4338]'">
                {{ salon.distance_km || '0' }} km
              </div>
            </div>

            <!-- Content Zone -->
            <div class="flex-1 p-5 flex flex-col justify-between min-w-0 gap-3">
              <div class="space-y-1.5">
                <div class="flex items-center gap-2 text-xs">
                  <div class="flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold text-[10px]">
                    ★ <span>{{ salon.rating ? salon.rating.toFixed(1) : 'Nouveau' }}</span>
                  </div>
                  <span class="uppercase text-[10px] font-bold tracking-wider" :class="isDark ? 'text-zinc-500' : 'text-[#8C8375]'">
                    {{ salon.categorie || 'Institut' }}
                  </span>
                </div>

                <div class="flex items-start justify-between gap-2">
                  <h3 class="text-base font-semibold tracking-tight line-clamp-1 flex-1 group-hover:text-amber-500 transition-colors"
                    :class="isDark ? 'text-white' : 'text-zinc-900'">
                    {{ salon.nom_societe || salon.nom }}
                  </h3>
                  <!-- Bouton favori isolé mécaniquement pour éviter les clics accidentels -->
                  <button @click.stop="toggleFavorite(salon)"
                    class="w-7 h-7 rounded-full border flex items-center justify-center transition-all hover:scale-105 shrink-0"
                    :class="isDark ? 'border-zinc-800 bg-zinc-900/60 text-zinc-500 hover:text-rose-400' : 'border-[#EAE6DF] bg-white text-zinc-400 hover:text-rose-500'">
                    <svg class="w-3.5 h-3.5" :class="salon.isFavorite ? 'fill-current text-rose-500' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                  </button>
                </div>

                <p class="text-xs font-light line-clamp-1" :class="isDark ? 'text-zinc-400' : 'text-[#6E665D]'">
                  {{ salon.ville || salon.adresse || 'France' }}
                </p>
              </div>

              <!-- Bas de carte -->
              <div class="flex items-center justify-between gap-2 pt-3 border-t" :class="isDark ? 'border-zinc-900/60' : 'border-[#F2ECE0]/60'">
                <div class="flex items-center gap-1 overflow-hidden">
                  <span v-if="salon.disponible_aujourdhui" class="px-2 py-0.5 rounded text-[9px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 whitespace-nowrap">
                    Dispo aujourd'hui
                  </span>
                </div>
                <button class="h-8 px-3.5 rounded-lg text-xs font-semibold border transition-all flex items-center gap-1 shrink-0"
                  :class="isDark ? 'bg-zinc-900 text-zinc-100 border-zinc-800 group-hover:bg-white group-hover:text-black' : 'bg-white text-[#1E1B18] border-[#D9D2C5] group-hover:bg-[#1E1B18] group-hover:text-white'">
                  <span>Réserver</span>
                  <svg class="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                </button>
              </div>
            </div>
          </article>
        </div>

        <!-- VIDE / PAS DE RÉSULTAT -->
        <div v-else class="text-center py-16 border border-dashed rounded-2xl max-w-md mx-auto px-6"
          :class="isDark ? 'border-zinc-800 bg-zinc-900/10' : 'border-[#D9D2C5] bg-white'">
          <h3 class="text-base font-semibold mb-1">Aucun établissement trouvé</h3>
          <p class="text-xs font-light mb-4" :class="isDark ? 'text-zinc-500' : 'text-[#8C8375]'">Modifiez vos filtres pour obtenir plus de résultats.</p>
          <button @click="resetFilters" class="px-4 py-2 rounded-xl text-xs font-bold border uppercase transition-all"
            :class="isDark ? 'border-zinc-700 text-white hover:bg-zinc-900' : 'border-[#1E1B18] text-[#1E1B18] hover:bg-zinc-50'">
            Effacer les filtres
          </button>
        </div>

        <!-- PAGINATION REVISITÉE -->
        <div v-if="totalPages > 1 && viewMode !== 'map'" class="flex items-center justify-between sm:justify-center gap-2 pt-6">
          <button @click="prevPage" :disabled="currentPage === 1" class="px-3 py-2 rounded-xl border text-xs font-semibold disabled:opacity-20 transition-all"
            :class="isDark ? 'border-zinc-800 bg-zinc-900 text-white' : 'border-[#EBE6DD] bg-white text-[#1E1B18]'">
            ← <span class="hidden sm:inline ml-1">Précédent</span>
          </button>
          <div class="text-xs font-medium" :class="isDark ? 'text-zinc-400' : 'text-[#7A7161]'">
            {{ currentPage }} / {{ totalPages }}
          </div>
          <button @click="nextPage" :disabled="currentPage === totalPages" class="px-3 py-2 rounded-xl border text-xs font-semibold disabled:opacity-20 transition-all"
            :class="isDark ? 'border-zinc-800 bg-zinc-900 text-white' : 'border-[#EBE6DD] bg-white text-[#1E1B18]'">
            <span class="hidden sm:inline mr-1">Suivant</span> →
          </button>
        </div>

      </div>
    </section>

    <!-- SIDEBAR DE FILTRES AVANCÉS (Allégée du superflu) -->
    <div v-if="showFilterSidebar" class="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
      <div class="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity" @click="toggleFilterSidebar"></div>
      <div class="absolute inset-y-0 right-0 max-w-full flex">
        <div class="w-screen max-w-sm transform transition-all shadow-2xl flex flex-col h-full"
          :class="isDark ? 'bg-[#0f0f11] border-l border-zinc-800 text-zinc-100' : 'bg-white border-l border-[#EBE6DD] text-[#1E1B18]'">
          
          <div class="p-4 border-b flex items-center justify-between" :class="isDark ? 'border-zinc-800' : 'border-[#EBE6DD]'">
            <h3 class="text-base font-semibold">Filtres avancés</h3>
            <button @click="toggleFilterSidebar" class="p-1.5 rounded-lg transition-all" :class="isDark ? 'hover:bg-zinc-900 text-zinc-400' : 'hover:bg-gray-100 text-gray-500'">
              ✕
            </button>
          </div>

          <div class="flex-1 overflow-y-auto p-4 space-y-5">
            <!-- Catégories -->
            <div class="space-y-2">
              <label class="text-[10px] font-bold uppercase tracking-wider block opacity-60">Catégories</label>
              <div class="grid grid-cols-2 gap-1.5">
                <button v-for="cat in categories" :key="cat" @click="filters.query = (filters.query === cat ? '' : cat)"
                  class="px-2.5 py-2 rounded-xl border text-xs font-medium text-left truncate transition-all"
                  :class="filters.query === cat
                    ? (isDark ? 'border-white bg-white text-zinc-950 font-bold' : 'border-[#1E1B18] bg-[#1E1B18] text-white font-bold')
                    : (isDark ? 'border-zinc-800 bg-zinc-900/50 text-zinc-400' : 'border-[#EBE6DD] bg-white text-[#7A7161]')">
                  {{ cat }}
                </button>
              </div>
            </div>

            <!-- Rayon de recherche -->
            <div class="space-y-2">
              <label class="text-[10px] font-bold uppercase tracking-wider block opacity-60">Périmètre maximal</label>
              <div class="grid grid-cols-5 gap-1.5">
                <button v-for="dist in [5, 10, 15, 20, 50]" :key="dist" @click="filters.radius = dist"
                  class="py-2 rounded-xl border text-xs font-medium transition-all"
                  :class="filters.radius === dist
                    ? (isDark ? 'border-white bg-white text-zinc-950 font-bold' : 'border-[#1E1B18] bg-[#1E1B18] text-white font-bold')
                    : (isDark ? 'border-zinc-800 bg-zinc-900/50 text-zinc-400' : 'border-[#EBE6DD] bg-white text-[#7A7161]')">
                  {{ dist }}k
                </button>
              </div>
            </div>
          </div>

          <div class="p-4 border-t flex items-center gap-2" :class="isDark ? 'border-zinc-800 bg-zinc-900/20' : 'border-[#EBE6DD] bg-[#FAF9F5]/50'">
            <button @click="resetFilters" class="flex-1 py-2.5 rounded-xl border text-xs font-bold uppercase transition-all"
              :class="isDark ? 'border-zinc-700 text-zinc-300' : 'border-[#EBE6DD] bg-white text-[#4A4338]'">
              Effacer
            </button>
            <button @click="handleSearch(); showFilterSidebar = false" 
        class="flex-1 py-2.5 rounded-xl text-xs font-bold uppercase transition-all shadow-sm"
        :class="isDark ? 'bg-white text-zinc-950' : 'bg-[#1E1B18] text-white'">
  Appliquer
</button>
          </div>

        </div>
      </div>
    </div>

  </section>
</template>
<script>
import { useTheme } from '@/composables/useTheme';
import SalonMap from '@/components/SalonMap.vue';

export default {
  components: {
    SalonMap
  },
  setup() {
    const { isDark } = useTheme();
    return { isDark };
  },
  data() {
    return {
      filters: {
        query: '',
        location: '',
        radius: 5
      },
      showFilterSidebar: false,
      salons: [],
      loading: false,

      suggestions: [],
      showSuggestions: false,
      debounceTimer: null,

      currentPage: 1,
      itemsPerPage: 8,

      // AJOUTER ÇA
      quickFilters: {
        today: false,
        open: false,
        promoted: false
      },

      // AJOUTER AUSSI
      viewMode: 'grid',

      categories: [
        'Coiffure',
        'Barbier',
        'Massage',
        'Ongles',
        'Soin visage',
        'Épilation'
      ]
    }
  },

  computed: {
    filteredSalons() {
      let results = [...this.salons];

      // Filtre : Disponible aujourd'hui
      if (this.quickFilters.today) {
        results = results.filter(salon => salon.disponible_aujourdhui === true);
      }

      // Filtre : Ouvert maintenant
      if (this.quickFilters.open) {
        results = results.filter(salon => this.isOpenNow(salon));
      }

      // Filtre : Offres spéciales
      if (this.quickFilters.promoted) {
        results = results.filter(salon => {
          return salon.has_promotions === true ||
                 (salon.promotions && salon.promotions.length > 0);
        });
      }

      return results;
    },

    paginatedSalons() {
      const start = (this.currentPage - 1) * this.itemsPerPage
      const end = start + this.itemsPerPage

      return this.filteredSalons.slice(start, end)
    },

    totalPages() {
      return Math.ceil(this.filteredSalons.length / this.itemsPerPage)
    },

    activeFiltersCount() {
      let count = 0
      if (this.filters.query.trim()) count++
      if (this.filters.location.trim()) count++
      if (this.filters.radius !== 5) count++
      if (this.quickFilters.today) count++
      if (this.quickFilters.open) count++
      if (this.quickFilters.promoted) count++
      return count
    }
  },

  mounted() {
    this.filters.query = this.$route.query.query || ''
    this.filters.location = this.$route.query.location || ''

    this.fetchResults()
  },

  methods: {
    isOpenNow(salon) {
      if (!salon.horaires) return false;

      const now = new Date();
      const currentDay = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'][now.getDay()];
      const currentTime = now.getHours() * 60 + now.getMinutes(); // Minutes depuis minuit

      const daySchedule = salon.horaires[currentDay];
      if (!daySchedule || daySchedule.length === 0) return false;

      // Vérifier si l'heure actuelle est dans une des tranches horaires
      return daySchedule.some(tranche => {
        if (!tranche.debut || !tranche.fin) return false;

        const [debutH, debutM] = tranche.debut.split(':').map(Number);
        const [finH, finM] = tranche.fin.split(':').map(Number);

        const debutMinutes = debutH * 60 + debutM;
        const finMinutes = finH * 60 + finM;

        return currentTime >= debutMinutes && currentTime <= finMinutes;
      });
    },

    toggleQuickFilter(filter) {
      this.quickFilters[filter] = !this.quickFilters[filter]
      this.currentPage = 1 // Retour à la page 1 quand on filtre
    },

toggleFilterSidebar() {
    this.showFilterSidebar = !this.showFilterSidebar;
    console.log('État de la sidebar :', this.showFilterSidebar ? 'Ouverte' : 'Fermée');
  },

    toggleFavorite(salon) {
      salon.isFavorite = !salon.isFavorite
    },

    resetFilters() {
      this.quickFilters = {
        today: false,
        open: false,
        promoted: false
      }

      this.filters.query = ''
      this.filters.location = ''
      this.filters.radius = 5

      this.fetchResults()
    },

    async fetchResults() {
      try {
        this.loading = true

        const params = new URLSearchParams()

        if (this.filters.query.trim()) {
          params.append('query', this.filters.query.trim())
        }

        if (this.filters.location.trim()) {
          params.append('location', this.filters.location.trim())
        }

        if (this.filters.radius) {
          params.append('radius', this.filters.radius)
        }

        const response = await fetch(
          `https://bookmysalon-967a856b16b6.herokuapp.com/api/search?${params.toString()}`
        )

        if (!response.ok) {
          throw new Error('Erreur récupération')
        }

        this.salons = await response.json()

        this.currentPage = 1

      } catch (error) {

        console.error(error)
        this.salons = []

      } finally {

        this.loading = false

      }
    },

    handleSearch() {
      this.fetchResults()

      this.$router.push({
        path: '/search',
        query: {
          ...this.filters
        }
      })

      this.showSuggestions = false
    },

    async onLocationInput() {
      clearTimeout(this.debounceTimer)

      if (this.filters.location.trim().length < 2) {
        this.suggestions = []
        return
      }

      this.debounceTimer = setTimeout(async () => {

        try {

          const response = await fetch(
            `https://bookmysalon-967a856b16b6.herokuapp.com/api/google-cities-autocomplete?input=${encodeURIComponent(this.filters.location.trim())}`
          )

          const data = await response.json()

          this.suggestions = data.predictions || []

        } catch (error) {

          console.error(error)
          this.suggestions = []

        }

      }, 300)
    },

    selectSuggestion(description) {
      this.filters.location = description
      this.showSuggestions = false
      this.suggestions = []
    },

    hideSuggestions() {
      setTimeout(() => {
        this.showSuggestions = false
      }, 200)
    },

    goToSalon(salon) {
      const salonIdentifier = salon.slug || salon.id || salon._id

      if (!salonIdentifier) return

      // Utiliser /etablissement/ avec le slug si disponible, sinon fallback sur /salon/ pour rétrocompatibilité
      if (salon.slug) {
        this.$router.push(`/etablissement/${salon.slug}`)
      } else {
        this.$router.push(`/salon/${salonIdentifier}`)
      }
    },

    goToPage(page) {
      this.currentPage = page

      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },

    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++

        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }
    },

    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--

        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }
    }
  }
}
</script>
