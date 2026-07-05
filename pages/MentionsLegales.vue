<template>
  <div class="min-h-screen py-12 px-4">
    <div class="max-w-4xl mx-auto prose prose-sm md:prose-base"
      :class="isDark ? 'prose-invert' : ''">
      <h1>Mentions Légales</h1>

      <h2>1. Éditeur du site</h2>
      <p>
        <strong>BookMySalon</strong><br>
        Société par actions simplifiée<br>
        Capital social : [À compléter]<br>
        RCS : [À compléter]<br>
        Siège social : [Adresse à compléter]
      </p>

      <h2>2. Directeur de la publication</h2>
      <p>[Nom du directeur à compléter]</p>

      <h2>3. Hébergement</h2>
      <p>
        Le site BookMySalon est hébergé par :<br>
        Heroku (Salesforce)<br>
        415 Mission Street, Suite 300<br>
        San Francisco, CA 94105, USA
      </p>

      <h2>4. Contact</h2>
      <p>
        Pour toute question concernant le site, vous pouvez nous contacter :<br>
        Email : contact@bookmysalon.fr<br>
        Téléphone : [Numéro à compléter]
      </p>

      <h2>5. Propriété intellectuelle</h2>
      <p>
        L'ensemble du contenu présent sur ce site (textes, images, logos, vidéos, etc.) est protégé par le droit d'auteur et appartient à BookMySalon ou à ses partenaires.
      </p>

      <h2>6. Crédits</h2>
      <p>
        Développement : DataFuse<br>
        Design : BookMySalon
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { isDark } = useTheme()

definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: 'Mentions Légales - BookMySalon',
  description: 'Mentions légales du site BookMySalon',
  robots: 'index, follow'
})
</script>
