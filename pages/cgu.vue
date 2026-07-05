<template>
  <div class="min-h-screen py-12 px-4">
    <div class="max-w-4xl mx-auto prose prose-sm md:prose-base"
      :class="isDark ? 'prose-invert' : ''">
      <h1>Conditions Générales d'Utilisation</h1>
      <p class="lead">Dernière mise à jour : {{ new Date().toLocaleDateString('fr-FR') }}</p>

      <h2>1. Acceptation des conditions</h2>
      <p>En accédant et en utilisant BookMySalon, vous acceptez d'être lié par ces Conditions Générales d'Utilisation.</p>

      <h2>2. Utilisation du service</h2>
      <p>BookMySalon est une plateforme de réservation en ligne pour les salons de beauté et instituts.</p>

      <h2>3. Compte utilisateur</h2>
      <p>Pour effectuer une réservation, vous devez créer un compte avec des informations exactes et à jour.</p>

      <h2>4. Réservations</h2>
      <p>Les réservations effectuées via la plateforme sont soumises à confirmation par l'établissement.</p>

      <h2>5. Annulations</h2>
      <p>Les politiques d'annulation sont définies par chaque établissement et communiquées lors de la réservation.</p>

      <h2>6. Responsabilités</h2>
      <p>BookMySalon agit en tant qu'intermédiaire entre les clients et les établissements.</p>

      <h2>7. Propriété intellectuelle</h2>
      <p>Tous les contenus présents sur la plateforme sont protégés par le droit d'auteur.</p>

      <h2>8. Modifications des CGU</h2>
      <p>BookMySalon se réserve le droit de modifier ces conditions à tout moment.</p>

      <h2>9. Contact</h2>
      <p>Pour toute question concernant ces CGU, contactez-nous à contact@bookmysalon.fr</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { isDark } = useTheme()

definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: 'Conditions Générales d\'Utilisation - BookMySalon',
  description: 'Consultez nos conditions générales d\'utilisation',
  robots: 'index, follow'
})
</script>
