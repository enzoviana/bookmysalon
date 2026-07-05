<template>
  <section class="space-y-6 select-none">

    <div v-if="employes.length > 1 && !employeId" class="space-y-2">
      <label class="block text-[11px] uppercase tracking-widest font-medium"
        :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">
        Choix de l'expert :
      </label>

      <div class="flex flex-nowrap gap-2.5 overflow-x-auto scrollbar-none pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
        <div
          @click="clearSelectedEmploye"
          class="flex-shrink-0 w-32 px-4 py-3 rounded-xl cursor-pointer flex items-center justify-center text-xs font-semibold tracking-wider uppercase border transition-all duration-200 active:scale-95"
          :class="[
            !selectedEmployeId
              ? isDark
                ? 'border-[#D5CCBC] bg-zinc-900/80 text-[#D5CCBC] shadow-lg shadow-[#D5CCBC]/5'
                : 'border-[#2D2924] bg-[#2D2924] text-white shadow-md shadow-zinc-900/10'
              : isDark
                ? 'border-zinc-900 bg-zinc-950/40 text-zinc-400 hover:text-white hover:border-zinc-800'
                : 'border-[#E5E0D8] bg-[#FDFCF8] text-[#7A7367] hover:bg-[#F7F5F0] hover:border-[#D6D0C5]'
          ]"
        >
          <i class="fas fa-users text-[10px] mr-1.5 opacity-80"></i> Peu importe
        </div>

        <div
          v-for="employe in employes"
          :key="employe._id"
          @click="selectEmploye(employe._id)"
          class="flex-shrink-0 w-44 p-2 rounded-xl cursor-pointer flex items-center gap-3 border transition-all duration-200 active:scale-95"
          :class="[
            selectedEmployeId === employe._id
              ? isDark
                ? 'border-[#D5CCBC] bg-zinc-900 text-white font-semibold'
                : 'border-[#A69B88] bg-[#F7F5F0] text-[#2D2924] font-semibold'
              : isDark
                ? 'border-zinc-900 bg-zinc-950/40 text-zinc-400 hover:text-white hover:border-zinc-800'
                : 'border-[#E5E0D8] bg-[#FDFCF8] text-[#7A7367] hover:border-[#D6D0C5] shadow-sm'
          ]"
        >
          <div
            class="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden text-xs font-bold text-white flex-shrink-0 border filter grayscale"
            :class="isDark ? 'border-zinc-800' : 'border-[#E5E0D8]'"
            :style="{ backgroundColor: !employe.photo ? stringToColor(employe.prenom || employe.nom) : 'transparent' }"
          >
            <img v-if="employe.photo" :src="employe.photo" alt="Avatar" class="w-full h-full object-cover" />
            <span v-else>{{ (employe.prenom || employe.nom)?.charAt(0).toUpperCase() }}</span>
          </div>
          
          <div class="text-xs font-medium truncate tracking-tight pr-1">
            {{ employe.prenom }} {{ employe.nom }}
          </div>
        </div>
      </div>
    </div>

    <div class="border rounded-2xl p-4 sm:p-5 shadow-sm transition-colors duration-200"
      :class="isDark ? 'bg-zinc-950/40 border-zinc-900' : 'bg-[#FDFCF8] border-[#E5E0D8]'">
      <div class="flex flex-col gap-6">
        
        <div v-if="!selectedDate" class="flex items-center justify-between border-b pb-4"
          :class="isDark ? 'border-zinc-900' : 'border-[#E5E0D8]'">
          <button
            aria-label="Précédent"
            class="transition-colors text-xs p-2 rounded-xl border flex items-center justify-center disabled:opacity-20 active:scale-90"
            :class="isDark ? 'text-zinc-400 border-zinc-800 hover:bg-zinc-900' : 'text-[#7A7367] border-[#E5E0D8] hover:bg-[#F7F5F0]'"
            @click="changeWeek(-1)"
            :disabled="isPreviousDisabled"
          >
            <i class="fas fa-chevron-left"></i>
          </button>
          
          <div class="text-xs font-medium uppercase tracking-widest"
            :class="isDark ? 'text-zinc-300' : 'text-[#2D2924]'">
            Du {{ formatDate(visibleDays[0]?.date) }} au {{ formatDate(visibleDays[visibleDays.length - 1]?.date) }}
          </div>
          
          <button
            aria-label="Suivant"
            class="transition-colors text-xs p-2 rounded-xl border flex items-center justify-center active:scale-90"
            :class="isDark ? 'text-zinc-400 border-zinc-800 hover:bg-zinc-900' : 'text-[#7A7367] border-[#E5E0D8] hover:bg-[#F7F5F0]'"
            @click="changeWeek(1)"
          >
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>

        <div class="flex gap-4 sm:gap-4 overflow-x-auto scrollbar-none pb-2 align-start"
          :class="selectedDate ? 'justify-center' : 'justify-start sm:grid sm:grid-cols-7 sm:gap-2'">
          
          <template v-if="selectedDate">
            <div class="flex flex-col items-center min-w-[180px] max-w-xs mx-auto p-5 rounded-xl space-y-1 text-center border"
              :class="isDark ? 'bg-black border-zinc-900' : 'bg-[#F7F5F0] border-[#E5E0D8]'">
              <div class="text-xs font-medium capitalize" :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">{{ getDayName(selectedDate) }}</div>
              <div class="text-xs font-light pb-3" :class="isDark ? 'text-zinc-400' : 'text-[#7A7367]'">{{ formatDate(selectedDate) }}</div>
              
              <div class="font-semibold rounded-xl w-full py-2.5 text-xs uppercase tracking-wider shadow-md text-white"
                :class="isDark ? 'bg-zinc-900 text-[#D5CCBC] border border-zinc-800' : 'bg-[#2D2924] shadow-zinc-900/10'">
                <i class="far fa-clock mr-1 text-xs"></i> {{ selectedSlots[selectedDate] }}
              </div>
              
              <button class="text-[11px] font-medium tracking-wide uppercase text-rose-600 dark:text-rose-400 hover:underline pt-3" @click="resetSelection">
                Modifier l'horaire
              </button>
            </div>
          </template>

          <template v-else>
            <div
              v-for="(day, index) in visibleFilteredDays"
              :key="index"
              class="flex flex-col items-center min-w-[85px] sm:min-w-0"
            >
              <div class="text-xs font-medium capitalize mb-0.5"
                :class="isDark ? 'text-zinc-300' : 'text-[#2D2924]'">
                {{ day.name.substring(0, 3) }}.
              </div>
              <div class="text-[10px] font-light mb-3" :class="isDark ? 'text-zinc-500' : 'text-[#8C8579]'">
                {{ formatDate(day.date).split(' ')[0] }} {{ formatDate(day.date).split(' ')[1]?.substring(0, 3) }}
              </div>

              <div v-if="day.timeslots.length > 0" class="w-full space-y-1.5">
                <button
                  v-for="(slot, idx) in getLimitedTimeslots(day)"
                  :key="idx"
                  type="button"
                  class="w-full py-2 rounded-xl text-xs font-medium tracking-tight transition-all duration-150 focus:outline-none border active:scale-95"
                  :class="[
                    selectedSlots[day.date] === slot
                      ? isDark
                        ? 'bg-white text-black border-white shadow-lg shadow-white/5 font-semibold'
                        : 'bg-[#2D2924] text-white border-[#2D2924] shadow-md shadow-zinc-900/10 font-semibold'
                      : isDark
                        ? 'bg-black text-zinc-300 border-zinc-900/80 hover:border-zinc-700 hover:text-white'
                        : 'bg-[#FDFCF8] text-[#2D2924] border-[#E5E0D8]/80 hover:bg-[#F7F5F0] hover:border-[#D6D0C5]'
                  ]"
                  @click="selectSlot(day.date, slot)"
                >
                  {{ slot }}
                </button>

                <button
                  v-if="day.timeslots.length > 5"
                  @click="toggleExpandDay(day.date)"
                  type="button"
                  class="w-full py-1.5 text-[10px] font-semibold tracking-widest uppercase transition-colors text-center focus:outline-none rounded-lg"
                  :class="isDark ? 'text-[#D5CCBC] hover:bg-zinc-900' : 'text-[#A69B88] hover:bg-[#F7F5F0]'"
                >
                  {{ isDayExpanded(day.date) ? 'Moins ▲' : `+${day.timeslots.length - 5} pl.` }}
                </button>
              </div>
              
              <div v-else class="text-[10px] text-zinc-400 font-light text-center mt-3 p-1.5 border border-dashed rounded-xl w-full"
                :class="isDark ? 'border-zinc-900 bg-zinc-950/20' : 'border-[#E5E0D8] bg-[#F7F5F0]/50'">
                -
              </div>
            </div>
          </template>
          
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.scrollbar-none::-webkit-scrollbar {
  display: none;
}
.scrollbar-none {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>

<script>
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/fr';

moment.locale('fr');

export default {
  props: {
    selectedServices: Array,
    firmId: String,
    employeId: String,
    isDark: Boolean, // Injecté ou hérité du composant parent
  },
  data() {
    return {
      days: [],
      currentWeekIndex: 0,
      selectedSlots: {},
      selectedDate: null,
      selectedEmployeId: '',
      employes: [],
      isLoading: false,
      allDisponibilitesByDay: [],
      isMobile: false,
      expandedDays: [],
    };
  },
  computed: {
    selectedServiceIds() {
      return this.selectedServices?.map((s) => s._id) || [];
    },
    daysPerPage() {
      return this.isMobile ? 3 : 7;
    },
    visibleDays() {
      const startIndex = this.currentWeekIndex * this.daysPerPage;
      return this.days.slice(startIndex, startIndex + this.daysPerPage);
    },
    visibleFilteredDays() {
      const startIndex = this.currentWeekIndex * this.daysPerPage;
      return this.filteredDays.slice(startIndex, startIndex + this.daysPerPage);
    },
    isPreviousDisabled() {
      const firstVisibleDay = this.visibleDays[0];
      const today = moment().startOf('day');
      return firstVisibleDay && moment(firstVisibleDay.date).isBefore(today);
    },
    filteredDays() {
      return this.allDisponibilitesByDay.map((day) => {
        let filteredDisponibilites = this.selectedEmployeId
          ? day.disponibilites.filter((d) => d.employe._id === this.selectedEmployeId)
          : day.disponibilites;

        let timeslots = filteredDisponibilites.flatMap((d) => d.timeslots).sort((a, b) => a.localeCompare(b));

        return {
          date: day.date,
          name: day.name,
          timeslots,
        };
      });
    },
  },
  mounted() {
    this.checkDevice();
    window.addEventListener('resize', this.checkDevice);
    this.fetchDisponibilites();

    if (this.employeId) {
      this.selectedEmployeId = this.employeId;
    }
  },
  watch: {
    employeId(newVal) {
      if (newVal) {
        this.selectedEmployeId = newVal;
      }
    }
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkDevice);
  },
  methods: {
    checkDevice() {
      this.isMobile = window.innerWidth < 768;
    },
    getLimitedTimeslots(day) {
      if (this.isDayExpanded(day.date)) {
        return day.timeslots;
      }
      return day.timeslots.slice(0, 5);
    },
    isDayExpanded(date) {
      return this.expandedDays.includes(date);
    },
    toggleExpandDay(date) {
      if (this.isDayExpanded(date)) {
        this.expandedDays = this.expandedDays.filter((d) => d !== date);
      } else {
        this.expandedDays.push(date);
      }
    },
    selectEmploye(id) {
      this.selectedEmployeId = this.selectedEmployeId === id ? '' : id;
      this.expandedDays = [];
    },
    clearSelectedEmploye() {
      this.selectedEmployeId = '';
      this.expandedDays = [];
    },
    stringToColor(str) {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
      }
      let color = '#';
      for (let i = 0; i < 3; i++) {
        const value = (hash >> (i * 8)) & 0xff;
        color += ('00' + value.toString(16)).slice(-2);
      }
      return color;
    },
    changeWeek(direction) {
      const totalWeeks = Math.ceil(this.days.length / this.daysPerPage);
      this.currentWeekIndex = (this.currentWeekIndex + direction + totalWeeks) % totalWeeks;
      this.expandedDays = [];
    },
    selectSlot(date, slot) {
      this.selectedSlots = { [date]: slot };
      this.selectedDate = date;

      let employeId = this.selectedEmployeId;

      if (!employeId) {
        const dayData = this.allDisponibilitesByDay.find((d) => d.date === date);
        if (dayData) {
          const candidats = dayData.disponibilites.filter((d) => d.timeslots.includes(slot));
          if (candidats.length > 0) {
            const randomIndex = Math.floor(Math.random() * candidats.length);
            employeId = candidats[randomIndex].employe._id;
          }
        }
      }

      this.$emit('creneau-selectionne', {
        date,
        slot,
        employeId,
      });
    },
    resetSelection() {
      this.selectedSlots = {};
      this.selectedDate = null;
    },
    getDayName(date) {
      return moment(date).format('dddd');
    },
    formatDate(dateString) {
      if (!dateString) return '';
      return moment(dateString).format('D MMMM YYYY');
    },
    async fetchDisponibilites() {
      if (this.isLoading) return;
      this.isLoading = true;

      this.allDisponibilitesByDay = [];
      this.days = [];

      const baseDate = moment().startOf('day');
      const next28Days = Array.from({ length: 28 }, (_, i) => baseDate.clone().add(i, 'days'));

      for (const date of next28Days) {
        try {
          const res = await axios.post('https://bookmysalon-967a856b16b6.herokuapp.com/api/appointment/disponibilites', {
            firmId: this.firmId,
            serviceIds: this.selectedServiceIds,
            date: date.format('YYYY-MM-DD'),
          });

          const disponibilites = res.data.disponibilites || [];

          disponibilites.forEach((entry) => {
            if (!this.employes.some((e) => e._id === entry.employe._id)) {
              this.employes.push(entry.employe);
            }
          });

          this.allDisponibilitesByDay.push({
            date: date.format('YYYY-MM-DD'),
            name: date.format('dddd'),
            disponibilites,
          });

          this.days.push({
            date: date.format('YYYY-MM-DD'),
            name: date.format('dddd'),
          });
        } catch (error) {
          console.error('Erreur lors de la récupération des disponibilités :', error);
        }
      }

      this.isLoading = false;
    },
  },
};
</script>