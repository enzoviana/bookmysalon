# BookMySalon - Frontend Nuxt 3

Version migré du frontend Vue.js SPA vers Nuxt 3 SSR/SSG pour un meilleur SEO.

## 🚀 Démarrage Rapide

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Builder pour la production
npm run build
```

## 🔧 Configuration

Créez un fichier `.env` :

```env
NUXT_PUBLIC_API_BASE=https://bookmysalon-967a856b16b6.herokuapp.com
GOOGLE_MAPS_API_KEY=votre_clé_google_maps
```

## 📋 Architecture

- **SSR** : Pages SEO (/, /etablissement/:slug, /villes/:city)
- **CSR** : Pages privées (/userAccount, /mes-rendez-vous)
- **Prerender** : Pages statiques (/cgu, /cgv)

## 🎨 Stack Technique

- Nuxt 3.x
- Vue 3 Composition API
- Tailwind CSS
- Pinia (state management)
- @nuxtjs/seo

## 📝 Documentation Complète

Voir le fichier README complet pour plus de détails sur l'architecture, les composables et le SEO.
