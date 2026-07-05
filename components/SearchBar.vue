<template>
  <div class="w-full max-w-5xl px-2 z-30">
    <form
      @submit.prevent="handleSearch"
      class="w-full backdrop-blur-xl rounded-2xl p-4 flex flex-col gap-4 md:flex-row md:items-end border shadow-2xl relative transition-all duration-300"
      :class="isDark
        ? 'bg-zinc-950/40 border-zinc-800/80 shadow-black/40'
        : 'bg-[#FDFCF8]/90 border-[#E5E0D8] shadow-zinc-900/5'"
      role="search"
    >
      <!-- Prestation ou Établissement -->
      <div class="flex-[1.3] w-full text-left">
        <label for="search-name"
          class="block text-[11px] uppercase tracking-widest mb-2 font-medium transition-colors duration-200"
          :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">
          Prestation ou Établissement
        </label>
        <div class="relative flex items-center">
          <svg class="absolute left-4 w-4 h-4 transition-colors" :class="isDark ? 'text-zinc-600' : 'text-[#A69B88]'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
          <input
            id="search-name"
            type="text"
            placeholder="Coiffure, Head Spa, Massage, Salon..."
            class="w-full pl-11 pr-4 py-3.5 rounded-xl border text-sm tracking-wide transition-all duration-300 focus:outline-none"
            :class="isDark
              ? 'border-zinc-900 bg-zinc-900/50 text-white placeholder-zinc-600 focus:border-zinc-700 focus:bg-zinc-900'
              : 'border-[#E5E0D8] bg-[#F7F5F0] text-[#2D2924] placeholder-[#A69B88] focus:border-[#2D2924] focus:bg-[#FDFCF8]'"
            v-model="query"
          />
        </div>
      </div>

      <!-- Séparateur vertical (Desktop) -->
      <div class="hidden md:block w-[1px] h-10 self-end mb-2 transition-colors duration-200"
        :class="isDark ? 'bg-zinc-900' : 'bg-[#E5E0D8]'"></div>

      <!-- Localisation -->
      <div class="flex-1 w-full relative text-left">
        <label for="search-location"
          class="block text-[11px] uppercase tracking-widest mb-2 font-medium transition-colors duration-200"
          :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">
          Localisation
        </label>
        <div class="relative flex items-center">
          <svg class="absolute left-4 w-4 h-4 transition-colors" :class="isDark ? 'text-zinc-600' : 'text-[#A69B88]'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          <input
            id="search-location"
            type="text"
            placeholder="Ville, code postal, adresse..."
            class="w-full pl-11 pr-12 py-3.5 rounded-xl border text-sm tracking-wide transition-all duration-300 focus:outline-none"
            :class="isDark
              ? 'border-zinc-900 bg-zinc-900/50 text-white placeholder-zinc-600 focus:border-zinc-700 focus:bg-zinc-900'
              : 'border-[#E5E0D8] bg-[#F7F5F0] text-[#2D2924] placeholder-[#A69B88] focus:border-[#2D2924] focus:bg-[#FDFCF8]'"
            v-model="location"
            @input="fetchSuggestionsDebounced"
            @blur="onBlur"
            @focus="onFocus"
            autocomplete="off"
          />
          <button
            type="button"
            @click="getUserLocation"
            :disabled="isGeolocating"
            class="absolute right-2 p-2 rounded-lg transition-all duration-200 hover:scale-110 active:scale-95 disabled:opacity-50"
            :class="isDark ? 'hover:bg-zinc-800' : 'hover:bg-[#E5E0D8]'"
            title="Utiliser ma position actuelle"
          >
            <svg v-if="!isGeolocating" class="w-4 h-4 transition-colors" :class="isDark ? 'text-zinc-500' : 'text-[#A69B88]'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2L12 6M12 18L12 22M6 12L2 12M22 12L18 12M17.657 6.343L14.828 9.172M9.172 14.828L6.343 17.657M17.657 17.657L14.828 14.828M9.172 9.172L6.343 6.343M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/>
            </svg>
            <svg v-else class="w-4 h-4 animate-spin" :class="isDark ? 'text-zinc-500' : 'text-[#A69B88]'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
            </svg>
          </button>
        </div>

        <!-- Menu des suggestions -->
        <Transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="opacity-0 translate-y-1"
          enter-to-class="opacity-100 translate-y-0"
        >
          <ul
            v-if="showSuggestions && suggestions.length > 0"
            class="absolute border rounded-xl w-full max-h-60 overflow-auto mt-2 z-50 shadow-2xl backdrop-blur-xl no-scrollbar divide-y"
            :class="isDark
              ? 'bg-zinc-950/95 border-zinc-800 divide-zinc-900'
              : 'bg-[#FDFCF8]/95 border-[#E5E0D8] divide-[#E5E0D8]'"
          >
            <li
              v-for="(item, index) in suggestions"
              :key="index"
              class="px-4 py-3 text-xs tracking-wide cursor-pointer transition-colors flex items-center gap-2"
              :class="isDark
                ? 'hover:bg-zinc-900 text-zinc-300 hover:text-white'
                : 'hover:bg-[#F7F5F0] text-[#7A7367] hover:text-[#2D2924]'"
              @mousedown.prevent="selectSuggestion(item.description)"
            >
              <svg class="w-3.5 h-3.5 transition-colors" :class="isDark ? 'text-zinc-600' : 'text-[#A69B88]'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 009 11V4.717M4 11h6.5"/>
              </svg>
              {{ item.description }}
            </li>
          </ul>
        </Transition>
      </div>

      <!-- Bouton de validation -->
      <div class="w-full md:w-auto">
        <button
          type="submit"
          class="w-full md:w-auto px-7 py-3.5 rounded-xl font-semibold text-xs uppercase tracking-wider transition-all duration-300 active:scale-[0.98]"
          :class="isDark
            ? 'bg-white hover:bg-[#D5CCBC] text-black shadow-xl shadow-white/5'
            : 'bg-[#2D2924] hover:bg-[#423D36] text-white shadow-xl shadow-zinc-900/10'"
        >
          Rechercher
        </button>
      </div>
    </form>

    <!-- Message d'erreur -->
    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="opacity-0 -translate-y-1"
    >
      <p v-if="errorLocation" class="text-rose-500 text-xs tracking-wide font-medium mt-2 text-left flex items-center gap-1.5 pl-2">
        <span class="w-1 h-1 rounded-full bg-rose-500"></span>
        La saisie d'une localisation géographique est requise.
      </p>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core'

const props = defineProps<{
  initialLocation?: string
  autoGeolocate?: boolean
}>()

const emit = defineEmits<{
  'location-detected': [payload: { location: string, latitude: number, longitude: number }]
}>()

const { isDark } = useTheme()
const router = useRouter()
const { fetchApi } = useApi()

const query = ref('')
const location = ref(props.initialLocation || '')
const suggestions = ref<any[]>([])
const showSuggestions = ref(false)
const errorLocation = ref(false)
const isGeolocating = ref(false)

const handleSearch = () => {
  if (!location.value.trim()) {
    errorLocation.value = true
    return
  }
  errorLocation.value = false

  const params: any = {}
  if (query.value.trim()) params.query = query.value.trim()
  params.location = location.value.trim()

  router.push({ path: '/search', query: params })
}

const fetchSuggestions = async () => {
  const input = location.value.trim()
  if (input.length < 2) {
    suggestions.value = []
    return
  }

  try {
    const response: any = await fetchApi('/api/google-cities-autocomplete', {
      params: { input }
    })
    suggestions.value = response.predictions || []
    showSuggestions.value = true
  } catch (error) {
    suggestions.value = []
    showSuggestions.value = false
  }
}

const fetchSuggestionsDebounced = useDebounceFn(fetchSuggestions, 300)

const selectSuggestion = (description: string) => {
  location.value = description
  showSuggestions.value = false
}

const onBlur = () => {
  setTimeout(() => {
    showSuggestions.value = false
  }, 150)
}

const onFocus = () => {
  if (suggestions.value.length > 0) {
    showSuggestions.value = true
  }
}

const getUserLocation = async () => {
  if (!process.client || !navigator.geolocation) {
    console.error('La géolocalisation n\'est pas supportée')
    return
  }

  isGeolocating.value = true

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { latitude, longitude } = position.coords

      try {
        const response = await $fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=14&addressdetails=1`,
          {
            headers: {
              'User-Agent': 'BookMySalon/1.0'
            }
          }
        )

        if (response && (response as any).address) {
          const addr = (response as any).address
          const city = addr.city || addr.town || addr.village || addr.municipality || ''
          const postalCode = addr.postcode || ''

          if (city) {
            location.value = postalCode ? `${city}, ${postalCode}` : city
          } else {
            location.value = (response as any).display_name.split(',')[0]
          }

          emit('location-detected', {
            location: location.value,
            latitude,
            longitude
          })
        }
      } catch (error) {
        console.error('Erreur lors du géocodage inverse:', error)
        location.value = `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`

        emit('location-detected', {
          location: location.value,
          latitude,
          longitude
        })
      } finally {
        isGeolocating.value = false
      }
    },
    (error) => {
      isGeolocating.value = false
      console.error('Erreur de géolocalisation:', error)
    },
    {
      enableHighAccuracy: false,
      timeout: 10000,
      maximumAge: 300000
    }
  )
}

// Auto géolocalisation au montage
onMounted(() => {
  if (props.autoGeolocate && !location.value) {
    getUserLocation()
  }
})
</script>
