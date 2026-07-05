<template>
  <div class="bg-white text-gray-800 font-roboto">
    <main
      class="flex flex-col md:flex-row justify-center items-center min-h-[80vh] max-h-screen p-4 md:p-6"
    >
      <!-- Bloc de texte -->
      <div class="text-center md:text-left max-w-xl">
        <h1
          class="title text-4xl sm:text-5xl md:text-[64px] lg:text-[94px] text-blue-900 leading-tight break-words"
        >
          <span class="wave">N</span>
          <span class="wave">a</span>
          <span class="wave">t</span>
          <span class="wave">u</span>
          <span class="wave">r</span>
          <span class="wave">e</span>
          <span class="wave">l</span>
          <span class="wave">&</span>
          <span class="wave">J</span>
          <span class="wave">o</span>
          <span class="wave">l</span>
          <span class="wave">i</span>
          <br />
          <span class="text-[#cd825b] wave">B</span>
          <span class="wave">e</span>
          <span class="wave">a</span>
          <span class="wave">u</span>
          <span class="wave">t</span>
          <span class="wave">é</span>
          <span class="wave"> </span>
          <br />
          <span class="wave">n</span>
          <span class="wave">a</span>
          <span class="wave">t</span>
          <span class="wave">u</span>
          <span class="wave">r</span>
          <span class="wave">e</span>
          <span class="wave">l</span>
          <span class="wave">l</span>
          <span class="wave">e</span>
        </h1>
        <p class="mt-4 text-gray-600 text-lg md:text-lg">
          Spécialisé en beauté naturelle : ongles, épilation, soins du visage
          et bien plus dans un cadre chaleureux et apaisant.
        </p>
      </div>

      <!-- Bloc image -->
      <div
        class="relative mt-8 md:mt-0 md:ml-12 flex justify-center items-center"
      >
        <!-- Image décorative gauche -->
        <img
          src="../assets/56_2-shape2-min.png"
          alt="Décor gauche"
          class="hidden md:block absolute -left-16 top-1/2 transform -translate-y-1/2 w-32 h-32 lg:w-64 lg:h-64 object-cover rounded-full z-0 opacity-0 animate-fadeIn"
        />

        <!-- Image décorative droite -->
        <img
          src="../assets/56_2-shape1-min.png"
          alt="Décor droite"
          class="hidden md:block absolute -right-16 top-1/2 transform -translate-y-1/2 w-32 h-32 lg:w-64 lg:h-64 object-cover rounded-full z-0 opacity-0 animate-fadeIn"
        />

        <!-- Image principale -->
        <img
          class="relative z-10 rounded-full w-32 h-44 sm:w-40 sm:h-56 md:w-[283px] md:h-[496px] object-cover opacity-0 animate-fadeIn"
          src="https://img.freepik.com/free-photo/cosmetologist-applying-mask-face-client-beauty-salon_1303-16776.jpg?ga=GA1.1.223045777.1725963888&semt=ais_hybrid&w=740"
          alt="Beauté naturelle"
        />
      </div>
    </main>
  </div>
</template>
  
  
  <script>
  export default {
    mounted() {
      const letters = document.querySelectorAll('.wave');
      letters.forEach((letter, index) => {
        letter.style.animationDelay = `${index * 0.1}s`;
      });
  
      const images = document.querySelectorAll('img');
      images.forEach((img, index) => {
        img.style.animationDelay = `${(index + 1) * 0.5}s`; // Délai d'apparition
        img.classList.remove('opacity-0'); // Enlève l'opacité initiale
      });
    }
  }
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Roboto:wght@400;500&display=swap');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');
  
  .font-roboto {
    font-family: 'Roboto', sans-serif;
  }
  .title {
    font-family: 'Playfair Display', serif;
  }
  .menu-toggle {
    transition: transform 0.3s ease-in-out;
  }
  .menu-toggle.open i {
    transform: rotate(90deg);
  }
  
  .wave {
    display: inline-block;
    opacity: 0;
    transform: translateY(20px);
    animation: wave 0.5s forwards;
  }
  
  @keyframes wave {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.5s forwards;
  }
  
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  </style>