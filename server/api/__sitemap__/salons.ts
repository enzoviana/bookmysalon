export default defineEventHandler(async () => {
  try {
    // Récupérer tous les salons depuis l'API backend
    const response = await $fetch('https://bookmysalon-967a856b16b6.herokuapp.com/api/search/all-salons')
    const salons = response?.data || []

    console.log(`📍 Sitemap: ${salons.length} salons récupérés`)

    // Générer les URLs pour chaque salon
    return salons.map((salon: any) => {
      return {
        loc: `/etablissement/${salon.slug || salon._id}`,
        lastmod: salon.updatedAt || salon.createdAt || new Date().toISOString(),
        changefreq: 'weekly' as const,
        priority: 0.8
      }
    })
  } catch (error) {
    console.error('❌ Erreur lors de la génération du sitemap des salons:', error)
    return []
  }
})
