<template>
  <div class="min-h-screen w-screen flex flex-col md:flex-row md:h-screen md:overflow-hidden font-light transition-colors duration-300 bg-gray-50 text-gray-800 dark:bg-zinc-950 dark:text-zinc-100">

    <div class="flex flex-col justify-start sm:justify-center items-center w-full md:w-1/2 h-auto md:h-full p-6 sm:p-10 md:p-16 bg-white border-b md:border-b-0 md:border-r border-gray-100 dark:bg-zinc-950 dark:border-zinc-900">

      <!-- Lien professionnel -->
      <a
        href="https://pro.bookmysalon.fr/login"
        target="_blank"
        class="w-full max-w-md mb-4 px-4 py-2.5 rounded-xl border border-amber-100 bg-amber-50/50 hover:bg-amber-50 text-center transition-all group dark:bg-amber-950/20 dark:border-amber-900/30 dark:hover:bg-amber-950/30"
      >
        <p class="text-xs font-medium text-amber-800 dark:text-amber-200">
          <span class="mr-1.5">💼</span>
          Êtes-vous professionnel ?
          <span class="ml-2 text-amber-600 group-hover:text-amber-700 underline underline-offset-2 dark:text-amber-400 dark:group-hover:text-amber-300">
            Accédez à l'espace pro
            <i class="fas fa-arrow-right ml-1 text-[10px] group-hover:translate-x-0.5 transition-transform"></i>
          </span>
        </p>
      </a>

      <div class="w-full max-w-md my-auto text-left">

        <!-- LOGIN FORM -->
        <form v-if="isLoginForm" @submit.prevent="handleLogin" class="space-y-4">
          <div class="space-y-1">
            <h2 class="text-2xl font-normal tracking-tight text-gray-900 dark:text-white">Réseau BookMySalon</h2>
            <p class="text-xs text-gray-400 dark:text-zinc-500">Accédez à votre espace client et à vos réservations.</p>
          </div>

          <div class="space-y-3 pt-1">
            <div class="space-y-1.5">
              <label class="block text-[10px] uppercase tracking-widest font-semibold text-gray-400 dark:text-zinc-500" for="email">Identifiant Email</label>
              <input v-model="loginData.email" id="email" placeholder="votre_adresse@email.com" required type="email"
                class="w-full px-4 py-2.5 rounded-xl border focus:outline-none text-sm tracking-wide transition-all shadow-sm
                       border-gray-200 bg-gray-50/50 text-gray-900 placeholder-gray-400 focus:border-gray-400 focus:bg-white focus:ring-1 focus:ring-gray-200
                       dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-white dark:placeholder-zinc-600 dark:focus:border-zinc-700 dark:focus:bg-zinc-900 dark:focus:ring-zinc-800" />
            </div>

            <div class="space-y-1.5">
              <label class="block text-[10px] uppercase tracking-widest font-semibold text-gray-400 dark:text-zinc-500" for="password">Mot De Passe</label>
              <div class="relative">
                <input v-model="loginData.password" :type="passwordFieldType" id="password" placeholder="••••••••••••" required
                  class="w-full pl-4 pr-12 py-2.5 rounded-xl border focus:outline-none text-sm tracking-wide transition-all shadow-sm
                         border-gray-200 bg-gray-50/50 text-gray-900 placeholder-gray-400 focus:border-gray-400 focus:bg-white focus:ring-1 focus:ring-gray-200
                         dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-white dark:placeholder-zinc-600 dark:focus:border-zinc-700 dark:focus:bg-zinc-900 dark:focus:ring-zinc-800" />
                <button type="button" @click="togglePasswordVisibility" class="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer text-gray-400 hover:text-gray-600 dark:text-zinc-600 dark:hover:text-zinc-400 focus:outline-none">
                  <i :class="passwordIconClass" class="text-sm"></i>
                </button>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-end">
            <a class="text-xs tracking-wide transition-colors underline underline-offset-4 decoration-transparent hover:decoration-current text-amber-700 hover:text-amber-800 dark:text-[#D5CCBC] dark:hover:text-white" href="#" @click.prevent="showResetPasswordForm">
              Identifiants perdus ?
            </a>
          </div>

          <div class="space-y-2.5">
            <button class="w-full py-3 rounded-xl font-medium text-xs uppercase tracking-wider transition-all shadow-lg transform active:scale-[0.99] bg-amber-600 hover:bg-amber-700 text-white shadow-amber-600/10 dark:bg-zinc-100 dark:hover:bg-[#D5CCBC] dark:text-zinc-950 dark:shadow-zinc-950/20" type="submit">
              Se connecter
            </button>

            <button @click="handleGoogleAuth" type="button" class="flex items-center justify-center gap-3 w-full py-3 rounded-xl font-medium text-xs uppercase tracking-wider border transition-all transform active:scale-[0.99] bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-900 border-gray-200 shadow-sm dark:bg-transparent dark:hover:bg-zinc-900 dark:text-zinc-300 dark:hover:text-white dark:border-zinc-800">
              <svg class="h-4 w-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335" />
              </svg>
              Google
            </button>
          </div>

          <div class="flex items-center py-1">
            <div class="flex-grow h-[1px] bg-gray-200 dark:bg-zinc-900"></div>
            <span class="mx-3 text-[9px] tracking-widest font-semibold uppercase text-gray-400 dark:text-zinc-600">Nouveau membre</span>
            <div class="flex-grow h-[1px] bg-gray-200 dark:bg-zinc-900"></div>
          </div>

          <button @click="showRegisterFormFn" class="w-full py-3 rounded-xl font-medium text-xs uppercase tracking-wider border transition-all transform active:scale-[0.99] bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900 border-gray-200 dark:bg-zinc-900/20 dark:hover:bg-zinc-900 dark:text-zinc-300 dark:hover:text-white dark:border-zinc-800" type="button">
            Créer un profil d'accès
          </button>
        </form>

        <!-- RESET PASSWORD FORM -->
        <form v-if="isResetPasswordForm" @submit.prevent="handleResetPassword" class="space-y-4">
          <div class="space-y-1">
            <h2 class="text-2xl font-normal tracking-tight text-gray-900 dark:text-white">Récupération d'accès</h2>
            <p class="text-xs text-gray-400 dark:text-zinc-500">Un lien de réinitialisation vous sera transmis.</p>
          </div>

          <div class="space-y-1.5 pt-1">
            <label class="block text-[10px] uppercase tracking-widest font-semibold text-gray-400 dark:text-zinc-500" for="email-reset">Adresse de secours</label>
            <input v-model="resetPasswordData.email" id="email-reset" placeholder="votre_adresse@email.com" required type="email"
              class="w-full px-4 py-2.5 rounded-xl border focus:outline-none text-sm tracking-wide transition-all shadow-sm
                     border-gray-200 bg-gray-50/50 text-gray-900 placeholder-gray-400 focus:border-gray-400 focus:bg-white dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-white dark:placeholder-zinc-600 dark:focus:border-zinc-700 dark:focus:bg-zinc-900" />
          </div>

          <div class="space-y-2.5 pt-2">
            <button class="w-full py-3 rounded-xl font-medium text-xs uppercase tracking-wider transition-all transform active:scale-[0.99] bg-amber-600 hover:bg-amber-700 text-white dark:bg-zinc-100 dark:hover:bg-[#D5CCBC] dark:text-zinc-950" type="submit">
              Envoyer les instructions
            </button>
            <button @click="showLoginFormFn" class="w-full py-3 rounded-xl text-xs uppercase tracking-wider font-medium border transition-all transform active:scale-[0.99] bg-gray-50 text-gray-600 hover:text-gray-900 border-gray-200 hover:bg-gray-100 dark:bg-zinc-900/20 dark:text-zinc-400 dark:hover:text-white dark:border-zinc-800" type="button">
              Annuler l'opération
            </button>
          </div>
        </form>

        <!-- REGISTER FORM -->
        <form v-else-if="!isLoginForm && !isResetPasswordForm" @submit.prevent="handleRegister" class="space-y-3.5">
          <div class="space-y-0.5">
            <h2 class="text-xl font-normal tracking-tight text-gray-900 dark:text-white">Ouverture de compte</h2>
            <p class="text-xs text-gray-400 dark:text-zinc-500">Rejoignez l'écosystème BookMySalon.</p>
          </div>

          <div class="space-y-2">
            <div class="grid grid-cols-2 gap-2">
              <div class="space-y-1">
                <label class="block text-[9px] uppercase tracking-widest font-semibold text-gray-400 dark:text-zinc-500" for="nom">Nom</label>
                <input v-model="registerData.nom" id="nom" placeholder="Nom" required type="text"
                  class="w-full px-3 py-2 rounded-xl border focus:outline-none text-xs transition-all border-gray-200 bg-gray-50/50 text-gray-900 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-white" />
              </div>
              <div class="space-y-1">
                <label class="block text-[9px] uppercase tracking-widest font-semibold text-gray-400 dark:text-zinc-500" for="prenom">Prénom</label>
                <input v-model="registerData.prenom" id="prenom" placeholder="Prénom" required type="text"
                  class="w-full px-3 py-2 rounded-xl border focus:outline-none text-xs transition-all border-gray-200 bg-gray-50/50 text-gray-900 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-white" />
              </div>
            </div>

            <div class="space-y-1">
              <label class="block text-[9px] uppercase tracking-widest font-semibold text-gray-400 dark:text-zinc-500" for="email-register">Adresse Email</label>
              <input v-model="registerData.email" id="email-register" placeholder="votre_adresse@email.com" required type="email"
                class="w-full px-3 py-2 rounded-xl border focus:outline-none text-xs transition-all border-gray-200 bg-gray-50/50 text-gray-900 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-white" />
            </div>

            <div class="grid grid-cols-2 gap-2">
              <div class="space-y-1">
                <label class="block text-[9px] uppercase tracking-widest font-semibold text-gray-400 dark:text-zinc-500" for="password-register">Mot de passe</label>
                <input v-model="registerData.password" id="password-register" placeholder="••••••••" required type="password"
                  class="w-full px-3 py-2 rounded-xl border focus:outline-none text-xs transition-all border-gray-200 bg-gray-50/50 text-gray-900 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-white" />
              </div>
              <div class="space-y-1">
                <label class="block text-[9px] uppercase tracking-widest font-semibold text-gray-400 dark:text-zinc-500" for="password-confirm">Validation</label>
                <input v-model="registerData.passwordConfirm" id="password-confirm" placeholder="••••••••" required type="password"
                  class="w-full px-3 py-2 rounded-xl border focus:outline-none text-xs transition-all border-gray-200 bg-gray-50/50 text-gray-900 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-white" />
              </div>
            </div>

            <div class="grid grid-cols-5 gap-2">
              <div class="col-span-3 space-y-1">
                <label class="block text-[9px] uppercase tracking-widest font-semibold text-gray-400 dark:text-zinc-500" for="tel">Téléphone Mobile</label>
                <input v-model="registerData.telephone" id="tel" placeholder="06 00 00 00 00" required type="tel"
                  class="w-full px-3 py-2 rounded-xl border focus:outline-none text-xs transition-all border-gray-200 bg-gray-50/50 text-gray-900 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-white" />
              </div>
              <div class="col-span-2 space-y-1">
                <label class="block text-[9px] uppercase tracking-widest font-semibold text-gray-400 dark:text-zinc-500" for="genre">Identité</label>
                <div class="relative">
                  <select v-model="registerData.genre" id="genre" required
                    class="w-full pl-3 pr-8 py-2 rounded-xl border focus:outline-none text-xs transition-all appearance-none cursor-pointer border-gray-200 bg-gray-50/50 text-gray-500 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-400">
                    <option value="" disabled>Genre</option>
                    <option value="Homme">Homme</option>
                    <option value="Femme">Femme</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400 dark:text-zinc-600">
                    <svg class="fill-current h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>
            </div>

            <div class="space-y-1">
              <label class="block text-[9px] uppercase tracking-widest font-semibold text-gray-400 dark:text-zinc-500" for="date_naissance">Date de Naissance</label>
              <input v-model="registerData.date_naissance" id="date_naissance" required type="date"
                class="w-full px-3 py-2 rounded-xl border focus:outline-none text-xs transition-all border-gray-200 bg-gray-50/50 text-gray-500 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-400" />
            </div>

            <div class="flex items-start gap-2.5 pt-1">
              <input v-model="registerData.acceptCGU" id="cgu" required type="checkbox"
                class="mt-0.5 h-3.5 w-3.5 rounded border cursor-pointer border-gray-300 bg-white text-amber-600 accent-amber-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:accent-zinc-200" />
              <label for="cgu" class="text-[11px] leading-tight text-gray-500 dark:text-zinc-500 select-none cursor-pointer">
                J'accepte les <NuxtLink to="/cgu" class="underline text-gray-700 hover:text-gray-900 dark:text-zinc-400 dark:hover:text-white">CGU</NuxtLink>.
              </label>
            </div>
          </div>

          <div class="space-y-2 pt-1">
            <button class="w-full py-2.5 rounded-xl font-medium text-xs uppercase tracking-wider transition-all transform active:scale-[0.99] bg-amber-600 hover:bg-amber-700 text-white dark:bg-zinc-100 dark:hover:bg-[#D5CCBC] dark:text-zinc-950" type="submit">
              Valider l'inscription
            </button>

            <div class="grid grid-cols-2 gap-2">
              <button @click="handleGoogleAuth" type="button" class="flex items-center justify-center gap-2 py-2 rounded-xl font-medium text-[11px] uppercase border transition-all transform active:scale-[0.99] bg-white hover:bg-gray-50 text-gray-600 border-gray-200 shadow-sm dark:bg-transparent dark:hover:bg-zinc-900 dark:text-zinc-300 dark:border-zinc-800">
                <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335" />
                </svg>
                Google
              </button>

              <button @click="showLoginFormFn" class="py-2 rounded-xl text-[11px] uppercase font-medium border transition-all transform active:scale-[0.99] bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100 dark:bg-zinc-900/20 dark:text-zinc-300 dark:border-zinc-800" type="button">
                Connexion
              </button>
            </div>
          </div>
        </form>

      </div>
    </div>

    <div class="hidden md:block w-1/2 h-full relative select-none pointer-events-none bg-gray-100 dark:bg-zinc-900">
      <div class="absolute inset-y-0 left-0 w-32 z-20 bg-gradient-to-r from-white to-transparent dark:from-zinc-950"></div>
      <div class="absolute inset-0 z-10 bg-gray-50/20 mix-blend-multiply dark:bg-zinc-950/10"></div>
      <img
        alt="High-end beauty curation session"
        class="object-cover w-full h-full filter grayscale contrast-[1.02] brightness-[0.85]"
        src="https://img.freepik.com/free-photo/bride-getting-makeup-done-medium-shot_23-2149860778.jpg?uid=R141327891&ga=GA1.1.223045777.1725963888&semt=ais_hybrid&w=740"
      />
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
definePageMeta({
  layout: 'empty',
  middleware: 'guest'
})

const route = useRoute()
const { login, user } = useAuth()
const { fetchApi } = useApi()

// Form states
const isLoginForm = ref(true)
const isResetPasswordForm = ref(false)
const passwordFieldType = ref('password')

// Login data
const loginData = ref({
  email: '',
  password: ''
})

// Reset password data
const resetPasswordData = ref({
  email: ''
})

// Register data
const registerData = ref({
  nom: '',
  prenom: '',
  email: '',
  telephone: '',
  adresse: '',
  date_naissance: '',
  genre: '',
  password: '',
  passwordConfirm: '',
  acceptCGU: false
})

// Loading modal state
const loading = ref({
  show: false,
  state: 'loading' as 'loading' | 'success' | 'error',
  title: '',
  message: ''
})

const passwordIconClass = computed(() => {
  return passwordFieldType.value === 'password' ? 'fas fa-eye-slash' : 'fas fa-eye'
})

function togglePasswordVisibility() {
  passwordFieldType.value = passwordFieldType.value === 'password' ? 'text' : 'password'
}

function showRegisterFormFn() {
  isLoginForm.value = false
  isResetPasswordForm.value = false
}

function showLoginFormFn() {
  isLoginForm.value = true
  isResetPasswordForm.value = false
}

function showResetPasswordForm() {
  isLoginForm.value = false
  isResetPasswordForm.value = true
}

function closeLoadingModal() {
  loading.value.show = false
}

async function handleLogin() {
  loading.value = {
    show: true,
    state: 'loading',
    title: 'Connexion en cours',
    message: 'Vérification de vos identifiants...'
  }

  try {
    console.log('🔐 [Login] Tentative de connexion...')
    await login(loginData.value.email, loginData.value.password)
    console.log('✅ [Login] Connexion réussie, token stocké')
    console.log('👤 [Login] Utilisateur:', user.value)

    loading.value = {
      show: true,
      state: 'success',
      title: 'Connexion réussie !',
      message: `Bienvenue ${user.value?.prenom || user.value?.email || ''} !`
    }

    const redirectPath = route.query.redirect as string || '/userAccount'
    console.log('🔄 [Login] Redirection vers:', redirectPath)

    setTimeout(async () => {
      await navigateTo(redirectPath)
    }, 1500)
  } catch (error: any) {
    console.error('❌ [Login] Erreur:', error)
    loading.value = {
      show: true,
      state: 'error',
      title: 'Erreur de connexion',
      message: error.data?.message || error.message || 'Identifiants incorrects'
    }
  }
}

async function handleRegister() {
  if (registerData.value.password !== registerData.value.passwordConfirm) {
    loading.value = {
      show: true,
      state: 'error',
      title: 'Erreur',
      message: 'Les mots de passe ne correspondent pas.'
    }
    return
  }

  loading.value = {
    show: true,
    state: 'loading',
    title: 'Création du compte',
    message: 'Enregistrement de vos informations...'
  }

  try {
    const payload = { ...registerData.value }
    delete (payload as any).passwordConfirm

    await fetchApi('/api/clients/register', {
      method: 'POST',
      body: payload
    })

    loading.value = {
      show: true,
      state: 'success',
      title: 'Compte créé !',
      message: 'Vous pouvez maintenant vous connecter'
    }

    setTimeout(() => {
      registerData.value = {
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        adresse: '',
        date_naissance: '',
        genre: '',
        password: '',
        passwordConfirm: '',
        acceptCGU: false
      }
      showLoginFormFn()
      loading.value.show = false
    }, 2000)
  } catch (error: any) {
    loading.value = {
      show: true,
      state: 'error',
      title: 'Erreur',
      message: error.data?.message || error.message || "Erreur lors de l'enregistrement"
    }
  }
}

async function handleResetPassword() {
  loading.value = {
    show: true,
    state: 'loading',
    title: 'Envoi en cours',
    message: 'Envoi du lien de réinitialisation...'
  }

  try {
    await fetchApi('/api/clients/reset-password', {
      method: 'POST',
      body: resetPasswordData.value
    })

    loading.value = {
      show: true,
      state: 'success',
      title: 'Email envoyé !',
      message: 'Consultez votre boîte mail pour réinitialiser votre mot de passe'
    }

    setTimeout(() => {
      showLoginFormFn()
      loading.value.show = false
    }, 2000)
  } catch (error: any) {
    loading.value = {
      show: true,
      state: 'error',
      title: 'Erreur',
      message: error.data?.message || error.message || 'Erreur lors de la demande'
    }
  }
}

async function handleGoogleAuth() {
  try {
    const response = await fetchApi('/api/clients/google/auth-url')
    if (response.authUrl) {
      window.location.href = response.authUrl
    }
  } catch (error: any) {
    loading.value = {
      show: true,
      state: 'error',
      title: 'Erreur',
      message: 'Erreur lors de la connexion avec Google'
    }
  }
}
</script>

<style scoped>
input[type="date"]::-calendar-picker-indicator {
  filter: invert(0.6);
  cursor: pointer;
}
</style>
