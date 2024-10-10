<template>
  <div class="page-container">
    <div class="swiper-container">
      <swiper
        :modules="modules"
        :slides-per-view="3"
        :space-between="-300"
        loop
        :pagination="{ clickable: true }"
        ref="mySwiper"
        class="my-swiper"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide
          v-for="(slide, index) in slides"
          :key="index"
          :class="['slide', { active: index === activeIndex }]"
        >
          <img :src="slide.image" alt="Slide Image" />
          <div class="caption">
            <h3>{{ slide.title }}</h3>
            <p>{{ slide.description }}</p>
          </div>
        </swiper-slide>
      </swiper>
      <button @click="prevSlide" class="nav-button prev-button">&#9664;</button>
      <button @click="nextSlide" class="nav-button next-button">&#9654;</button>
    </div>
  </div>
  
</template>

<script>
import { ref } from 'vue'; 
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default {
  components: {
    Swiper,
    SwiperSlide,
 
  },
  setup() {
    const slides = [
      {
        image: 'https://www.pingodoce.pt/wp-content/uploads/2022/03/bolo-de-maracuja-e-framboesa.jpg',
        title: 'Bolo de Maracujá com Framboesa',
        description: 'Uma bela vista da natureza que nos inspira.',
        borderradius: '30px',
      },
      {
        image: 'https://static.wixstatic.com/media/9ec495_abf8683a19354fe39ac3a1644a68f217~mv2_d_2658_1772_s_2.jpg/v1/fill/w_530,h_352,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Bolo%20Kit%20Kat%20Brigadeiro%20Morango.jpg',
        title: 'Bolo de Brigadeiro com Morango',
        description: 'A tecnologia moldando nosso futuro.',
      },
      {
        image: 'https://static.wixstatic.com/media/9ec495_c6407691a6814272a8fd8283ea4ebab3~mv2.jpeg/v1/fill/w_532,h_434,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202023-07-08%20at%2015_33_37.jpeg',
        title: 'Bolo de Limão',
        description: 'Explorando a beleza da vida selvagem.',
      },
      {
        image: 'https://img.freepik.com/fotos-premium/torta-de-morango-fresco-com-morangos-frescos_787273-5446.jpg',
        title: 'Bolo de Frutas Vermelhas',
        description: 'Um novo dia começa com novas esperanças.',
      },
      {
        image: 'https://static.wixstatic.com/media/9a6aa3_c4ac9d1ce3ad4fd385e54b21cdd88904~mv2.jpg/v1/fill/w_560,h_478,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/9a6aa3_c4ac9d1ce3ad4fd385e54b21cdd88904~mv2.jpg',
        title: 'Bolo de Blueberry com Framboesa',
        description: 'Aventura em meio à natureza.',
      },
    ];

    const activeIndex = ref(0);
    const swiperInstance = ref(null);

    const onSwiper = (swiper) => {
      swiperInstance.value = swiper;
    };

    const onSlideChange = (swiper) => {
      activeIndex.value = swiper.realIndex;
    };

    const nextSlide = () => {
      if (swiperInstance.value) {
        swiperInstance.value.slideNext();
        activeIndex.value = (activeIndex.value + 1) % slides.length;
      }
    };

    const prevSlide = () => {
      if (swiperInstance.value) {
        swiperInstance.value.slidePrev();
        activeIndex.value = (activeIndex.value - 1 + slides.length) % slides.length;
      }
    };

    const modules = [Navigation, Pagination];

    return {
      slides,
      activeIndex,
      onSwiper,
      onSlideChange,
      modules,
      swiperInstance,
      nextSlide,
      prevSlide,
    };
  },
};
</script>

<style>
body {
  background-color: rgb(240, 201, 226);
}
.page-container {
  margin: 70px; 
}

.swiper-container {
  position: relative;
}

.my-swiper {
  width: 100%;
  height: 450px;
}

.slide {
  transition: transform 0.3s ease, opacity 0.3s ease;
  backface-visibility: hidden;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide img {
  width: 200%;
  height: 90%;
  border-radius: 30px;

}

.caption {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  text-align: left;
  padding: 10px;
  border-radius: 5px;
}

.caption h3 {
  margin: 0;
  font-size: 1.5em;
}

.caption p {
  margin: 5px 0 0;
  font-size: 1em;
}

.active {
  transform: scale(1); 
  z-index: 20; 
}

.slide:not(.active) {
  transform: scale(0.6); 
  z-index: 10; 
  opacity: 0.5; 
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px; 
  cursor: pointer;
  z-index: 20;
  font-size: 20px; 
}

.prev-button {
  left: 10px;
}

.next-button {
  right: 10px;
}
</style>
