<template>
  <div class="min-h-screen py-12 px-4">
    <div class="max-w-7xl mx-auto">
      <div class="mb-8 text-center">
        <h1 class="text-3xl md:text-4xl font-light tracking-tight mb-2"
          :class="isDark ? 'text-white' : 'text-[#2D2924]'">
          Toutes les <span class="font-serif italic"
            :class="isDark ? 'text-[#D5CCBC]' : 'text-[#A69B88]'">catégories</span>
        </h1>
        <p class="text-sm font-light"
          :class="isDark ? 'text-zinc-400' : 'text-[#7A7367]'">
          Explorez tous nos services de beauté et bien-être
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <NuxtLink v-for="category in categories" :key="category.id" :to="`/services/${category.slug}`"
          class="p-6 rounded-2xl border transition-all duration-300 group"
          :class="isDark
            ? 'bg-zinc-900/40 border-zinc-900 hover:border-zinc-800'
            : 'bg-white border-[#E5E0D8] hover:border-[#D6D0C5]'">
          <h3 class="text-lg font-medium mb-2 transition-colors"
            :class="isDark
              ? 'text-white group-hover:text-[#D5CCBC]'
              : 'text-[#2D2924] group-hover:text-[#A69B88]'">
            {{ category.name }}
          </h3>
          <p class="text-sm"
            :class="isDark ? 'text-zinc-400' : 'text-[#7A7367]'">
            {{ category.description }}
          </p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { isDark } = useTheme()

definePageMeta({
  layout: 'default'
})

const categories = ref([
  { id: 1, name: 'Coiffure', slug: 'coiffure', description: 'Coupes, colorations, coiffage' },
  { id: 2, name: 'Barbier', slug: 'barbier', description: 'Barbe, rasage, entretien' },
  { id: 3, name: 'Esthétique', slug: 'esthetique', description: 'Soins du visage et du corps' },
  { id: 4, name: 'Massage', slug: 'massage', description: 'Massages bien-être et relaxation' },
  { id: 5, name: 'Manucure', slug: 'manucure', description: 'Soins des ongles et nail art' },
  { id: 6, name: 'Épilation', slug: 'epilation', description: 'Toutes méthodes d\'épilation' }
])

useSeoMeta({
  title: 'Catégories de services - BookMySalon',
  description: 'Découvrez toutes nos catégories de services : coiffure, barbier, esthétique, massage et plus encore',
})
</script>
