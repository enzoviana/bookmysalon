<template>
    <div class="scrolling-wrapper" aria-label="Infinite scrolling text">
      <div class="scrolling-content" aria-hidden="true">
        <span v-for="(item, index) in items" :key="index" class="item">
          {{ item }}
          <span v-if="index < items.length - 1" class="separator">•</span>
        </span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'InfiniteScrollText',
    data() {
      return {
        items: [
          'Épilation',
          'Manucure & Pédicure',
          'Massage Relaxant',
          'Soins du Visage',
          'Maquillage Professionnel',
          'Soins Corps',
          'Soin des Ongles',
          'Epilation à la cire',
          'Massage aux huiles essentielles',
          'Soin Anti-Âge',
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
  
  body {
    font-family: 'Playfair Display', serif;
  }
  
  .scrolling-wrapper {
    background-color: #efe5db;
    padding: 20px;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    box-sizing: border-box;
    padding: 0.5rem 0;
  }
  
  .scrolling-content {
    padding: 10px;
    display: inline-block;
    color: #cd825b;
    font-size: 1.5rem; /* text-lg */
    animation: scroll-left 20s linear infinite;
  }
  
  .scrolling-content .item {
    display: inline-block;
    padding: 0 1rem;
  }
  
  .separator {
    padding: 0 0.5rem;
  }
  
  @keyframes scroll-left {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  </style>
  