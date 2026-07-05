<template>
  <div class="min-h-screen font-light transition-colors duration-200"
    :class="isDark ? 'bg-zinc-950 text-zinc-300 selection:bg-white selection:text-black' : 'bg-[#FDFCF8] text-[#7A7367] selection:bg-[#A69B88] selection:text-white'">

<div class="relative overflow-hidden border-b transition-colors duration-500"
  :class="isDark ? 'border-zinc-900 bg-zinc-950' : 'border-[#EAE5DC] bg-[#FCFAF6]'">
  
  <!-- Fond & Grille géométrique subtile -->
  <div class="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay">
    <img class="w-full h-full object-cover" src="https://d33wubrfki0l68.cloudfront.net/1e0fc04f38f5896d10ff66824a62e466839567f8/699b5/images/hero/3/background-pattern.png" alt="Grid Pattern" />
  </div>
  
  <!-- Halo lumineux d'ambiance -->
  <div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-[160px] pointer-events-none transition-all duration-500"
    :class="isDark ? 'bg-zinc-800/20' : 'bg-[#EAE5DC]/50'"></div>

  <section class="relative py-20 lg:py-12 overflow-hidden">
    <div class="px-6 mx-auto max-w-7xl">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:items-center">

        <!-- Colonne Gauche : Contenu & Rassurance -->
        <div class="lg:col-span-6 text-left space-y-8" data-aos="fade-up">
          <div class="space-y-6">
            <!-- Badge Version -->
<div class="inline-flex">
  <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-[10px] tracking-widest uppercase font-bold transition-colors duration-300"
    :class="isDark ? 'bg-zinc-900/60 border-zinc-800 text-zinc-400' : 'bg-white border-[#E5E0D8] text-[#7A7367] shadow-sm'">
    <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Offre Early Bird : Logiciel à vie dès 199€
  </span>
</div>
            
            <!-- Titre Principal Accrocheur -->
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.12] tracking-tight transition-colors duration-300"
              :class="isDark ? 'text-white' : 'text-[#1A1816]'">
              Maîtrisez votre temps.<br />
              Remplissez <span class="font-serif italic font-normal transition-colors duration-300"
                :class="isDark ? 'bg-gradient-to-r from-[#E5E0D8] to-[#A69B88] bg-clip-text text-transparent' : 'text-[#8C8273]'">votre agenda</span>.
            </h1>
            
            <!-- Description Orientée Bénéfices -->
            <p class="text-base sm:text-lg font-light max-w-xl leading-relaxed transition-colors duration-300"
              :class="isDark ? 'text-zinc-400' : 'text-[#5C564C]'">
              BookMySalon PRO fusionne automatisation intelligente et outils de gestion agiles pour booster votre chiffre d'affaires, éliminer définitivement les no-shows et fidéliser votre clientèle sans effort.
            </p>
          </div>

          <!-- Section Appel à l'action Principal -->
          <div class="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4" data-aos="zoom-in-up" data-aos-delay="300">
            <a href="https://pro.bookmysalon.fr/login" class="inline-flex items-center justify-center px-8 py-4 rounded-xl font-medium text-xs uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] group"
              :class="isDark ? 'bg-white hover:bg-zinc-100 text-black' : 'bg-[#2D2924] hover:bg-[#1A1816] text-white'">
              Essayer gratuitement
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <div class="flex items-center justify-center sm:justify-start pl-1 sm:pl-0">
              <span class="text-xs font-normal opacity-50" :class="isDark ? 'text-zinc-400' : 'text-[#2D2924]'">Sans engagement • Test de 14 jours</span>
            </div>
          </div>

          <!-- Preuve Sociale (Social Proof) -->
          <div class="flex flex-col sm:flex-row sm:items-center gap-4 pt-6 border-t transition-colors duration-300"
            :class="isDark ? 'border-zinc-900' : 'border-zinc-200/60'" data-aos="fade-up" data-aos-delay="200">
            <div class="flex -space-x-3 overflow-hidden relative isolate">
              <img class="inline-block rounded-full w-10 h-10 border-2 object-cover transition-colors duration-300"
                :class="isDark ? 'border-zinc-950' : 'border-[#FCFAF6]'" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Coiffeur Partenaire" />
              <img class="inline-block rounded-full w-10 h-10 border-2 object-cover transition-colors duration-300"
                :class="isDark ? 'border-zinc-950' : 'border-[#FCFAF6]'" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Esthéticienne Partenaire" />
              <img class="inline-block rounded-full w-10 h-10 border-2 object-cover transition-colors duration-300"
                :class="isDark ? 'border-zinc-950' : 'border-[#FCFAF6]'" src="https://randomuser.me/api/portraits/women/65.jpg" alt="Gérante de Salon" />
              <span class="absolute bottom-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-2 text-[8px] text-white font-bold transition-all duration-300"
                :class="isDark ? 'ring-zinc-950' : 'ring-[#FCFAF6]'">✓</span>
            </div>
            <p class="text-xs font-light transition-colors duration-300"
              :class="isDark ? 'text-zinc-400' : 'text-[#5C564C]'">
              Déjà rejoint par <span class="font-medium transition-colors duration-300"
                :class="isDark ? 'text-white' : 'text-[#1A1816]'">2 000+ salons & indépendants</span> qui pilotent leur activité avec succès.
            </p>
          </div>
        </div>

<!-- Colonne Droite : Châssis de l'application Premium -->
<div class="lg:col-span-6 relative select-none" data-aos="fade-left">
  
  <!-- Lueur diffuse arrière ajustée -->
  <div class="absolute -inset-4 rounded-3xl blur-3xl opacity-30 transition-all duration-500"
    :class="isDark ? 'bg-zinc-800/40' : 'bg-[#A69B88]/20'"></div>

  <!-- ================= LABELS FLOTTANTS (STATISTIQUES) ================= -->
  
  <!-- Label 1 : +1 RDV (En haut à gauche) -->
  <div class="absolute -top-6 -left-6 z-10 flex items-center gap-2 px-3 py-2 rounded-xl border backdrop-blur-md shadow-lg transition-all duration-500 animate-bounce [animation-duration:3s]"
    :class="isDark ? 'bg-zinc-900/80 border-zinc-800 text-white' : 'bg-white/80 border-[#E5E0D8] text-zinc-800'">
    <span class="flex h-3 w-3 relative">
      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
      <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
    </span>
    <div class="text-xs font-medium">
      <span class="text-emerald-500 font-bold">+1</span> RDV confirmé
    </div>
  </div>

  <!-- Label 2 : Chiffre d'Affaires (En bas à droite) -->
  <div class="absolute -bottom-5 -right-4 z-10 flex flex-col px-4 py-2.5 rounded-xl border backdrop-blur-md shadow-xl transition-all duration-500"
    :class="isDark ? 'bg-zinc-900/80 border-zinc-800' : 'bg-white/80 border-[#E5E0D8]'">
    <span class="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold">CA du jour</span>
    <span class="text-lg font-bold transition-colors duration-300"
      :class="isDark ? 'text-amber-400' : 'text-[#A69B88]'">
      1 240 €
    </span>
  </div>

  <!-- Label 3 : Rétention / Avis (Milieu Gauche) -->
  <div class="absolute top-1/2 -left-8 -translate-y-1/2 z-10 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg border backdrop-blur-md shadow-md transition-all duration-500"
    :class="isDark ? 'bg-zinc-950/60 border-zinc-800/60 text-zinc-300' : 'bg-white/60 border-[#E5E0D8]/60 text-zinc-600'">
    <span class="text-amber-500 text-xs">★</span>
    <span class="text-[11px] font-medium">5.0 (48 avis)</span>
  </div>

  <!-- ================= FIN DES LABELS FLOTTANTS ================= -->

  <!-- Conteneur Type Mockup d'application (Glassmorphism de protection) -->
  <div class="relative rounded-2xl overflow-hidden border transition-all duration-500 backdrop-blur-sm shadow-2xl"
    :class="isDark ? 'bg-zinc-900/30 border-zinc-800/80 shadow-black/40' : 'bg-white/40 border-[#E5E0D8] shadow-zinc-900/5'">
    
    <!-- Fausse barre supérieure style MacOS / Web browser -->
    <div class="flex items-center gap-1.5 px-3 py-2 border-b transition-colors duration-300"
      :class="isDark ? 'bg-zinc-950/40 border-zinc-800/60' : 'bg-white/60 border-[#E5E0D8]/60'">
      <span class="w-2.5 h-2.5 rounded-full bg-rose-500/70"></span>
      <span class="w-2.5 h-2.5 rounded-full bg-amber-500/70"></span>
      <span class="w-2.5 h-2.5 rounded-full bg-emerald-500/70"></span>
      <div class="mx-auto rounded-md text-[10px] px-8 py-0.5 font-light transition-colors duration-300"
        :class="isDark ? 'bg-zinc-900/50 text-zinc-500' : 'bg-zinc-100 text-zinc-400'">
        pro.bookmysalon.fr
      </div>
    </div>

    <!-- Image de ton Dashboard -->
    <div class="overflow-hidden rounded-b-xl bg-zinc-900">
      <img src="../../assets/images/Gemini_Generated_Image_6xs5nz6xs5nz6xs5.png" 
           alt="Mockup de la Web App BookMySalon PRO"
           class="w-full h-auto object-cover object-top hover:scale-[1.02] transition-transform duration-700" />
    </div>
  </div>
  
</div>

      </div>
    </div>
  </section>
</div>


    <section id="gestion-avancee" class="py-24 border-b px-6 transition-colors duration-200"
      :class="isDark ? 'bg-zinc-950 border-zinc-900' : 'bg-[#FDFCF8] border-[#E5E0D8]'">
      <div class="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">

        <div class="lg:col-span-5 border rounded-2xl p-8 text-left space-y-6 order-2 lg:order-1 transition-colors duration-200"
          :class="isDark ? 'bg-zinc-900/30 border-zinc-900' : 'bg-[#F7F5F0] border-[#E5E0D8]'">
          <h3 class="text-xs uppercase tracking-widest font-semibold transition-colors duration-200"
            :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">Outils à votre disposition</h3>
          <ul class="space-y-4 text-xs font-light transition-colors duration-200"
            :class="isDark ? 'text-zinc-400' : 'text-[#7A7367]'">
            <li class="flex items-center gap-3 py-2 border-b transition-colors duration-200"
              :class="isDark ? 'border-zinc-900' : 'border-[#E5E0D8]'">
              <span class="w-1.5 h-1.5 rounded-full transition-colors duration-200"
                :class="isDark ? 'bg-zinc-700' : 'bg-[#D6D0C5]'"></span> Visualisation complète de vos plannings
            </li>
            <li class="flex items-center gap-3 py-2 border-b transition-colors duration-200"
              :class="isDark ? 'border-zinc-900' : 'border-[#E5E0D8]'">
              <span class="w-1.5 h-1.5 rounded-full transition-colors duration-200"
                :class="isDark ? 'bg-zinc-700' : 'bg-[#D6D0C5]'"></span> Création de promotions personnalisées
            </li>
            <li class="flex items-center gap-3 py-2 border-b transition-colors duration-200"
              :class="isDark ? 'border-zinc-900' : 'border-[#E5E0D8]'">
              <span class="w-1.5 h-1.5 rounded-full transition-colors duration-200"
                :class="isDark ? 'bg-zinc-700' : 'bg-[#D6D0C5]'"></span> Gestion des compétences par collaborateur
            </li>
            <li class="flex items-center gap-3 py-2">
              <span class="w-1.5 h-1.5 rounded-full transition-colors duration-200"
                :class="isDark ? 'bg-zinc-700' : 'bg-[#D6D0C5]'"></span> Notifications automatisées SMS & Email
            </li>
          </ul>
        </div>

        <div class="lg:col-span-7 text-left space-y-6 order-1 lg:order-2">
          <h2 class="text-2xl sm:text-4xl font-light tracking-tight leading-tight transition-colors duration-200"
            :class="isDark ? 'text-white' : 'text-[#2D2924]'">
            Des outils puissants au service exclusif de votre <span class="font-serif italic transition-colors duration-200"
              :class="isDark ? 'text-[#D5CCBC]' : 'text-[#A69B88]'">chiffre d'affaires</span>
          </h2>
          <p class="text-sm sm:text-base font-light leading-relaxed transition-colors duration-200"
            :class="isDark ? 'text-zinc-400' : 'text-[#7A7367]'">
            À l'inverse des annuaires et places de marché traditionnels, BookMySalon PRO ne cherche pas à alimenter un carrousel concurrentiel global. Notre plateforme est calibrée pour sanctuariser et optimiser uniquement **votre** structure et l'emploi du temps de vos équipes.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-light pt-2 transition-colors duration-200"
            :class="isDark ? 'text-zinc-400' : 'text-[#7A7367]'">
            <div class="flex items-center gap-2">
              <svg class="w-3.5 h-3.5 transition-colors duration-200" :class="isDark ? 'text-zinc-600' : 'text-[#D6D0C5]'" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> Croissance organique sans publicité</div>
            <div class="flex items-center gap-2">
              <svg class="w-3.5 h-3.5 transition-colors duration-200" :class="isDark ? 'text-zinc-600' : 'text-[#D6D0C5]'" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> Rentabilité horaire maximale</div>
            <div class="flex items-center gap-2">
              <svg class="w-3.5 h-3.5 transition-colors duration-200" :class="isDark ? 'text-zinc-600' : 'text-[#D6D0C5]'" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> Tableaux de bord analytiques souverains</div>
          </div>
        </div>

      </div>
    </section>

    <!-- Section Google Agenda Sync -->
    <section id="google-sync" class="py-24 border-b px-6 transition-colors duration-200"
      :class="isDark ? 'bg-zinc-950 border-zinc-900' : 'bg-[#FDFCF8] border-[#E5E0D8]'">
      <div class="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">

        <div class="lg:col-span-7 text-left space-y-6">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] tracking-widest uppercase font-medium transition-colors duration-200"
            :class="isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-400' : 'bg-[#F7F5F0] border-[#E5E0D8] text-[#8C8579]'">
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.5 3h-15A2.5 2.5 0 002 5.5v13A2.5 2.5 0 004.5 21h15a2.5 2.5 0 002.5-2.5v-13A2.5 2.5 0 0019.5 3zm-7 14.5h-7v-1h7v1zm5-3h-12v-1h12v1zm0-3h-12v-1h12v1zm0-3h-12v-1h12v1z"/>
            </svg>
            Intégration Native
          </div>

          <h2 class="text-2xl sm:text-4xl font-light tracking-tight leading-tight transition-colors duration-200"
            :class="isDark ? 'text-white' : 'text-[#2D2924]'">
            Synchronisation <span class="font-serif italic transition-colors duration-200"
              :class="isDark ? 'text-[#D5CCBC]' : 'text-[#A69B88]'">Google Agenda</span> bidirectionnelle
          </h2>
          <p class="text-sm sm:text-base font-light leading-relaxed transition-colors duration-200"
            :class="isDark ? 'text-zinc-400' : 'text-[#7A7367]'">
            Connectez vos agendas professionnels Google Calendar en un clic. Tous les rendez-vous BookMySalon sont automatiquement ajoutés à votre calendrier personnel, et inversement. Fini les doubles réservations et conflits de planning.
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div class="flex items-start gap-3 p-4 rounded-xl border transition-colors duration-200"
              :class="isDark ? 'bg-zinc-900/30 border-zinc-900' : 'bg-[#F7F5F0] border-[#E5E0D8]'">
              <svg class="w-5 h-5 flex-shrink-0 mt-0.5" :class="isDark ? 'text-emerald-400' : 'text-emerald-600'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <div>
                <p class="text-xs font-medium mb-1 transition-colors duration-200"
                  :class="isDark ? 'text-white' : 'text-[#2D2924]'">Sync temps réel</p>
                <p class="text-[11px] font-light leading-relaxed transition-colors duration-200"
                  :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">Webhooks instantanés pour toute modification</p>
              </div>
            </div>

            <div class="flex items-start gap-3 p-4 rounded-xl border transition-colors duration-200"
              :class="isDark ? 'bg-zinc-900/30 border-zinc-900' : 'bg-[#F7F5F0] border-[#E5E0D8]'">
              <svg class="w-5 h-5 flex-shrink-0 mt-0.5" :class="isDark ? 'text-emerald-400' : 'text-emerald-600'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12M8 12h12m-12 5h12M4 7v.01M4 12v.01M4 17v.01"/>
              </svg>
              <div>
                <p class="text-xs font-medium mb-1 transition-colors duration-200"
                  :class="isDark ? 'text-white' : 'text-[#2D2924]'">Multi-agendas</p>
                <p class="text-[11px] font-light leading-relaxed transition-colors duration-200"
                  :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">Chaque collaborateur connecte son propre calendrier</p>
              </div>
            </div>

            <div class="flex items-start gap-3 p-4 rounded-xl border transition-colors duration-200"
              :class="isDark ? 'bg-zinc-900/30 border-zinc-900' : 'bg-[#F7F5F0] border-[#E5E0D8]'">
              <svg class="w-5 h-5 flex-shrink-0 mt-0.5" :class="isDark ? 'text-emerald-400' : 'text-emerald-600'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
              <div>
                <p class="text-xs font-medium mb-1 transition-colors duration-200"
                  :class="isDark ? 'text-white' : 'text-[#2D2924]'">Sécurité OAuth 2.0</p>
                <p class="text-[11px] font-light leading-relaxed transition-colors duration-200"
                  :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">Connexion certifiée Google, aucun mot de passe stocké</p>
              </div>
            </div>

            <div class="flex items-start gap-3 p-4 rounded-xl border transition-colors duration-200"
              :class="isDark ? 'bg-zinc-900/30 border-zinc-900' : 'bg-[#F7F5F0] border-[#E5E0D8]'">
              <svg class="w-5 h-5 flex-shrink-0 mt-0.5" :class="isDark ? 'text-emerald-400' : 'text-emerald-600'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
              </svg>
              <div>
                <p class="text-xs font-medium mb-1 transition-colors duration-200"
                  :class="isDark ? 'text-white' : 'text-[#2D2924]'">Détection conflits</p>
                <p class="text-[11px] font-light leading-relaxed transition-colors duration-200"
                  :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">Blocage automatique des créneaux indisponibles</p>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-5 relative">
          <div class="border rounded-2xl p-6 space-y-4 transition-colors duration-200"
            :class="isDark ? 'bg-zinc-900/30 border-zinc-900' : 'bg-[#FDFCF8] border-[#E5E0D8]'">

            <!-- Google Calendar Icon -->
            <div class="flex items-center gap-3 pb-4 border-b transition-colors duration-200"
              :class="isDark ? 'border-zinc-900' : 'border-[#E5E0D8]'">
              <div class="w-10 h-10 rounded-lg flex items-center justify-center bg-white">
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM5 8V6h14v2H5z" fill="#4285F4"/>
                  <path d="M7 12h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zM7 16h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z" fill="#EA4335"/>
                </svg>
              </div>
              <div>
                <h4 class="text-sm font-medium transition-colors duration-200"
                  :class="isDark ? 'text-white' : 'text-[#2D2924]'">Google Calendar</h4>
                <p class="text-[10px] font-light transition-colors duration-200"
                  :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">Connexion active</p>
              </div>
              <div class="ml-auto">
                <span class="px-2 py-1 rounded-full text-[9px] font-semibold uppercase bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">Connecté</span>
              </div>
            </div>

            <!-- Sync Status -->
            <div class="space-y-3">
              <div class="flex items-center justify-between p-3 rounded-lg transition-colors duration-200"
                :class="isDark ? 'bg-zinc-900/50' : 'bg-[#F7F5F0]'">
                <div class="flex items-center gap-2">
                  <div class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span class="text-[11px] font-medium transition-colors duration-200"
                    :class="isDark ? 'text-white' : 'text-[#2D2924]'">Synchronisation active</span>
                </div>
                <span class="text-[10px] font-light transition-colors duration-200"
                  :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">Temps réel</span>
              </div>

              <div class="space-y-2">
                <div class="flex items-center gap-2 p-2 rounded border transition-colors duration-200"
                  :class="isDark ? 'bg-zinc-900/20 border-zinc-900' : 'bg-white border-[#E5E0D8]'">
                  <svg class="w-4 h-4" :class="isDark ? 'text-emerald-400' : 'text-emerald-600'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span class="text-[11px] transition-colors duration-200"
                    :class="isDark ? 'text-zinc-400' : 'text-[#7A7367]'">→ BookMySalon vers Google</span>
                </div>

                <div class="flex items-center gap-2 p-2 rounded border transition-colors duration-200"
                  :class="isDark ? 'bg-zinc-900/20 border-zinc-900' : 'bg-white border-[#E5E0D8]'">
                  <svg class="w-4 h-4" :class="isDark ? 'text-emerald-400' : 'text-emerald-600'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span class="text-[11px] transition-colors duration-200"
                    :class="isDark ? 'text-zinc-400' : 'text-[#7A7367]'">← Google vers BookMySalon</span>
                </div>

                <div class="flex items-center gap-2 p-2 rounded border transition-colors duration-200"
                  :class="isDark ? 'bg-zinc-900/20 border-zinc-900' : 'bg-white border-[#E5E0D8]'">
                  <svg class="w-4 h-4" :class="isDark ? 'text-emerald-400' : 'text-emerald-600'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span class="text-[11px] transition-colors duration-200"
                    :class="isDark ? 'text-zinc-400' : 'text-[#7A7367]'">Conflits détectés et bloqués</span>
                </div>
              </div>
            </div>

            <!-- CTA -->
            <button class="w-full py-3 rounded-xl text-center font-medium text-xs uppercase tracking-wider transition-all duration-300"
              :class="isDark ? 'bg-white hover:bg-[#D5CCBC] text-black' : 'bg-[#2D2924] hover:bg-[#A69B88] text-white'">
              Connecter Google Calendar
            </button>
          </div>
        </div>

      </div>
    </section>

    <section id="skills" class="py-24 border-b px-6 transition-colors duration-200"
      :class="isDark ? 'bg-zinc-950 border-zinc-900' : 'bg-[#F7F5F0] border-[#E5E0D8]'">
      <div class="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">

        <div class="lg:col-span-7 text-left space-y-6">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] tracking-widest uppercase font-medium transition-colors duration-200"
            :class="isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-400' : 'bg-[#F7F5F0] border-[#E5E0D8] text-[#8C8579]'">
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
            Gestion intelligente
          </div>

          <h2 class="text-2xl sm:text-4xl font-light tracking-tight leading-tight transition-colors duration-200"
            :class="isDark ? 'text-white' : 'text-[#2D2924]'">
            Cartographie des <span class="font-serif italic transition-colors duration-200"
              :class="isDark ? 'text-[#D5CCBC]' : 'text-[#A69B88]'">expertises métiers</span> par collaborateur
          </h2>
          <p class="text-sm sm:text-base font-light leading-relaxed transition-colors duration-200"
            :class="isDark ? 'text-zinc-400' : 'text-[#7A7367]'">
            Définissez avec précision les compétences de chaque membre de votre équipe. Le système affiche automatiquement uniquement les collaborateurs qualifiés pour chaque type de prestation. Un coiffeur spécialisé en coupe homme uniquement ne sera jamais proposé pour des colorations ou des coupes femme.
          </p>

          <!-- Exemples concrets -->
          <div class="grid grid-cols-1 gap-3 pt-4">
            <div class="flex items-start gap-3 p-4 rounded-xl border transition-colors duration-200"
              :class="isDark ? 'bg-zinc-900/30 border-zinc-900' : 'bg-[#F7F5F0] border-[#E5E0D8]'">
              <svg class="w-5 h-5 flex-shrink-0 mt-0.5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <div class="flex-1">
                <p class="text-xs font-medium mb-1.5 transition-colors duration-200"
                  :class="isDark ? 'text-white' : 'text-[#2D2924]'">Affectation automatique par compétence</p>
                <p class="text-[11px] font-light leading-relaxed transition-colors duration-200"
                  :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">
                  Exemple : Sophie maîtrise les <span class="font-medium">colorations et balayages</span>, mais pas les coupes homme. Seules les prestations colorations s'afficheront avec sa disponibilité.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-3 p-4 rounded-xl border transition-colors duration-200"
              :class="isDark ? 'bg-zinc-900/30 border-zinc-900' : 'bg-[#F7F5F0] border-[#E5E0D8]'">
              <svg class="w-5 h-5 flex-shrink-0 mt-0.5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <div class="flex-1">
                <p class="text-xs font-medium mb-1.5 transition-colors duration-200"
                  :class="isDark ? 'text-white' : 'text-[#2D2924]'">Prévention des erreurs de réservation</p>
                <p class="text-[11px] font-light leading-relaxed transition-colors duration-200"
                  :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">
                  Exemple : Marc est spécialisé <span class="font-medium">coiffure homme uniquement</span>. Les clientes qui réservent une coupe femme ne verront jamais Marc dans les créneaux disponibles.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-3 p-4 rounded-xl border transition-colors duration-200"
              :class="isDark ? 'bg-zinc-900/30 border-zinc-900' : 'bg-[#F7F5F0] border-[#E5E0D8]'">
              <svg class="w-5 h-5 flex-shrink-0 mt-0.5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <div class="flex-1">
                <p class="text-xs font-medium mb-1.5 transition-colors duration-200"
                  :class="isDark ? 'text-white' : 'text-[#2D2924]'">Optimisation du temps et de la qualité</p>
                <p class="text-[11px] font-light leading-relaxed transition-colors duration-200"
                  :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">
                  Chaque client est automatiquement dirigé vers le professionnel le plus qualifié pour sa demande, garantissant satisfaction et efficacité opérationnelle maximale.
                </p>
              </div>
            </div>
          </div>

          <!-- Bénéfices -->
          <div class="pt-4 space-y-2 text-xs font-light transition-colors duration-200"
            :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">
            <p class="flex items-center gap-2">
              <span class="w-1 h-1 rounded-full transition-colors duration-200"
                :class="isDark ? 'bg-zinc-700' : 'bg-[#D6D0C5]'"></span> Configuration granulaire : associez chaque service à un ou plusieurs collaborateurs</p>
            <p class="flex items-center gap-2">
              <span class="w-1 h-1 rounded-full transition-colors duration-200"
                :class="isDark ? 'bg-zinc-700' : 'bg-[#D6D0C5]'"></span> Mise à jour en temps réel : modifiez les compétences à tout moment depuis votre tableau de bord</p>
            <p class="flex items-center gap-2">
              <span class="w-1 h-1 rounded-full transition-colors duration-200"
                :class="isDark ? 'bg-zinc-700' : 'bg-[#D6D0C5]'"></span> Transparence totale : les clients voient uniquement les créneaux de pros qualifiés</p>
          </div>
        </div>

        <div class="lg:col-span-5 border rounded-2xl p-6 text-left space-y-6 w-full transition-colors duration-200"
          :class="isDark ? 'bg-zinc-900/30 border-zinc-900' : 'bg-[#FDFCF8] border-[#E5E0D8]'">

          <!-- En-tête profil -->
          <div class="flex items-center gap-3 pb-4 border-b transition-colors duration-200"
            :class="isDark ? 'border-zinc-900' : 'border-[#E5E0D8]'">
            <div class="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors duration-200"
              :class="isDark ? 'bg-zinc-800 text-white' : 'bg-[#E5E0D8] text-[#2D2924]'">MA</div>
            <div class="flex-1">
              <h4 class="text-sm font-medium transition-colors duration-200"
                :class="isDark ? 'text-white' : 'text-[#2D2924]'">Marc Dupont</h4>
              <p class="text-[10px] font-light transition-colors duration-200"
                :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">Coiffeur Barbier • 5 ans d'expérience</p>
            </div>
            <button class="px-2 py-1 rounded text-[9px] uppercase tracking-wider font-semibold transition-colors duration-200"
              :class="isDark ? 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700' : 'bg-[#F7F5F0] text-[#8C8579] hover:bg-[#E5E0D8]'">
              Modifier
            </button>
          </div>

          <!-- Compétences actives -->
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <p class="text-[10px] uppercase tracking-widest font-semibold transition-colors duration-200"
                :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">Compétences Activées</p>
              <span class="px-2 py-0.5 rounded-full text-[9px] font-bold transition-colors duration-200"
                :class="isDark ? 'bg-emerald-500/10 text-emerald-400' : 'bg-emerald-500/10 text-emerald-600'">
                3 services
              </span>
            </div>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 dark:text-emerald-400 rounded-lg text-[11px] font-medium flex items-center gap-1.5">
                <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                Coupe Homme
              </span>
              <span class="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 dark:text-emerald-400 rounded-lg text-[11px] font-medium flex items-center gap-1.5">
                <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                Taille Barbe
              </span>
              <span class="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 dark:text-emerald-400 rounded-lg text-[11px] font-medium flex items-center gap-1.5">
                <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                Coloration Barbe
              </span>
            </div>
          </div>

          <!-- Compétences désactivées -->
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <p class="text-[10px] uppercase tracking-widest font-semibold transition-colors duration-200"
                :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">Non Qualifié Pour</p>
              <span class="px-2 py-0.5 rounded-full text-[9px] font-bold transition-colors duration-200"
                :class="isDark ? 'bg-red-500/10 text-red-400' : 'bg-red-500/10 text-red-600'">
                4 services
              </span>
            </div>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1.5 border rounded-lg text-[11px] font-medium opacity-50 line-through transition-colors duration-200"
                :class="isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-500' : 'bg-[#F7F5F0] border-[#E5E0D8] text-[#8C8579]'">
                Coupe Femme
              </span>
              <span class="px-3 py-1.5 border rounded-lg text-[11px] font-medium opacity-50 line-through transition-colors duration-200"
                :class="isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-500' : 'bg-[#F7F5F0] border-[#E5E0D8] text-[#8C8579]'">
                Balayage
              </span>
              <span class="px-3 py-1.5 border rounded-lg text-[11px] font-medium opacity-50 line-through transition-colors duration-200"
                :class="isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-500' : 'bg-[#F7F5F0] border-[#E5E0D8] text-[#8C8579]'">
                Brushing
              </span>
              <span class="px-3 py-1.5 border rounded-lg text-[11px] font-medium opacity-50 line-through transition-colors duration-200"
                :class="isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-500' : 'bg-[#F7F5F0] border-[#E5E0D8] text-[#8C8579]'">
                Permanente
              </span>
            </div>
          </div>

          <!-- Impact -->
          <div class="pt-4 border-t space-y-2 transition-colors duration-200"
            :class="isDark ? 'border-zinc-900' : 'border-[#E5E0D8]'">
            <p class="text-[10px] uppercase tracking-widest font-semibold transition-colors duration-200"
              :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">Impact sur la Réservation</p>
            <div class="p-3 rounded-lg transition-colors duration-200"
              :class="isDark ? 'bg-zinc-900/50' : 'bg-[#F7F5F0]'">
              <p class="text-[11px] font-light leading-relaxed transition-colors duration-200"
                :class="isDark ? 'text-zinc-400' : 'text-[#7A7367]'">
                Les clients réservant une <span class="font-semibold">Coupe Femme</span> ou un <span class="font-semibold">Balayage</span> ne verront jamais les créneaux de Marc. Seuls les services pour lesquels il est qualifié afficheront ses disponibilités.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Section Happy Hour / Promotions -->
    <section id="happy-hour" class="py-24 border-b px-6 transition-colors duration-200"
      :class="isDark ? 'bg-zinc-950 border-zinc-900' : 'bg-[#FDFCF8] border-[#E5E0D8]'">
      <div class="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">

        <div class="lg:col-span-5 relative order-2 lg:order-1">
          <div class="border rounded-2xl p-6 space-y-6 transition-colors duration-200"
            :class="isDark ? 'bg-zinc-900/30 border-zinc-900' : 'bg-[#FDFCF8] border-[#E5E0D8]'">

            <!-- Header -->
            <div class="flex items-center justify-between pb-4 border-b transition-colors duration-200"
              :class="isDark ? 'border-zinc-900' : 'border-[#E5E0D8]'">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-200"
                  :class="isDark ? 'bg-amber-500/10' : 'bg-amber-500/10'">
                  <svg class="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="text-sm font-semibold transition-colors duration-200"
                    :class="isDark ? 'text-white' : 'text-[#2D2924]'">Mode Happy Hour</h4>
                  <p class="text-[10px] font-light transition-colors duration-200"
                    :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">Créé par vous</p>
                </div>
              </div>
              <span class="px-2 py-1 rounded-full text-[9px] font-semibold uppercase bg-amber-500/10 text-amber-600 dark:text-amber-400">
                Actif
              </span>
            </div>

            <!-- Exemple de promotion -->
            <div class="space-y-3">
              <p class="text-[10px] uppercase tracking-widest font-semibold transition-colors duration-200"
                :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">Promotion Détectée</p>

              <div class="p-4 rounded-xl border-2 border-amber-500/30 bg-gradient-to-br transition-colors duration-200"
                :class="isDark ? 'from-amber-500/5 to-orange-500/5' : 'from-amber-50 to-orange-50'">
                <div class="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h5 class="text-sm font-semibold mb-1 transition-colors duration-200"
                      :class="isDark ? 'text-white' : 'text-[#2D2924]'">🎯 Flash 30% - Coupe Homme</h5>
                    <p class="text-[11px] font-light transition-colors duration-200"
                      :class="isDark ? 'text-zinc-400' : 'text-[#7A7367]'">Créneaux disponibles demain 14h-17h</p>
                  </div>
                  <span class="px-2 py-1 rounded-lg text-[10px] font-bold bg-amber-500 text-white whitespace-nowrap">-30%</span>
                </div>
                <div class="flex items-center gap-2 text-[10px] transition-colors duration-200"
                  :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">
                  <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span>Expire dans 2h15min</span>
                </div>
              </div>

              <!-- Stats -->
              <div class="grid grid-cols-2 gap-2">
                <div class="p-3 rounded-lg border transition-colors duration-200"
                  :class="isDark ? 'bg-zinc-900/50 border-zinc-900' : 'bg-white border-[#E5E0D8]'">
                  <p class="text-[9px] uppercase tracking-wider font-semibold mb-1 transition-colors duration-200"
                    :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">Taux Remplissage</p>
                  <p class="text-xl font-light transition-colors duration-200"
                    :class="isDark ? 'text-emerald-400' : 'text-emerald-600'">+68%</p>
                </div>
                <div class="p-3 rounded-lg border transition-colors duration-200"
                  :class="isDark ? 'bg-zinc-900/50 border-zinc-900' : 'bg-white border-[#E5E0D8]'">
                  <p class="text-[9px] uppercase tracking-wider font-semibold mb-1 transition-colors duration-200"
                    :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">Créneaux Comblés</p>
                  <p class="text-xl font-light transition-colors duration-200"
                    :class="isDark ? 'text-white' : 'text-[#2D2924]'">12/15</p>
                </div>
              </div>
            </div>

            <!-- Info Email/SMS -->
            <div class="pt-4 border-t transition-colors duration-200"
              :class="isDark ? 'border-zinc-900' : 'border-[#E5E0D8]'">
              <div class="flex items-start gap-2">
                <svg class="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <p class="text-[10px] font-light leading-relaxed transition-colors duration-200"
                  :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">
                  Vous créez vos promotions et le système envoie automatiquement des emails/SMS aux clients à proximité pour combler vos créneaux vides.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-7 text-left space-y-6 order-1 lg:order-2">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] tracking-widest uppercase font-medium transition-colors duration-200"
            :class="isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-400' : 'bg-[#F7F5F0] border-[#E5E0D8] text-[#8C8579]'">
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
            Remplissage Intelligent
          </div>

          <h2 class="text-2xl sm:text-4xl font-light tracking-tight leading-tight transition-colors duration-200"
            :class="isDark ? 'text-white' : 'text-[#2D2924]'">
            Promotions <span class="font-serif italic transition-colors duration-200"
              :class="isDark ? 'text-[#D5CCBC]' : 'text-[#A69B88]'">"Happy Hour"</span> pour combler vos créneaux
          </h2>

          <p class="text-sm sm:text-base font-light leading-relaxed transition-colors duration-200"
            :class="isDark ? 'text-zinc-400' : 'text-[#7A7367]'">
            Vous créez des promotions ciblées pour combler vos créneaux vides. Le système envoie alors automatiquement des emails et SMS à vos clients à proximité pour les informer des offres disponibles et maximiser votre taux d'occupation.
          </p>

          <!-- Features -->
          <div class="space-y-3 pt-2">
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                :class="isDark ? 'bg-zinc-900' : 'bg-[#F7F5F0]'">
                <svg class="w-4 h-4" :class="isDark ? 'text-[#D5CCBC]' : 'text-[#A69B88]'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <div>
                <h4 class="text-sm font-medium mb-1 transition-colors duration-200"
                  :class="isDark ? 'text-white' : 'text-[#2D2924]'">Visualisation des créneaux vides</h4>
                <p class="text-xs font-light leading-relaxed transition-colors duration-200"
                  :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">
                  Identifiez facilement les créneaux à risque de rester vides (24h, 48h, 72h à l'avance) et créez vos promotions
                </p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <div class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                :class="isDark ? 'bg-zinc-900' : 'bg-[#F7F5F0]'">
                <svg class="w-4 h-4" :class="isDark ? 'text-[#D5CCBC]' : 'text-[#A69B88]'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <div>
                <h4 class="text-sm font-medium mb-1 transition-colors duration-200"
                  :class="isDark ? 'text-white' : 'text-[#2D2924]'">Proposer aux clients d'avancer leur RDV</h4>
                <p class="text-xs font-light leading-relaxed transition-colors duration-200"
                  :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">
                  Le système envoie des emails/SMS aux clients ayant un RDV futur pour leur proposer de venir plus tôt
                </p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <div class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                :class="isDark ? 'bg-zinc-900' : 'bg-[#F7F5F0]'">
                <svg class="w-4 h-4" :class="isDark ? 'text-[#D5CCBC]' : 'text-[#A69B88]'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                </svg>
              </div>
              <div>
                <h4 class="text-sm font-medium mb-1 transition-colors duration-200"
                  :class="isDark ? 'text-white' : 'text-[#2D2924]'">Créez vos promotions personnalisées</h4>
                <p class="text-xs font-light leading-relaxed transition-colors duration-200"
                  :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">
                  Vous décidez de la réduction (-10% à -50%), des créneaux et de la durée de validité de vos offres
                </p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <div class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                :class="isDark ? 'bg-zinc-900' : 'bg-[#F7F5F0]'">
                <svg class="w-4 h-4" :class="isDark ? 'text-[#D5CCBC]' : 'text-[#A69B88]'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>
                <h4 class="text-sm font-medium mb-1 transition-colors duration-200"
                  :class="isDark ? 'text-white' : 'text-[#2D2924]'">ROI garanti</h4>
                <p class="text-xs font-light leading-relaxed transition-colors duration-200"
                  :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">
                  Un créneau comblé à -30% génère plus de revenu qu'un créneau vide à 100%
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Section SMS de Rappel -->
    <section id="sms-rappel" class="py-24 border-b px-6 transition-colors duration-200"
      :class="isDark ? 'bg-zinc-950 border-zinc-900' : 'bg-[#F7F5F0] border-[#E5E0D8]'">
      <div class="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">

        <div class="lg:col-span-7 text-left space-y-6">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] tracking-widest uppercase font-medium transition-colors duration-200"
            :class="isDark ? 'bg-zinc-900 border-zinc-800 text-zinc-400' : 'bg-[#F7F5F0] border-[#E5E0D8] text-[#8C8579]'">
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
            </svg>
            Communication Automatisée
          </div>

          <h2 class="text-2xl sm:text-4xl font-light tracking-tight leading-tight transition-colors duration-200"
            :class="isDark ? 'text-white' : 'text-[#2D2924]'">
            SMS de rappel <span class="font-serif italic transition-colors duration-200"
              :class="isDark ? 'text-[#D5CCBC]' : 'text-[#A69B88]'">automatiques</span> et intelligents
          </h2>

          <p class="text-sm sm:text-base font-light leading-relaxed transition-colors duration-200"
            :class="isDark ? 'text-zinc-400' : 'text-[#7A7367]'">
            Réduisez drastiquement vos no-shows grâce à notre système de rappels automatiques par SMS. Confirmation de rendez-vous, rappel 24h avant, possibilité d'annulation en un clic. Tout est automatisé pour protéger votre chiffre d'affaires.
          </p>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-4 pt-4">
            <div class="text-center p-4 rounded-xl border transition-colors duration-200"
              :class="isDark ? 'bg-zinc-900/30 border-zinc-900' : 'bg-[#FDFCF8] border-[#E5E0D8]'">
              <p class="text-2xl font-light mb-1 transition-colors duration-200"
                :class="isDark ? 'text-emerald-400' : 'text-emerald-600'">-73%</p>
              <p class="text-[10px] uppercase tracking-wider font-semibold transition-colors duration-200"
                :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">No-shows</p>
            </div>
            <div class="text-center p-4 rounded-xl border transition-colors duration-200"
              :class="isDark ? 'bg-zinc-900/30 border-zinc-900' : 'bg-[#FDFCF8] border-[#E5E0D8]'">
              <p class="text-2xl font-light mb-1 transition-colors duration-200"
                :class="isDark ? 'text-white' : 'text-[#2D2924]'">50</p>
              <p class="text-[10px] uppercase tracking-wider font-semibold transition-colors duration-200"
                :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">SMS/mois inclus</p>
            </div>
            <div class="text-center p-4 rounded-xl border transition-colors duration-200"
              :class="isDark ? 'bg-zinc-900/30 border-zinc-900' : 'bg-[#FDFCF8] border-[#E5E0D8]'">
              <p class="text-2xl font-light mb-1 transition-colors duration-200"
                :class="isDark ? 'text-white' : 'text-[#2D2924]'">97%</p>
              <p class="text-[10px] uppercase tracking-wider font-semibold transition-colors duration-200"
                :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">Taux ouverture</p>
            </div>
          </div>

          <!-- Features list -->
          <div class="space-y-2.5 text-xs font-light pt-4 transition-colors duration-200"
            :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">
            <p class="flex items-center gap-2">
              <svg class="w-3.5 h-3.5" :class="isDark ? 'text-emerald-400' : 'text-emerald-600'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              Confirmation immédiate après réservation avec récapitulatif complet
            </p>
            <p class="flex items-center gap-2">
              <svg class="w-3.5 h-3.5" :class="isDark ? 'text-emerald-400' : 'text-emerald-600'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              Rappel automatique 24h avant (personnalisable : 48h, 72h, 1 semaine)
            </p>
            <p class="flex items-center gap-2">
              <svg class="w-3.5 h-3.5" :class="isDark ? 'text-emerald-400' : 'text-emerald-600'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              Lien d'annulation direct : client peut annuler en 1 clic depuis le SMS
            </p>
            <p class="flex items-center gap-2">
              <svg class="w-3.5 h-3.5" :class="isDark ? 'text-emerald-400' : 'text-emerald-600'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              Messages personnalisables avec nom salon, collaborateur, date/heure, adresse
            </p>
            <p class="flex items-center gap-2">
              <svg class="w-3.5 h-3.5" :class="isDark ? 'text-emerald-400' : 'text-emerald-600'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              Recharge automatique ou manuelle des crédits SMS selon vos besoins
            </p>
          </div>
        </div>

        <div class="lg:col-span-5 relative">
          <div class="border rounded-2xl p-6 space-y-4 transition-colors duration-200"
            :class="isDark ? 'bg-zinc-900/30 border-zinc-900' : 'bg-[#FDFCF8] border-[#E5E0D8]'">

            <!-- Phone mockup -->
            <div class="mx-auto w-72 border rounded-3xl p-3 shadow-2xl transition-colors duration-200"
              :class="isDark ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-[#E5E0D8]'">
              <div class="space-y-3">
                <!-- SMS 1: Confirmation -->
                <div class="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-3">
                  <p class="text-[10px] font-semibold mb-2 text-blue-600 dark:text-blue-400">BookMySalon - Confirmation</p>
                  <p class="text-[11px] leading-relaxed transition-colors duration-200"
                    :class="isDark ? 'text-zinc-300' : 'text-[#2D2924]'">
                    ✅ Bonjour Sophie,<br/>
                    Votre RDV est confirmé :<br/>
                    📅 Demain 14h30<br/>
                    💇 Coupe + Couleur (90min)<br/>
                    👤 Avec Marie<br/>
                    📍 Salon Élégance, 15 rue...<br/>
                    <span class="text-blue-600 dark:text-blue-400 underline">→ Annuler/Modifier</span>
                  </p>
                </div>

                <!-- SMS 2: Rappel -->
                <div class="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-3">
                  <p class="text-[10px] font-semibold mb-2 text-amber-600 dark:text-amber-400">BookMySalon - Rappel</p>
                  <p class="text-[11px] leading-relaxed transition-colors duration-200"
                    :class="isDark ? 'text-zinc-300' : 'text-[#2D2924]'">
                    ⏰ Rappel : RDV dans 24h<br/>
                    Demain 14h30 avec Marie<br/>
                    On vous attend !<br/>
                    <span class="text-amber-600 dark:text-amber-400 underline">→ Confirmer ma présence</span>
                  </p>
                </div>

                <!-- SMS 3: Merci -->
                <div class="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-3">
                  <p class="text-[10px] font-semibold mb-2 text-emerald-600 dark:text-emerald-400">BookMySalon</p>
                  <p class="text-[11px] leading-relaxed transition-colors duration-200"
                    :class="isDark ? 'text-zinc-300' : 'text-[#2D2924]'">
                    💚 Merci Sophie !<br/>
                    Nous espérons vous revoir bientôt.<br/>
                    <span class="text-emerald-600 dark:text-emerald-400 underline">→ Laisser un avis</span>
                  </p>
                </div>
              </div>
            </div>

            <!-- Info box -->
            <div class="flex items-start gap-2 p-3 rounded-lg transition-colors duration-200"
              :class="isDark ? 'bg-zinc-900/50' : 'bg-[#F7F5F0]'">
              <svg class="w-4 h-4 flex-shrink-0 mt-0.5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <p class="text-[10px] font-light leading-relaxed transition-colors duration-200"
                :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">
                Tous les messages sont automatiquement envoyés selon vos règles. Le client peut annuler ou confirmer directement depuis le SMS.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>

<section id="comparaison" class="py-24 border-b px-6 transition-colors duration-200"
    :class="isDark ? 'bg-zinc-950 border-zinc-900' : 'bg-[#F7F5F0] border-[#E5E0D8]'">
    <div class="max-w-7xl mx-auto space-y-16">
      <div class="text-center space-y-3">
        <h2 class="text-xs uppercase tracking-widest font-semibold transition-colors duration-200"
          :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">Analyse Concurrentielle</h2>
        <p class="text-2xl sm:text-3xl font-light tracking-tight transition-colors duration-200"
          :class="isDark ? 'text-white' : 'text-[#2D2924]'">Indépendance logicielle vs Écosystèmes tiers</p>
      </div>

      <div class="overflow-x-auto no-scrollbar border rounded-2xl transition-colors duration-200"
        :class="isDark ? 'border-zinc-900 bg-zinc-900/10' : 'border-[#E5E0D8] bg-[#FDFCF8]/10'">
        <table class="w-full border-collapse text-left text-xs tracking-wide">
          <thead>
            <tr class="border-b text-[10px] uppercase tracking-widest transition-colors duration-200"
              :class="isDark ? 'bg-zinc-900/60 border-zinc-900 text-zinc-400' : 'bg-[#E5E0D8]/60 border-[#E5E0D8] text-[#8C8579]'">
              <th class="p-5 font-medium">Capacités Systèmes</th>
              <th class="p-5 font-semibold text-center backdrop-blur transition-colors duration-200"
                :class="isDark ? 'text-white bg-white/5' : 'text-[#2D2924] bg-[#FDFCF8]/50'">BookMySalon PRO</th>
              <th class="p-5 font-medium text-center">Planity</th>
              <th class="p-5 font-medium text-center">Fresha</th>
              <th class="p-5 font-medium text-center">Treatwell</th>
            </tr>
          </thead>

          <tbody class="divide-y font-light transition-colors duration-200"
            :class="isDark ? 'divide-zinc-900' : 'divide-[#E5E0D8]'">
            
            <!-- Remplissage automatique -->
            <tr>
              <td class="p-5 font-medium transition-colors duration-200"
                :class="isDark ? 'text-zinc-300' : 'text-[#2D2924]'">Remplissage automatique des créneaux vides (Offres Flash)</td>
              <td class="p-5 text-center font-semibold transition-colors duration-200"
                :class="isDark ? 'text-[#D5CCBC] bg-white/5' : 'text-[#A69B88] bg-[#FDFCF8]/50'">Oui (Inclus)</td>
              <td class="p-5 text-center transition-colors duration-200"
                :class="isDark ? 'text-zinc-600' : 'text-[#8C8579]'">—</td>
              <td class="p-5 text-center transition-colors duration-200"
                :class="isDark ? 'text-zinc-600' : 'text-[#8C8579]'">—</td>
              <td class="p-5 text-center transition-colors duration-200"
                :class="isDark ? 'text-zinc-600' : 'text-[#8C8579]'">—</td>
            </tr>

            <!-- Fichier No-show & Blacklist -->
            <tr :class="isDark ? 'bg-zinc-900/20' : 'bg-[#F7F5F0]'">
              <td class="p-5 font-medium transition-colors duration-200"
                :class="isDark ? 'text-zinc-300' : 'text-[#2D2924]'">
                Index anti-absentéisme & Blacklistage
                <span class="block text-[10px] font-light mt-0.5 transition-colors duration-200"
                  :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">Blocage définitif des clients abusifs en ligne</span>
              </td>
              <td class="p-5 text-center font-semibold transition-colors duration-200"
                :class="isDark ? 'text-[#D5CCBC] bg-white/5' : 'text-[#A69B88] bg-[#FDFCF8]/50'">Oui (Natif)</td>
              <td class="p-5 text-center transition-colors duration-200"
                :class="isDark ? 'text-zinc-600' : 'text-[#8C8579]'">Non</td>
              <td class="p-5 text-center transition-colors duration-200"
                :class="isDark ? 'text-zinc-600' : 'text-[#8C8579]'">Non</td>
              <td class="p-5 text-center transition-colors duration-200"
                :class="isDark ? 'text-zinc-600' : 'text-[#8C8579]'">Non</td>
            </tr>

            <!-- Commissions -->
            <tr>
              <td class="p-5 font-medium transition-colors duration-200"
                :class="isDark ? 'text-zinc-300' : 'text-[#2D2924]'">
                Commissions sur vos réservations
                <span class="block text-[10px] font-light mt-0.5 transition-colors duration-200"
                  :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">Hors frais bancaires de transaction</span>
              </td>
              <td class="p-5 text-center font-semibold text-emerald-500 transition-colors duration-200"
                :class="isDark ? 'bg-white/5' : 'bg-[#FDFCF8]/50'">
                0% Commission<br />
                <span class="text-[9px] font-light transition-colors duration-200"
                  :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">Frais bancaires offerts <br class="sm:hidden"/>(seuil 300€)</span>
              </td>
              <td class="p-5 text-center transition-colors duration-200"
                :class="isDark ? 'text-zinc-400' : 'text-[#7A7367]'">0% Commission<br /><span class="text-[9px] transition-colors duration-200"
                  :class="isDark ? 'text-zinc-600' : 'text-[#8C8579]'">+ Abo fixe élevé</span></td>
              <td class="p-5 text-center transition-colors duration-200"
                :class="isDark ? 'text-zinc-400' : 'text-[#7A7367]'">~2,19% + 0,20€<br /><span class="text-[9px] transition-colors duration-200"
                  :class="isDark ? 'text-zinc-600' : 'text-[#8C8579]'">Sur chaque rdv</span></td>
              <td class="p-5 text-center transition-colors duration-200"
                :class="isDark ? 'text-zinc-400' : 'text-[#7A7367]'">Jusqu'à 35%<br /><span class="text-[9px] transition-colors duration-200"
                  :class="isDark ? 'text-zinc-600' : 'text-[#8C8579]'">Sur les nouveaux clients</span></td>
            </tr>

            <!-- Acomptes individualisés -->
            <tr :class="isDark ? 'bg-zinc-900/20' : 'bg-[#F7F5F0]'">
              <td class="p-5 font-medium transition-colors duration-200"
                :class="isDark ? 'text-zinc-300' : 'text-[#2D2924]'">
                Modulation des acomptes par profil
                <span class="block text-[10px] font-light mt-0.5 transition-colors duration-200"
                  :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">Acompte total (100%) ou partiel forcé par client</span>
              </td>
              <td class="p-5 text-center font-semibold transition-colors duration-200"
                :class="isDark ? 'text-[#D5CCBC] bg-white/5' : 'text-[#A69B88] bg-[#FDFCF8]/50'">Sur-mesure total</td>
              <td class="p-5 text-center transition-colors duration-200"
                :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">Rigide (Global)</td>
              <td class="p-5 text-center transition-colors duration-200"
                :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">Rigide (Global)</td>
              <td class="p-5 text-center transition-colors duration-200"
                :class="isDark ? 'text-zinc-600' : 'text-[#8C8579]'">Non</td>
            </tr>

            <!-- Matrice compétences -->
            <tr>
              <td class="p-5 font-medium transition-colors duration-200"
                :class="isDark ? 'text-zinc-300' : 'text-[#2D2924]'">Filtre des créneaux par compétences d'équipe</td>
              <td class="p-5 text-center font-semibold transition-colors duration-200"
                :class="isDark ? 'text-[#D5CCBC] bg-white/5' : 'text-[#A69B88] bg-[#FDFCF8]/50'">Oui (Natif)</td>
              <td class="p-5 text-center transition-colors duration-200"
                :class="isDark ? 'text-zinc-600' : 'text-[#8C8579]'">Non</td>
              <td class="p-5 text-center transition-colors duration-200"
                :class="isDark ? 'text-zinc-600' : 'text-[#8C8579]'">Non</td>
              <td class="p-5 text-center transition-colors duration-200"
                :class="isDark ? 'text-zinc-600' : 'text-[#8C8579]'">Non</td>
            </tr>

            <!-- Transit Historique -->
            <tr :class="isDark ? 'bg-zinc-900/20' : 'bg-[#F7F5F0]'">
              <td class="p-5 font-medium transition-colors duration-200"
                :class="isDark ? 'text-zinc-300' : 'text-[#2D2924]'">Récupération gratuite de votre historique client</td>
              <td class="p-5 text-center font-semibold transition-colors duration-200"
                :class="isDark ? 'text-[#D5CCBC] bg-white/5' : 'text-[#A69B88] bg-[#FDFCF8]/50'">Inclus d'office</td>
              <td class="p-5 text-center transition-colors duration-200"
                :class="isDark ? 'text-zinc-600' : 'text-[#8C8579]'">Complexifié</td>
              <td class="p-5 text-center transition-colors duration-200"
                :class="isDark ? 'text-zinc-600' : 'text-[#8C8579]'">Complexifié</td>
              <td class="p-5 text-center transition-colors duration-200"
                :class="isDark ? 'text-zinc-600' : 'text-[#8C8579]'">Non</td>
            </tr>

            <!-- Caisse intégrée -->
            <tr>
              <td class="p-5 font-medium transition-colors duration-200"
                :class="isDark ? 'text-zinc-300' : 'text-[#2D2924]'">Système de caisse complet intégré</td>
              <td class="p-5 text-center font-semibold transition-colors duration-200"
                :class="isDark ? 'text-[#D5CCBC] bg-white/5' : 'text-[#A69B88] bg-[#FDFCF8]/50'">Oui (Inclus)</td>
              <td class="p-5 text-center transition-colors duration-200"
                :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">Option payante</td>
              <td class="p-5 text-center transition-colors duration-200"
                :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">Oui (Basique)</td>
              <td class="p-5 text-center transition-colors duration-200"
                :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">Option payante</td>
            </tr>

            <!-- Souveraineté image -->
            <tr :class="isDark ? 'bg-zinc-900/20' : 'bg-[#F7F5F0]'">
              <td class="p-5 font-medium transition-colors duration-200"
                :class="isDark ? 'text-zinc-300' : 'text-[#2D2924]'">Souveraineté d'image (Pas de pub concurrentielle)</td>
              <td class="p-5 text-center font-semibold transition-colors duration-200"
                :class="isDark ? 'text-[#D5CCBC] bg-white/5' : 'text-[#A69B88] bg-[#FDFCF8]/50'">Garantie</td>
              <td class="p-5 text-center transition-colors duration-200"
                :class="isDark ? 'text-zinc-600' : 'text-[#8C8579]'">Non (Marketplace)</td>
              <td class="p-5 text-center transition-colors duration-200"
                :class="isDark ? 'text-zinc-600' : 'text-[#8C8579]'">Non (Marketplace)</td>
              <td class="p-5 text-center transition-colors duration-200"
                :class="isDark ? 'text-zinc-600' : 'text-[#8C8579]'">Non (Marketplace)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="text-center pt-4">
        <a href="https://pro.bookmysalon.fr/login" class="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl"
          :class="isDark ? 'bg-white hover:bg-[#D5CCBC] text-black shadow-white/5' : 'bg-[#2D2924] hover:bg-[#A69B88] text-white shadow-zinc-900/10'">
          Migrer ma structure vers l'écosystème PRO
        </a>
      </div>
    </div>
  </section>
    <section id="tarifs" class="py-24 border-b px-6 transition-colors duration-200"
      :class="isDark ? 'bg-zinc-950 border-zinc-900' : 'bg-[#FDFCF8] border-[#E5E0D8]'">
      <div class="max-w-7xl mx-auto space-y-16">
        <div class="text-center space-y-3">
          <h2 class="text-xs uppercase tracking-widest font-semibold transition-colors duration-200"
            :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">Grille de Tarification</h2>
          <p class="text-2xl sm:text-3xl font-light tracking-tight transition-colors duration-200"
            :class="isDark ? 'text-white' : 'text-[#2D2924]'">Des plans clairs. Zéro surprise sur le volume d'affaires.</p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div class="p-4 border rounded-xl text-left space-y-1 transition-colors duration-200"
            :class="isDark ? 'bg-zinc-900/30 border-zinc-900' : 'bg-[#F7F5F0] border-[#E5E0D8]'">
            <p class="text-xs font-medium transition-colors duration-200"
              :class="isDark ? 'text-white' : 'text-[#2D2924]'">0% Commission</p>
            <p class="text-[10px] font-light transition-colors duration-200"
              :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">Jusqu'à 300€ d'actes mensuels</p>
          </div>
          <div class="p-4 border rounded-xl text-left space-y-1 transition-colors duration-200"
            :class="isDark ? 'bg-zinc-900/30 border-zinc-900' : 'bg-[#F7F5F0] border-[#E5E0D8]'">
            <p class="text-xs font-medium transition-colors duration-200"
              :class="isDark ? 'text-white' : 'text-[#2D2924]'">50 Alertes SMS</p>
            <p class="text-[10px] font-light transition-colors duration-200"
              :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">Incluses par cycle de facturation</p>
          </div>
          <div class="p-4 border rounded-xl text-left space-y-1 transition-colors duration-200"
            :class="isDark ? 'bg-zinc-900/30 border-zinc-900' : 'bg-[#F7F5F0] border-[#E5E0D8]'">
            <p class="text-xs font-medium transition-colors duration-200"
              :class="isDark ? 'text-white' : 'text-[#2D2924]'">Flux Continu 24/7</p>
            <p class="text-[10px] font-light transition-colors duration-200"
              :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">Prise d'ordre automatisée</p>
          </div>
          <div class="p-4 border rounded-xl text-left space-y-1 transition-colors duration-200"
            :class="isDark ? 'bg-zinc-900/30 border-zinc-900' : 'bg-[#F7F5F0] border-[#E5E0D8]'">
            <p class="text-xs font-medium transition-colors duration-200"
              :class="isDark ? 'text-white' : 'text-[#2D2924]'">Affiliation Active</p>
            <p class="text-[10px] font-light transition-colors duration-200"
              :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">Épargne d'un mois par parrainage</p>
          </div>
        </div>

        <div class="grid md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto pt-4">
          <div class="border p-8 rounded-2xl flex flex-col justify-between text-left space-y-8 transition-colors duration-200"
            :class="isDark ? 'bg-zinc-900/20 border-zinc-900' : 'bg-[#F7F5F0] border-[#E5E0D8]'">
            <div class="space-y-4">
              <div>
                <h3 class="text-base font-medium tracking-wide transition-colors duration-200"
                  :class="isDark ? 'text-white' : 'text-[#2D2924]'">Solo Studio</h3>
                <p class="text-xs font-light mt-0.5 transition-colors duration-200"
                  :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">Artisans indépendants & micro-entreprises</p>
              </div>
              <div class="font-mono text-2xl font-light transition-colors duration-200"
                :class="isDark ? 'text-white' : 'text-[#2D2924]'">14,99€ <span class="text-xs font-light transition-colors duration-200"
                  :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">/ mois</span></div>
              <ul class="space-y-2.5 text-xs font-light border-t pt-4 transition-colors duration-200"
                :class="isDark ? 'text-zinc-400 border-zinc-900' : 'text-[#7A7367] border-[#E5E0D8]'">
                <li class="flex items-center gap-2">
                  <svg class="w-3.5 h-3.5 transition-colors duration-200" :class="isDark ? 'text-zinc-600' : 'text-[#D6D0C5]'" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> 1 Compte Opérateur Dédié</li>
                <li class="flex items-center gap-2">
                  <svg class="w-3.5 h-3.5 transition-colors duration-200" :class="isDark ? 'text-zinc-600' : 'text-[#D6D0C5]'" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> Passerelle de prise d'ordres web</li>
                <li class="flex items-center gap-2">
                  <svg class="w-3.5 h-3.5 transition-colors duration-200" :class="isDark ? 'text-zinc-600' : 'text-[#D6D0C5]'" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> 50 Crédits SMS d'alerte / mois</li>
                <li class="flex items-center gap-2">
                  <svg class="w-3.5 h-3.5 transition-colors duration-200" :class="isDark ? 'text-zinc-600' : 'text-[#D6D0C5]'" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> Rappels synchronisés multicanaux</li>
              </ul>
            </div>
            <a href="https://pro.bookmysalon.fr/login" class="w-full py-3 rounded-xl text-center font-medium text-xs uppercase tracking-wider border transition-colors"
              :class="isDark ? 'bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border-zinc-800' : 'bg-[#E5E0D8] hover:bg-[#D6D0C5] text-[#2D2924] border-[#D6D0C5]'">Démarrer le cycle</a>
          </div>

          <div class="border p-8 rounded-2xl flex flex-col justify-between text-left space-y-8 relative transform md:-translate-y-2 shadow-xl transition-colors duration-200"
            :class="isDark ? 'bg-zinc-900/50 border-[#D5CCBC]/30 shadow-black/40' : 'bg-[#FDFCF8] border-[#A69B88]/30 shadow-zinc-900/10'">
            <span class="absolute top-0 right-6 -translate-y-1/2 px-2.5 py-0.5 rounded-full text-[9px] uppercase tracking-widest font-semibold transition-colors duration-200"
              :class="isDark ? 'bg-[#D5CCBC] text-black' : 'bg-[#A69B88] text-white'">Conseillé</span>
            <div class="space-y-4">
              <div>
                <h3 class="text-base font-medium tracking-wide transition-colors duration-200"
                  :class="isDark ? 'text-white' : 'text-[#2D2924]'">Équipe Lab</h3>
                <p class="text-xs font-light mt-0.5 transition-colors duration-200"
                  :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">Structures comptant 2 à 3 collaborateurs</p>
              </div>
              <div class="font-mono text-2xl font-light transition-colors duration-200"
                :class="isDark ? 'text-white' : 'text-[#2D2924]'">29,99€ <span class="text-xs font-light transition-colors duration-200"
                  :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">/ mois</span></div>
              <ul class="space-y-2.5 text-xs font-light border-t pt-4 transition-colors duration-200"
                :class="isDark ? 'text-zinc-400 border-zinc-900' : 'text-[#7A7367] border-[#E5E0D8]'">
                <li class="flex items-center gap-2">
                  <svg class="w-3.5 h-3.5 transition-colors duration-200" :class="isDark ? 'text-[#D5CCBC]' : 'text-[#A69B88]'" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> Jusqu'à 3 postes d'opérateurs</li>
                <li class="flex items-center gap-2">
                  <svg class="w-3.5 h-3.5 transition-colors duration-200" :class="isDark ? 'text-[#D5CCBC]' : 'text-[#A69B88]'" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> Matrice algorithmique des expertises</li>
                <li class="flex items-center gap-2">
                  <svg class="w-3.5 h-3.5 transition-colors duration-200" :class="isDark ? 'text-[#D5CCBC]' : 'text-[#A69B88]'" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> Happy Hours & Promotions</li>
                <li class="flex items-center gap-2">
                  <svg class="w-3.5 h-3.5 transition-colors duration-200" :class="isDark ? 'text-[#D5CCBC]' : 'text-[#A69B88]'" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> Index partagé anti-absentéisme</li>
              </ul>
            </div>
            <a href="https://pro.bookmysalon.fr/login" class="w-full py-3 rounded-xl text-center font-semibold text-xs uppercase tracking-wider transition-colors"
              :class="isDark ? 'bg-white hover:bg-[#D5CCBC] text-black' : 'bg-[#2D2924] hover:bg-[#A69B88] text-white'">Sélectionner l'offre</a>
          </div>

          <div class="border p-8 rounded-2xl flex flex-col justify-between text-left space-y-8 transition-colors duration-200"
            :class="isDark ? 'bg-zinc-900/20 border-zinc-900' : 'bg-[#F7F5F0] border-[#E5E0D8]'">
            <div class="space-y-4">
              <div>
                <h3 class="text-base font-medium tracking-wide transition-colors duration-200"
                  :class="isDark ? 'text-white' : 'text-[#2D2924]'">Salon Plus Cloud</h3>
                <p class="text-xs font-light mt-0.5 transition-colors duration-200"
                  :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">Réseaux d'établissements & équipes larges</p>
              </div>
              <div class="font-mono text-2xl font-light transition-colors duration-200"
                :class="isDark ? 'text-white' : 'text-[#2D2924]'">49,99€ <span class="text-xs font-light transition-colors duration-200"
                  :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">/ mois</span></div>
              <ul class="space-y-2.5 text-xs font-light border-t pt-4 transition-colors duration-200"
                :class="isDark ? 'text-zinc-400 border-zinc-900' : 'text-[#7A7367] border-[#E5E0D8]'">
                <li class="flex items-center gap-2">
                  <svg class="w-3.5 h-3.5 transition-colors duration-200" :class="isDark ? 'text-zinc-600' : 'text-[#D6D0C5]'" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> De 4 à 8 comptes collaborateurs</li>
                <li class="flex items-center gap-2">
                  <svg class="w-3.5 h-3.5 transition-colors duration-200" :class="isDark ? 'text-zinc-600' : 'text-[#D6D0C5]'" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> Plannings avancés multi-agendas</li>
                <li class="flex items-center gap-2">
                  <svg class="w-3.5 h-3.5 transition-colors duration-200" :class="isDark ? 'text-zinc-600' : 'text-[#D6D0C5]'" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> Outils avancés d'optimisation</li>
                <li class="flex items-center gap-2">
                  <svg class="w-3.5 h-3.5 transition-colors duration-200" :class="isDark ? 'text-zinc-600' : 'text-[#D6D0C5]'" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> Équipe support technique prioritaire</li>
              </ul>
            </div>
            <a href="https://pro.bookmysalon.fr/login" class="w-full py-3 rounded-xl text-center font-medium text-xs uppercase tracking-wider border transition-colors"
              :class="isDark ? 'bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border-zinc-800' : 'bg-[#E5E0D8] hover:bg-[#D6D0C5] text-[#2D2924] border-[#D6D0C5]'">Souscrire au plan</a>
          </div>
        </div>

        <div class="text-center text-[11px] font-light pt-4 space-y-1 transition-colors duration-200"
          :class="isDark ? 'text-zinc-600' : 'text-[#8C8579]'">
          <p>Recharges SMS : <span class="font-mono transition-colors duration-200"
              :class="isDark ? 'text-zinc-400' : 'text-[#7A7367]'">10,00€ HT = 100 SMS complémentaires</span></p>
         
        </div>
      </div>
    </section>

    <section id="faq" class="py-24 border-b px-6 transition-colors duration-200"
      :class="isDark ? 'bg-zinc-950 border-zinc-900' : 'bg-[#F7F5F0] border-[#E5E0D8]'">
      <div class="max-w-4xl mx-auto space-y-16">
        <div class="text-center space-y-3">
          <h2 class="text-xs uppercase tracking-widest font-semibold transition-colors duration-200"
            :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">Réponses techniques</h2>
          <p class="text-2xl sm:text-3xl font-light tracking-tight transition-colors duration-200"
            :class="isDark ? 'text-white' : 'text-[#2D2924]'">Questions fréquemment posées</p>
        </div>

        <div class="space-y-4">
          <details class="group border rounded-xl p-5 cursor-pointer transition-colors text-left"
            :class="isDark ? 'bg-zinc-900/20 border-zinc-900 open:border-zinc-800' : 'bg-[#FDFCF8] border-[#E5E0D8] open:border-[#D6D0C5]'">
            <summary class="flex justify-between items-center text-sm font-medium list-none select-none transition-colors duration-200"
              :class="isDark ? 'text-white' : 'text-[#2D2924]'">
              Y a-t-il réellement 0% de commission sur mes ventes ?
              <svg class="w-4 h-4 group-open:rotate-45 transition-all duration-200"
                :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            </summary>
            <p class="mt-4 text-xs font-light leading-relaxed border-t pt-4 transition-colors duration-200"
              :class="isDark ? 'text-zinc-400 border-zinc-900/60' : 'text-[#7A7367] border-[#E5E0D8]/60'">
              Parfaitement. Vos premiers 300 euros de transactions mensuelles en ligne bénéficient d'une exonération totale de frais tiers de plateforme. Au-delà, l'infrastructure applique uniquement les taux standards de traitement interbancaire de notre passerelle de paiement sécurisée.
            </p>
          </details>

          <details class="group border rounded-xl p-5 cursor-pointer transition-colors text-left"
            :class="isDark ? 'bg-zinc-900/20 border-zinc-900 open:border-zinc-800' : 'bg-[#FDFCF8] border-[#E5E0D8] open:border-[#D6D0C5]'">
            <summary class="flex justify-between items-center text-sm font-medium list-none select-none transition-colors duration-200"
              :class="isDark ? 'text-white' : 'text-[#2D2924]'">
              Est-il possible d'importer mon historique Planity, Fresha ou Treatwell ?
              <svg class="w-4 h-4 group-open:rotate-45 transition-all duration-200"
                :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            </summary>
            <p class="mt-4 text-xs font-light leading-relaxed border-t pt-4 transition-colors duration-200"
              :class="isDark ? 'text-zinc-400 border-zinc-900/60' : 'text-[#7A7367] border-[#E5E0D8]/60'">
              La procédure d'onboarding et de transfert de vos bases de données clients, catalogues de prestations, fiches de personnel et historiques de rendez-vous est entièrement prise en charge et gratuite.
            </p>
          </details>

          <details class="group border rounded-xl p-5 cursor-pointer transition-colors text-left"
            :class="isDark ? 'bg-zinc-900/20 border-zinc-900 open:border-zinc-800' : 'bg-[#FDFCF8] border-[#E5E0D8] open:border-[#D6D0C5]'">
            <summary class="flex justify-between items-center text-sm font-medium list-none select-none transition-colors duration-200"
              :class="isDark ? 'text-white' : 'text-[#2D2924]'">
              De quelle façon sont attribués les SMS inclus ?
              <svg class="w-4 h-4 group-open:rotate-45 transition-all duration-200"
                :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            </summary>
            <p class="mt-4 text-xs font-light leading-relaxed border-t pt-4 transition-colors duration-200"
              :class="isDark ? 'text-zinc-400 border-zinc-900/60' : 'text-[#7A7367] border-[#E5E0D8]/60'">
              Votre formule intègre un forfait de 50 SMS mensuels automatisés pour gérer vos rappels et confirmations. Si vos volumes opérationnels requièrent un routage plus dense, nos recharges optionnelles ou le déblocage sponsorisé publicitaire complètent votre dotation instantanément.
            </p>
          </details>

          <details class="group border rounded-xl p-5 cursor-pointer transition-colors text-left"
            :class="isDark ? 'bg-zinc-900/20 border-zinc-900 open:border-zinc-800' : 'bg-[#FDFCF8] border-[#E5E0D8] open:border-[#D6D0C5]'">
            <summary class="flex justify-between items-center text-sm font-medium list-none select-none transition-colors duration-200"
              :class="isDark ? 'text-white' : 'text-[#2D2924]'">
              Les clients finaux visualisent-ils la grille d'expertises ?
              <svg class="w-4 h-4 group-open:rotate-45 transition-all duration-200"
                :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            </summary>
            <p class="mt-4 text-xs font-light leading-relaxed border-t pt-4 transition-colors duration-200"
              :class="isDark ? 'text-zinc-400 border-zinc-900/60' : 'text-[#7A7367] border-[#E5E0D8]/60'">
              Tout à fait. L'interface de réservation de l'application analyse les compétences (*skills*) configurées et filtre automatiquement les créneaux des seuls collaborateurs certifiés pour réaliser le soin demandé par l'usager.
            </p>
          </details>
        </div>
      </div>
    </section>

    <section id="temoignages" class="py-24 px-6 transition-colors duration-200"
      :class="isDark ? 'bg-zinc-950' : 'bg-[#FDFCF8]'">
      <div class="max-w-7xl mx-auto space-y-16">
        <div class="text-center space-y-3">
          <h2 class="text-xs uppercase tracking-widest font-semibold transition-colors duration-200"
            :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">Retours d'expérience</h2>
          <p class="text-2xl sm:text-3xl font-light tracking-tight transition-colors duration-200"
            :class="isDark ? 'text-white' : 'text-[#2D2924]'">Ils ont quitté les modèles à commission</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="border p-8 rounded-2xl flex flex-col justify-between text-left space-y-6 transition-colors duration-200"
            :class="isDark ? 'bg-zinc-900/20 border-zinc-900' : 'bg-[#F7F5F0] border-[#E5E0D8]'">
            <p class="text-xs sm:text-sm font-light leading-relaxed italic transition-colors duration-200"
              :class="isDark ? 'text-zinc-400' : 'text-[#7A7367]'">
              "L'hémorragie financière liée aux pourcentages prélevés sur chaque rendez-vous par les annuaires tiers est terminée. Grâce à BookMySalon PRO, mon chiffre d'affaires net a bondi dès le premier cycle."
            </p>
            <div class="flex items-center gap-3 pt-2 border-t transition-colors duration-200"
              :class="isDark ? 'border-zinc-900/60' : 'border-[#E5E0D8]/60'">
              <img class="w-9 h-9 rounded-full object-cover filter grayscale" src="https://randomuser.me/api/portraits/women/45.jpg" alt="Portrait Émilie" />
              <div>
                <p class="text-xs font-medium transition-colors duration-200"
                  :class="isDark ? 'text-white' : 'text-[#2D2924]'">Émilie R.</p>
                <p class="text-[10px] font-light transition-colors duration-200"
                  :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">Directrice Coiffure – Lyon</p>
              </div>
            </div>
          </div>

          <div class="border p-8 rounded-2xl flex flex-col justify-between text-left space-y-6 transition-colors duration-200"
            :class="isDark ? 'bg-zinc-900/20 border-zinc-900' : 'bg-[#F7F5F0] border-[#E5E0D8]'">
            <p class="text-xs sm:text-sm font-light leading-relaxed italic transition-colors duration-200"
              :class="isDark ? 'text-zinc-400' : 'text-[#7A7367]'">
              "La segmentation par compétences des profils de notre équipe a radicalement assaini notre gestion de planning. Fini les conflits d'agenda ou les mauvais aiguillages techniques au comptoir."
            </p>
            <div class="flex items-center gap-3 pt-2 border-t transition-colors duration-200"
              :class="isDark ? 'border-zinc-900/60' : 'border-[#E5E0D8]/60'">
              <img class="w-9 h-9 rounded-full object-cover filter grayscale" src="https://randomuser.me/api/portraits/men/36.jpg" alt="Portrait Julien" />
              <div>
                <p class="text-xs font-medium transition-colors duration-200"
                  :class="isDark ? 'text-white' : 'text-[#2D2924]'">Julien M.</p>
                <p class="text-[10px] font-light transition-colors duration-200"
                  :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">Fondateur Studio Barbier – Marseille</p>
              </div>
            </div>
          </div>

          <div class="border p-8 rounded-2xl flex flex-col justify-between text-left space-y-6 transition-colors duration-200"
            :class="isDark ? 'bg-zinc-900/20 border-zinc-900' : 'bg-[#F7F5F0] border-[#E5E0D8]'">
            <p class="text-xs sm:text-sm font-light leading-relaxed italic transition-colors duration-200"
              :class="isDark ? 'text-zinc-400' : 'text-[#7A7367]'">
              "Créer des promotions ciblées pour mes heures creuses et les diffuser automatiquement par SMS a changé ma routine. Mon taux d'occupation s'est stabilisé à son niveau maximal avec très peu d'effort."
            </p>
            <div class="flex items-center gap-3 pt-2 border-t transition-colors duration-200"
              :class="isDark ? 'border-zinc-900/60' : 'border-[#E5E0D8]/60'">
              <img class="w-9 h-9 rounded-full object-cover filter grayscale" src="https://randomuser.me/api/portraits/women/68.jpg" alt="Portrait Sarah" />
              <div>
                <p class="text-xs font-medium transition-colors duration-200"
                  :class="isDark ? 'text-white' : 'text-[#2D2924]'">Sarah L.</p>
                <p class="text-[10px] font-light transition-colors duration-200"
                  :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">Praticienne Esthétique Indépendante</p>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center pt-8">
          <a href="https://pro.bookmysalon.fr/login" class="inline-flex items-center justify-center px-10 py-4 rounded-xl font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-2xl active:scale-[0.99]"
            :class="isDark ? 'bg-white hover:bg-[#D5CCBC] text-black shadow-white/5' : 'bg-[#2D2924] hover:bg-[#A69B88] text-white shadow-zinc-900/10'">
            Initialiser mon essai gratuit maintenant
          </a>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTheme } from '@/composables/useTheme';

export default {
  setup() {
    const { isDark } = useTheme();
    return { isDark };
  },
  mounted() {
    AOS.init();
  }
}

</script>
<style>

  .rainbow-border {
      border-width: 2px;
      border-radius: 10px;
      border-style: solid;
      border-image-slice: 1;
      border-image-source: linear-gradient(135deg, #fbc7d4 0%, #d6d0ff 100%);
      border-radius: 1rem; /* rounded-2xl */
    }


    
</style>

<style>
  @keyframes planityMouse {
    0% { transform: translate(400px, 320px); opacity: 0; }
    8% { transform: translate(400px, 280px); opacity: 1; }
    20%, 32% { transform: translate(320px, 34px); opacity: 1; }
    40% { transform: translate(320px, 34px); scale: 0.9; opacity: 1; }
    55%, 100% { transform: translate(450px, 120px); opacity: 0; }
  }
  @keyframes planityCursorIcon {
    0%, 19%, 33%, 100% { content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%232D2924' stroke-width='2'%3E%3Cpath d='M1 1l4.5 13.5 2.5-4.5 4.5-2.5L1 1z'/%3E%3C/svg%3E"); }
    20%, 32% { content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%232D2924' stroke-width='2'%3E%3Cpath d='M4 5a2 2 0 1 1 4 0v4a2 2 0 1 1-4 0V5z'/%3E%3Cpath d='M6 1v3M10 5h2M2 5h2'/%3E%3C/svg%3E"); }
  }
  @keyframes cascadeFill {
    0%, 35% { opacity: 0; transform: translateY(6px) scale(0.95); max-height: 0; padding-top: 0; padding-bottom: 0; margin-top: 0; margin-bottom: 0; border-color: transparent; }
    45%, 100% { opacity: 1; transform: translateY(0) scale(1); max-height: 100px; }
  }
  @keyframes caGrowth {
    0%, 35% { content: "4 210 €"; color: inherit; }
    42% { color: #10B981; }
    55%, 100% { content: "5 840 €"; }
  }
  @keyframes barGrowth {
    0%, 35% { width: 68%; }
    55%, 100% { width: 96%; }
  }

  .animate-p-mouse { animation: planityMouse 8s infinite cubic-bezier(0.25, 1, 0.5, 1); }
  .animate-p-mouse::after { content: ''; animation: planityCursorIcon 8s infinite; position: absolute; top: 0; left: 0; }
  .animate-p-fill-1 { animation: cascadeFill 8s infinite cubic-bezier(0.16, 1, 0.3, 1); }
  .animate-p-fill-2 { animation: cascadeFill 8s infinite cubic-bezier(0.16, 1, 0.3, 1); animation-delay: 0.15s; }
  .animate-p-fill-3 { animation: cascadeFill 8s infinite cubic-bezier(0.16, 1, 0.3, 1); animation-delay: 0.3s; }
  .animate-p-ca::after { content: "4 210 €"; animation: caGrowth 8s infinite ease-out; }
  .animate-p-bar { animation: barGrowth 8s infinite cubic-bezier(0.16, 1, 0.3, 1); }
</style>