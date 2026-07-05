<template>
  <div class="min-h-screen w-screen flex items-center justify-center bg-gray-50 dark:bg-zinc-950">
    <LoadingModal
      :show="loading.show"
      :state="loading.state"
      :title="loading.title"
      :message="loading.message"
      @close="handleError"
    />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'empty'
})

const route = useRoute()
const { setToken, setUser, user } = useAuth()
const { fetchApi } = useApi()

const loading = ref({
  show: true,
  state: 'loading' as 'loading' | 'success' | 'error',
  title: 'Authentification Google',
  message: 'Connexion en cours...'
})

async function handleError() {
  await navigateTo('/signup')
}

onMounted(async () => {
  try {
    // Récupérer le code depuis l'URL
    const code = route.query.code as string

    if (!code) {
      throw new Error('Code d\'authentification manquant')
    }

    console.log('\n========================================')
    console.log('🔐 [Google Callback] Code reçu')
    console.log('========================================\n')
    console.log('Code:', code.substring(0, 20) + '...')

    loading.value = {
      show: true,
      state: 'loading',
      title: 'Authentification Google',
      message: 'Vérification de votre compte...'
    }

    // Envoyer le code au backend pour obtenir le token
    console.log('📤 [Google Callback] Envoi du code au backend...')
    const response = await fetchApi('/api/clients/google/callback', {
      method: 'POST',
      body: { code }
    })

    console.log('✅ [Google Callback] Réponse reçue:', response)

    if (!response.token) {
      throw new Error('Token manquant dans la réponse')
    }

    // Stocker le token dans le cookie
    console.log('💾 [Google Callback] Stockage du token...')
    setToken(response.token)

    if (response.client) {
      console.log('👤 [Google Callback] Stockage des données utilisateur...')
      setUser(response.client)
      console.log('✅ [Google Callback] Utilisateur:', user.value)
    }

    loading.value = {
      show: true,
      state: 'success',
      title: 'Connexion réussie !',
      message: `Bienvenue ${user.value?.prenom || user.value?.email || ''} !`
    }

    console.log('🎉 [Google Callback] Authentification réussie !')
    console.log('🔄 [Google Callback] Redirection vers /userAccount...\n')

    // Redirection après 1.5s
    setTimeout(async () => {
      await navigateTo('/userAccount')
    }, 1500)

  } catch (error: any) {
    console.error('\n❌❌❌ [Google Callback] ERREUR ❌❌❌')
    console.error('Type:', error.name)
    console.error('Message:', error.message)
    console.error('Data:', error.data)
    console.error('Stack:', error.stack)
    console.error('════════════════════════════════════════\n')

    loading.value = {
      show: true,
      state: 'error',
      title: 'Erreur de connexion',
      message: error.data?.message || error.message || 'Une erreur est survenue lors de la connexion avec Google'
    }
  }
})
</script>
