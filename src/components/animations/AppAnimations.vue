<template>
  <div class="title">
      <h4 class="fs-3 fw-bold">Animations</h4>
  </div>
  <div class="round-box space-box"  style="overflow:hidden;">
    <div style="width:100%; height:100%;">
      <swiper
        :breakpoints="swiperOptions.breakpoints"
        @swiper="onSwiper"
        @slideChange="onSlideChange">
        <swiper-slide
        v-for="(item, index) in projects" :key="index">
          <AppCard :projects="projects[index]" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { mapState } from "vuex";

  // Import Swiper styles
  import 'swiper/css';

  //components
  import AppCard from "../portfolio/AppCard";

  export default {
    name: 'AppAnimations',
    data() {
      return {
        swiperOptions: {
          breakpoints: {       
            540: {       
              slidesPerView: 1.5,  
              spaceBetween: 4  
            }, 
            720: {       
              slidesPerView: 2.5,
              spaceBetween: 4     
            },       
            960: {       
              slidesPerView: 3.5,
              spaceBetween: 4     
            },   
            1200: {       
              slidesPerView: 3.5,       
              spaceBetween: 12     
            },
            1400: {       
              slidesPerView: 4.5,       
              spaceBetween: 12     
            }, 
          }
        }  
      } 
    },
    components: {
      Swiper,
      SwiperSlide,
      AppCard,
    },  
    computed: {
      ...mapState({
        projects: 'projects',
        nav: 'nav'
      })
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        //modules: [Navigation, Pagination, Scrollbar, A11y],
      };
    },
  }
</script>

<style lang="scss" scoped>

</style>