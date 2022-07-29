<template>
  <div class="title">
      <h4 class="fs-3 fw-bold">Animations</h4>
  </div>
  <div class="round-box space-box">
    <div>
      <swiper ref="swiper"
        :breakpoints="swiperOptions.breakpoints"
        @swiper="onSwiper"
        @slideChange="onSlideChange">
        <swiper-slide
        v-for="(item, index) in animations" :key="index">
          <AppCard :animations="animations[index]" />
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
  import 'swiper/css/pagination';

  //components
  import AppCard from "../AppCard";

  export default {
    name: 'AppAnimations',
    data() {
      return {
        swiperOptions: { 
          breakpoints: {       
            320: {       
              slidesPerView: 1.5,  
              spaceBetween: 4  
            }, 
            720: {       
              slidesPerView: 2.5,
              spaceBetween: 4     
            },       
            960: {       
              slidesPerView: 2.5,
              spaceBetween: 4     
            },   
            1200: {       
              slidesPerView: 2.5,       
              spaceBetween: 12     
            },
            1400: {       
              slidesPerView: 3.5,       
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
        animations: 'animations',
        nav: 'nav',
      })
    },
  }
</script>

<style lang="scss" scoped>
  
</style>