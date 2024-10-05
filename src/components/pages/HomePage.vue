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
        image: 'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg',
        title: 'Natureza Exuberante',
        description: 'Uma bela vista da natureza que nos inspira.',
      },
      {
        image: 'https://services.meteored.com/img/article/inteligencia-artificial-aprende-a-reconstruir-imagens-vistas-por-pessoas-ciencia-fotos-1679175318563_1024.jpg',
        title: 'Inovação Tecnológica',
        description: 'A tecnologia moldando nosso futuro.',
      },
      {
        image: 'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg',
        title: 'Vida Selvagem',
        description: 'Explorando a beleza da vida selvagem.',
      },
      {
        image: 'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg',
        title: 'Amanhecer',
        description: 'Um novo dia começa com novas esperanças.',
      },
      {
        image: 'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg',
        title: 'Aventura',
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
  margin: 70px; /* Ajuste o valor conforme necessário */
}

.menu {
  margin-bottom: 20px; /* Espaçamento entre o menu e o swiper */
}

.menu nav ul {
  list-style-type: none;
  padding: 0;
}

.menu nav ul li {
  display: inline;
  margin-right: 15px; /* Espaçamento entre os itens do menu */
}

.menu nav ul li a {
  text-decoration: none;
  color: #000; /* Cor do texto */
}

.swiper-container {
  position: relative;
}

.my-swiper {
  width: 100%;
  height: 300px;
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
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  transform: scale(1); /* Aumenta a imagem ativa */
  z-index: 20; /* Traz o slide ativo para frente */
}

.slide:not(.active) {
  transform: scale(0.6); /* Diminui os outros slides */
  z-index: 10; /* Coloca os outros slides atrás */
  opacity: 0.5; /* Mantém a opacidade reduzida */
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  border-radius: 50%; /* Botões circulares */
  width: 40px; /* Tamanho dos botões */
  height: 40px; /* Tamanho dos botões */
  cursor: pointer;
  z-index: 20;
  font-size: 20px; /* Tamanho das setas */
}

.prev-button {
  left: 10px;
}

.next-button {
  right: 10px;
}
</style>
