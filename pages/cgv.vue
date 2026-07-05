<template>
  <div class="min-h-screen py-12 px-4">
    <div class="max-w-4xl mx-auto prose prose-sm md:prose-base"
      :class="isDark ? 'prose-invert' : ''">
      <h1>Conditions Générales de Vente</h1>
      <p class="lead">Dernière mise à jour : {{ new Date().toLocaleDateString('fr-FR') }}</p>

      <h2>1. Objet</h2>
      <p>Les présentes CGV régissent les relations commerciales entre BookMySalon et ses utilisateurs.</p>

      <h2>2. Services</h2>
      <p>BookMySalon propose une plateforme de mise en relation et de réservation en ligne.</p>

      <h2>3. Tarifs</h2>
      <p>L'utilisation de la plateforme par les clients est gratuite. Les tarifs affichés sont ceux pratiqués par les établissements.</p>

      <h2>4. Paiement</h2>
      <p>Le paiement peut s'effectuer directement auprès de l'établissement ou via la plateforme selon les modalités définies.</p>

      <h2>5. Droit de rétractation</h2>
      <p>Les conditions de rétractation sont déterminées par chaque établissement conformément à la législation en vigueur.</p>

      <h2>6. Responsabilité</h2>
      <p>BookMySalon ne peut être tenu responsable de la qualité des prestations fournies par les établissements partenaires.</p>

      <h2>7. Données personnelles</h2>
      <p>Vos données personnelles sont traitées conformément à notre Politique de Confidentialité.</p>

      <h2>8. Réclamations</h2>
      <p>Pour toute réclamation, contactez notre service client à contact@bookmysalon.fr</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { isDark } = useTheme()

definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: 'Conditions Générales de Vente - BookMySalon',
  description: 'Consultez nos conditions générales de vente',
  robots: 'index, follow'
})
</script>
