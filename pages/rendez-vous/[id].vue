<template>
  <div class="px-4 py-8 md:py-12 font-sans select-none text-left min-h-screen transition-colors duration-300"
    :class="isDark ? 'bg-black text-zinc-300' : 'bg-[#FDFCF8] text-[#7A7367]'">
    <div class="max-w-3xl mx-auto space-y-12">

      <section v-if="selectedServices.length" class="space-y-4">
        <div class="flex items-center justify-between">
          <h2 class="text-xs font-medium uppercase tracking-widest flex items-center gap-2"
            :class="isDark ? 'text-zinc-400' : 'text-[#2D2924]'">
            <span class="h-1.5 w-1.5 rounded-full animate-pulse" :class="isDark ? 'bg-[#D5CCBC]' : 'bg-[#A69B88]'"></span>
            Votre sélection
          </h2>
          <span class="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full"
            :class="isDark ? 'bg-zinc-900 text-[#D5CCBC]' : 'bg-[#F7F5F0] text-[#A69B88]'">
            {{ selectedServices.length }} {{ selectedServices.length > 1 ? 'prestations' : 'prestation' }}
          </span>
        </div>

        <div class="grid gap-3">
          <div
            v-for="(service, index) in selectedServices"
            :key="index"
            class="border rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-4 transition-all duration-200"
            :class="isDark
              ? 'bg-zinc-900/40 border-zinc-900/80 backdrop-blur-md'
              : 'bg-[#FDFCF8] border-[#E5E0D8] shadow-sm'"
          >
            <div class="space-y-1 min-w-0 flex-1">
              <p class="text-sm font-semibold tracking-tight truncate"
                :class="isDark ? 'text-white' : 'text-[#2D2924]'">{{ service.name }}</p>
              <div class="flex items-center gap-2 text-xs"
                :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">
                <span class="flex items-center gap-1"><i class="far fa-clock text-[10px]"></i> {{ service.duration }} min</span>
                <span>•</span>
                <span class="font-bold text-sm"
                  :class="isDark ? 'text-[#D5CCBC]' : 'text-[#2D2924]'">{{ service.price }} €</span>
              </div>
            </div>

            <button
              @click="removeService(index)"
              class="text-xs font-semibold uppercase tracking-wider text-rose-500 dark:text-rose-400 p-2 hover:bg-rose-500/10 rounded-xl transition-all"
            >
              Supprimer
            </button>
          </div>
        </div>

        <button
          type="button"
          @click="showPrestationList = true"
          class="w-full sm:w-auto inline-flex items-center justify-center gap-2 border rounded-xl px-5 py-3.5 text-xs font-semibold tracking-wider uppercase transition-all duration-200 active:scale-95"
          :class="isDark
            ? 'bg-zinc-900 hover:bg-zinc-800 text-white border-zinc-800'
            : 'bg-[#FDFCF8] hover:bg-[#F7F5F0] text-[#2D2924] border-[#E5E0D8] shadow-sm'"
        >
          <i class="fas fa-plus text-[10px]"></i> Ajouter une autre prestation
        </button>

        <!-- Récapitulatif avec promotions -->
        <div class="border rounded-2xl p-5 space-y-3 transition-colors duration-200"
          :class="isDark ? 'bg-zinc-900/30 border-zinc-900' : 'bg-[#FDFCF8] border-[#E5E0D8] shadow-sm'">

          <div class="flex items-center justify-between text-sm">
            <span :class="isDark ? 'text-zinc-400' : 'text-[#7A7367]'">Sous-total</span>
            <span class="font-semibold" :class="isDark ? 'text-white' : 'text-[#2D2924]'">
              {{ montantTotal.toFixed(2) }}€
            </span>
          </div>

          <!-- Promotions disponibles -->
          <div v-if="promotions.length > 0 && !loadingPromotions" class="space-y-2">
            <p class="text-[11px] font-medium uppercase tracking-wider"
              :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">
              🎁 Promotions disponibles
            </p>
            <div v-for="promo in promotions" :key="promo._id"
              class="flex items-center justify-between text-xs p-2 rounded-lg"
              :class="isDark ? 'bg-zinc-900/50' : 'bg-[#F7F5F0]'">
              <span :class="isDark ? 'text-zinc-300' : 'text-[#2D2924]'">{{ promo.nom }}</span>
              <span class="font-semibold text-emerald-600 dark:text-emerald-400">
                {{ promo.type === 'percentage' ? `-${promo.valeur}%` : `-${promo.valeur}€` }}
              </span>
            </div>
          </div>

          <!-- Fidélité client -->
          <div v-if="clientFidelite && clientFidelite.reductionDisponible > 0"
            class="flex items-center justify-between text-xs p-2 rounded-lg"
            :class="isDark ? 'bg-amber-500/10 border border-amber-500/20' : 'bg-amber-50 border border-amber-200'">
            <span class="flex items-center gap-2" :class="isDark ? 'text-amber-300' : 'text-amber-700'">
              <i class="fas fa-star"></i> Réduction fidélité
            </span>
            <span class="font-semibold text-amber-600 dark:text-amber-400">
              -{{ clientFidelite.reductionDisponible }}%
            </span>
          </div>

          <!-- Réduction appliquée -->
          <div v-if="reductionAppliquee"
            class="flex items-center justify-between text-sm pt-2 border-t"
            :class="isDark ? 'border-zinc-800' : 'border-[#E5E0D8]'">
            <span class="font-medium" :class="isDark ? 'text-emerald-400' : 'text-emerald-600'">
              {{ reductionAppliquee.label }}
            </span>
            <span class="font-bold text-emerald-600 dark:text-emerald-400">
              -{{ reductionAppliquee.montant.toFixed(2) }}€
            </span>
          </div>

          <!-- Montant final -->
          <div class="flex items-center justify-between pt-3 border-t"
            :class="isDark ? 'border-zinc-800' : 'border-[#E5E0D8]'">
            <span class="text-sm font-semibold uppercase tracking-wider"
              :class="isDark ? 'text-white' : 'text-[#2D2924]'">
              Total à payer
            </span>
            <span class="text-xl font-bold"
              :class="isDark ? 'text-white' : 'text-[#2D2924]'">
              {{ montantFinal.toFixed(2) }}€
            </span>
          </div>
        </div>
      </section>

      <section v-if="showPrestationList" class="space-y-6">
        <div class="flex items-center justify-between">
          <h2 class="text-xs font-medium uppercase tracking-widest flex items-center gap-2"
            :class="isDark ? 'text-zinc-400' : 'text-[#2D2924]'">
            <span class="h-1.5 w-1.5 rounded-full" :class="isDark ? 'bg-[#D5CCBC]' : 'bg-[#A69B88]'"></span>
            Choisir une prestation
          </h2>
          <button
            v-if="selectedServices.length > 0"
            @click="showPrestationList = false"
            class="text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-xl transition-all duration-200 active:scale-95"
            :class="isDark
              ? 'text-zinc-400 hover:text-white hover:bg-zinc-900'
              : 'text-[#7A7367] hover:text-[#2D2924] hover:bg-[#F7F5F0]'"
          >
            <i class="fas fa-times mr-2"></i>Annuler
          </button>
        </div>

        <div class="flex overflow-x-auto space-x-2 pb-2 -mx-4 px-4 scrollbar-none border-b transition-colors duration-200"
          :class="isDark ? 'border-zinc-900' : 'border-[#E5E0D8]'">
          <button
            v-for="(category, index) in categories"
            :key="index"
            @click="activeCategory = category"
            :class="[
              'px-4 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 whitespace-nowrap',
              activeCategory === category
                ? isDark
                  ? 'bg-white text-black shadow-lg shadow-white/5'
                  : 'bg-[#2D2924] text-white shadow-md shadow-zinc-900/10'
                : isDark
                  ? 'bg-zinc-900 text-zinc-400 hover:text-white'
                  : 'bg-[#F7F5F0] text-[#8C8579] hover:bg-[#E5E0D8]/50'
            ]"
          >
            {{ category }}
          </button>
        </div>

        <div class="border rounded-2xl overflow-hidden shadow-sm transition-colors duration-200"
          :class="isDark
            ? 'bg-zinc-950 border-zinc-900 divide-y divide-zinc-900'
            : 'bg-[#FDFCF8] border-[#E5E0D8] divide-y divide-[#E5E0D8]'">
          <div
            v-for="(service, index) in filteredServices"
            :key="index"
            class="p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition-all group"
            :class="isDark ? 'hover:bg-zinc-900/30' : 'hover:bg-[#F7F5F0]/60'"
          >
            <div class="space-y-1 flex-1 text-left">
              <h4 class="text-sm font-semibold transition-colors"
                :class="isDark ? 'text-white' : 'text-[#2D2924]'">
                {{ service.name }}
              </h4>
              <p class="text-xs font-light leading-relaxed text-balance"
                :class="isDark ? 'text-zinc-400' : 'text-[#7A7367]'">
                {{ service.description }}
              </p>

              <button
                @click="toggleDetails(service)"
                class="text-[11px] font-medium flex items-center gap-1 pt-1.5 transition-colors focus:outline-none"
                :class="isDark ? 'text-zinc-500 hover:text-[#D5CCBC]' : 'text-[#8C8579] hover:text-[#A69B88]'"
              >
                <span>{{ service.showDetails ? 'Masquer la description' : 'En savoir plus' }}</span>
                <i class="fas text-[9px]" :class="service.showDetails ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
              </button>

              <div v-if="service.showDetails" class="mt-2.5 p-3.5 border rounded-xl text-xs font-light leading-relaxed transition-all"
                :class="isDark
                  ? 'bg-zinc-900/50 border-zinc-900 text-zinc-400'
                  : 'bg-[#F7F5F0] border-[#E5E0D8] text-[#7A7367]'">
                {{ service.details }}
              </div>
            </div>

            <div class="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-4 sm:pt-0 border-t sm:border-t-0"
              :class="isDark ? 'border-zinc-900' : 'border-[#E5E0D8]'">
              <div class="flex flex-col text-left sm:text-right">
                <span class="text-base font-bold tracking-tight"
                  :class="isDark ? 'text-white' : 'text-[#2D2924]'">{{ service.price }} €</span>
                <span class="text-xs font-light"
                  :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">{{ service.duration }} min</span>
              </div>

              <button
                @click="addService(service)"
                class="px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all duration-200 active:scale-95 shadow-sm"
                :class="isDark
                  ? 'bg-white hover:bg-[#D5CCBC] text-black'
                  : 'bg-[#2D2924] hover:bg-[#A69B88] text-white'"
              >
                Choisir
              </button>
            </div>
          </div>
        </div>
      </section>

      <section v-if="selectedServices.length && !showPrestationList && !selectedCollaborateur" class="space-y-6">
        <h2 class="text-xs font-medium uppercase tracking-widest flex items-center gap-2"
          :class="isDark ? 'text-zinc-400' : 'text-[#2D2924]'">
          <span class="h-1.5 w-1.5 rounded-full" :class="isDark ? 'bg-[#D5CCBC]' : 'bg-[#A69B88]'"></span>
          Choix de l'équipe
        </h2>

        <div v-if="loadingCollaborateurs" class="text-center py-12 border border-dashed rounded-2xl"
          :class="isDark ? 'border-zinc-800' : 'border-[#E5E0D8]'">
          <i class="fas fa-circle-notch fa-spin text-sm text-[#A69B88] dark:text-[#D5CCBC]"></i>
          <p class="mt-3 text-xs font-light" :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">Recherche des experts disponibles...</p>
        </div>

        <div v-else class="space-y-6">
          <div class="space-y-3">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div
                v-for="collab in collaborateursDisponibles"
                :key="collab._id"
                @click="selectionnerCollaborateur(collab)"
                class="border rounded-2xl p-4 cursor-pointer transition-all duration-200 hover:shadow-md flex items-center justify-between group"
                :class="isDark
                  ? 'bg-zinc-900/30 border-zinc-900 hover:border-[#D5CCBC]'
                  : 'bg-[#FDFCF8] border-[#E5E0D8] hover:border-[#A69B88]'"
              >
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border filter grayscale transition-all group-hover:grayscale-0"
                    :class="isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-[#F7F5F0] border-[#E5E0D8]'">
                    <img v-if="collab.photo" :src="collab.photo" :alt="collab.prenom" class="w-full h-full object-cover">
                    <div v-else class="w-full h-full flex items-center justify-center text-xs font-bold"
                      :class="isDark ? 'text-zinc-400' : 'text-[#8C8579]'">
                      {{ collab.prenom.charAt(0) }}{{ collab.nom.charAt(0) }}
                    </div>
                  </div>
                  <div>
                    <p class="text-sm font-semibold transition-colors"
                      :class="isDark ? 'text-white group-hover:text-[#D5CCBC]' : 'text-[#2D2924] group-hover:text-[#A69B88]'">
                      {{ collab.prenom }} {{ collab.nom }}
                    </p>
                    <span class="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 dark:text-emerald-400 px-2 py-0.5 rounded-md mt-1">
                      Disponible
                    </span>
                  </div>
                </div>
                <i class="fas fa-chevron-right text-[10px] group-hover:translate-x-0.5 transition-transform"
                  :class="isDark ? 'text-zinc-700' : 'text-[#A69B88]'"></i>
              </div>
            </div>
          </div>

          <div v-if="collaborateursNonDisponibles.length > 0" class="space-y-3">
            <p class="text-[11px] font-medium uppercase tracking-widest"
              :class="isDark ? 'text-zinc-600' : 'text-[#8C8579]'">
              Indisponibles pour ces soins
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 opacity-50">
              <div
                v-for="collab in collaborateursNonDisponibles"
                :key="collab._id"
                class="border rounded-2xl p-4 flex items-center gap-4 cursor-not-allowed"
                :class="isDark ? 'bg-zinc-950 border-zinc-900' : 'bg-[#F7F5F0] border-[#E5E0D8]'"
              >
                <div class="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 grayscale bg-zinc-900 border"
                  :class="isDark ? 'border-zinc-800' : 'border-[#E5E0D8]'">
                  <img v-if="collab.photo" :src="collab.photo" :alt="collab.prenom" class="w-full h-full object-cover">
                  <div v-else class="w-full h-full flex items-center justify-center text-xs font-bold text-zinc-500">
                    {{ collab.prenom.charAt(0) }}{{ collab.nom.charAt(0) }}
                  </div>
                </div>
                <div class="min-w-0 flex-1 text-left">
                  <p class="text-sm font-semibold" :class="isDark ? 'text-zinc-500' : 'text-[#7A7367]'">
                    {{ collab.prenom }} {{ collab.nom }}
                  </p>
                  <p class="text-[11px] font-medium uppercase tracking-wider text-rose-500 mt-0.5">
                    Indisponible
                  </p>
                  <div v-if="collab.servicesManquants && collab.servicesManquants.length > 0" class="mt-2 space-y-1">
                    <p class="text-[10px] font-semibold uppercase tracking-wider" :class="isDark ? 'text-zinc-600' : 'text-zinc-500'">
                      Compétences manquantes :
                    </p>
                    <div class="flex flex-wrap gap-1">
                      <span v-for="(service, idx) in collab.servicesManquants" :key="idx"
                        class="text-[9px] px-2 py-0.5 rounded-full"
                        :class="isDark ? 'bg-rose-950/50 text-rose-400' : 'bg-rose-100 text-rose-700'">
                        {{ service }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section v-if="selectedServices.length && !showPrestationList && selectedCollaborateur" class="space-y-6">
        <h2 class="text-xs font-medium uppercase tracking-widest flex items-center gap-2"
          :class="isDark ? 'text-zinc-400' : 'text-[#2D2924]'">
          <span class="h-1.5 w-1.5 rounded-full" :class="isDark ? 'bg-[#D5CCBC]' : 'bg-[#A69B88]'"></span>
          Date & Heure
        </h2>

        <div class="border rounded-2xl p-4 flex items-center justify-between transition-colors duration-200"
          :class="isDark ? 'bg-zinc-900/30 border-zinc-900' : 'bg-[#FDFCF8] border-[#E5E0D8] shadow-sm'">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border filter grayscale"
              :class="isDark ? 'border-zinc-800' : 'border-[#E5E0D8]'">
              <img v-if="selectedCollaborateur.photo" :src="selectedCollaborateur.photo" :alt="selectedCollaborateur.prenom" class="w-full h-full object-cover">
              <div v-else class="w-full h-full flex items-center justify-center text-xs font-bold"
                :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">
                {{ selectedCollaborateur.prenom.charAt(0) }}{{ selectedCollaborateur.nom.charAt(0) }}
              </div>
            </div>
            <div>
              <p class="text-[11px] font-medium uppercase tracking-wider" :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">Votre expert :</p>
              <p class="text-sm font-semibold" :class="isDark ? 'text-white' : 'text-[#2D2924]'">
                {{ selectedCollaborateur.prenom }} {{ selectedCollaborateur.nom }}
              </p>
            </div>
          </div>
          <button
            @click="changerCollaborateur"
            class="text-xs font-semibold uppercase tracking-wider text-[#A69B88] dark:text-[#D5CCBC] hover:underline px-3 py-1.5 rounded-lg"
          >
            Modifier
          </button>
        </div>

        <div class="border rounded-2xl overflow-hidden shadow-sm"
          :class="isDark ? 'bg-zinc-950 border-zinc-900' : 'bg-[#FDFCF8] border-[#E5E0D8]'">
          <TimeslotComponents
            :selectedServices="selectedServices"
            :firmId="firmId"
            :employeId="selectedCollaborateur._id"
            :isDark="isDark"
            @creneau-selectionne="handleCreneauSelectionne"
          />
        </div>

        <div class="space-y-2 text-left">
          <label class="text-xs font-medium uppercase tracking-widest"
            :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">
            Notes pour le salon <span class="font-normal lowercase italic text-zinc-400/80">(optionnel)</span>
          </label>
          <textarea
            v-model="noteRdv"
            rows="3"
            placeholder="Une consigne particulière pour votre soin..."
            class="w-full border rounded-2xl p-4 text-sm font-light transition-all duration-200 resize-none focus:outline-none"
            :class="isDark
              ? 'bg-zinc-900/20 border-zinc-900 text-white placeholder-zinc-800 focus:border-zinc-700 focus:bg-zinc-900/40'
              : 'bg-[#FDFCF8] border-[#E5E0D8] text-[#2D2924] placeholder-[#D6D0C5] focus:border-[#A69B88]'"
          ></textarea>
        </div>

        <button
          @click="confirmerRdv"
          :disabled="!selectedCreneau"
          class="w-full py-4 rounded-2xl text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-lg active:scale-[0.99] disabled:opacity-30 disabled:cursor-not-allowed"
          :class="isDark
            ? 'bg-white text-black hover:bg-[#D5CCBC] shadow-white/5'
            : 'bg-[#2D2924] text-white hover:bg-[#A69B88] shadow-zinc-900/10'"
        >
          Confirmer le rendez-vous
        </button>
      </section>

    </div>

    <!-- Modal de sélection du mode de paiement -->
    <div v-if="showPaymentModal" class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 transition-colors duration-200"
        :class="isDark ? 'bg-zinc-900 border border-zinc-800' : 'bg-white'">

        <h3 class="text-lg font-semibold mb-2" :class="isDark ? 'text-white' : 'text-gray-900'">
          Choisissez votre mode de paiement
        </h3>
        <p class="text-sm mb-6" :class="isDark ? 'text-zinc-400' : 'text-gray-600'">
          {{ paymentModalMessage }}
        </p>

        <div class="space-y-3 mb-6">
          <button
            @click="selectPaymentMode('online')"
            class="w-full p-4 rounded-xl border-2 transition-all text-left hover:shadow-md"
            :class="isDark
              ? 'border-zinc-800 bg-zinc-950/50 hover:border-[#D5CCBC]'
              : 'border-gray-200 bg-gray-50 hover:border-amber-500'"
          >
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center flex-shrink-0">
                <i class="fas fa-credit-card text-white text-sm"></i>
              </div>
              <div>
                <p class="font-semibold text-sm" :class="isDark ? 'text-white' : 'text-gray-900'">
                  Payer en ligne
                </p>
                <p class="text-xs" :class="isDark ? 'text-zinc-500' : 'text-gray-500'">
                  Paiement sécurisé par carte bancaire
                </p>
              </div>
            </div>
          </button>

          <button
            @click="selectPaymentMode('onsite')"
            class="w-full p-4 rounded-xl border-2 transition-all text-left hover:shadow-md"
            :class="isDark
              ? 'border-zinc-800 bg-zinc-950/50 hover:border-[#D5CCBC]'
              : 'border-gray-200 bg-gray-50 hover:border-amber-500'"
          >
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-gradient-to-br from-gray-500 to-gray-600 flex items-center justify-center flex-shrink-0">
                <i class="fas fa-store text-white text-sm"></i>
              </div>
              <div>
                <p class="font-semibold text-sm" :class="isDark ? 'text-white' : 'text-gray-900'">
                  Payer sur place
                </p>
                <p class="text-xs" :class="isDark ? 'text-zinc-500' : 'text-gray-500'">
                  Régler directement au salon
                </p>
              </div>
            </div>
          </button>
        </div>

        <button
          @click="showPaymentModal = false"
          class="w-full py-2.5 rounded-xl text-sm font-medium transition-colors"
          :class="isDark
            ? 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300'
            : 'bg-gray-200 hover:bg-gray-300 text-gray-700'"
        >
          Annuler
        </button>
      </div>
    </div>

    <!-- Loading Modal -->
    <LoadingModal
      :show="loading.show"
      :state="loading.state"
      :title="loading.title"
      :message="loading.message"
      @close="closeLoadingModal"
    />
  </div>
</template>

<script setup lang="ts">
// Page metadata
definePageMeta({
  layout: 'default',
  middleware: 'auth'
})

// Composables
const route = useRoute()
const router = useRouter()
const { isDark } = useTheme()
const { fetchApi } = useApi()
const { user, token } = useAuth()

// Route params
const firmId = computed(() => route.params.id as string)
const isReplanification = computed(() => route.query.replanifier === 'true')

// State
const categories = ref<string[]>([])
const activeCategory = ref('')
const showPrestationList = ref(true)
const selectedServices = ref<any[]>([])
const services = ref<any[]>([])
const selectedCreneau = ref<any>(null)
const selectedCollaborateur = ref<any>(null)
const collaborateursDisponibles = ref<any[]>([])
const collaborateursNonDisponibles = ref<any[]>([])
const loadingCollaborateurs = ref(false)
const noteRdv = ref('')
const showPaymentModal = ref(false)
const paymentModalMessage = ref('')
const salonSettings = ref<any>(null)
const promotions = ref<any[]>([])
const clientFidelite = ref<any>(null)
const loadingPromotions = ref(false)

// Loading modal state
const loading = ref({
  show: false,
  state: 'loading' as 'loading' | 'success' | 'error',
  title: '',
  message: ''
})

// Computed
const filteredServices = computed(() => {
  return services.value.filter(s => s.category === activeCategory.value)
})

const montantTotal = computed(() => {
  return selectedServices.value.reduce((sum, s) => sum + parseFloat(s.price || 0), 0)
})

const meilleurePromotion = computed(() => {
  if (promotions.value.length === 0 || montantTotal.value === 0) return null

  let meilleure: any = null
  let meilleureReduction = 0

  for (const promo of promotions.value) {
    if (promo.conditions?.montantMinimum && montantTotal.value < promo.conditions.montantMinimum) {
      continue
    }

    let reduction = 0
    if (promo.type === 'percentage') {
      reduction = (montantTotal.value * promo.valeur) / 100
    } else if (promo.type === 'fixed_amount') {
      reduction = Math.min(promo.valeur, montantTotal.value)
    }

    if (reduction > meilleureReduction) {
      meilleureReduction = reduction
      meilleure = { ...promo, montantReduction: reduction }
    }
  }

  return meilleure
})

const reductionFidelite = computed(() => {
  if (!clientFidelite.value || !clientFidelite.value.reductionDisponible || montantTotal.value === 0) {
    return null
  }

  const montantReduction = (montantTotal.value * clientFidelite.value.reductionDisponible) / 100
  return {
    pourcentage: clientFidelite.value.reductionDisponible,
    montantReduction
  }
})

const reductionAppliquee = computed(() => {
  const montantPromo = meilleurePromotion.value?.montantReduction || 0
  const montantFidelite = reductionFidelite.value?.montantReduction || 0

  if (montantFidelite > montantPromo && montantFidelite > 0) {
    return {
      type: 'fidelite',
      montant: montantFidelite,
      label: `Fidélité ${reductionFidelite.value?.pourcentage}%`
    }
  } else if (montantPromo > 0) {
    return {
      type: 'promotion',
      montant: montantPromo,
      label: meilleurePromotion.value.nom,
      promo: meilleurePromotion.value
    }
  }

  return null
})

const montantFinal = computed(() => {
  const reduction = reductionAppliquee.value?.montant || 0
  return Math.max(0, montantTotal.value - reduction)
})

// Methods
function closeLoadingModal() {
  loading.value.show = false
}

async function loadServicesFromQuery() {
  const idsRaw = (route.query.service as string || '').split(',').filter(Boolean)
  // Dédupliquer les IDs depuis l'URL
  const ids = [...new Set(idsRaw)]

  if (ids.length === 0) return

  if (idsRaw.length !== ids.length) {
    console.warn('⚠️ [Query] Services en double détectés dans l\'URL. Doublons supprimés.')
  }

  if (services.value.length === 0) {
    await fetchCategoriesWithServices()
  }

  const matchedServices = services.value.filter(service => ids.includes(service._id))
  selectedServices.value = matchedServices.map(service => ({ ...service }))

  if (selectedServices.value.length > 0) {
    showPrestationList.value = false
    loadCollaborateurs()
  }
}

async function confirmerRdv() {
  if (!selectedCreneau.value) {
    loading.value = {
      show: true,
      state: 'error',
      title: 'Erreur',
      message: 'Veuillez sélectionner un créneau avant de confirmer.'
    }
    return
  }

  if (selectedServices.value.length === 0) {
    loading.value = {
      show: true,
      state: 'error',
      title: 'Erreur',
      message: 'Veuillez sélectionner au moins un service.'
    }
    return
  }

  if (!selectedCollaborateur.value) {
    loading.value = {
      show: true,
      state: 'error',
      title: 'Erreur',
      message: 'Veuillez sélectionner un collaborateur.'
    }
    return
  }

  if (!salonSettings.value) {
    await loadSalonSettings()
  }

  if (salonSettings.value?.prepaiement_optionnel) {
    paymentModalMessage.value = `Montant total: ${montantFinal.value.toFixed(2)}€. Comment souhaitez-vous régler ?`
    showPaymentModal.value = true
    return
  }

  proceedWithBooking(null)
}

async function selectPaymentMode(mode: string) {
  showPaymentModal.value = false
  await proceedWithBooking(mode)
}

async function proceedWithBooking(paymentMode: string | null) {
  console.log('🔍 [proceedWithBooking] Début de la réservation')
  console.log('👤 [proceedWithBooking] User:', user.value)
  console.log('🔑 [proceedWithBooking] User ID:', user.value?._id)
  console.log('🔄 [proceedWithBooking] Mode replanification:', isReplanification.value)
  console.log('📋 [proceedWithBooking] Booking ID:', route.query.bookingId)

  loading.value = {
    show: true,
    state: 'loading',
    title: 'Réservation en cours',
    message: 'Confirmation de votre rendez-vous...'
  }

  const employeId = selectedCollaborateur.value._id
  // Dédupliquer les IDs de services (au cas où la même prestation est sélectionnée plusieurs fois)
  const serviceIds = [...new Set(selectedServices.value.map(s => s._id))]
  const date = selectedCreneau.value.date
  const heureDebut = selectedCreneau.value.slot
  const bookingId = route.query.bookingId as string

  console.log('📋 [Réservation] Services sélectionnés:', selectedServices.value.length)
  console.log('📋 [Réservation] Services uniques à réserver:', serviceIds)

  const payload: any = {
    employeId,
    serviceIds,
    date,
    heureDebut,
  }

  if (noteRdv.value.trim()) {
    payload.note = noteRdv.value.trim()
  }

  try {
    if (isReplanification.value && bookingId) {
      // Vérifier que l'utilisateur est connecté
      if (!user.value?._id) {
        throw new Error('Utilisateur non connecté. Veuillez vous reconnecter.')
      }

      // Le clientId est automatiquement récupéré depuis le token par clientAuthMiddleware
      console.log('📅 [Replanification] Données envoyées:', payload)

      await fetchApi(`/api/appointment/replanifier/${bookingId}`, {
        method: 'PUT',
        body: payload
      })

      loading.value = {
        show: true,
        state: 'success',
        title: 'Rendez-vous replanifié !',
        message: 'Votre rendez-vous a été modifié avec succès'
      }

      setTimeout(() => {
        router.push('/mes-rendez-vous')
      }, 1500)
    } else {
      // Vérifier que l'utilisateur est connecté
      if (!user.value?._id) {
        throw new Error('Utilisateur non connecté. Veuillez vous reconnecter.')
      }

      const requestData: any = {
        ...payload,
        firmId: firmId.value,
        clientId: user.value._id
      }

      if (paymentMode) {
        requestData.paymentMode = paymentMode
      }

      const response = await fetchApi('/api/appointment/prendre', {
        method: 'POST',
        body: requestData
      })

      if (response.paiement && response.url) {
        loading.value = {
          show: true,
          state: 'success',
          title: 'Redirection paiement',
          message: 'Redirection vers la page de paiement sécurisée...'
        }

        setTimeout(() => {
          window.location.href = response.url
        }, 1000)
        return
      }

      loading.value = {
        show: true,
        state: 'success',
        title: 'Rendez-vous confirmé !',
        message: 'Votre réservation a été enregistrée avec succès'
      }

      setTimeout(() => {
        router.push('/mes-rendez-vous')
      }, 1500)
    }
  } catch (error: any) {
    loading.value = {
      show: true,
      state: 'error',
      title: 'Erreur de réservation',
      message: error.data?.message || error.message || 'Une erreur est survenue lors de la réservation'
    }
  }
}

function handleCreneauSelectionne({ date, slot, employeId }: any) {
  selectedCreneau.value = { date, slot, employeId }
}

function toggleDetails(service: any) {
  service.showDetails = !service.showDetails
}

function addService(service: any) {
  // Vérifier si le service n'est pas déjà sélectionné
  const dejaSelectionne = selectedServices.value.some(s => s._id === service._id)

  if (dejaSelectionne) {
    loading.value = {
      show: true,
      state: 'error',
      title: 'Service déjà sélectionné',
      message: `La prestation "${service.name}" est déjà dans votre sélection. Si vous souhaitez réserver plusieurs fois cette prestation, veuillez contacter le salon.`
    }
    return
  }

  selectedServices.value.push({ ...service })
  showPrestationList.value = false
  selectedCollaborateur.value = null
  loadCollaborateurs()
  loadPromotionsAndFidelite()
}

function removeService(index: number) {
  selectedServices.value.splice(index, 1)
  if (selectedServices.value.length === 0) {
    showPrestationList.value = true
    selectedCollaborateur.value = null
    collaborateursDisponibles.value = []
    collaborateursNonDisponibles.value = []
  } else {
    selectedCollaborateur.value = null
    loadCollaborateurs()
  }
  loadPromotionsAndFidelite()
}

async function loadCollaborateurs() {
  if (selectedServices.value.length === 0) return

  loadingCollaborateurs.value = true
  try {
    // Dédupliquer les IDs de services (au cas où la même prestation est sélectionnée plusieurs fois)
    const serviceIds = [...new Set(selectedServices.value.map(s => s._id))]

    console.log('🔍 [Collaborateurs] Services sélectionnés:', selectedServices.value.length)
    console.log('🔍 [Collaborateurs] Services uniques:', serviceIds.length)

    const response = await fetchApi('/api/appointment/collaborateurs-disponibles', {
      method: 'POST',
      body: {
        firmId: firmId.value,
        serviceIds
      }
    })

    collaborateursDisponibles.value = response.disponibles || []
    collaborateursNonDisponibles.value = response.nonDisponibles || []

    if (collaborateursDisponibles.value.length === 1) {
      selectionnerCollaborateur(collaborateursDisponibles.value[0])
    }
  } catch (error) {
    console.error('❌ Erreur lors du chargement des collaborateurs:', error)
    loading.value = {
      show: true,
      state: 'error',
      title: 'Erreur',
      message: 'Erreur lors du chargement des collaborateurs'
    }
  } finally {
    loadingCollaborateurs.value = false
  }
}

function selectionnerCollaborateur(collab: any) {
  selectedCollaborateur.value = collab
  selectedCreneau.value = null
}

function changerCollaborateur() {
  selectedCollaborateur.value = null
  selectedCreneau.value = null
}

async function loadSalonSettings() {
  try {
    const response = await fetchApi(`/api/firm/${firmId.value}/public`)
    salonSettings.value = {
      prepaiement_active: response.prepaiement_active || false,
      prepaiement_optionnel: response.prepaiement_optionnel || false,
      acompte_demande_par_defaut: response.acompte_demande_par_defaut || false
    }
  } catch (error) {
    console.error('Erreur lors du chargement des paramètres du salon:', error)
  }
}

async function loadPromotionsAndFidelite() {
  loadingPromotions.value = true
  try {
    const promoResponse = await fetchApi(`/api/promotions/firm/${firmId.value}`)
    promotions.value = promoResponse.promotions || []

    // Vérifier la fidélité du client si connecté
    if (token.value && user.value) {
      try {
        console.log('🎯 [Fidélité] Vérification pour user:', user.value._id)

        // Utiliser directement les données de user.value
        const fideliteClient = user.value.fidelite_par_firm?.find(
          (f: any) => f.firmId?.toString() === firmId.value
        )

        if (fideliteClient && fideliteClient.reductionDisponible > 0) {
          clientFidelite.value = fideliteClient
          console.log('✅ [Fidélité] Réduction disponible:', fideliteClient.reductionDisponible)
        } else {
          console.log('ℹ️ [Fidélité] Aucune réduction disponible')
        }
      } catch (error) {
        console.log('⚠️ [Fidélité] Erreur:', error)
      }
    }
  } catch (error) {
    console.error('❌ [Promotions] Erreur lors du chargement:', error)
  } finally {
    loadingPromotions.value = false
  }
}

async function fetchCategoriesWithServices() {
  try {
    const res = await fetchApi(`/api/categorie/with-services?firmId=${firmId.value}`)

    categories.value = res
      .filter((categorie: any) => categorie.statut === 'actif')
      .map((cat: any) => cat.nom.toUpperCase())

    activeCategory.value = categories.value[0] || ''

    services.value = res.flatMap((cat: any) =>
      cat.services.map((service: any) => ({
        _id: service._id,
        category: cat.nom.toUpperCase(),
        name: service.nom,
        duration: `${service.duree} min`,
        description: service.description,
        details: service.description,
        price: service.prix,
        showDetails: false,
      }))
    )
  } catch (error) {
    console.error('❌ Erreur lors du chargement des catégories avec services:', error)
  }
}

// Lifecycle
onMounted(async () => {
  await fetchCategoriesWithServices()
  await loadServicesFromQuery()
  await loadSalonSettings()
  await loadPromotionsAndFidelite()
})

// Watch montant total for debug
watch(montantTotal, (newVal) => {
  console.log('💰 Montant total:', newVal)
  console.log('🎯 Meilleure promotion:', meilleurePromotion.value)
  console.log('✂️ Réduction appliquée:', reductionAppliquee.value)
  console.log('💵 Montant final:', montantFinal.value)
})
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
