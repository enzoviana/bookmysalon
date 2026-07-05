<template>
  <NuxtLink
    :to="salonLink"
    class="group block rounded-2xl border overflow-hidden transition-all duration-300 flex flex-col h-full select-none text-left"
    :class="isDark 
      ? 'bg-zinc-950/40 border-zinc-900 hover:border-zinc-800 hover:bg-zinc-900/20 shadow-xl shadow-black/10' 
      : 'bg-white border-[#E5E0D8] hover:border-[#A69B88] hover:shadow-md hover:shadow-zinc-900/5'"
  >
    <div class="relative overflow-hidden aspect-[16/10]">
      <img
        :src="salonLogo"
        :alt="`Image de ${salonName}`"
        class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        @error="handleImageError"
      />
      
      <div v-if="googleRating" 
        class="absolute top-4 left-4 backdrop-blur-md rounded-lg px-2.5 py-1 flex items-center gap-1 text-[11px] font-bold font-mono tracking-tight transition-all"
        :class="isDark ? 'bg-zinc-950/80 text-white' : 'bg-white/90 text-[#2D2924] shadow-sm'">
        <svg class="w-3 h-3 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <span>{{ googleRating }}</span>
        <span class="opacity-40 font-light text-[10px]">({{ googleReviewsCount }})</span>
      </div>
    </div>

    <div class="p-5 flex flex-col flex-grow justify-between gap-4">
      <div class="space-y-2">
        <h3 class="font-semibold text-base tracking-tight leading-snug transition-colors group-hover:text-[#A69B88]"
          :class="isDark ? 'text-white' : 'text-[#2D2924]'">
          {{ salonName }}
        </h3>

        <div class="space-y-1.5 text-xs font-light" :class="isDark ? 'text-zinc-400' : 'text-[#7A7367]'">
          <div class="flex items-center gap-2">
            <svg class="w-3.5 h-3.5 opacity-60 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span class="truncate">{{ salonCity }}</span>
          </div>

          <div v-if="salon.telephone" class="flex items-center gap-2 font-mono text-[11px] opacity-90">
            <svg class="w-3.5 h-3.5 opacity-60 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>{{ salon.telephone }}</span>
          </div>
        </div>
      </div>

      <div class="pt-3 border-t flex items-center justify-between text-[11px] font-bold uppercase tracking-wider transition-colors"
        :class="isDark ? 'border-zinc-900/60 text-zinc-400 group-hover:text-white' : 'border-[#E5E0D8] text-[#7A7367] group-hover:text-[#2D2924]'">
        <span>Découvrir l'établissement</span>
        <svg class="w-3.5 h-3.5 transition-transform duration-300 ease-out transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
import { ref, inject } from 'vue';

export default {
  name: 'SalonCard',
  props: {
    salon: {
      type: Object,
      required: true
    }
  },
  setup() {
    // Injection du thème global partagé par la Navbar et la page Ville
    const isDark = inject('isDark', ref(false));
    const imageError = ref(false);

    const handleImageError = () => {
      imageError.value = true;
    };

    return {
      isDark,
      imageError,
      handleImageError
    };
  },
  computed: {
    salonLink() {
      if (this.salon.slug) {
        return `/etablissement/${this.salon.slug}`;
      }
      return `/salon/${this.salon._id || this.salon.id}`;
    },
    salonName() {
      return this.salon.nom_societe || this.salon.nom || 'Établissement Partner';
    },
    salonLogo() {
      // Fallback premium neutre si l'image saute
      const fallback = 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop';
      if (this.imageError) return fallback;
      return this.salon.logo || this.salon.image || fallback;
    },
    salonCity() {
      return this.salon.city || this.salon.ville || 'France';
    },
    googleRating() {
      return this.salon.googleRating ? this.salon.googleRating.toFixed(1) : null;
    },
    googleReviewsCount() {
      return this.salon.googleReviewsCount || 0;
    }
  }
}
</script>