<template>
  <!-- FAQ -->
  <section class="bg-white py-12">
    <div class="container px-6 py-12 mx-auto">
      <h1 class="text-2xl font-semibold text-gray-800 lg:text-3xl ">Foire aux questions</h1>

      <div class="mt-8 space-y-8 lg:mt-12">
        <div
          v-for="(item, index) in faqs"
          :key="index"
          class="p-8 bg-gray-100 rounded-lg "
        >
          <button
            @click="toggle(index)"
            class="flex items-center justify-between w-full focus:outline-none"
            :aria-expanded="openIndex === index ? 'true' : 'false'"
            :aria-controls="'faq-' + index"
          >
            <h1 class="font-semibold text-gray-700 ">
              {{ item.question }}
            </h1>

            <span
              :class="openIndex === index ? 'text-white bg-blue-500 rounded-full' : 'text-gray-400 bg-gray-200 rounded-full'"
              class="transition-colors duration-300"
            >
              <svg
                v-if="openIndex === index"
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </span>
          </button>

          <p
            v-show="openIndex === index"
            :id="'faq-' + index"
            class="mt-6 text-sm text-gray-500 "
          >
            {{ item.answer }}
          </p>
        </div>
      </div>
    </div>
  </section>

</template>

<script setup>
import { ref } from "vue";

const faqs = [
  {
    question: "Puis-je changer mon forfait à tout moment ?",
    answer:
      "Oui, vous pouvez modifier votre forfait à tout moment depuis votre espace client, sans frais supplémentaires. Le changement sera effectif dès le début du prochain cycle de facturation, vous permettant ainsi de bénéficier immédiatement des nouvelles fonctionnalités ou limites de votre forfait.",
  },
  {
    question: "Comment puis-je contacter le support ?",
    answer:
      "Vous pouvez contacter notre support client par email à support@bookmysalon.pro, via notre formulaire de contact disponible sur le site, ou par téléphone du lundi au vendredi de 9h à 18h. Nous nous engageons à répondre à vos demandes sous 24 heures ouvrées.",
  },
  {
    question: "Comment gérer les rendez-vous récurrents ?",
    answer:
      "Notre plateforme vous permet de programmer facilement des rendez-vous récurrents en choisissant la fréquence souhaitée (quotidienne, hebdomadaire, mensuelle) lors de la prise de rendez-vous. Vous pouvez également définir une date de fin pour ces rendez-vous récurrents, ou les modifier/supprimer à tout moment depuis votre agenda.",
  },
  {
    question: "Puis-je annuler un rendez-vous depuis la plateforme ?",
    answer:
      "Oui, vous pouvez annuler un rendez-vous directement depuis votre espace client ou via l'application mobile. Une fois annulé, le rendez-vous disparaîtra de votre calendrier, et une notification sera envoyée au client. Selon vos paramètres, une politique d’annulation peut s’appliquer avec ou sans frais.",
  },
  {
    question: "Comment sont gérées les notifications pour les rendez-vous ?",
    answer:
      "Notre système envoie automatiquement des notifications par email et SMS pour confirmer les rendez-vous, rappeler la date 24h avant, et informer des modifications ou annulations. Vous pouvez personnaliser ces notifications dans les paramètres de votre compte.",
  },
  {
    question: "Puis-je gérer plusieurs employés sur la même plateforme ?",
    answer:
      "Absolument, notre plateforme est conçue pour gérer plusieurs employés avec leurs propres horaires et disponibilités. Vous pouvez attribuer des rendez-vous à chaque employé, gérer leurs congés, et suivre leurs performances via le tableau de bord.",
  },
  {
    question: "Quelles méthodes de paiement sont acceptées ?",
    answer:
      "Nous acceptons les paiements par carte bancaire via Stripe, ainsi que les paiements par virement bancaire. Vous pouvez configurer vos préférences de paiement dans votre espace professionnel, et gérer les acomptes directement depuis la plateforme.",
  },
  {
    question: "Comment protéger les données personnelles de mes clients ?",
    answer:
      "Nous respectons le RGPD et mettons en place des mesures strictes pour sécuriser vos données et celles de vos clients. Toutes les informations sont cryptées et stockées sur des serveurs sécurisés. Vous pouvez également configurer les droits d'accès des utilisateurs de votre compte.",
  },

];


const openIndex = ref(null);

function toggle(index) {
  openIndex.value = openIndex.value === index ? null : index;
}




</script>

<style scoped>
/* Pas de styles additionnels nécessaires car Tailwind est utilisé */
</style>
