<template>
  <div class="min-h-screen py-12 px-4">
    <div class="max-w-7xl mx-auto">
      <div class="mb-8 text-center">
        <h1 class="text-3xl md:text-4xl font-light tracking-tight mb-2"
          :class="isDark ? 'text-white' : 'text-[#2D2924]'">
          {{ activityName }} à <span class="font-serif italic"
            :class="isDark ? 'text-[#D5CCBC]' : 'text-[#A69B88]'">{{ cityName }}</span>
        </h1>
        <p class="text-sm font-light"
          :class="isDark ? 'text-zinc-400' : 'text-[#7A7367]'">
          Réservez votre rendez-vous en quelques clics
        </p>
      </div>

      <!-- Liste des salons -->
      <div v-if="salons && salons.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="salon in salons" :key="salon.id" class="p-6 rounded-2xl border transition-all duration-300"
          :class="isDark
            ? 'bg-zinc-900/40 border-zinc-900 hover:border-zinc-800'
            : 'bg-white border-[#E5E0D8] hover:border-[#D6D0C5]'">
          <h3 class="text-lg font-medium mb-2"
            :class="isDark ? 'text-white' : 'text-[#2D2924]'">
            {{ salon.nom_societe }}
          </h3>
          <p class="text-sm mb-4"
            :class="isDark ? 'text-zinc-400' : 'text-[#7A7367]'">
            {{ salon.adresse }}
          </p>
          <NuxtLink :to="`/etablissement/${salon.slug}`" class="inline-block px-4 py-2 rounded-lg text-xs uppercase tracking-wider font-bold transition-all duration-300"
            :class="isDark
              ? 'bg-zinc-900 hover:bg-zinc-800 text-white'
              : 'bg-[#F7F5F0] hover:bg-[#2D2924] text-[#2D2924] hover:text-white'">
            Réserver
          </NuxtLink>
        </div>
      </div>

      <div v-else class="text-center py-12">
        <p :class="isDark ? 'text-zinc-400' : 'text-[#7A7367]'">
          Aucun salon trouvé pour cette activité dans cette ville.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { isDark } = useTheme()
const route = useRoute()
const { fetchApi } = useApi()

definePageMeta({
  layout: 'default'
})

const activity = route.params.activity as string
const city = route.params.city as string

const activityName = decodeURIComponent(activity).replace(/-/g, ' ')
const cityName = decodeURIComponent(city).replace(/-/g, ' ')

// Fetch salons for this activity and city (SSR)
const { data: salons } = await useAsyncData(
  `salons-${activity}-${city}`,
  () => fetchApi(`/api/salons/search?activity=${activity}&city=${city}`)
)

// SEO Meta tags
useSeoMeta({
  title: `${activityName} à ${cityName} - BookMySalon`,
  description: `Réservez votre rendez-vous ${activityName} à ${cityName}. Trouvez les meilleurs professionnels près de chez vous.`,
  ogTitle: `${activityName} à ${cityName}`,
  ogDescription: `Les meilleurs professionnels de ${activityName} à ${cityName}`,
})
</script>
