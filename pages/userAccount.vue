<template>
  <div class="px-6 py-6 space-y-6 font-light select-none text-left min-h-screen flex flex-col justify-start items-center transition-colors duration-200"
    :class="isDark ? 'bg-zinc-950 text-zinc-400' : 'bg-gray-50 text-gray-600'">

    <main class="w-full max-w-2xl space-y-6">

      <div class="border-b pb-5 space-y-1 transition-colors duration-200"
        :class="isDark ? 'border-zinc-900/60' : 'border-gray-200'">
        <div class="text-xs font-mono uppercase tracking-widest transition-colors duration-200"
          :class="isDark ? 'text-zinc-500' : 'text-gray-500'">Espace Affilié Sécurisé</div>
        <h1 class="text-xl font-medium tracking-tight transition-colors duration-200"
          :class="isDark ? 'text-white' : 'text-gray-900'">Mon Compte</h1>
        <p class="text-xs font-light transition-colors duration-200"
          :class="isDark ? 'text-zinc-500' : 'text-gray-500'">Supervisez et modifiez vos paramètres d'identification personnels.</p>
      </div>

      <transition name="fade">
        <div v-if="successMessage" class="p-4 border rounded-xl text-xs flex items-center gap-3 font-mono uppercase tracking-wider transition-colors duration-200"
          :class="isDark
            ? 'bg-emerald-950/20 border-emerald-900/40 text-emerald-400'
            : 'bg-emerald-50 border-emerald-200 text-emerald-700'">
          <span class="h-2 w-2 rounded-full animate-pulse"
            :class="isDark ? 'bg-emerald-400' : 'bg-emerald-600'"></span>
          {{ successMessage }}
        </div>
      </transition>

      <transition name="fade">
        <div v-if="errorMessage" class="p-4 border rounded-xl text-xs flex items-center gap-3 font-mono uppercase tracking-wider transition-colors duration-200"
          :class="isDark
            ? 'bg-red-950/20 border-red-900/40 text-red-400'
            : 'bg-red-50 border-red-200 text-red-700'">
          <span class="h-2 w-2 rounded-full"
            :class="isDark ? 'bg-red-500' : 'bg-red-600'"></span>
          {{ errorMessage }}
        </div>
      </transition>

      <form @submit.prevent="submitForm" class="border rounded-2xl p-6 space-y-5 shadow-2xl transition-colors duration-200"
        :class="isDark
          ? 'bg-zinc-900/20 border-zinc-900 shadow-black/40'
          : 'bg-white border-gray-200 shadow-gray-200/40'">

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="space-y-1.5">
            <label class="block text-[10px] uppercase tracking-widest font-medium font-mono transition-colors duration-200"
              :class="isDark ? 'text-zinc-500' : 'text-gray-500'">Prénom</label>
            <input v-model="form.prenom" type="text" class="w-full px-4 py-2.5 rounded-xl border focus:outline-none text-xs font-light transition-all duration-200"
              :class="isDark
                ? 'border-zinc-900 bg-zinc-950 text-zinc-200 focus:border-zinc-800'
                : 'border-gray-300 bg-white text-gray-900 focus:border-gray-400'" required />
          </div>

          <div class="space-y-1.5">
            <label class="block text-[10px] uppercase tracking-widest font-medium font-mono transition-colors duration-200"
              :class="isDark ? 'text-zinc-500' : 'text-gray-500'">Nom d'usage</label>
            <input v-model="form.nom" type="text" class="w-full px-4 py-2.5 rounded-xl border focus:outline-none text-xs font-light transition-all duration-200"
              :class="isDark
                ? 'border-zinc-900 bg-zinc-950 text-zinc-200 focus:border-zinc-800'
                : 'border-gray-300 bg-white text-gray-900 focus:border-gray-400'" required />
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="space-y-1.5">
            <label class="block text-[10px] uppercase tracking-widest font-medium font-mono transition-colors duration-200"
              :class="isDark ? 'text-zinc-500' : 'text-gray-500'">Adresse de correspondance</label>
            <input v-model="form.email" type="email" class="w-full px-4 py-2.5 rounded-xl border focus:outline-none text-xs font-mono transition-all duration-200"
              :class="isDark
                ? 'border-zinc-900 bg-zinc-950 text-zinc-300 focus:border-zinc-800'
                : 'border-gray-300 bg-white text-gray-900 focus:border-gray-400'" required />
          </div>

          <div class="space-y-1.5">
            <label class="block text-[10px] uppercase tracking-widest font-medium font-mono transition-colors duration-200"
              :class="isDark ? 'text-zinc-500' : 'text-gray-500'">Ligne Mobile</label>
            <input v-model="form.telephone" type="text" class="w-full px-4 py-2.5 rounded-xl border focus:outline-none text-xs font-mono transition-all duration-200"
              :class="isDark
                ? 'border-zinc-900 bg-zinc-950 text-zinc-300 focus:border-zinc-800'
                : 'border-gray-300 bg-white text-gray-900 focus:border-gray-400'" required />
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="space-y-1.5">
            <label class="block text-[10px] uppercase tracking-widest font-medium font-mono transition-colors duration-200"
              :class="isDark ? 'text-zinc-500' : 'text-gray-500'">Date de Naissance</label>
            <input v-model="form.date_naissance" type="date" class="w-full px-4 py-2.5 rounded-xl border focus:outline-none text-xs font-mono cursor-pointer transition-all duration-200"
              :class="isDark
                ? 'border-zinc-900 bg-zinc-950 text-zinc-300 focus:border-zinc-800'
                : 'border-gray-300 bg-white text-gray-900 focus:border-gray-400'" required />
          </div>

          <div class="space-y-1.5">
            <label class="block text-[10px] uppercase tracking-widest font-medium font-mono transition-colors duration-200"
              :class="isDark ? 'text-zinc-500' : 'text-gray-500'">Genre / Identité civile</label>
            <div class="relative">
              <select v-model="form.genre" class="w-full px-4 py-2.5 rounded-xl border focus:outline-none text-xs cursor-pointer appearance-none font-light transition-all duration-200"
                :class="isDark
                  ? 'border-zinc-900 bg-zinc-950 text-zinc-300 focus:border-zinc-800'
                  : 'border-gray-300 bg-white text-gray-900 focus:border-gray-400'" required>
                <option value="" disabled :class="isDark ? 'text-zinc-700' : 'text-gray-400'">Sélectionner</option>
                <option value="Homme">Homme</option>
                <option value="Femme">Femme</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 transition-colors duration-200"
                :class="isDark ? 'text-zinc-600' : 'text-gray-400'">
                <svg class="fill-current h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
        </div>

        <div class="space-y-1.5 pt-2 border-t transition-colors duration-200"
          :class="isDark ? 'border-zinc-900/60' : 'border-gray-200'">
          <label class="block text-[10px] uppercase tracking-widest font-medium font-mono transition-colors duration-200"
            :class="isDark ? 'text-zinc-500' : 'text-gray-500'">Nouveau mot de passe de sécurité</label>
          <input
            v-model="form.password"
            type="password"
            placeholder="Laisser vide pour ne pas altérer la clé actuelle"
            class="w-full px-4 py-2.5 rounded-xl border focus:outline-none text-xs font-light transition-all duration-200"
            :class="isDark
              ? 'border-zinc-900 bg-zinc-950 text-zinc-300 focus:border-zinc-800 placeholder-zinc-800'
              : 'border-gray-300 bg-white text-gray-900 focus:border-gray-400 placeholder-gray-400'"
          />
        </div>

        <div class="flex justify-end pt-3">
          <button
            type="submit"
            class="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-xl active:scale-[0.99]"
            :class="isDark
              ? 'bg-white hover:bg-[#D5CCBC] text-black shadow-white/5'
              : 'bg-amber-600 hover:bg-amber-700 text-white shadow-amber-600/20'"
          >
            Enregistrer les modifications
          </button>
        </div>
      </form>

    </main>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})

const { isDark } = useTheme()
const { user, token, setUser } = useAuth()
const { fetchApi } = useApi()

const form = ref({
  prenom: '',
  nom: '',
  email: '',
  telephone: '',
  date_naissance: '',
  genre: '',
  password: '',
})

const successMessage = ref('')
const errorMessage = ref('')

console.log('📄 [userAccount] Chargement de la page')
console.log('👤 [userAccount] Utilisateur actuel:', user.value)
console.log('🔑 [userAccount] Token présent:', !!token.value)

// Charger les infos du client depuis le composable useAuth
onMounted(async () => {
  console.log('🔄 [userAccount] onMounted - Chargement des données utilisateur')

  if (!token.value || !user.value) {
    console.error('❌ [userAccount] Pas de token ou d\'utilisateur')
    errorMessage.value = 'Utilisateur non authentifié dans la session.'
    return
  }

  try {
    console.log('📡 [userAccount] Récupération du profil depuis l\'API...')
    const data = await fetchApi('/api/clients/profile', {
      method: 'GET'
    })

    console.log('✅ [userAccount] Données reçues:', data)

    form.value = {
      prenom: data.prenom || '',
      nom: data.nom || '',
      email: data.email || '',
      telephone: data.telephone || '',
      date_naissance: data.date_naissance?.slice(0, 10) || '',
      genre: data.genre || '',
      password: '',
    }

    console.log('✅ [userAccount] Formulaire initialisé avec:', {
      prenom: form.value.prenom,
      email: form.value.email
    })
  } catch (err: any) {
    console.error('❌ [userAccount] Erreur lors du chargement:', err)
    errorMessage.value = err.data?.message || err.message || 'Erreur lors du chargement du profil'
  }
})

// Mettre à jour les infos via l'API
async function submitForm() {
  if (!token.value) {
    errorMessage.value = 'Action interdite : session non authentifiée.'
    return
  }

  try {
    console.log('📤 [userAccount] Mise à jour du profil...')

    const payload = {
      prenom: form.value.prenom,
      nom: form.value.nom,
      email: form.value.email,
      telephone: form.value.telephone,
      date_naissance: form.value.date_naissance,
      genre: form.value.genre,
      ...(form.value.password ? { password: form.value.password } : {}),
    }

    const updatedUser = await fetchApi('/api/clients/profile', {
      method: 'PUT',
      body: payload
    })

    console.log('✅ [userAccount] Profil mis à jour:', updatedUser)

    // Mettre à jour les données utilisateur dans le cookie
    setUser(updatedUser)

    successMessage.value = 'Vos configurations d\'identification ont été appliquées.'
    errorMessage.value = ''
    form.value.password = ''

    setTimeout(() => (successMessage.value = ''), 4000)
  } catch (err: any) {
    console.error('❌ [userAccount] Erreur lors de la mise à jour:', err)
    successMessage.value = ''
    errorMessage.value = err.data?.message || err.message || 'Erreur lors de la mise à jour'
  }
}
</script>

<style scoped>
/* Reset system dynamic overlays for date-pickers inside dark architectures */
input[type="date"]::-webkit-calendar-picker-indicator {
  filter: invert(60%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(90%) contrast(90%);
  cursor: pointer;
}

/* Fluid micro transition curves */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>