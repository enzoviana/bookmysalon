<template>
  <div class="min-h-screen py-12 px-4">
    <div class="max-w-4xl mx-auto prose prose-sm md:prose-base"
      :class="isDark ? 'prose-invert' : ''">
      <h1>Politique de Confidentialité</h1>
      <p class="lead">Dernière mise à jour : {{ new Date().toLocaleDateString('fr-FR') }}</p>

      <h2>1. Collecte des données</h2>
      <p>Nous collectons les données personnelles que vous nous fournissez lors de votre inscription et de l'utilisation de nos services.</p>

      <h2>2. Utilisation des données</h2>
      <p>Vos données sont utilisées pour :</p>
      <ul>
        <li>Gérer votre compte utilisateur</li>
        <li>Traiter vos réservations</li>
        <li>Améliorer nos services</li>
        <li>Vous envoyer des communications marketing (avec votre consentement)</li>
      </ul>

      <h2>3. Partage des données</h2>
      <p>Vos données peuvent être partagées avec les établissements pour lesquels vous effectuez des réservations.</p>

      <h2>4. Sécurité des données</h2>
      <p>Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données personnelles.</p>

      <h2>5. Vos droits</h2>
      <p>Conformément au RGPD, vous disposez des droits suivants :</p>
      <ul>
        <li>Droit d'accès à vos données</li>
        <li>Droit de rectification</li>
        <li>Droit à l'effacement</li>
        <li>Droit à la portabilité</li>
        <li>Droit d'opposition</li>
      </ul>

      <h2>6. Cookies</h2>
      <p>Nous utilisons des cookies pour améliorer votre expérience utilisateur et analyser le trafic sur notre site.</p>

      <h2>7. Conservation des données</h2>
      <p>Vos données sont conservées pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées.</p>

      <h2>8. Contact</h2>
      <p>Pour exercer vos droits ou pour toute question, contactez-nous à privacy@bookmysalon.fr</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { isDark } = useTheme()

definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: 'Politique de Confidentialité - BookMySalon',
  description: 'Consultez notre politique de confidentialité et protection des données',
  robots: 'index, follow'
})
</script>
