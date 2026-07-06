/**
 * Composable pour gérer les données structurées (Schema.org) avec Nuxt 3
 * Utilise useHead() pour l'injection SSR-safe
 */

interface Salon {
  nom_societe?: string
  nom?: string
  logo?: string
  image?: string
  slug: string
  telephone?: string
  adresse?: string
  city?: string
  ville?: string
  latitude?: number
  longitude?: number
  googleRating?: number
  googleReviewsCount?: number
}

interface Breadcrumb {
  name: string
  path: string
}

/**
 * Génère le schéma LocalBusiness pour un salon
 * @param salon - Données du salon
 * @returns Schéma JSON-LD
 */
export function generateSalonSchema(salon: Salon) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": salon.nom_societe || salon.nom,
    "image": salon.logo || salon.image,
    "url": `https://bookmysalon.fr/etablissement/${salon.slug}`,
    "@id": `https://bookmysalon.fr/etablissement/${salon.slug}`,
    "telephone": salon.telephone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": salon.adresse,
      "addressLocality": salon.city || salon.ville,
      "addressCountry": "FR"
    },
    "priceRange": "€€"
  }

  // Ajouter les coordonnées géographiques si disponibles
  if (salon.latitude && salon.longitude) {
    schema.geo = {
      "@type": "GeoCoordinates",
      "latitude": salon.latitude,
      "longitude": salon.longitude
    }
  }

  // Ajouter la note moyenne si disponible
  if (salon.googleRating) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      "ratingValue": salon.googleRating,
      "reviewCount": salon.googleReviewsCount || 0
    }
  }

  return schema
}

/**
 * Génère le schéma BreadcrumbList
 * @param breadcrumbs - Liste des fil d'Ariane
 * @returns Schéma JSON-LD
 */
export function generateBreadcrumbSchema(breadcrumbs: Breadcrumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `https://bookmysalon.fr${crumb.path}`
    }))
  }
}

/**
 * Génère le schéma ItemList pour une liste de salons
 * @param salons - Liste des salons
 * @param name - Nom de la liste
 * @returns Schéma JSON-LD
 */
export function generateSalonListSchema(salons: Salon[], name: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": name,
    "numberOfItems": salons.length,
    "itemListElement": salons.map((salon, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://bookmysalon.fr/etablissement/${salon.slug}`
    }))
  }
}

/**
 * Injecte les données structurées dans le head (SSR-safe)
 * @param schemaObject - Objet de schéma JSON-LD
 */
export function injectStructuredData(schemaObject: any) {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(schemaObject)
      }
    ]
  })
}

/**
 * Composable principal pour utiliser les données structurées
 */
export const useStructuredData = () => {
  return {
    generateSalonSchema,
    generateBreadcrumbSchema,
    generateSalonListSchema,
    injectStructuredData
  }
}
