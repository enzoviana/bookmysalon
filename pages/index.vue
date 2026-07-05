<template>
  <!-- Hero Section -->
  <section class="relative min-h-[90vh] h-screen flex items-center justify-center px-4 overflow-hidden transition-colors duration-200"
    :class="isDark ? 'bg-black' : 'bg-[#FDFCF8]'">
    <div class="absolute inset-0 z-0">
      <img
        src="~/assets/images/background.jpg"
        alt="Background"
        class="w-full h-full object-cover scale-105 animate-[fade-zoom_20s_ease-out_infinite] transition-opacity duration-200"
        :class="isDark ? 'opacity-45' : 'opacity-30'"
      />
      <div class="absolute inset-0 transition-colors duration-200"
        :class="isDark
          ? 'bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent'
          : 'bg-gradient-to-t from-[#FDFCF8] via-[#FDFCF8]/80 to-transparent'"></div>
    </div>

    <div class="relative z-10 w-full max-w-5xl text-center space-y-8 mt-12">
      <div class="space-y-4">
        <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium tracking-wider uppercase backdrop-blur-md transition-colors duration-200"
          :class="isDark
            ? 'bg-zinc-900/80 border-zinc-800 text-zinc-400'
            : 'bg-[#FDFCF8]/80 border-[#E5E0D8] text-[#8C8579]'">
          <span class="w-1.5 h-1.5 rounded-full animate-pulse transition-colors duration-200"
            :class="isDark ? 'bg-[#D5CCBC]' : 'bg-[#A69B88]'"></span>
         Vos salons et instituts préférés en temps réel
        </span>
        <h1 class="text-4xl sm:text-4xl lg:text-7xl font-light tracking-tight leading-[1.1] transition-colors duration-200"
          :class="isDark ? 'text-white' : 'text-[#2D2924]'">
         Trouvez votre prochain <br />
          <span class="font-serif italic transition-colors duration-200"
            :class="isDark ? 'text-[#D5CCBC]' : 'text-[#A69B88]'">rendez-vous beauté.</span>
        </h1>
        <p class="text-base  sm:text-lg max-w-2xl mx-auto font-light leading-relaxed transition-colors duration-200"
          :class="isDark ? 'text-zinc-400' : 'text-[#7A7367]'">
         Coiffure, esthétique, barber, massage. Explorez les disponibilités autour de vous, comparez les avis et réservez instantanément en quelques clics.
        </p>
      </div>

      <div>
        <SearchBar :autoGeolocate="true" @location-detected="onLocationDetected" />
      </div>

      <div class="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs tracking-wide uppercase font-medium pt-4 transition-colors duration-200"
        :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">
        <span class="flex items-center gap-2">
          <svg class="w-4 h-4 transition-colors duration-200" :class="isDark ? 'text-[#D5CCBC]' : 'text-[#A69B88]'" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
          Disponibilité Réelle 24/7
        </span>
        <span class="flex items-center gap-2">
          <svg class="w-4 h-4 transition-colors duration-200" :class="isDark ? 'text-[#D5CCBC]' : 'text-[#A69B88]'" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
          Zéro Frais de Réservation
        </span>
        <span class="flex items-center gap-2">
          <svg class="w-4 h-4 transition-colors duration-200" :class="isDark ? 'text-[#D5CCBC]' : 'text-[#A69B88]'" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>
          Établissements Certifiés
        </span>
      </div>
    </div>
  </section>

  <!-- Section How it works -->
  <section class="py-24 border-t transition-colors duration-200" id="how-it-works"
    :class="isDark ? 'bg-zinc-950 border-zinc-900' : 'bg-[#F7F5F0] border-[#E5E0D8]'">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center max-w-xl mx-auto mb-16">
        <h2 class="text-3xl sm:text-4xl font-light tracking-tight transition-colors duration-200"
          :class="isDark ? 'text-white' : 'text-[#2D2924]'">
          L'expérience de réservation <span class="font-serif italic"
            :class="isDark ? 'text-[#D5CCBC]' : 'text-[#A69B88]'">repensée</span>
        </h2>
        <p class="mt-3 font-light transition-colors duration-200"
          :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">Le parcours le plus rapide et fluide du marché, sans friction.</p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 relative">
        <div v-for="i in 3" :key="i" class="relative group p-8 border rounded-2xl transition-all duration-300"
          :class="isDark
            ? 'bg-zinc-900/40 border-zinc-900 hover:border-zinc-800'
            : 'bg-[#FDFCF8] border-[#E5E0D8] hover:border-[#D6D0C5] shadow-sm'">
          <div class="w-10 h-10 rounded-xl border flex items-center justify-center text-sm font-semibold mb-6 shadow-sm transition-colors duration-200"
            :class="isDark
              ? 'bg-zinc-900 border-zinc-800 text-[#D5CCBC]'
              : 'bg-[#FDFCF8] border-[#E5E0D8] text-[#A69B88]'">
            0{{i}}
          </div>
          <h3 class="text-xl font-medium mb-2 transition-colors"
            :class="isDark
              ? 'text-white group-hover:text-[#D5CCBC]'
              : 'text-[#2D2924] group-hover:text-[#A69B88]'">{{ i === 1 ? 'Explorez' : i === 2 ? 'Comparez' : 'Verrouillez' }}</h3>
          <p class="text-sm font-light leading-relaxed transition-colors duration-200"
            :class="isDark ? 'text-zinc-400' : 'text-[#7A7367]'">
            {{ i === 1 ? 'Filtrez instantanément par soin, ville, géolocalisation précise ou plage horaire souhaitée.' : i === 2 ? 'Consultez les portfolios des pros, les grilles de prix claires et les avis clients 100% authentifiés.' : 'Bloquez votre créneau en temps réel. Confirmation immédiate. Aucun paiement d\'avance requis.' }}
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Section Salons -->
  <section class="py-24 border-t transition-colors duration-200" id="featured-salons"
    :class="isDark ? 'bg-zinc-950 border-zinc-900' : 'bg-[#FDFCF8] border-[#E5E0D8]'">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center max-w-xl mx-auto mb-16">
        <h2 class="text-3xl sm:text-4xl font-light tracking-tight transition-colors duration-200"
          :class="isDark ? 'text-white' : 'text-[#2D2924]'">
          Établissements <span class="font-serif italic" :class="isDark ? 'text-[#D5CCBC]' : 'text-[#A69B88]'">
            {{ detectedLocation ? 'près de chez vous' : 'vedettes' }}
          </span>
        </h2>
        <p class="mt-3 font-light transition-colors duration-200"
          :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">
          {{ detectedLocation ? `Salons à proximité de ${detectedLocation}` : 'Sélectionnés pour leur savoir-faire exceptionnel.' }}
        </p>
      </div>

      <!-- Loading state -->
      <div v-if="loadingSalons" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div v-for="i in 4" :key="i" class="rounded-2xl overflow-hidden border transition-all duration-300 animate-pulse"
          :class="isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-[#EBE6DD]'">
          <div class="h-48 w-full" :class="isDark ? 'bg-zinc-800' : 'bg-[#F2ECE0]'"></div>
          <div class="p-5 space-y-3">
            <div class="h-4 w-3/4 rounded" :class="isDark ? 'bg-zinc-800' : 'bg-[#F2ECE0]'"></div>
            <div class="h-3 w-1/2 rounded" :class="isDark ? 'bg-zinc-800' : 'bg-[#F2ECE0]'"></div>
          </div>
        </div>
      </div>

      <!-- Salons list -->
      <div v-else-if="nearbySalons.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <article v-for="salon in nearbySalons" :key="salon._id || salon.id"
          @click="goToSalon(salon)"
          class="group cursor-pointer rounded-2xl overflow-hidden transition-all duration-500 border text-left"
          :class="isDark
            ? 'bg-[#0c0c0e] border-zinc-800/60 hover:border-zinc-700 hover:bg-[#121214]'
            : 'bg-white border-[#EAE6DF] hover:border-gray-300 hover:shadow-xl hover:shadow-zinc-900/[0.02]'">

          <div class="relative overflow-hidden bg-zinc-100 h-48">
            <img
              :src="salon.logo || salon.image || 'https://www.milanabeauty.fr/images/cover-soins-visage.jpg'"
              :alt="salon.nom_societe || salon.nom"
              class="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]" />

            <div v-if="salon.distance_km !== undefined" class="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg text-[10px] font-semibold tracking-wide uppercase backdrop-blur-md shadow-sm"
              :class="isDark ? 'bg-black/60 text-zinc-300' : 'bg-white/95 text-[#4A4338]'">
              {{ salon.distance_km }} km
            </div>
          </div>

          <div class="p-5 space-y-3">
            <div class="flex items-center gap-2 text-xs">
              <div v-if="salon.rating" class="flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold text-[11px]">
                <svg class="w-3 h-3 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>{{ salon.rating.toFixed(1) }}</span>
              </div>
              <span v-if="salon.rating && salon.categorie" :class="isDark ? 'text-zinc-700' : 'text-gray-200'">•</span>
              <span class="tracking-wide uppercase text-[10px] font-semibold" :class="isDark ? 'text-zinc-500' : 'text-[#8C8375]'">
                {{ salon.categorie || 'Institut de beauté' }}
              </span>
            </div>

            <h3 class="text-base font-medium tracking-tight line-clamp-1 group-hover:text-amber-500 transition-colors duration-300"
              :class="isDark ? 'text-white' : 'text-zinc-900'">
              {{ salon.nom_societe || salon.nom }}
            </h3>

            <div class="flex items-center gap-1.5 text-xs" :class="isDark ? 'text-zinc-500' : 'text-[#6E665D]'">
              <svg class="w-3.5 h-3.5 flex-shrink-0 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              <span class="line-clamp-1 font-light">{{ salon.ville || salon.adresse || 'France' }}</span>
            </div>
          </div>
        </article>
      </div>

      <!-- Empty state -->
      <div v-else class="text-center py-12">
        <p class="text-sm" :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">
          {{ detectedLocation ? 'Aucun salon trouvé à proximité' : 'Activez la géolocalisation pour voir les salons près de chez vous' }}
        </p>
      </div>
    </div>
  </section>

  <!-- Section Tech & Benefits -->
  <section class="py-24 border-t transition-colors duration-200" id="benefits"
    :class="isDark ? 'bg-zinc-950 border-zinc-900' : 'bg-[#FDFCF8] border-[#E5E0D8]'">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center max-w-xl mx-auto mb-16">
        <h2 class="text-3xl sm:text-4xl font-light tracking-tight transition-colors duration-200"
          :class="isDark ? 'text-white' : 'text-[#2D2924]'">
          La tech au service de votre <span class="font-serif italic transition-colors duration-200"
            :class="isDark ? 'text-[#D5CCBC]' : 'text-[#A69B88]'">beauté</span>
        </h2>
        <p class="mt-2 font-light transition-colors duration-200"
          :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">Pourquoi les utilisateurs délaissent les anciens annuaires.</p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Benefit 1 -->
        <div class="border p-6 rounded-2xl transition-all duration-300"
          :class="isDark
            ? 'bg-zinc-900/30 border-zinc-900 hover:border-zinc-800'
            : 'bg-[#F7F5F0] border-[#E5E0D8] hover:border-[#D6D0C5] shadow-sm'">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center mb-4 border transition-colors duration-200"
            :class="isDark
              ? 'bg-zinc-900 border-zinc-800 text-[#D5CCBC]'
              : 'bg-[#FDFCF8] border-[#E5E0D8] text-[#A69B88]'">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <h3 class="font-medium text-base mb-2 transition-colors duration-200"
            :class="isDark ? 'text-white' : 'text-[#2D2924]'">Instantané & Synchro</h3>
          <p class="text-xs font-light leading-relaxed transition-colors duration-200"
            :class="isDark ? 'text-zinc-400' : 'text-[#7A7367]'">
            Aucun appel requis. Les créneaux affichés sont directement connectés au logiciel du salon.
          </p>
        </div>

        <!-- Benefit 2 -->
        <div class="border p-6 rounded-2xl transition-all duration-300"
          :class="isDark
            ? 'bg-zinc-900/30 border-zinc-900 hover:border-zinc-800'
            : 'bg-[#F7F5F0] border-[#E5E0D8] hover:border-[#D6D0C5] shadow-sm'">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center mb-4 border transition-colors duration-200"
            :class="isDark
              ? 'bg-zinc-900 border-zinc-800 text-[#D5CCBC]'
              : 'bg-[#FDFCF8] border-[#E5E0D8] text-[#A69B88]'">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
          </div>
          <h3 class="font-medium text-base mb-2 transition-colors duration-200"
            :class="isDark ? 'text-white' : 'text-[#2D2924]'">Avis 100% Réels</h3>
          <p class="text-xs font-light leading-relaxed transition-colors duration-200"
            :class="isDark ? 'text-zinc-400' : 'text-[#7A7367]'">
            Seuls les clients ayant honoré un rendez-vous peuvent laisser un commentaire certifié.
          </p>
        </div>

        <!-- Benefit 3 -->
        <div class="border p-6 rounded-2xl transition-all duration-300"
          :class="isDark
            ? 'bg-zinc-900/30 border-zinc-900 hover:border-zinc-800'
            : 'bg-[#F7F5F0] border-[#E5E0D8] hover:border-[#D6D0C5] shadow-sm'">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center mb-4 border transition-colors duration-200"
            :class="isDark
              ? 'bg-zinc-900 border-zinc-800 text-[#D5CCBC]'
              : 'bg-[#FDFCF8] border-[#E5E0D8] text-[#A69B88]'">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
          </div>
          <h3 class="font-medium text-base mb-2 transition-colors duration-200"
            :class="isDark ? 'text-white' : 'text-[#2D2924]'">Rappels Smart</h3>
          <p class="text-xs font-light leading-relaxed transition-colors duration-200"
            :class="isDark ? 'text-zinc-400' : 'text-[#7A7367]'">
            Alertes SMS et notifications push pour ne jamais oublier vos rendez-vous et gérer vos déplacements.
          </p>
        </div>

        <!-- Benefit 4 -->
        <div class="border p-6 rounded-2xl transition-all duration-300"
          :class="isDark
            ? 'bg-zinc-900/30 border-zinc-900 hover:border-zinc-800'
            : 'bg-[#F7F5F0] border-[#E5E0D8] hover:border-[#D6D0C5] shadow-sm'">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center mb-4 border transition-colors duration-200"
            :class="isDark
              ? 'bg-zinc-900 border-zinc-800 text-[#D5CCBC]'
              : 'bg-[#FDFCF8] border-[#E5E0D8] text-[#A69B88]'">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
          </div>
          <h3 class="font-medium text-base mb-2 transition-colors duration-200"
            :class="isDark ? 'text-white' : 'text-[#2D2924]'">Fichiers Sécurisés</h3>
          <p class="text-xs font-light leading-relaxed transition-colors duration-200"
            :class="isDark ? 'text-zinc-400' : 'text-[#7A7367]'">
            Vos informations personnelles, historiques de soins et préférences sont stockés de manière cryptée.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Section Testimonials -->
  <section class="py-24 border-t transition-colors duration-200" id="testimonials"
    :class="isDark ? 'bg-zinc-950 border-zinc-900' : 'bg-[#F7F5F0] border-[#E5E0D8]'">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center max-w-xl mx-auto mb-16">
        <h2 class="text-3xl sm:text-4xl font-light tracking-tight transition-colors duration-200"
          :class="isDark ? 'text-white' : 'text-[#2D2924]'">
          Approuvé par des <span class="font-serif italic transition-colors duration-200"
            :class="isDark ? 'text-[#D5CCBC]' : 'text-[#A69B88]'">milliers de passionnés</span>
        </h2>
        <p class="mt-2 font-light transition-colors duration-200"
          :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">Ce qu'ils pensent de la nouvelle fluidité de réservation.</p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="(review, index) in reviews"
          :key="index"
          class="border p-8 rounded-2xl flex flex-col justify-between transition-all duration-300"
          :class="isDark
            ? 'bg-zinc-900/20 border-zinc-900 hover:border-zinc-800'
            : 'bg-[#FDFCF8] border-[#E5E0D8] hover:border-[#D6D0C5] shadow-sm'"
        >
          <div>
            <div class="flex gap-1 mb-6 text-[#A69B88]">
              <svg v-for="n in 5" :key="n" class="w-4 h-4 transition-colors duration-200" :class="n <= review.rating ? 'fill-current' : isDark ? 'text-zinc-700' : 'text-[#E5E0D8]'" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
            </div>
            <p class="font-light text-sm italic leading-relaxed mb-6 transition-colors duration-200"
              :class="isDark ? 'text-zinc-300' : 'text-[#7A7367]'">" {{ review.comment }} "</p>
          </div>

          <div class="flex items-center pt-4 border-t transition-colors duration-200"
            :class="isDark ? 'border-zinc-900' : 'border-[#E5E0D8]'">
            <img :src="review.avatar" alt="Client" class="w-10 h-10 rounded-full object-cover mr-3 filter grayscale" />
            <div class="text-left">
              <p class="text-sm font-medium transition-colors duration-200"
                :class="isDark ? 'text-white' : 'text-[#2D2924]'">{{ review.name }}</p>
              <p class="text-[11px] tracking-wide font-light uppercase transition-colors duration-200"
                :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">{{ review.city }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section Localités SEO -->
  <section class="py-24 border-t transition-colors duration-200" id="find-salon"
    :class="isDark ? 'bg-zinc-950 border-zinc-900 text-zinc-400' : 'bg-[#FDFCF8] border-[#E5E0D8] text-[#7A7367]'">
    <div class="max-w-7xl mx-auto px-6">
      <div class="mb-16">
        <h2 class="text-2xl sm:text-3xl font-light tracking-tight transition-colors duration-200"
          :class="isDark ? 'text-white' : 'text-[#2D2924]'">
          Trouver un établissement en <span class="font-serif italic transition-colors duration-200"
            :class="isDark ? 'text-[#D5CCBC]' : 'text-[#A69B88]'">Île-de-France</span>
        </h2>
        <p class="text-sm font-light mt-1 transition-colors duration-200"
          :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">Exploration ciblée par catégories et localités clés.</p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
        <!-- Category 1 -->
        <div>
          <h3 class="text-xs uppercase tracking-widest font-medium mb-4 pb-2 border-b transition-colors duration-200"
            :class="isDark ? 'text-white border-zinc-900' : 'text-[#2D2924] border-[#E5E0D8]'">Coiffure</h3>
          <ul class="space-y-2 text-xs font-light transition-colors duration-200"
            :class="isDark ? 'text-zinc-400' : 'text-[#7A7367]'">
            <li><a href="/salons/paris/coiffure" class="transition-colors" :class="isDark ? 'hover:text-[#D5CCBC]' : 'hover:text-[#A69B88]'">Paris</a></li>
            <li><a href="/salons/boulogne-billancourt/coiffure" class="transition-colors" :class="isDark ? 'hover:text-[#D5CCBC]' : 'hover:text-[#A69B88]'">Boulogne-Billancourt</a></li>
            <li><a href="/salons/nanterre/coiffure" class="transition-colors" :class="isDark ? 'hover:text-[#D5CCBC]' : 'hover:text-[#A69B88]'">Nanterre</a></li>
            <li><a href="/salons/issy-les-moulineaux/coiffure" class="transition-colors" :class="isDark ? 'hover:text-[#D5CCBC]' : 'hover:text-[#A69B88]'">Issy-les-Moulineaux</a></li>
            <li><a href="/salons/creteil/coiffure" class="transition-colors" :class="isDark ? 'hover:text-[#D5CCBC]' : 'hover:text-[#A69B88]'">Créteil</a></li>
          </ul>
        </div>

        <!-- Category 2 -->
        <div>
          <h3 class="text-xs uppercase tracking-widest font-medium mb-4 pb-2 border-b transition-colors duration-200"
            :class="isDark ? 'text-white border-zinc-900' : 'text-[#2D2924] border-[#E5E0D8]'">Barber</h3>
          <ul class="space-y-2 text-xs font-light transition-colors duration-200"
            :class="isDark ? 'text-zinc-400' : 'text-[#7A7367]'">
            <li><a href="/salons/paris/barber" class="transition-colors" :class="isDark ? 'hover:text-[#D5CCBC]' : 'hover:text-[#A69B88]'">Paris</a></li>
            <li><a href="/salons/saint-denis/barber" class="transition-colors" :class="isDark ? 'hover:text-[#D5CCBC]' : 'hover:text-[#A69B88]'">Saint-Denis</a></li>
            <li><a href="/salons/montreuil/barber" class="transition-colors" :class="isDark ? 'hover:text-[#D5CCBC]' : 'hover:text-[#A69B88]'">Montreuil</a></li>
            <li><a href="/salons/argenteuil/barber" class="transition-colors" :class="isDark ? 'hover:text-[#D5CCBC]' : 'hover:text-[#A69B88]'">Argenteuil</a></li>
            <li><a href="/salons/cergy/barber" class="transition-colors" :class="isDark ? 'hover:text-[#D5CCBC]' : 'hover:text-[#A69B88]'">Cergy</a></li>
          </ul>
        </div>

        <!-- Category 3 -->
        <div>
          <h3 class="text-xs uppercase tracking-widest font-medium mb-4 pb-2 border-b transition-colors duration-200"
            :class="isDark ? 'text-white border-zinc-900' : 'text-[#2D2924] border-[#E5E0D8]'">Esthétique</h3>
          <ul class="space-y-2 text-xs font-light transition-colors duration-200"
            :class="isDark ? 'text-zinc-400' : 'text-[#7A7367]'">
            <li><a href="/salons/paris/esthetique" class="transition-colors" :class="isDark ? 'hover:text-[#D5CCBC]' : 'hover:text-[#A69B88]'">Paris</a></li>
            <li><a href="/salons/versailles/esthetique" class="transition-colors" :class="isDark ? 'hover:text-[#D5CCBC]' : 'hover:text-[#A69B88]'">Versailles</a></li>
            <li><a href="/salons/antony/esthetique" class="transition-colors" :class="isDark ? 'hover:text-[#D5CCBC]' : 'hover:text-[#A69B88]'">Antony</a></li>
            <li><a href="/salons/clermart/esthetique" class="transition-colors" :class="isDark ? 'hover:text-[#D5CCBC]' : 'hover:text-[#A69B88]'">Clamart</a></li>
            <li><a href="/salons/meaux/esthetique" class="transition-colors" :class="isDark ? 'hover:text-[#D5CCBC]' : 'hover:text-[#A69B88]'">Meaux</a></li>
          </ul>
        </div>

        <!-- Category 4 -->
        <div>
          <h3 class="text-xs uppercase tracking-widest font-medium mb-4 pb-2 border-b transition-colors duration-200"
            :class="isDark ? 'text-white border-zinc-900' : 'text-[#2D2924] border-[#E5E0D8]'">Massages</h3>
          <ul class="space-y-2 text-xs font-light transition-colors duration-200"
            :class="isDark ? 'text-zinc-400' : 'text-[#7A7367]'">
            <li><a href="/salons/paris/massage" class="transition-colors" :class="isDark ? 'hover:text-[#D5CCBC]' : 'hover:text-[#A69B88]'">Paris</a></li>
            <li><a href="/salons/fontainebleau/massage" class="transition-colors" :class="isDark ? 'hover:text-[#D5CCBC]' : 'hover:text-[#A69B88]'">Fontainebleau</a></li>
            <li><a href="/salons/saint-germain-en-laye/massage" class="transition-colors" :class="isDark ? 'hover:text-[#D5CCBC]' : 'hover:text-[#A69B88]'">Saint-Germain-en-Laye</a></li>
            <li><a href="/salons/levallois-perret/massage" class="transition-colors" :class="isDark ? 'hover:text-[#D5CCBC]' : 'hover:text-[#A69B88]'">Levallois-Perret</a></li>
            <li><a href="/salons/villejuif/massage" class="transition-colors" :class="isDark ? 'hover:text-[#D5CCBC]' : 'hover:text-[#A69B88]'">Villejuif</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Section Pro CTA (Unifiée & Corrigée) -->
  <section class="py-24 border-t overflow-hidden transition-colors duration-200" id="pro"
    :class="isDark ? 'bg-zinc-900/20 border-zinc-900' : 'bg-[#F7F5F0] border-[#E5E0D8]'">
    <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">

      <div class="space-y-6 md:col-span-7 text-left">
        <span class="text-xs font-semibold uppercase tracking-widest transition-colors duration-200"
          :class="isDark ? 'text-[#D5CCBC]' : 'text-[#A69B88]'">Espace Partenaires</span>
        <h2 class="text-3xl sm:text-5xl font-light tracking-tight leading-none transition-colors duration-200"
          :class="isDark ? 'text-white' : 'text-[#2D2924]'">
          Prenez le contrôle de <br />
          <span class="font-serif italic transition-colors duration-200"
            :class="isDark ? 'text-zinc-400' : 'text-[#8C8579]'">votre calendrier.</span>
        </h2>
        <p class="text-sm sm:text-base font-light leading-relaxed max-w-xl transition-colors duration-200"
          :class="isDark ? 'text-zinc-400' : 'text-[#7A7367]'">
          Comme des centaines d'instituts et salons en Île-de-France, optimisez votre taux de remplissage, réduisez les "No-Show" et encaissez directement en ligne avec la suite d'outils la plus performante.
        </p>

        <div class="flex flex-wrap gap-4 pt-4">
          <a
            href="/pro/signup"
            class="px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all duration-300 shadow-lg"
            :class="isDark
              ? 'bg-white text-black hover:bg-[#D5CCBC] shadow-white/5'
              : 'bg-[#2D2924] text-white hover:bg-[#A69B88] shadow-zinc-900/10'"
          >
            Rejoindre le réseau
          </a>
          <a
            href="/pro/dashboard"
            class="px-6 py-3.5 rounded-xl border text-xs uppercase tracking-wider font-semibold transition-all duration-300"
            :class="isDark
              ? 'border-zinc-800 hover:border-zinc-700 text-white hover:bg-zinc-900/60'
              : 'border-[#E5E0D8] hover:border-[#D6D0C5] text-[#2D2924] hover:bg-[#FDFCF8]'"
          >
            Accéder à l'Espace Pro
          </a>
        </div>
      </div>

      <div class="md:col-span-5 flex justify-center md:justify-end relative">
        <div class="absolute inset-0 z-10 pointer-events-none md:block hidden transition-colors duration-200"
          :class="isDark ? 'bg-gradient-to-r from-zinc-950 to-transparent' : 'bg-gradient-to-r from-[#F7F5F0] to-transparent'"></div>
        <div class="relative group">
          <div class="absolute -inset-1 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"
            :class="isDark ? 'bg-gradient-to-r from-[#D5CCBC] to-zinc-800' : 'bg-gradient-to-r from-[#A69B88] to-[#E5E0D8]'"></div>
          <img
            src="https://www.campus-des-ecoles.fr/uploads/2022/07/shutterstock_2166926187-scaled.jpg"
            alt="Pro App Workflow"
            class="relative w-full max-w-[340px] object-cover h-[380px] rounded-2xl filter grayscale contrast-115 shadow-2xl border transition-colors duration-200"
            :class="isDark ? 'border-zinc-800' : 'border-[#E5E0D8]'"
          />
        </div>
      </div>

    </div>
  </section>
</template>
<style scoped>
/* Utility CSS standard to safely handle premium layout elements */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

@keyframes fade-zoom {
  0%, 100% { transform: scale(1.02) translateY(0); }
  50% { transform: scale(1.07) translateY(-10px); }
}
</style>


<script>
import SearchBar from '@/components/SearchBar.vue';
import { useTheme } from '@/composables/useTheme';

export default {
  name: 'HomePage',
  components: {
    SearchBar
  },
  setup() {
    const { isDark } = useTheme();
    return { isDark };
  },
  data() {
    return {
      isMobile: false,
      isScrolled: false,
      mobileMenu: false,
      detectedLocation: '',
      nearbySalons: [],
      loadingSalons: false,
      links: [
        { label: 'Catégories', href: '#categories' },
        { label: 'Top salons', href: '#top-salons' },
        { label: 'Avantages', href: '#benefits' },
        { label: 'Application', href: '#app' }
      ],
      activeTab: 'populaires',
      salons: [
        {
          id: 1,
          name: 'Salon Chic Paris',
          city: 'Paris 11e',
          rating: 4.8,
          reviews: 126,
          distance: '1,2 km',
          openingHours: '09:00 – 19:00',
          category: 'Coiffure',
          image:
            'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200',
          type: 'populaires',
        },
         {
          id: 11,
          name: 'Salon Chic Paris',
          city: 'Paris 11e',
          rating: 4.8,
          reviews: 126,
          distance: '1,2 km',
          openingHours: '09:00 – 19:00',
          category: 'Coiffure',
          image:
            'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200',
          type: 'populaires',
        },
         {
          id: 12,
          name: 'Salon Chic Paris',
          city: 'Paris 11e',
          rating: 4.8,
          reviews: 126,
          distance: '1,2 km',
          openingHours: '09:00 – 19:00',
          category: 'Coiffure',
          image:
            'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200',
          type: 'populaires',
        },
         {
          id: 13,
          name: 'Salon Chic Paris',
          city: 'Paris 11e',
          rating: 4.8,
          reviews: 126,
          distance: '1,2 km',
          openingHours: '09:00 – 19:00',
          category: 'Coiffure',
          image:
            'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200',
          type: 'populaires',
        },
        {
          id: 2,
          name: 'Beauté Zen',
          city: 'Boulogne-Billancourt',
          rating: 4.9,
          reviews: 98,
          distance: '2,7 km',
          openingHours: '10:00 – 20:00',
          category: 'Massage & Bien-être',
          image:
            'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200',
          type: 'nouveaux',
        },
        {
          id: 3,
          name: 'Barber Kings',
          city: 'Paris 9e',
          rating: 4.7,
          reviews: 214,
          distance: '900 m',
          openingHours: '08:30 – 21:00',
          category: 'Barber',
          image:
            'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1200',
          type: 'mieuxNotes',
        },
        {
          id: 4,
          name: 'L’Atelier du Style',
          city: 'Neuilly-sur-Seine',
          rating: 4.6,
          reviews: 87,
          distance: '3,4 km',
          openingHours: '09:30 – 18:30',
          category: 'Coiffure & Esthétique',
          image:
            'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=1200',
          type: 'populaires',
        },
        {
          id: 5,
          name: 'Nails & Glow',
          city: 'Paris 15e',
          rating: 4.9,
          reviews: 156,
          distance: '1,8 km',
          openingHours: '10:00 – 19:30',
          category: 'Onglerie',
          image:
            'https://images.unsplash.com/photo-1607779097040-26e80aa4575c?q=80&w=1200',
          type: 'nouveaux',
        },
        {
          id: 6,
          name: 'Spa Évasion',
          city: 'Issy-les-Moulineaux',
          rating: 4.8,
          reviews: 63,
          distance: '4,1 km',
          openingHours: '11:00 – 22:00',
          category: 'Spa & Massage',
          image:
            'https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=1200',
          type: 'mieuxNotes',
        },
      ],

      reviews: [
  {
    name: 'Sarah L.',
    city: 'Paris 11e',
    comment: 'Enfin une plateforme simple et rapide pour réserver mon salon préféré.',
    rating: 5,
    reviews: 126,
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg'
  },
  {
    name: 'Mehdi R.',
    city: 'Lyon',
    comment: 'Interface claire, réservation instantanée, je recommande à tous mes amis.',
    rating: 4,
    reviews: 98,
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    name: 'Émilie T.',
    city: 'Boulogne-Billancourt',
    comment: 'J’adore la simplicité, et les salons sont tous vérifiés !',
    rating: 5,
    reviews: 87,
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
    {
    name: 'Émilie T.',
    city: 'Boulogne-Billancourt',
    comment: 'J’adore la simplicité, et les salons sont tous vérifiés !',
    rating: 5,
    reviews: 87,
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
    {
    name: 'Émilie T.',
    city: 'Boulogne-Billancourt',
    comment: 'J’adore la simplicité, et les salons sont tous vérifiés !',
    rating: 5,
    reviews: 87,
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
    {
    name: 'Émilie T.',
    city: 'Boulogne-Billancourt',
    comment: 'J’adore la simplicité, et les salons sont tous vérifiés !',
    rating: 5,
    reviews: 87,
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
],

      // Catégories des soins
      categories: [
        { title: 'Coiffure', emoji: '💇‍♀️' },
        { title: 'Barber', emoji: '💈' },
        { title: 'Esthétique', emoji: '💆‍♀️' },
        { title: 'Massage', emoji: '🧖‍♂️' },
        { title: 'Onglerie', emoji: '💅' },
        { title: 'Spa', emoji: '🧖‍♀️' },
        { title: 'Maquillage', emoji: '💄' },
        { title: 'Tatouage', emoji: '🖋️' },
        { title: 'Soins visage', emoji: '🧴' },
        { title: 'Coiffure homme', emoji: '💇‍♂️' }
      ]
    }
  },
  computed: {
    filteredSalons() {
      return this.salons.filter(salon => salon.type === this.activeTab);
    }
  },
  mounted() {
    this.checkIsMobile();
    window.addEventListener('resize', this.checkIsMobile);
     window.addEventListener('scroll', this.handleScroll);

     this.checkGoogleCallback();
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkIsMobile);
        window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    checkIsMobile() {
      this.isMobile = window.innerWidth < 768;
    },
    setActiveTab(tab) {
      this.activeTab = tab;
    },
     handleScroll() {
      this.isScrolled = window.scrollY > 40
    },
    async checkGoogleCallback() {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');

      if (code) {
        console.log("Code OAuth détecté sur la HomePage, envoi au backend Heroku...");
        try {
          const response = await fetch('https://bookmysalon-967a856b16b6.herokuapp.com/api/clients/google/callback', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ code })
          });

          const data = await response.json();

          if (!response.ok) {
            throw new Error(data.message || "Erreur lors de la validation Google.");
          }

          // Stockage du token et connexion réussie !
          localStorage.setItem('clientToken', data.token);
          console.log('Profil Google synchronisé. Token enregistré :', data.token);
          
          alert('Connexion avec Google réussie !');
          
          // Redirection vers le compte de l'utilisateur
          this.$router.push('/userAccount');

        } catch (error) {
          console.error("Erreur lors du callback Google Auth:", error);
          alert("Échec de la connexion Google : " + error.message);
        }
      }
    },
    async onLocationDetected(locationData) {
      console.log('Location détectée:', locationData);
      this.detectedLocation = locationData.location;
      await this.fetchNearbySalons(locationData.location);
    },
    async fetchNearbySalons(location) {
      console.log('🔍 fetchNearbySalons appelée avec location:', location);
      this.loadingSalons = true;

      try {
        const params = new URLSearchParams();
        if (location) {
          params.append('location', location);
        }
        params.append('radius', '5'); // 5km par défaut

        const apiUrl = `https://bookmysalon-967a856b16b6.herokuapp.com/api/search?${params.toString()}`;
        console.log('📡 Appel API:', apiUrl);

        const response = await fetch(apiUrl);

        if (!response.ok) {
          const errorText = await response.text();
          console.error('❌ Erreur API response:', response.status, errorText);
          throw new Error(`Erreur récupération salons: ${response.status}`);
        }

        const salons = await response.json();
        console.log('✅ Salons reçus de l\'API:', salons.length, 'salons');
        console.log('Détails des salons:', salons.slice(0, 3)); // Log des 3 premiers

        // Limiter à 8 salons pour la page d'accueil
        this.nearbySalons = salons.slice(0, 8);

        console.log(`📍 ${this.nearbySalons.length} salons affichés sur la page d'accueil`);
      } catch (error) {
        console.error('❌ Erreur lors de la récupération des salons:', error);
        this.nearbySalons = [];
      } finally {
        this.loadingSalons = false;
      }
    },
    goToSalon(salon) {
      const salonId = salon.id || salon._id;
      if (!salonId) return;

      // Naviguer vers la page du salon via son slug ou son ID
      if (salon.slug) {
        this.$router.push(`/etablissement/${salon.slug}`);
      } else {
        this.$router.push(`/salon/${salonId}`);
      }
    }
  }
}
</script>

<style>

  .no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;  /* IE / Edge */
  scrollbar-width: none;     /* Firefox */
}
</style>