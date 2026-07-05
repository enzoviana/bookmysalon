<template>
  <div class="relative w-full h-[600px] rounded-2xl overflow-hidden border"
    :class="isDark ? 'border-zinc-800' : 'border-[#EBE6DD]'">
    <div v-if="loading" class="absolute inset-0 flex items-center justify-center z-10"
      :class="isDark ? 'bg-zinc-900' : 'bg-white'">
      <div class="text-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4"
          :class="isDark ? 'border-white' : 'border-[#1E1B18]'"></div>
        <p class="text-sm font-medium" :class="isDark ? 'text-zinc-400' : 'text-[#8C8375]'">
          Chargement de la carte...
        </p>
      </div>
    </div>

    <div v-if="error" class="absolute inset-0 flex items-center justify-center z-10"
      :class="isDark ? 'bg-zinc-900' : 'bg-white'">
      <div class="text-center px-6">
        <svg class="w-12 h-12 mx-auto mb-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p class="text-sm font-medium" :class="isDark ? 'text-zinc-300' : 'text-[#1E1B18]'">
          {{ error }}
        </p>
      </div>
    </div>

    <div ref="mapContainer" class="w-full h-full"></div>
  </div>
</template>

<script>
/* global google */
import { setOptions, importLibrary } from '@googlemaps/js-api-loader';
import { useTheme } from '~/composables/useTheme';

export default {
  name: 'SalonMap',
  props: {
    salons: {
      type: Array,
      required: true
    },
    centerLocation: {
      type: String,
      default: ''
    },
    centerCoordinates: {
      type: Object,
      default: null
    }
  },
  setup() {
    const { isDark } = useTheme();
    return { isDark };
  },
  data() {
    return {
      map: null,
      markers: [],
      centerMarker: null,
      infoWindow: null,
      loading: true,
      error: null,
      googleMapsApiKey: null
    };
  },
  async mounted() {
    await this.loadGoogleMapsKey();
    if (this.googleMapsApiKey) {
      await this.initMap();
    }
  },
  watch: {
    salons: {
      handler() {
        if (this.map) {
          this.updateMarkers();
        }
      },
      deep: true
    },
    isDark() {
      if (this.map) {
        this.updateMapStyles();
      }
    }
  },
  methods: {
    async loadGoogleMapsKey() {
      try {
        const response = await fetch('https://bookmysalon-967a856b16b6.herokuapp.com/api/config/google-maps-key');
        const data = await response.json();

        if (data.apiKey) {
          this.googleMapsApiKey = data.apiKey;
        } else {
          this.error = 'Clé API Google Maps non disponible';
          this.loading = false;
        }
      } catch (err) {
        console.error('Erreur chargement clé API:', err);
        this.error = 'Impossible de charger la carte';
        this.loading = false;
      }
    },

async initMap() {
  try {
    // 1. Configure the loader with your API key and options
    setOptions({
      apiKey: this.googleMapsApiKey,
      version: 'weekly'
    });

    // 2. Load the necessary sub-libraries asynchronously
    // (This automatically installs the global 'google.maps' namespace)
    await Promise.all([
      importLibrary('maps'),
      importLibrary('places'),
      importLibrary('marker')
    ]);

    

    // Centre par défaut (Paris)
    const defaultCenter = { lat: 48.8566, lng: 2.3522 };
    let center = defaultCenter;

    // Si on a une localisation, on la géocode
    if (this.centerLocation) {
      center = await this.geocodeLocation(this.centerLocation);
    } else if (this.salons.length > 0 && this.salons[0].latitude && this.salons[0].longitude) {
      // Sinon on centre sur le premier salon
      center = {
        lat: this.salons[0].latitude,
        lng: this.salons[0].longitude
      };
    }

    // 3. Keep using your existing map setup logic!
    this.map = new google.maps.Map(this.$refs.mapContainer, {
      center,
      zoom: 12,
      styles: this.getMapStyles(),
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: true,
      zoomControl: true
    });

    this.infoWindow = new google.maps.InfoWindow();

    // Ajouter le marqueur du centre de recherche
    this.addCenterMarker(center);

    this.updateMarkers();
    this.loading = false;

  } catch (err) {
    console.error('Erreur initialisation carte:', err);
    this.error = 'Erreur lors du chargement de la carte';
    this.loading = false;
  }
},

    async geocodeLocation(location) {
      const geocoder = new google.maps.Geocoder();

      return new Promise((resolve) => {
        geocoder.geocode({ address: location }, (results, status) => {
          if (status === 'OK' && results[0]) {
            resolve({
              lat: results[0].geometry.location.lat(),
              lng: results[0].geometry.location.lng()
            });
          } else {
            // Fallback sur Paris si le géocodage échoue
            resolve({ lat: 48.8566, lng: 2.3522 });
          }
        });
      });
    },

    addCenterMarker(center) {
      // Supprimer l'ancien marqueur du centre s'il existe
      if (this.centerMarker) {
        this.centerMarker.setMap(null);
      }

      // Créer un nouveau marqueur pour la localisation recherchée
      this.centerMarker = new google.maps.Marker({
        position: center,
        map: this.map,
        title: 'Lieu de recherche',
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          fillColor: '#3B82F6',
          fillOpacity: 1,
          strokeColor: '#FFFFFF',
          strokeWeight: 3,
          scale: 10
        },
        zIndex: 1000
      });

      // InfoWindow pour le marqueur du centre
      this.centerMarker.addListener('click', () => {
        const content = `
          <div class="p-3" style="font-family: system-ui, -apple-system, sans-serif;">
            <h3 class="font-semibold text-base mb-2 text-gray-900">
              📍 Lieu de recherche
            </h3>
            <p class="text-sm text-gray-600">
              ${this.centerLocation || 'Localisation actuelle'}
            </p>
          </div>
        `;
        this.infoWindow.setContent(content);
        this.infoWindow.open(this.map, this.centerMarker);
      });
    },

    updateMarkers() {
      // Supprimer les anciens marqueurs
      this.markers.forEach(marker => marker.setMap(null));
      this.markers = [];

      if (!this.map || this.salons.length === 0) return;

      const bounds = new google.maps.LatLngBounds();

      this.salons.forEach(salon => {
        if (!salon.latitude || !salon.longitude) return;

        const position = {
          lat: salon.latitude,
          lng: salon.longitude
        };

        const marker = new google.maps.Marker({
          position,
          map: this.map,
          title: salon.nom_societe || salon.nom,
          animation: google.maps.Animation.DROP,
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            fillColor: '#F59E0B',
            fillOpacity: 1,
            strokeColor: '#FFFFFF',
            strokeWeight: 2,
            scale: 8
          }
        });

        marker.addListener('click', () => {
          this.showInfoWindow(marker, salon);
        });

        this.markers.push(marker);
        bounds.extend(position);
      });

      // Ajuster la vue pour afficher tous les marqueurs
      if (this.markers.length > 0) {
        this.map.fitBounds(bounds);

        // Si un seul salon, ne pas trop dézoomer
        if (this.markers.length === 1) {
          this.map.setZoom(14);
        }
      }
    },

    showInfoWindow(marker, salon) {
      const content = `
        <div class="p-3 max-w-xs" style="font-family: system-ui, -apple-system, sans-serif;">
          <h3 class="font-semibold text-base mb-2 text-gray-900">
            ${salon.nom_societe || salon.nom}
          </h3>
          <div class="space-y-1.5 text-sm text-gray-600">
            ${salon.rating ? `
              <div class="flex items-center gap-1">
                <span style="color: #F59E0B;">★</span>
                <span class="font-medium">${salon.rating.toFixed(1)}</span>
              </div>
            ` : ''}
            ${salon.distance_km !== null && salon.distance_km !== undefined ? `
              <div class="flex items-center gap-1">
                <span>📍</span>
                <span>${salon.distance_km} km</span>
              </div>
            ` : ''}
            ${salon.ville ? `
              <div class="flex items-center gap-1">
                <span>📌</span>
                <span>${salon.ville}</span>
              </div>
            ` : ''}
          </div>
          <button
            onclick="window.location.href='${salon.slug ? '/etablissement/' + salon.slug : '/salon/' + (salon.id || salon._id)}'"
            class="mt-3 w-full px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
            Voir le salon
          </button>
        </div>
      `;

      this.infoWindow.setContent(content);
      this.infoWindow.open(this.map, marker);
    },

    updateMapStyles() {
      if (this.map) {
        this.map.setOptions({
          styles: this.getMapStyles()
        });
      }
    },

    getMapStyles() {
      if (this.isDark) {
        return [
          { elementType: "geometry", stylers: [{ color: "#18181b" }] },
          { elementType: "labels.text.stroke", stylers: [{ color: "#09090b" }] },
          { elementType: "labels.text.fill", stylers: [{ color: "#71717a" }] },
          {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [{ color: "#a1a1aa" }]
          },
          {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{ color: "#52525b" }]
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{ color: "#27272a" }]
          },
          {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [{ color: "#71717a" }]
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#27272a" }]
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#18181b" }]
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#71717a" }]
          },
          {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{ color: "#3f3f46" }]
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{ color: "#27272a" }]
          },
          {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [{ color: "#a1a1aa" }]
          },
          {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{ color: "#27272a" }]
          },
          {
            featureType: "transit.station",
            elementType: "labels.text.fill",
            stylers: [{ color: "#71717a" }]
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#09090b" }]
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{ color: "#52525b" }]
          },
          {
            featureType: "water",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#09090b" }]
          }
        ];
      } else {
        return [
          {
            featureType: "poi.business",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "poi.park",
            elementType: "labels.text",
            stylers: [{ visibility: "off" }]
          }
        ];
      }
    }
  }
};
</script>
