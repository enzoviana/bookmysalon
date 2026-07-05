<template>
  <div class="px-4 py-6 md:px-8 md:py-12 select-none text-left min-h-screen transition-colors duration-300 font-sans"
    :class="isDark ? 'bg-black text-zinc-300' : 'bg-[#FDFCF8] text-[#7A7367]'">
    <main class="max-w-4xl mx-auto space-y-6">
      
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b pb-6" 
        :class="isDark ? 'border-zinc-900' : 'border-[#E5E0D8]'">
        <div class="space-y-1.5">
          <div class="text-[10px] font-bold uppercase tracking-[0.2em]" :class="isDark ? 'text-zinc-500' : 'text-[#A69B88]'">
            Espace Membre Élite
          </div>
          <h1 class="text-2xl font-semibold tracking-tight" :class="isDark ? 'text-white' : 'text-[#2D2924]'">
            Vos Réservations
          </h1>
          <p class="text-xs font-light max-w-xl leading-relaxed" :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">
            Suivez, recherchez et fragmentez vos sessions programmées ou passées en toute simplicité.
          </p>
        </div>
      </div>
  
      <nav id="filterTabs" class="flex p-1 rounded-xl transition-all border" 
        :class="isDark ? 'bg-zinc-900/40 border-zinc-900' : 'bg-[#F7F5F0] border-[#E5E0D8]'" role="tablist">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          role="tab"
          :aria-selected="activeTab === tab.value"
          @click="activeTab = tab.value; currentPage = 1;"
          class="flex-1 text-center py-2.5 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all duration-200 whitespace-nowrap focus:outline-none"
          :class="[
            activeTab === tab.value
              ? isDark ? 'bg-zinc-800 text-white shadow-md' : 'bg-white text-[#2D2924] shadow-sm font-bold'
              : isDark ? 'text-zinc-500 hover:text-zinc-300' : 'text-[#8C8579] hover:text-[#2D2924]'
          ]"
        >
          {{ tab.label }}
        </button>
      </nav>

      <div class="relative w-full rounded-xl border transition-all"
        :class="isDark ? 'bg-zinc-950/40 border-zinc-900 focus-within:border-zinc-700' : 'bg-[#F7F5F0]/50 border-[#E5E0D8] focus-within:border-[#A69B88]'">
        <span class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <i class="fas fa-search text-xs opacity-50"></i>
        </span>
        <input 
          v-model="searchQuery"
          type="text"
          placeholder="Rechercher un salon, une prestation (ex: Coupe)..."
          class="w-full pl-10 pr-4 py-3 bg-transparent text-xs font-light focus:outline-none rounded-xl"
          :class="isDark ? 'text-white placeholder-zinc-600' : 'text-[#2D2924] placeholder-[#D6D0C5]'"
          @input="currentPage = 1"
        />
        <span v-if="searchQuery" @click="searchQuery = ''" class="absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer hover:text-rose-500 transition-colors">
          <i class="fas fa-times text-xs"></i>
        </span>
      </div>
  
      <section class="space-y-4" id="bookingsList">
        <div v-if="paginatedBookings.length === 0" class="text-center py-12 border border-dashed rounded-2xl"
          :class="isDark ? 'border-zinc-900 text-zinc-600' : 'border-[#E5E0D8] text-[#8C8579]'">
          <i class="far fa-calendar-times text-2xl mb-2 block opacity-40"></i>
          <p class="text-xs font-light">Aucun rendez-vous ne correspond à vos critères.</p>
        </div>

        <article
          v-for="booking in paginatedBookings"
          :key="booking._id"
          class="group rounded-2xl border p-5 md:p-6 transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-5 items-center relative"
          :class="[
            booking.active 
              ? isDark ? 'bg-zinc-900/20 border-zinc-800 shadow-xl' : 'bg-white border-[#A69B88] shadow-md shadow-zinc-900/5'
              : isDark ? 'bg-zinc-950/40 border-zinc-900/60' : 'bg-[#F7F5F0]/30 border-[#E5E0D8]'
          ]"
        >
          <div class="flex md:flex-col items-center md:items-start justify-between md:justify-center md:border-r pb-4 md:pb-0 md:pr-4 md:col-span-3 gap-3"
            :class="isDark ? 'border-zinc-900' : 'border-[#E5E0D8]'">
            <div class="flex items-center md:flex-col items-baseline md:items-start gap-2 md:gap-0">
              <span class="text-3xl font-bold tracking-tighter" :class="isDark ? 'text-white' : 'text-[#2D2924]'">
                {{ booking.day }}
              </span>
              <span class="text-[10px] font-bold uppercase tracking-widest" :class="isDark ? 'text-zinc-500' : 'text-[#A69B88]'">
                {{ booking.monthShort }}
              </span>
            </div>
            
            <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium font-mono tracking-tight"
              :class="isDark ? 'bg-zinc-900 text-zinc-300' : 'bg-[#F7F5F0] text-[#2D2924]'">
              <i class="far fa-clock text-[10px]" :class="isDark ? 'text-zinc-500' : 'text-[#A69B88]'"></i>
              {{ booking.timeRange }}
            </div>
          </div>
  
          <div class="space-y-3 md:col-span-5 text-left">
            <div class="space-y-1">
              <div v-if="booking.statut === 'annulé'" class="inline-block text-[10px] font-bold uppercase tracking-wider text-rose-500">
                Session Révoquée
              </div>
              <h3 class="text-base font-semibold tracking-tight leading-snug" :class="isDark ? 'text-white' : 'text-[#2D2924]'">
                {{ booking.services[0].nom }}
              </h3>
              <div class="flex items-center gap-1.5 text-xs" :class="isDark ? 'text-zinc-400' : 'text-[#8C8579]'">
                <i class="fas fa-map-marker-alt text-[10px]" :class="isDark ? 'text-zinc-700' : 'text-[#D6D0C5]'"></i>
                <span class="font-medium truncate">{{ booking.firm.nom_societe }}</span>
              </div>
            </div>

            <div class="flex flex-wrap items-center gap-2 text-[11px]">
              <span v-if="booking.employe" class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-xs"
                :class="isDark ? 'bg-zinc-900/50 border-zinc-800 text-zinc-300' : 'bg-white border-[#E5E0D8] text-[#7A7367]'">
                <i class="far fa-user text-[9px] text-[#A69B88]"></i>
                {{ booking.employe.prenom }}
              </span>

              <span class="font-semibold px-2 py-0.5 rounded-full"
                :class="isDark ? 'bg-zinc-900 text-zinc-100' : 'bg-[#2D2924] text-white'">
                {{ booking.services[0].prix }} €
              </span>

              <span v-if="booking.isPaid || booking.isPaidCompletely" class="inline-flex items-center gap-1 text-emerald-600 font-medium">
                <i class="fas fa-check-circle text-[10px]"></i> Payé
              </span>
              <span v-else class="text-[10px] uppercase font-bold tracking-wider opacity-60">
                Sur place
              </span>
            </div>

            <div v-if="booking.note" class="text-[11px] px-2.5 py-1.5 rounded-lg border italic font-light max-w-full truncate"
              :class="isDark ? 'bg-zinc-900/20 border-zinc-800/60 text-zinc-400' : 'bg-amber-50/40 border-amber-200/50 text-[#8C8579]'">
              <span class="font-medium not-italic">Note :</span> « {{ booking.note }} »
            </div>
          </div>
  
          <div class="flex flex-wrap items-center justify-end gap-2 pt-4 md:pt-0 border-t md:border-t-0 md:col-span-4 w-full"
            :class="isDark ? 'border-zinc-900' : 'border-[#E5E0D8]'">
            
            <button
              v-if="booking.statut !== 'annulé'"
              type="button"
              @click="openReplanifyModal(booking)"
              class="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl text-[11px] font-semibold uppercase tracking-wider transition-all duration-200 border text-center"
              :class="isDark 
                ? 'bg-zinc-900 border-zinc-800 text-white hover:bg-zinc-800' 
                : 'bg-white border-[#E5E0D8] text-[#7A7367] hover:border-[#A69B88] hover:text-[#2D2924] shadow-sm'"
            >
              Replanifier
            </button>

            <button
              v-if="booking.statut === 'terminer' && !booking.avisDejaLaisse"
              type="button"
              @click="openReviewModal(booking)"
              class="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl text-[11px] font-semibold uppercase tracking-wider transition-all duration-200 border text-center"
              :class="isDark 
                ? 'bg-white text-black border-white hover:bg-[#D5CCBC]' 
                : 'bg-[#2D2924] text-white border-[#2D2924] hover:bg-[#A69B88] shadow-md shadow-zinc-900/10'"
            >
              Laisser un avis
            </button>

            <button
              v-if="booking.statut === 'confirmé'"
              type="button"
              title="Annuler le rendez-vous"
              @click="openCancelDialog(booking._id)"
              class="p-2.5 rounded-xl border transition-all text-rose-500 hover:bg-rose-500/10"
              :class="isDark ? 'border-zinc-900 bg-zinc-950' : 'border-[#E5E0D8] bg-[#FDFCF8] shadow-sm'"
            >
              <i class="fas fa-trash-alt text-xs"></i>
            </button>
          </div>
        </article>
      </section>

      <div v-if="totalPages > 1" class="flex items-center justify-between pt-4 border-t text-[11px] font-semibold uppercase tracking-wider"
        :class="isDark ? 'border-zinc-900' : 'border-[#E5E0D8]'">
        <button 
          :disabled="currentPage === 1"
          @click="currentPage--"
          class="px-3 py-2 rounded-lg border transition-all disabled:opacity-30"
          :class="isDark ? 'bg-zinc-950 border-zinc-900 hover:bg-zinc-900' : 'bg-white border-[#E5E0D8] hover:bg-[#F7F5F0] text-[#7A7367]'"
        >
          <i class="fas fa-chevron-left mr-1"></i> Précédent
        </button>
        
        <span :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">
          Page {{ currentPage }} sur {{ totalPages }}
        </span>

        <button 
          :disabled="currentPage === totalPages"
          @click="currentPage++"
          class="px-3 py-2 rounded-lg border transition-all disabled:opacity-30"
          :class="isDark ? 'bg-zinc-950 border-zinc-900 hover:bg-zinc-900' : 'bg-white border-[#E5E0D8] hover:bg-[#F7F5F0] text-[#7A7367]'"
        >
          Suivant <i class="fas fa-chevron-right ml-1"></i>
        </button>
      </div>

      <div v-if="isCancelDialogOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
  <div class="bg-white p-6 rounded-2xl shadow-xl w-full max-w-sm mx-4" :class="isDark ? 'bg-zinc-900 border border-zinc-800' : 'bg-white'">
    <h2 class="text-lg font-bold mb-4" :class="isDark ? 'text-white' : 'text-gray-900'">Confirmer l'annulation</h2>
    <p class="text-sm mb-4" :class="isDark ? 'text-zinc-400' : 'text-gray-600'">Veuillez indiquer le motif de l'annulation :</p>
    
    <textarea 
      v-model="cancelReason" 
      class="w-full p-3 rounded-lg border mb-4 text-sm focus:outline-none"
      :class="isDark ? 'bg-zinc-800 border-zinc-700 text-white' : 'border-gray-300'"
      placeholder="Ex: Emploi du temps modifié..."
    ></textarea>

    <div class="flex gap-3">
      <button @click="isCancelDialogOpen = false" class="flex-1 py-2 rounded-lg text-sm font-semibold border" :class="isDark ? 'border-zinc-700 text-zinc-400' : 'border-gray-300 text-gray-600'">
        Retour
      </button>
      <button @click="submitCancellation" class="flex-1 py-2 rounded-lg text-sm font-semibold bg-rose-500 text-white">
        Confirmer
      </button>
    </div>
  </div>
</div>

<!-- Modale Avis -->
<div v-if="showReviewModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
  <div class="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md" :class="isDark ? 'bg-zinc-900 border border-zinc-800' : 'bg-white'">
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-lg font-bold" :class="isDark ? 'text-white' : 'text-gray-900'">Laisser un avis</h2>
      <button @click="showReviewModal = false" class="text-gray-400 hover:text-gray-600">
        <i class="fas fa-times"></i>
      </button>
    </div>

    <!-- Note Établissement -->
    <div class="mb-4">
      <label class="text-xs font-semibold block mb-2" :class="isDark ? 'text-zinc-300' : 'text-gray-700'">Note de l'établissement</label>
      <RatingInput v-model="reviewForm.note_etablissement" />
    </div>

    <!-- Note Prestations -->
    <div class="mb-4">
      <label class="text-xs font-semibold block mb-2" :class="isDark ? 'text-zinc-300' : 'text-gray-700'">Note des prestations</label>
      <RatingInput v-model="reviewForm.note_prestations" />
    </div>

    <!-- Note Employé -->
    <div class="mb-4">
      <label class="text-xs font-semibold block mb-2" :class="isDark ? 'text-zinc-300' : 'text-gray-700'">Note de l'employé</label>
      <RatingInput v-model="reviewForm.note_employe" />
    </div>

    <!-- Avis -->
    <div class="mb-4">
      <label class="text-xs font-semibold block mb-2" :class="isDark ? 'text-zinc-300' : 'text-gray-700'">Votre avis (minimum 10 caractères)</label>
      <textarea
        v-model="reviewForm.avis"
        rows="4"
        class="w-full p-3 rounded-lg border text-sm focus:outline-none focus:ring-2"
        :class="isDark ? 'bg-zinc-800 border-zinc-700 text-white focus:ring-zinc-600' : 'border-gray-300 focus:ring-blue-200'"
        placeholder="Partagez votre expérience..."
      ></textarea>
      <p class="text-xs text-gray-400 mt-1">{{ reviewForm.avis.length }} caractères</p>
    </div>

    <div class="flex gap-3">
      <button
        @click="showReviewModal = false"
        class="flex-1 py-2.5 rounded-lg text-sm font-semibold border transition-colors"
        :class="isDark ? 'border-zinc-700 text-zinc-300 hover:bg-zinc-800' : 'border-gray-300 hover:bg-gray-50'"
      >
        Annuler
      </button>
      <button
        @click="submitReview"
        class="flex-1 py-2.5 rounded-lg text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors"
      >
        Envoyer l'avis
      </button>
    </div>
  </div>
</div>
    </main>
  </div>
</template>
<style scoped>
/* Technical system view resets for carousels scrollbars */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
  
<script setup lang="ts">
const { isDark } = useTheme()
const { token } = useAuth()
const { fetchApi } = useApi()
const router = useRouter()

// Reactive state
const showReviewModal = ref(false)
const searchQuery = ref('')
const currentPage = ref(1)
const itemsPerPage = ref(4)
const reviewForm = ref<any>({
  avis: '',
  note_etablissement: 0,
  note_prestations: 0,
  note_employe: 0,
})

const tabs = [
  { label: 'À venir', value: 'confirmé' },
  { label: 'Passées', value: 'terminer' },
  { label: 'Annulées', value: 'annulé' },
]

const activeTab = ref('confirmé')
const motifAnnulation = ref('')
const bookings = ref<any[]>([])
const showCancelModal = ref(false)
const isCancelDialogOpen = ref(false)
const showAnnulModal = ref(false)
const showModifyModal = ref(false)
const selectedServices = ref([])
const selectedBookingIndex = ref<number | null>(null)
const selectedBooking = ref<any>(null)
const showConfirmDeleteService = ref(false)
const indexServiceToDelete = ref(null)
const showReplanifyModal = ref(false)
const cancelReason = ref('')
const serviceToDeleteId = ref<string | null>(null)
const activeMenu = ref<string | null>(null)
const selectedAppointmentId = ref<string | null>(null)

// Computed
const filteredBookings = computed(() => {
  const result = bookings.value.filter(b => {
    const matchTab = b.statut === activeTab.value

    const salonNom = b.firm?.nom_societe?.toLowerCase() || ''
    const serviceNom = b.services?.[0]?.nom?.toLowerCase() || ''
    const query = searchQuery.value.toLowerCase()

    const matchSearch = salonNom.includes(query) || serviceNom.includes(query)

    return matchTab && matchSearch
  })

  return result.sort((a, b) => {
    return new Date(a.date_rdv) - new Date(b.date_rdv)
  })
})

const totalPages = computed(() => {
  return Math.ceil(filteredBookings.value.length / itemsPerPage.value) || 1
})

const paginatedBookings = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return filteredBookings.value.slice(start, end)
})

// Methods
const submitReview = async () => {
  try {
    if (!reviewForm.value.avis || reviewForm.value.avis.length < 10) {
      alert('Votre avis doit contenir au moins 10 caractères.')
      return
    }

    if (!reviewForm.value.note_etablissement || !reviewForm.value.note_prestations || !reviewForm.value.note_employe) {
      alert('Veuillez donner une note pour tous les critères (1 à 5 étoiles).')
      return
    }

    const data = await fetchApi('/api/reviews', {
      method: 'POST',
      body: {
        avis: reviewForm.value.avis,
        note_etablissement: reviewForm.value.note_etablissement,
        note_prestations: reviewForm.value.note_prestations,
        note_employe: reviewForm.value.note_employe,
        employeId: selectedBooking.value.employe?._id || null,
        firmId: selectedBooking.value.firm._id,
        appointmentId: selectedBooking.value._id
      }
    })

    if (data.success) {
      showReviewModal.value = false
      selectedBooking.value.avisDejaLaisse = true
      alert('Merci pour votre avis ! Il sera visible après validation par le salon.')
    }
  } catch (error: any) {
    if (error.statusCode === 400 && error.data?.message?.includes('déjà laissé')) {
      showReviewModal.value = false
      selectedBooking.value.avisDejaLaisse = true
      alert('Vous avez déjà laissé un avis pour ce rendez-vous. Merci !')
    } else {
      console.error('Erreur lors de l\'envoi de l\'avis :', error)
      alert('Erreur lors de l\'envoi de l\'avis.')
    }
  }
}

const openReviewModal = (booking: any) => {
  selectedBooking.value = booking
  showReviewModal.value = true
  reviewForm.value = {
    avis: '',
    note_etablissement: null,
    note_prestations: null,
    note_employe: null,
  }
}

const openCancelDialog = (id: string) => {
  selectedAppointmentId.value = id
  cancelReason.value = ''
  isCancelDialogOpen.value = true
}

const submitCancellation = async () => {
  if (!cancelReason.value || !selectedAppointmentId.value) return

  try {
    const result = await fetchApi(`/api/appointment/annuler/${selectedAppointmentId.value}`, {
      method: 'PUT',
      body: { motif: cancelReason.value }
    })

    alert('✅ Rendez-vous annulé avec succès')
    isCancelDialogOpen.value = false
    fetchBookings()
  } catch (error: any) {
    console.error('Erreur d\'annulation :', error)
    alert('❌ Échec de l\'annulation : ' + (error.data?.message || error.message))
  }
}

const toggleMenu = (bookingId: string) => {
  activeMenu.value = activeMenu.value === bookingId ? null : bookingId
}

const openCancelModal = (bookingId: string) => {
  const booking = filteredBookings.value.find(b => b._id === bookingId)
  if (booking) {
    selectedBooking.value = booking
    showCancelModal.value = true
  }
}

const openModifyModal = (bookingId: string) => {
  const booking = filteredBookings.value.find(b => b._id === bookingId)
  if (booking) {
    selectedBooking.value = booking
    showModifyModal.value = true
  }
}

const closeModifyModal = () => {
  showModifyModal.value = false
  selectedBooking.value = null
  selectedBookingIndex.value = null
}

const confirmDeleteService = (serviceId: string) => {
  serviceToDeleteId.value = serviceId
  showConfirmDeleteService.value = true
}

const cancelDeleteService = () => {
  showConfirmDeleteService.value = false
  indexServiceToDelete.value = null
}

const deleteService = async () => {
  try {
    const services = selectedBooking.value.services

    const serviceToDelete = services.find(s => s._id === serviceToDeleteId.value)
    if (!serviceToDelete) {
      console.warn("Service à supprimer introuvable avec l'ID :", serviceToDeleteId.value)
      return
    }

    const payload: any = {
      servicesASupprimer: [serviceToDeleteId.value],
    }

    if (services.length === 1) {
      if (!motifAnnulation.value || motifAnnulation.value.trim() === "") {
        alert("Veuillez sélectionner un motif d'annulation.")
        return
      }
      payload.motif = motifAnnulation.value
    }

    const response = await fetchApi(`/api/appointment/supprimer-prestations/${selectedBooking.value._id}`, {
      method: 'PUT',
      body: payload
    })

    selectedBooking.value = response.rendezVous
    showConfirmDeleteService.value = false
    motifAnnulation.value = ''
    serviceToDeleteId.value = null
  } catch (error) {
    console.error("Erreur suppression service :", error)
  }
}

const saveModifications = async () => {
  try {
    const updatedServices = selectedBooking.value.services.map(s => s._id)

    await fetchApi(`/api/appointment/${selectedBooking.value._id}`, {
      method: 'PUT',
      body: { services: updatedServices }
    })

    bookings.value[selectedBookingIndex.value].services = [...selectedBooking.value.services]

    closeModifyModal()
    alert('Modifications sauvegardées')
  } catch (err) {
    console.error('Erreur lors de la sauvegarde :', err)
    alert('Erreur lors de la sauvegarde')
  }
}

const cancelAppointment = async (appointmentId: string) => {
  try {
    await fetchApi(`/api/appointment/${appointmentId}`, {
      method: 'DELETE'
    })
    alert('Rendez-vous annulé.')
    fetchBookings()
  } catch (err) {
    console.error('Erreur annulation rendez-vous :', err)
    alert('Erreur lors de l\'annulation')
  }
}

const openReplanifyModal = (booking: any) => {
  const serviceIds = booking.services.map(service => service._id)
  const firmId = booking.firm._id

  router.push({
    path: `/rendez-vous/${firmId}`,
    query: {
      replanifier: 'true',
      bookingId: booking._id,
      service: serviceIds.join(',')
    }
  })
}

const confirmCancellation = () => {
  alert(`Rendez-vous annulé pour la raison : ${cancelReason.value}`)
  showCancelModal.value = false
  cancelReason.value = ''
}

const fetchBookings = async () => {
  try {
    if (!token.value) {
      console.error('❌ [mes-rendez-vous] Pas de token disponible')
      throw new Error('Token client manquant')
    }

    console.log('📡 [mes-rendez-vous] Récupération des rendez-vous...')
    const res = await fetchApi('/api/appointment/mes-rendez-vous', {
      method: 'GET'
    })

    console.log('✅ [mes-rendez-vous] Rendez-vous reçus:', res.rendezVous?.length)

    bookings.value = res.rendezVous.map(rdv => {
      const dateObj = new Date(rdv.date_rdv)
      const startHour = dateObj.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
      const endDateObj = new Date(dateObj.getTime() + rdv.duree_minutes * 60000)
      const endHour = endDateObj.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })

      const timeRange = `${startHour} - ${endHour}`
      const day = dateObj.getDate()
      const monthShort = dateObj.toLocaleDateString('fr-FR', { month: 'short' }).toUpperCase()

      return {
        ...rdv,
        active: false,
        timeRange,
        day,
        monthShort,
      }
    })
  } catch (err) {
    console.error('❌ [mes-rendez-vous] Erreur récupération rendez-vous client :', err)
  }
}

const formatTimeRange = (startDate: string, durationMinutes: number) => {
  const start = new Date(startDate)
  const end = new Date(start.getTime() + durationMinutes * 60000)

  const format = (date) =>
    date.toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit',
    })

  return `${format(start)} - ${format(end)}`
}

// Lifecycle
onMounted(() => {
  fetchBookings()
})
</script>

  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
  
  .font-inter {
    font-family: 'Inter', sans-serif;
  }
  
  .scrollbar-thin::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  .scrollbar-thin::-webkit-scrollbar-thumb {
    background-color: #cbd5e1;
    border-radius: 3px;
  }
  </style>
  