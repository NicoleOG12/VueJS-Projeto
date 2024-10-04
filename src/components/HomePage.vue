<template>
    <swiper
      :slides-per-view="3"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      centeredSlides="true"
      navigation
      pagination
      loop
    >
      <swiper-slide v-for="(item, index) in items" :key="index">
        <img :src="item.image" alt="Movie Image" class="carousel-image" />
        <div class="carousel-caption">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </template>
   
  <script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
   
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const items = [
        {
          title: 'Spider-Man: Far from Home',
          description: 'Following the events of Avengers: Endgame...',
  image: 'https://link-para-a-imagem-do-spiderman.jpg'
        },
        {
          title: 'Justice League',
          description: 'Determined to ensure Superman\'s ultimate...',
  image: 'https://link-para-a-imagem-do-justice-league.jpg'
        },
        {
          title: 'Suicide Squad',
          description: 'A secret government agency recruits...',
  image: 'https://link-para-a-imagem-do-suicide-squad.jpg'
        },
      ];
   
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      
      const onSlideChange = () => {
        console.log('slide change');
      };
   
      return {
        items,
        onSwiper,
        onSlideChange,
      };
    },
  };
  </script>
   
  <style scoped>
  .carousel-image {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
   
  .carousel-caption {
    text-align: center;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-radius: 10px;
    margin-top: -60px;
  }
  </style>