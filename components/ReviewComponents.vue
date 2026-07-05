<template>
    <div class="bg-white text-[#2c2f5a]">
      <main class="max-w-5xl mx-auto px-6 py-16 flex flex-col items-center">
        <div
          aria-label="Photo de profil initiales"
          class="w-28 h-28 rounded-full flex items-center justify-center mb-10 text-white text-5xl font-semibold select-none"
          :style="{ backgroundColor: currentTestimonial.color }"
          role="img"
        >
          {{ currentTestimonial.initials }}
        </div>
        <section class="flex flex-col sm:flex-row items-center justify-between w-full max-w-4xl">
          <button
            aria-label="Témoignage précédent"
            class="flex justify-center items-center w-14 h-14 border border-[#d1dbe3] text-[#2c2f5a] text-xl mb-6 sm:mb-0"
            @click="prevTestimonial"
          >
            <i class="fas fa-arrow-left"></i>
          </button>
          <p class="flex-1 mx-0 sm:mx-8 text-center text-base sm:text-lg leading-relaxed font-normal max-w-xl">
            {{ currentTestimonial.text }}
          </p>
          <button
            aria-label="Témoignage suivant"
            class="flex justify-center items-center w-14 h-14 border border-[#d1dbe3] text-[#2c2f5a] text-xl mt-6 sm:mt-0"
            @click="nextTestimonial"
          >
            <i class="fas fa-arrow-right"></i>
          </button>
        </section>
        <div class="mt-8 flex flex-col items-center px-4 text-center max-w-xs">
          <i class="fas fa-quote-right text-[28px] text-[#4a6a5a] mb-4"></i>
          <p class="text-[#2c2f5a] text-xl font-semibold">{{ currentTestimonial.author }}</p>
        </div>
        <nav class="mt-12 flex space-x-4">
          <button
            v-for="(dot, index) in dots"
            :key="index"
            aria-label="'Témoignage ' + (index + 1)"
            :class="{
              'w-4 h-4 rounded-full bg-[#9b1c0e] border border-[#9b1c0e]': currentIndex === index,
              'w-4 h-4 rounded-full border border-[#d1dbe3] bg-white': currentIndex !== index
            }"
            @click="setTestimonial(index)"
          ></button>
        </nav>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        testimonials: [
          {
            initials: "MD",
            color: "#9b1c0e",
            text: "Epilation à la cire vraiment top ! Je recommande vivement ! Vanessa est très douce et soucieuse du bien-être de ses clientes. Ça fait du bien de voir des esthéticiennes comme elle ! Allez y les yeux fermés !",
            author: "Mu Do",
            location: "2 reviews · il y a un an",
          },
          {
            initials: "ED",
            color: "#2c2f5a",
            text: "Vanessa est géniale. Vous pouvez y aller les yeux fermés. Talentueuse, pro, sympa, de bons conseils pour prendre soin de nous... elle fait du super boulot vraiment !",
            author: "Eugénie D",
            location: "Local Guide · 39 reviews · il y a un an",
          },
          {
            initials: "LN",
            color: "#4a6a5a",
            text: "Je recommande vivement ! Une cire très agréable ! Vanessa est très douce et à l’écoute. Moi qui suis douillette, je n’ai pas eu mal. Le plus : la table chauffante, ça fait du bien. A bientôt",
            author: "Lea Nibert",
            location: "7 reviews · il y a 2 ans",
          },
        ],
        currentIndex: 0,
      };
    },
    computed: {
      currentTestimonial() {
        return this.testimonials[this.currentIndex];
      },
      dots() {
        return new Array(this.testimonials.length).fill(null);
      },
    },
    methods: {
      prevTestimonial() {
        this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
      },
      nextTestimonial() {
        this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
      },
      setTestimonial(index) {
        this.currentIndex = index;
      },
    },
  };
  </script>
  
  <style scoped>
  body {
    font-family: "Playfair Display", serif;
  }
  </style>
  