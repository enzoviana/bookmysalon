<template>
  <div class="min-h-screen bg-gray-50 text-zinc-700 dark:bg-zinc-950 dark:text-zinc-300 pt-6 pb-20 transition-colors duration-300">
    <div v-if="salon" class="max-w-7xl mx-auto px-4 sm:px-6">
      
      <!-- NAV / EN-TÊTE -->
      <header class="mb-8 space-y-8">
        <button
          @click="retourAuxResultats"
          class="px-4 py-2.5 rounded-xl font-medium text-xs uppercase tracking-wider border shadow-sm flex items-center gap-2.5 transition-all duration-300 group
                 bg-white border-gray-200 text-zinc-600 hover:bg-gray-50 hover:text-zinc-900 
                 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
        >
          <svg class="w-4 h-4 transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Retour aux résultats
        </button>

        <div class="text-left space-y-2">
          <h1 class="text-3xl font-light tracking-tight text-zinc-900 dark:text-white">
            {{ salon.nom_societe }}
          </h1>
          
          
        </div>
      </header>

      <!-- LAYOUT PRINCIPAL -->
      <div class="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">

        <!-- COLONNE GAUCHE : CONTENU -->
        <main class="lg:col-span-8 space-y-10">

          <!-- GALERIE IMAGES -->
          <section class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="md:col-span-2 relative rounded-2xl overflow-hidden border h-80 shadow-sm group bg-white border-gray-200 dark:bg-zinc-900 dark:border-zinc-800/80">
              <img
                :src="salon.logo || salon.image"
                alt="Salon Core"
                class="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
              />
              <div class="absolute inset-0 bg-gradient-to-t to-transparent flex items-end p-8 from-zinc-900/60 via-zinc-900/10 dark:from-zinc-950 dark:via-zinc-950/40"></div>
            </div>

<div class="grid grid-cols-4 md:grid-cols-1 md:flex md:flex-col gap-3 h-24 md:h-80 overflow-hidden">
  <div 
    v-for="(photo, idx) in salon.photos?.slice(0, 4) || []"
    :key="idx"
    @click="ouvrirPhoto(photo)"
    class="relative rounded-xl overflow-hidden border aspect-square md:aspect-auto md:flex-1 cursor-pointer shadow-sm group bg-gray-100 border-gray-200 dark:border-zinc-900 dark:bg-zinc-900"
  >
    <img
      :src="photo"
      alt="Portfolio Piece"
      class="w-full h-full object-cover filter brightness-95 contrast-105 md:grayscale group-hover:grayscale-0 group-hover:scale-[1.05] transition-all duration-500 ease-out"
    />
  </div>
</div>
          </section>

          <div v-if="salon.siteWeb" class="flex items-center gap-2 text-xs">
            <svg class="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            <a
              :href="salon.siteWeb"
              target="_blank"
              rel="noopener noreferrer"
              @click="comptabiliserConversion('siteWeb')"
              class="underline underline-offset-4 transition-colors font-light text-zinc-500 hover:text-amber-700 dark:text-zinc-400 dark:hover:text-[#D5CCBC]"
            >
              Visiter le site de l'établissement
            </a>
          </div>

          <!-- A PROPOS -->
          <section class="p-8 border rounded-2xl text-left bg-white border-gray-100 shadow-sm dark:bg-zinc-900/20 dark:border-zinc-900">
            <h2 class="text-[10px] uppercase tracking-widest mb-4 font-semibold text-zinc-400 dark:text-zinc-500">À propos de l'établissement</h2>
            <p class="font-light text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">{{ salon.description }}</p>
          </section>

          <!-- BANNIÈRE RECOURS/REVENDICATION (Alerte) -->
          <section
            v-if="!isRevendique"
            class="p-6 sm:p-8 border rounded-2xl text-left flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-amber-50/60 border-amber-200 dark:bg-amber-50/5 dark:border-amber-50/20"
          >
            <div class="space-y-1 max-w-xl">
              <h3 class="text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400">Établissement non revendiqué</h3>
              <p class="text-xs font-light leading-relaxed text-zinc-600 dark:text-zinc-400">
                Cette fiche est générée à titre informatif pour notre communauté. Vous êtes le propriétaire ? Prenez le contrôle de l'agenda en revendiquant ce profil.
              </p>
            </div>
            <button
              @click="reclamerFiche()"
              class="shrink-0 px-5 py-3 rounded-xl font-medium text-xs uppercase tracking-wider border transition-all duration-300 transform active:scale-[0.98]
                     bg-amber-600 text-white border-transparent hover:bg-amber-700 shadow-md shadow-amber-600/10 
                     dark:bg-amber-400/10 dark:text-amber-300 dark:border-amber-50/20 dark:hover:bg-amber-400 dark:hover:text-black"
            >
              Revendiquer la fiche
            </button>
          </section>

          <!-- CARTE DES SOINS -->
          <section class="space-y-10">
            <div class="text-left border-b pb-4 border-gray-200 dark:border-zinc-900">
              <h2 class="text-xl font-normal tracking-tight text-zinc-900 dark:text-white">
                Carte des soins{{ isRevendique ? ' & Tarifs' : '' }}
              </h2>
              <p class="text-xs font-light mt-1 text-gray-400 dark:text-zinc-500">
                <template v-if="isRevendique">
                  Sélectionnez vos actes techniques et réservez votre créneau.
                </template>
                <template v-else>
                  Cet établissement n'est pas encore inscrit sur BookMySalon. Pour connaître les tarifs et réserver, appelez directement le salon.
                </template>
              </p>
            </div>

            <div v-for="cat in salon.categories" :key="cat._id" class="space-y-4">
              <h3 class="text-[11px] font-semibold uppercase tracking-widest text-left flex items-center gap-2 text-zinc-800 dark:text-[#D5CCBC]">
                <span class="w-1 h-1 rounded-full bg-zinc-700 dark:bg-[#D5CCBC]"></span>
                {{ cat.nom }}
              </h3>

              <div v-if="cat.services && cat.services.length" class="border rounded-2xl divide-y overflow-hidden bg-white border-gray-100 divide-gray-100 shadow-sm dark:bg-zinc-900/10 dark:border-zinc-900 dark:divide-zinc-900">
                <div
                  v-for="service in cat.services"
                  :key="service._id"
                  class="flex flex-col sm:flex-row justify-between sm:items-center p-5 gap-4 transition duration-300 group hover:bg-gray-50/50 dark:hover:bg-zinc-900/40"
                >
                  <div class="text-left space-y-1 max-w-lg">
                    <h4 class="text-sm font-medium transition-colors text-zinc-900 group-hover:text-amber-800 dark:text-white dark:group-hover:text-[#D5CCBC]">{{ service.nom }}</h4>
                    <p class="text-xs font-light leading-relaxed text-gray-400 dark:text-zinc-500">{{ service.description }}</p>
                  </div>
                  
                  <div class="flex items-center justify-between sm:justify-end gap-6 border-t sm:border-transparent pt-3 sm:pt-0 border-gray-100 dark:border-zinc-900/60">
                    <div class="flex items-center gap-4 text-xs font-mono">
                      <span class="flex items-center gap-1.5 font-light text-gray-400 dark:text-zinc-600">
                        <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                        {{ service.duree }} min
                      </span>
                      <!-- Afficher les prix uniquement si l'établissement est revendiqué -->
                      <div v-if="isRevendique" class="flex items-center gap-2">
                        <!-- Prix avec promotion -->
                        <template v-if="calculerPrixAvecPromo(service).hasPromo">
                          <span class="line-through text-xs text-gray-400 dark:text-zinc-600">{{ service.prix }} €</span>
                          <span class="font-semibold text-sm text-emerald-600 dark:text-emerald-400">{{ calculerPrixAvecPromo(service).prixFinal }} €</span>
                          <span class="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-900/40">
                            {{ calculerPrixAvecPromo(service).promoType === 'percentage' ? `-${calculerPrixAvecPromo(service).promoValeur}%` : 'PROMO' }}
                          </span>
                        </template>
                        <!-- Prix normal -->
                        <span v-else class="font-normal text-sm text-zinc-900 dark:text-white">{{ service.prix }} €</span>
                      </div>
                    </div>
                    <!-- Bouton Réserver si établissement revendiqué -->
                    <button
                      v-if="isRevendique"
                      @click="prendreRdv(service)"
                      class="px-4 py-2 rounded-xl font-medium text-xs uppercase tracking-wider border transition-all duration-300 transform active:scale-[0.97]
                             bg-gray-50 border-gray-200 text-zinc-700 hover:bg-zinc-900 hover:text-white hover:border-zinc-900
                             dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-white dark:hover:text-black dark:hover:border-white"
                    >
                      Réserver
                    </button>
                    <!-- Lien téléphone si établissement NON revendiqué -->
                    <a
                      v-else
                      :href="`tel:${salon.telephone}`"
                      @click="comptabiliserConversion('telephone')"
                      class="px-4 py-2 rounded-xl font-medium text-xs uppercase tracking-wider border transition-all duration-300 transform active:scale-[0.97] flex items-center gap-2
                             bg-amber-50 border-amber-200 text-amber-700 hover:bg-amber-600 hover:text-white hover:border-amber-600
                             dark:bg-amber-900/20 dark:border-amber-800 dark:text-amber-400 dark:hover:bg-amber-600 dark:hover:text-black dark:hover:border-amber-600"
                    >
                      <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                      Appeler
                    </a>
                  </div>
                </div>
              </div>

              <div v-else class="text-xs italic p-6 text-center border border-dashed rounded-2xl text-gray-400 border-gray-200 dark:text-zinc-600 dark:border-zinc-900">
                Aucun acte technique disponible actuellement.
              </div>
            </div>
          </section>

          <!-- COLLABORATEURS -->
          <section v-if="salon.administrateurs && salon.administrateurs.length" class="space-y-6 pt-4">
            <div class="text-left border-b pb-4 border-gray-200 dark:border-zinc-900">
              <h2 class="text-xl font-normal tracking-tight text-zinc-900 dark:text-white">Les Collaborateurs du Salon</h2>
              <p class="text-xs font-light mt-1 text-gray-400 dark:text-zinc-500">Sélectionnez un collaborateur dédié pour votre accompagnement.</p>
            </div>
            
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <article
                v-for="admin in salon.administrateurs"
                :key="admin._id"
                class="group border rounded-2xl overflow-hidden p-4 flex flex-col items-center text-center space-y-3 transition-all duration-300
                       bg-white border-gray-100 hover:border-gray-300 shadow-sm dark:bg-zinc-900/20 dark:border-zinc-900 dark:hover:border-zinc-800"
              >
                <div class="w-16 h-16 rounded-full overflow-hidden border relative shadow-inner bg-gray-100 border-gray-200 dark:bg-zinc-800 dark:border-zinc-700/50">
                  <img
                    v-if="admin.photo"
                    :src="admin.photo"
                    class="w-full h-full object-cover md:grayscale group-hover:grayscale-0 transition-all duration-500 scale-[1.01] group-hover:scale-[1.05]"
                    :alt="admin.prenom"
                  />
                  <div v-else class="w-full h-full flex items-center justify-center text-xs font-medium tracking-wider text-gray-500 dark:text-zinc-400">
                    {{ getInitiales(admin.prenom, admin.nom) }}
                  </div>
                </div>
                <p class="text-xs font-medium tracking-wide transition-colors text-zinc-800 group-hover:text-zinc-900 dark:text-zinc-200 dark:group-hover:text-white">
                  {{ admin.prenom }} {{ admin.nom }}
                </p>
              </article>
            </div>
          </section>

        </main>

        <!-- COLONNE DROITE : SIDEBAR INFORMATIONS -->
        <aside class="lg:col-span-4 space-y-6">

          <!-- HORAIRES -->
          <div class="border rounded-2xl p-6 space-y-4 bg-white border-gray-100 shadow-sm dark:bg-zinc-900/30 dark:border-zinc-900">
            <h3 class="text-[10px] uppercase tracking-widest font-semibold text-left text-gray-400 dark:text-zinc-500">Horaires & Disponibilités</h3>
            <div class="space-y-2.5 text-xs">
              <div
                v-for="(creneaux, jour) in salon.horaires"
                :key="jour"
                class="flex justify-between items-center py-2 border-b last:border-0 border-gray-50 dark:border-zinc-900/40"
              >
                <span class="capitalize font-light text-zinc-600 dark:text-zinc-400">{{ jour }}</span>
                <span v-if="creneaux.length > 0" class="font-normal font-mono text-zinc-900 dark:text-zinc-200">
                  {{ creneaux.map(c => `${c.debut} - ${c.fin}`).join(', ') }}
                </span>
                <span v-else class="font-light italic text-[11px] text-gray-400 dark:text-zinc-600">Fermé</span>
              </div>
            </div>
          </div>

          <!-- TÉLÉPHONE -->
          <div class="border rounded-2xl p-5 text-xs bg-white border-gray-100 shadow-sm dark:bg-zinc-900/30 dark:border-zinc-900">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <svg class="w-4 h-4 text-gray-400 dark:text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <span class="font-light text-zinc-600 dark:text-zinc-400">Ligne Directe</span>
              </div>
              <a :href="`tel:${salon.telephone}`" @click="comptabiliserConversion('telephone')" class="font-mono transition-colors font-medium tracking-wide text-zinc-900 hover:text-amber-700 dark:text-white dark:hover:text-[#D5CCBC]">{{ salon.telephone }}</a>
            </div>
            <div class="mt-3 pt-3 border-t text-[10px] italic flex items-center gap-1.5 border-gray-200 dark:border-zinc-800 text-gray-400 dark:text-zinc-600">
              <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
              </svg>
              <span>Indiqué "vu sur BookMySalon"</span>
            </div>
          </div>

          <!-- NOTIFICATION STATISTIQUES (SI NON ACTIF sur BookMySalon) -->
          <div v-if="!isRevendique && salon.views > 0" class="border rounded-2xl p-5 text-xs space-y-3 bg-blue-50/60 border-blue-200 dark:bg-blue-950/10 dark:border-blue-900/30">
            <div class="flex items-start gap-3">
              <svg class="w-5 h-5 shrink-0 mt-0.5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
              </svg>
              <div>
                <h4 class="font-semibold text-xs uppercase tracking-wider mb-1 text-blue-700 dark:text-blue-400">Visibilité sur BookMySalon</h4>
                <p class="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                  <strong class="text-zinc-900 dark:text-white">{{ salon.views || 0 }} personne{{ salon.views > 1 ? 's' : '' }}</strong> {{ salon.views > 1 ? 'ont' : 'a' }} consulté cette fiche mais n'{{ salon.views > 1 ? 'ont' : 'a' }} pas pu prendre rendez-vous sur BookMySalon.
                </p>
              </div>
            </div>
            <button
              @click="reclamerFiche()"
              class="w-full px-4 py-2.5 rounded-xl font-medium text-xs uppercase tracking-wider border transition-all duration-300 transform active:scale-[0.98]
                     bg-blue-600 text-white border-transparent hover:bg-blue-700 shadow-md shadow-blue-600/10
                     dark:bg-blue-400/10 dark:text-blue-300 dark:border-blue-50/20 dark:hover:bg-blue-400 dark:hover:text-black"
            >
              Revendiquer pour activer les réservations
            </button>
          </div>

          <!-- SITE INTERNET -->
          <div v-if="salon.siteWeb" class="border rounded-2xl p-5 flex items-center justify-between text-xs bg-white border-gray-100 shadow-sm dark:bg-zinc-900/30 dark:border-zinc-900">
            <div class="flex items-center gap-3">
              <svg class="w-4 h-4 text-gray-400 dark:text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 12H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9-3-9m-9 9a9 9 0 019-9" />
              </svg>
              <span class="font-light text-zinc-600 dark:text-zinc-400">Site Internet</span>
            </div>
            <a
              :href="salon.siteWeb"
              target="_blank"
              rel="noopener noreferrer"
              @click="comptabiliserConversion('siteWeb')"
              class="transition-colors font-medium flex items-center gap-1 group/link text-zinc-900 hover:text-amber-700 dark:text-white dark:hover:text-[#D5CCBC]"
            >
              Ouvrir le site
              <svg class="w-3 h-3 opacity-60 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <!-- ADRESSE & MAP -->
          <div class="border rounded-2xl p-6 space-y-4 bg-white border-gray-100 shadow-sm dark:bg-zinc-900/30 dark:border-zinc-900">
            <div class="flex items-start gap-3 text-xs text-left">
              <svg class="w-4 h-4 shrink-0 mt-0.5 text-gray-400 dark:text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              <p class="font-light leading-relaxed text-zinc-600 dark:text-zinc-400">{{ salon.adresse }}, {{ salon.codePostal }}, {{ salon.ville }}</p>
            </div>
            
            <div class="rounded-xl overflow-hidden border h-44 relative hover:opacity-100 transition-all duration-300 shadow-inner border-gray-200 opacity-95 dark:border-zinc-900 dark:grayscale dark:brightness-90 dark:opacity-80">
              <iframe
                class="w-full h-full border-0 absolute inset-0"
                :src="'https://maps.google.com/maps?q=' + encodeURIComponent(salon.adresse + ' ' + salon.codePostal + ' ' + salon.ville) + '&t=&z=14&ie=UTF8&iwloc=&output=embed'"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <!-- RATINGS / ONGLETS -->
          <div class="border rounded-2xl p-4 space-y-4 bg-white border-gray-100 shadow-sm dark:bg-zinc-900/30 dark:border-zinc-900">
            <div class="flex p-1 border rounded-xl bg-gray-100 border-gray-200/60 dark:bg-zinc-950 dark:border-zinc-900">
              <button
                @click="switchTab('global')"
                :class="activeTab === 'global' 
                    ? 'bg-white text-zinc-900 font-medium shadow-sm dark:bg-zinc-900 dark:text-white' 
                    : 'text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'"
                class="flex-1 py-2 text-[10px] uppercase tracking-wider rounded-lg transition-all focus:outline-none"
                type="button"
              >
                Index Évaluation
              </button>
              <button
                @click="switchTab('avis')"
                :class="activeTab === 'avis' 
                    ? 'bg-white text-zinc-900 font-medium shadow-sm dark:bg-zinc-900 dark:text-white' 
                    : 'text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'"
                class="flex-1 py-2 text-[10px] uppercase tracking-wider rounded-lg transition-all focus:outline-none"
                type="button"
              >
                Avis Clients
              </button>
            </div>

            <div class="mt-2 min-h-[140px] text-left">
              <!-- Onglet Index Global -->
              <template v-if="activeTab === 'global'">
                <div class="flex border rounded-xl overflow-hidden shadow-inner border-gray-100 bg-gray-50/50 dark:border-zinc-900 dark:bg-zinc-950/40">
                  <div class="border-r flex items-center justify-center px-6 py-4 bg-gray-100 border-gray-100 dark:bg-zinc-900 dark:border-zinc-900">
                    <span class="font-mono font-light text-3xl text-zinc-900 dark:text-white">
                      {{ noteGenerale !== null ? noteGenerale.toFixed(1) : '–' }}
                    </span>
                  </div>
                  <div class="flex-1 p-4 text-[11px] space-y-1.5 font-light text-zinc-500">
                    <p class="flex justify-between">
    Établissement 
    <span class="font-medium font-mono text-zinc-800 dark:text-zinc-300">
      {{ noteEtablissement !== null ? noteEtablissement.toFixed(1) : (noteGenerale !== null ? noteGenerale.toFixed(1) : '–') }} / 5
    </span>
  </p>
  
  <!-- Prestations : priorité à sa note, sinon note générale, sinon tiret -->
  <p class="flex justify-between">
    Prestations 
    <span class="font-medium font-mono text-zinc-800 dark:text-zinc-300">
      {{ notePrestations !== null ? notePrestations.toFixed(1) : (noteGenerale !== null ? noteGenerale.toFixed(1) : '–') }} / 5
    </span>
  </p>
  
  <!-- Staff de soin : priorité à sa note, sinon note générale, sinon tiret -->
  <p class="flex justify-between">
    Staff de soin 
    <span class="font-medium font-mono text-zinc-800 dark:text-zinc-300">
      {{ noteEmploye !== null ? noteEmploye.toFixed(1) : (noteGenerale !== null ? noteGenerale.toFixed(1) : '–') }} / 5
    </span>
  </p>
                    <div class="pt-2 border-t mt-2 border-gray-200 dark:border-zinc-900">
                      <p class="text-center text-[10px] font-normal text-zinc-400 dark:text-zinc-400">
                        Basé sur {{ nombreAvis }} avis client{{ nombreAvis > 1 ? 's' : '' }}
                      </p>

                      <!-- Détail des sources si avis multiples -->
                      <div v-if="avisList.length > 0 || googleReviewsCount > 0" class="flex items-center justify-center gap-3 mt-2 text-[9px]">
                        <div v-if="avisList.length > 0" class="flex items-center gap-1">
                          <span class="px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-600 border border-emerald-200 font-bold dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-900/40">
                            {{ avisList.length }}
                          </span>
                          <span class="text-zinc-400 dark:text-zinc-500">BookMySalon</span>
                        </div>
                        <div v-if="googleReviewsCount > 0" class="flex items-center gap-1">
                          <span class="px-1.5 py-0.5 rounded bg-blue-50 text-blue-600 border border-blue-200 font-bold dark:bg-blue-950/30 dark:text-blue-400 dark:border-blue-900/40">
                            {{ googleReviewsCount }}
                          </span>
                          <span class="text-zinc-400 dark:text-zinc-500">Google</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </template>

              <!-- Onglet Liste Avis -->
              <template v-else>
                <div class="max-h-[280px] overflow-y-auto space-y-3 pr-1 no-scrollbar">
                  <div
                    v-for="avis in avisListeCombinee"
                    :key="avis.id"
                    class="p-4 border rounded-xl space-y-3 border-gray-100 bg-gray-50/50 dark:border-zinc-900 dark:bg-zinc-950/20"
                  >
                    <!-- En-tête avec photo, nom et badge source -->
                    <div class="flex items-center gap-3">
                      <img
                        v-if="avis.photo"
                        :src="avis.photo"
                        :alt="avis.auteur"
                        class="w-8 h-8 rounded-full border-2 border-gray-200 dark:border-zinc-800"
                      />
                      <div v-else class="w-8 h-8 rounded-full bg-gray-200 dark:bg-zinc-800 flex items-center justify-center border-2 border-gray-300 dark:border-zinc-700">
                        <span class="text-[10px] font-medium text-zinc-600 dark:text-zinc-400">{{ avis.auteur?.charAt(0) || '?' }}</span>
                      </div>
                      <div class="flex-1">
                        <div class="flex items-center gap-2">
                          <span class="font-medium text-xs text-zinc-700 dark:text-zinc-300">{{ avis.auteur }}</span>
                          <span
                            v-if="avis.source === 'google'"
                            class="px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-blue-50 text-blue-600 border border-blue-200 dark:bg-blue-950/30 dark:text-blue-400 dark:border-blue-900/40"
                          >
                            Google
                          </span>
                          <span
                            v-else
                            class="px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-600 border border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-900/40"
                          >
                            Vérifié
                          </span>
                        </div>
                        <div class="flex items-center gap-2 mt-0.5">
                          <div class="flex items-center gap-0.5">
                            <svg v-for="i in avis.note" :key="i" class="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </div>
                          <span class="text-[10px] font-mono text-gray-400 dark:text-zinc-500">{{ avis.date.toLocaleDateString() }}</span>
                        </div>
                      </div>
                    </div>

                    <!-- Texte de l'avis -->
                    <p class="italic text-xs font-light leading-relaxed text-zinc-600 dark:text-zinc-400">"{{ avis.texte }}"</p>
                  </div>
                  <p v-if="avisListeCombinee.length === 0" class="text-center text-xs py-4 italic text-gray-400 dark:text-zinc-600">Aucun avis disponible pour le moment.</p>
                </div>
              </template>
            </div>
          </div>

          <!-- CTA PRINCIPAL -->
          <!-- Si établissement revendiqué: bouton de réservation en ligne -->
          <button
            v-if="isRevendique"
            @click="redirigerVersRdv()"
            class="w-full py-4 rounded-xl font-medium text-xs uppercase tracking-wider transition-all duration-300 transform active:scale-[0.99] mt-2
                   bg-zinc-900 text-white hover:bg-zinc-800 shadow-md shadow-zinc-900/10
                   dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-[#D5CCBC]"
          >
            Prendre un rendez-vous général
          </button>

          <!-- Si établissement NON revendiqué: lien téléphone -->
          <a
            v-else
            :href="`tel:${salon.telephone}`"
            @click="comptabiliserConversion('telephone')"
            class="w-full py-4 rounded-xl font-medium text-xs uppercase tracking-wider transition-all duration-300 transform active:scale-[0.99] mt-2 flex items-center justify-center gap-3
                   bg-amber-600 text-white hover:bg-amber-700 shadow-md shadow-amber-600/10
                   dark:bg-amber-500 dark:text-black dark:hover:bg-amber-400"
          >
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            Appeler pour réserver
          </a>

        </aside>
        </div>
      </div>
    </div>

    <!-- MODALE DE REVENDICATION -->
    <div v-if="showClaimModal" @click.self="showClaimModal = false" class="fixed inset-0 bg-zinc-950/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-all duration-300">
      <div class="max-w-md w-full rounded-2xl border p-6 shadow-2xl text-left bg-white border-gray-200 dark:bg-zinc-900 dark:border-zinc-800">
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-lg font-medium tracking-tight text-zinc-900 dark:text-white">Réclamer cette fiche</h3>
          <button @click="showClaimModal = false" class="transition-colors focus:outline-none text-zinc-400 hover:text-zinc-700 dark:hover:text-white">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form @submit.prevent="soumettreReclamation" class="space-y-4">
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-[11px] font-medium uppercase tracking-wider mb-1.5 text-zinc-600 dark:text-zinc-400">Prénom *</label>
              <input v-model="claimForm.prenom" type="text" required class="w-full px-3 py-2 text-sm rounded-xl border outline-none transition bg-gray-50 border-gray-200 text-zinc-900 focus:border-gray-400 dark:bg-zinc-950 dark:border-zinc-800 dark:text-white dark:focus:border-zinc-700" />
            </div>
            <div>
              <label class="block text-[11px] font-medium uppercase tracking-wider mb-1.5 text-zinc-600 dark:text-zinc-400">Nom *</label>
              <input v-model="claimForm.nom" type="text" required class="w-full px-3 py-2 text-sm rounded-xl border outline-none transition bg-gray-50 border-gray-200 text-zinc-900 focus:border-gray-400 dark:bg-zinc-950 dark:border-zinc-800 dark:text-white dark:focus:border-zinc-700" />
            </div>
          </div>

          <div>
            <label class="block text-[11px] font-medium uppercase tracking-wider mb-1.5 text-zinc-600 dark:text-zinc-400">Email *</label>
            <input v-model="claimForm.email" type="email" required class="w-full px-4 py-2.5 text-sm rounded-xl border outline-none transition bg-gray-50 border-gray-200 text-zinc-900 focus:border-gray-400 dark:bg-zinc-950 dark:border-zinc-800 dark:text-white dark:focus:border-zinc-700" />
          </div>

          <div>
            <label class="block text-[11px] font-medium uppercase tracking-wider mb-1.5 text-zinc-600 dark:text-zinc-400">Téléphone direct *</label>
            <input v-model="claimForm.telephone" type="tel" required class="w-full px-4 py-2.5 text-sm rounded-xl border outline-none transition bg-gray-50 border-gray-200 text-zinc-900 focus:border-gray-400 dark:bg-zinc-950 dark:border-zinc-800 dark:text-white dark:focus:border-zinc-700" />
          </div>



          <div class="flex gap-3 pt-2">
            <button type="button" @click="showClaimModal = false" class="flex-1 px-4 py-3 rounded-xl font-medium text-xs uppercase tracking-wider transition bg-gray-100 text-zinc-600 hover:bg-gray-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white">
              Annuler
            </button>
            <button type="submit" :disabled="isSubmitting" class="flex-1 px-4 py-3 rounded-xl font-medium text-xs uppercase tracking-wider transition disabled:opacity-50 disabled:cursor-not-allowed bg-amber-600 text-white hover:bg-amber-700 dark:bg-amber-400 dark:text-black dark:hover:bg-amber-500">
              {{ isSubmitting ? 'Envoi...' : 'Envoyer la demande' }}
            </button>
          </div>
        </form>
      </div>
    </div>


</template>
<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// 🔥 Forcer le mode SSR pour cette page (important pour SEO)
definePageMeta({
  layout: 'default'
})

const route = useRoute()
const router = useRouter()
const salonId = computed(() => route.params.slug || route.params.id)
const isSlug = computed(() => !!route.params.slug)

const activeTab = ref('global')
const showClaimModal = ref(false)
const isSubmitting = ref(false)
const claimForm = ref({ prenom: '', nom: '', email: '', telephone: '', message: '' })

// 🔥 Préremplir le téléphone depuis l'URL (SMS démarchage)
if (route.query.phone) {
  claimForm.value.telephone = decodeURIComponent(route.query.phone)
}

// 🔥 FETCH SSR : Charger les données du salon côté serveur
const { data: salon } = await useAsyncData(
  `salon-${salonId.value}`,
  async () => {
    const endpoint = isSlug.value
      ? `https://bookmysalon-967a856b16b6.herokuapp.com/api/search/slug/${salonId.value}`
      : `https://bookmysalon-967a856b16b6.herokuapp.com/api/search/${salonId.value}`

    const response = await $fetch(endpoint)
    const salonData = response?.data || response

    console.log('✅ [SSR] Données salon chargées:', salonData?.nom_societe)
    return salonData
  },
  {
    // Salon par défaut si l'API échoue
    default: () => ({
      _id: 'default',
      telephone: '+33 1 23 45 67 89',
      nom_societe: 'Salon Test Paris',
      description: 'Un salon de test pour prévisualisation',
      logo: 'https://cdn1.treatwell.net/images/view/v2.i7407486.w1080.h720.x441F3531/',
      isActive: false,
      horaires: {
        lundi: [{ debut: '09:00', fin: '19:00' }],
        mardi: [{ debut: '09:00', fin: '19:00' }],
        mercredi: [{ debut: '09:00', fin: '19:00' }],
        jeudi: [{ debut: '09:00', fin: '19:00' }],
        vendredi: [{ debut: '09:00', fin: '19:00' }],
        samedi: [{ debut: '10:00', fin: '18:00' }],
        dimanche: []
      },
      distance_km: 1.2,
      rating: null,
      nextAvailable: '10:00',
      adresse: '10 rue de Test, Paris',
      categories: [
        {
          _id: "cat1",
          nom: "Coiffure",
          services: [
            { _id: "s1", nom: "Coupe homme", description: "Coupe classique homme", prix: 25, duree: 30 },
            { _id: "s2", nom: "Coupe femme", description: "Coupe et brushing", prix: 40, duree: 45 },
          ],
        },
        {
          _id: "cat2",
          nom: "Esthétique",
          services: [
            { _id: "s3", nom: "Manucure", description: "Soin complet des ongles", prix: 20, duree: 30 },
            { _id: "s4", nom: "Épilation sourcils", description: "Épilation professionnelle", prix: 10, duree: 15 },
          ],
        },
      ],
      photos: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN7WZOC6Z02AYB48RLy7w23AV86ndJUvYrXw&s",
      ],
      administrateurs: [],
    })
  }
)

// 🔥 FETCH SSR : Avis
const { data: avisData } = await useAsyncData(
  `avis-${salon.value?._id}`,
  async () => {
    if (!salon.value?._id || salon.value._id === 'default') return null

    try {
      const response = await $fetch(`https://bookmysalon-967a856b16b6.herokuapp.com/api/avis/${salon.value._id}`)
      console.log('✅ [SSR] Avis chargés')
      return response
    } catch (error) {
      console.warn('⚠️ [SSR] Erreur avis:', error.message)
      return null
    }
  },
  { default: () => null }
)

// 🔥 FETCH SSR : Promotions
const { data: promotionsData } = await useAsyncData(
  `promotions-${salon.value?._id}`,
  async () => {
    if (!salon.value?._id || salon.value._id === 'default') return null

    try {
      const response = await $fetch(`https://bookmysalon-967a856b16b6.herokuapp.com/api/promotions/firm/${salon.value._id}`)
      console.log('✅ [SSR] Promotions chargées')
      return response
    } catch (error) {
      console.warn('⚠️ [SSR] Pas de promotions')
      return null
    }
  },
  { default: () => null }
)

// 🔥 FETCH SSR : Avis Google
const { data: googleReviewsData } = await useAsyncData(
  `google-reviews-${salonId.value}`,
  async () => {
    if (!salon.value?._id || salon.value._id === 'default') {
      console.log('⏭️ [SSR] Skip avis Google : salon par défaut ou pas d\'ID')
      return null
    }

    try {
      // Utiliser le slug ou l'ID du salon (priorité au slug pour cohérence URL)
      const identifier = salon.value.slug || salon.value._id
      console.log('🔍 [SSR] Fetch avis Google pour:', identifier)
      console.log('   - Nom salon:', salon.value.nom_societe)
      console.log('   - Type:', salon.value.typeResultat)

      const response = await $fetch(`https://bookmysalon-967a856b16b6.herokuapp.com/api/firm/${identifier}/reviews`)

      console.log('✅ [SSR] Réponse avis Google reçue:')
      console.log('   - Success:', response?.success)
      console.log('   - Rating:', response?.reviews?.rating)
      console.log('   - Count:', response?.reviews?.count)
      console.log('   - Reviews:', response?.reviews?.reviews?.length, 'avis')

      return response
    } catch (error) {
      console.error('❌ [SSR] Erreur avis Google:', error)
      console.error('   - Message:', error.message)
      console.error('   - Status:', error.statusCode)
      return null
    }
  },
  { default: () => null }
)

// Extraire les données des avis
const noteEtablissement = computed(() => avisData.value?.moyennes?.noteEtablissement || null)
const notePrestations = computed(() => avisData.value?.moyennes?.notePrestations || null)
const noteEmploye = computed(() => avisData.value?.moyennes?.noteEmploye || null)
const noteGenerale = computed(() => {
  // Note générale = moyenne entre note interne et note Google
  let totalRating = 0
  let count = 0

  // Note interne BookMySalon
  const noteInterne = avisData.value?.moyennes?.noteGenerale
  if (noteInterne && noteInterne > 0) {
    totalRating += noteInterne
    count++
  }

  // Note Google
  if (googleRating.value && googleRating.value > 0) {
    totalRating += googleRating.value
    count++
  }

  // Retourner la moyenne, ou null si aucune note
  return count > 0 ? Math.round((totalRating / count) * 10) / 10 : null
})

const avisList = computed(() => avisData.value?.avis || [])
const nombreAvis = computed(() => {
  const avisInternes = avisList.value.length
  const avisGoogle = googleReviewsCount.value
  return avisInternes + avisGoogle
})

// Extraire les promotions actives
const promotions = computed(() => {
  if (!promotionsData.value?.success || !promotionsData.value?.promotions) return []

  return promotionsData.value.promotions.filter(promo =>
    promo.actif &&
    new Date(promo.dateDebut) <= new Date() &&
    new Date(promo.dateFin) >= new Date()
  )
})

// Extraire les avis Google
const googleRating = computed(() => {
  const rating = googleReviewsData.value?.reviews?.rating || 0
  console.log('🎯 [Computed] googleRating:', rating)
  return rating
})

const googleReviewsCount = computed(() => {
  const count = googleReviewsData.value?.reviews?.count || 0
  console.log('🎯 [Computed] googleReviewsCount:', count)
  return count
})

const googleReviews = computed(() => {
  console.log('📦 [Debug] googleReviewsData complet:', JSON.stringify(googleReviewsData.value, null, 2))

  const reviews = googleReviewsData.value?.reviews?.reviews || []
  console.log('🎯 [Computed] googleReviews:', reviews.length, 'avis')
  console.log('📋 [Debug] Premier avis:', reviews[0])

  return reviews
})

const hasGoogleReviews = computed(() => googleReviewsCount.value > 0)

// Combiner les avis Google et les avis internes pour l'affichage
const avisListeCombinee = computed(() => {
  console.log('🔄 [avisListeCombinee] Recalcul...')
  const combined = []

  // Ajouter les avis internes (BookMySalon)
  if (avisList.value && avisList.value.length > 0) {
    console.log('➕ Ajout de', avisList.value.length, 'avis BookMySalon')
    avisList.value.forEach(avis => {
      combined.push({
        id: avis._id,
        source: 'bookmysalon',
        texte: avis.avis,
        auteur: `${avis.clientId?.prenom || ''} ${avis.clientId?.nom?.[0] || ''}.`,
        date: new Date(avis.dateAvis),
        note: avis.noteGenerale || 5,
        photo: null
      })
    })
  }

  // Ajouter les avis Google
  console.log('🔍 [avisListeCombinee] googleReviews.value:', googleReviews.value)
  console.log('📊 [avisListeCombinee] Longueur:', googleReviews.value?.length)

  if (googleReviews.value && googleReviews.value.length > 0) {
    console.log('➕ Ajout de', googleReviews.value.length, 'avis Google')
    googleReviews.value.forEach((review, idx) => {
      console.log(`   Avis ${idx + 1}:`, review.authorName, '-', review.rating, '⭐')
      combined.push({
        id: `google-${idx}`,
        source: 'google',
        texte: review.text || 'Avis sans commentaire',
        auteur: review.authorName,
        date: new Date(review.time * 1000), // Convertir timestamp Unix en Date
        note: review.rating,
        photo: review.profilePhotoUrl
      })
    })
  } else {
    console.log('⚠️ [avisListeCombinee] Aucun avis Google à ajouter')
  }

  // Trier par note (décroissant) puis par date (plus récent d'abord)
  return combined
    .sort((a, b) => {
      if (b.note !== a.note) return b.note - a.note
      return b.date - a.date
    })
    .slice(0, 5) // Limiter à 5 avis
})

// Computed pour vérifier si l'établissement fait partie du réseau BookMySalon
const isRevendique = computed(() => {
  return salon.value?.isActive === true
})

// 🔥 Fonction pour extraire la ville depuis l'adresse
const extraireVille = () => {
  if (!salon.value?.adresse && !salon.value?.ville) return ''

  // Si le champ ville existe directement
  if (salon.value.ville) return salon.value.ville

  // Sinon, extraire de l'adresse (format: "10 rue X, 95120 Ermont" ou "10 rue X, Ermont")
  const adresse = salon.value.adresse || ''
  const parts = adresse.split(',')
  if (parts.length >= 2) {
    // Prendre la dernière partie et enlever le code postal si présent
    const dernierePart = parts[parts.length - 1].trim()
    return dernierePart.replace(/^\d{5}\s*/, '') // Enlever code postal type "95120 "
  }

  // Fallback: chercher un mot après une virgule
  const match = adresse.match(/,\s*([A-Za-zÀ-ÿ\s-]+)$/i)
  return match ? match[1].trim() : ''
}

// 🔥 Fonction pour obtenir la prestation principale (première catégorie)
const getPrestationPrincipale = () => {
  if (!salon.value?.categories || salon.value.categories.length === 0) return 'Beauté & Bien-être'

  const premiereCategorie = salon.value.categories[0]
  return premiereCategorie.nom || 'Beauté & Bien-être'
}

// 🔥 Construire le titre SEO optimisé (max 60 caractères)
const titreSEO = computed(() => {
  const nom = salon.value?.nom_societe || 'Salon'
  const prestation = getPrestationPrincipale()
  const ville = extraireVille()

  let titre = ''
  if (ville) {
    titre = `${nom} - ${prestation} à ${ville} | BookMySalon`
  } else {
    titre = `${nom} - ${prestation} | BookMySalon`
  }

  // Limiter à 60 caractères pour Google
  if (titre.length > 60) {
    // Tronquer le nom du salon si nécessaire
    const nomCourt = nom.substring(0, 30)
    titre = `${nomCourt} - ${prestation} à ${ville} | BookMySalon`

    // Si encore trop long, enlever "à [ville]"
    if (titre.length > 60) {
      titre = `${nomCourt} - ${prestation} | BookMySalon`
    }
  }

  return titre
})

// 🔥 Construire la description SEO optimisée (max 155 caractères)
const descriptionSEO = computed(() => {
  const nom = salon.value?.nom_societe || 'notre salon'
  const ville = extraireVille()
  const prestation = getPrestationPrincipale()

  // Extraire une spécificité depuis la description ou utiliser la prestation
  let specificite = prestation
  if (salon.value?.description && salon.value.description.length > 20) {
    // Calculer l'espace disponible pour la spécificité
    const baseLength = `Prenez rendez-vous en ligne chez ${nom} à ${ville}. . Consultez les avis, les horaires et réservez en 1 clic !`.length
    const maxSpecificite = 155 - baseLength

    specificite = salon.value.description.substring(0, Math.max(20, maxSpecificite)).trim()
    if (salon.value.description.length > maxSpecificite) {
      specificite = specificite.replace(/\s+\S*$/, '...') // Couper au dernier mot
    }
  }

  let description = ''
  if (ville) {
    description = `Prenez rendez-vous en ligne chez ${nom} à ${ville}. ${specificite}. Consultez les avis, les horaires et réservez en 1 clic !`
  } else {
    description = `Prenez rendez-vous en ligne chez ${nom}. ${specificite}. Consultez les avis, les horaires et réservez en 1 clic !`
  }

  // Limite de sécurité à 155 caractères
  if (description.length > 155) {
    description = description.substring(0, 152) + '...'
  }

  return description
})

// 🔥 SEO : Métadonnées dynamiques pour Google
useSeoMeta({
  title: titreSEO,
  description: descriptionSEO,
  ogTitle: titreSEO,
  ogDescription: descriptionSEO,
  ogImage: () => salon.value?.logo || salon.value?.image || '',
  ogUrl: () => `https://bookmysalon.fr/etablissement/${salonId.value}`,
  twitterCard: 'summary_large_image',
  twitterTitle: titreSEO,
  twitterDescription: descriptionSEO,
  twitterImage: () => salon.value?.logo || salon.value?.image || ''
})

// 🔥 Structured Data JSON-LD pour Google (LocalBusiness)
const structuredData = computed(() => {
  const ville = extraireVille()
  const prestation = getPrestationPrincipale()

  const data = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: salon.value?.nom_societe || 'Salon',
    description: descriptionSEO.value,
    image: salon.value?.logo || salon.value?.image || '',
    address: {
      '@type': 'PostalAddress',
      streetAddress: salon.value?.adresse || '',
      addressLocality: ville || salon.value?.ville || '',
      addressCountry: 'FR'
    },
    telephone: salon.value?.telephone || '',
    url: `https://bookmysalon.fr/etablissement/${salonId.value}`,
    priceRange: '€€',
    ...(noteGenerale.value && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: noteGenerale.value,
        reviewCount: nombreAvis.value
      }
    })
  }

  // Ajouter les horaires d'ouverture si disponibles
  if (salon.value?.horaires) {
    const openingHours = []
    const jours = {
      lundi: 'Monday',
      mardi: 'Tuesday',
      mercredi: 'Wednesday',
      jeudi: 'Thursday',
      vendredi: 'Friday',
      samedi: 'Saturday',
      dimanche: 'Sunday'
    }

    for (const [jourFr, jourEn] of Object.entries(jours)) {
      const horaire = salon.value.horaires[jourFr]
      if (horaire && horaire.length > 0 && horaire[0].debut && horaire[0].fin) {
        openingHours.push(`${jourEn} ${horaire[0].debut}-${horaire[0].fin}`)
      }
    }

    if (openingHours.length > 0) {
      data.openingHours = openingHours
    }
  }

  return data
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: () => JSON.stringify(structuredData.value)
    }
  ]
})

// 🔥 Comptabiliser la vue côté client uniquement (pas en SSR)
if (import.meta.client && salon.value?._id && salon.value._id !== 'default') {
  comptabiliserVue(salon.value._id).catch(err => console.error('Erreur tracking vue:', err))
}

// 🔍 Debug SEO en mode développement
if (import.meta.dev && import.meta.client) {
  watch([titreSEO, descriptionSEO], () => {
    console.group('🔍 SEO Debug')
    console.log('📌 Titre:', titreSEO.value, `(${titreSEO.value.length} caractères)`)
    console.log('📝 Description:', descriptionSEO.value, `(${descriptionSEO.value.length} caractères)`)
    console.log('📍 Ville extraite:', extraireVille())
    console.log('🎯 Prestation principale:', getPrestationPrincipale())
    console.log('📊 Structured Data:', structuredData.value)
    console.groupEnd()
  }, { immediate: true })
}
function calculerPrixAvecPromo(service) {
  if (!promotions.value || promotions.value.length === 0) {
    return { prixFinal: service.prix, hasPromo: false }
  }
  const promo = promotions.value.find(p =>
    (!p.servicesSpecifiques || p.servicesSpecifiques.length === 0 ||
     p.servicesSpecifiques.includes(service._id))
  )
  if (!promo) return { prixFinal: service.prix, hasPromo: false }

  let prixFinal = service.prix
  switch (promo.type) {
    case 'percentage': prixFinal = service.prix * (1 - promo.valeur / 100); break;
    case 'fixed_amount': prixFinal = Math.max(0, service.prix - promo.valeur); break;
    case 'free_service': prixFinal = 0; break;
  }
  return {
    prixFinal: Number(prixFinal).toFixed(2),
    hasPromo: true,
    promoType: promo.type,
    promoValeur: promo.valeur,
    prixOriginal: service.prix
  }
}

function switchTab(tab) { activeTab.value = tab }
async function redirigerVersRdv() { await comptabiliserConversion('reserver'); router.push(`/rendez-vous/${salon.value._id}`) }
async function prendreRdv(service) { await comptabiliserConversion('reserver'); router.push({ path: `/rendez-vous/${salon.value._id}`, query: { service: service._id } }) }
function ouvrirPhoto(photoUrl) { window.open(photoUrl, '_blank') }

// 🔥 SÉCURISATION : Cette fonction ne provoquera plus jamais de bug undefined / slice
function getInitiales(prenom, nom) {
  const p = prenom && typeof prenom === 'string' && prenom.length > 0 ? prenom[0].toUpperCase() : ''
  const n = nom && typeof nom === 'string' && nom.length > 0 ? nom[0].toUpperCase() : ''
  return p || n ? `${p}${n}` : '??'
}

function retourAuxResultats() { router.back() }

async function comptabiliserVue() {
  const actualSalonId = salon.value._id || salonId.value;
  if (!actualSalonId || actualSalonId === 'default') return
  await $fetch(`https://bookmysalon-967a856b16b6.herokuapp.com/api/prospect/track/view/${actualSalonId}`, {
    method: 'POST',
    body: {
      type: salon.value.typeResultat || 'firm'
    }
  })
}

async function comptabiliserConversion(action) {
  try {
    const actualSalonId = salon.value._id || salonId.value;
    await $fetch(`https://bookmysalon-967a856b16b6.herokuapp.com/api/prospect/track/conversion/${actualSalonId}`, {
      method: 'POST',
      body: {
        type: salon.value.typeResultat || 'firm',
        action
      }
    })
  } catch (error) {
    console.error('Erreur conversion tracking:', error)
  }
}

function reclamerFiche() { showClaimModal.value = true }

async function soumettreReclamation() {
  isSubmitting.value = true
  try {
    const actualSalonId = salon.value._id || salonId.value;
    const response = await $fetch('https://bookmysalon-967a856b16b6.herokuapp.com/api/prospect/claim', {
      method: 'POST',
      body: {
        prospectId: actualSalonId,
        ...claimForm.value
      }
    })
    if (response.success) {
      alert(response.message)
      await comptabiliserConversion('reclamation')
      showClaimModal.value = false
      claimForm.value = { prenom: '', nom: '', email: '', telephone: '', message: '' }
    }
  } catch (error) {
    alert(error.data?.message || 'Une erreur est survenue lors de la réclamation')
  } finally {
    isSubmitting.value = false
  }
}
</script>



<style scoped>
/* Ajoute ici du style personnalisé si nécessaire */
</style>
