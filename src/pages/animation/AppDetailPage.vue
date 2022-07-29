<template>
  <button type="button" id="back" class="btn bi bi-arrow-left" @click="$router.go(-1)">
    Go back
    <svg class="back-svg" data-name="circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 111.57 47.31">
      <path class="back-svg-path" d="M1070.57-158.78s-60.24,56.7-107.24,13.76c-13.12-12,14.88-24,43.08-25.17,24.65-1,49.45,7,47.09,19.94-2,11.24-14.38,26.28-14.38,26.28" transform="translate(-959.5 170.78)"/>
    </svg>
  </button>

  <AppWaveEffect v-if="id == 0 && pageName == 'animation'"/>
  <AppParticleEffect v-if="id == 1 && pageName == 'animation'"/>
  <AppHoverEffect v-if="id == 2 && pageName == 'animation'"/>
  <AppImageEffect v-if="id == 3 && pageName == 'animation'"/>
  <AppToDo v-if="id == 0 && pageName == 'contents'"/>
  <AppDrawingBoard v-if="id == 1 && pageName == 'contents'"/>
</template>
<script>
  //animations
  import AppWaveEffect from '../../components/animations/AppWaveEffect';
  import AppParticleEffect from '../../components/animations/AppParticleEffect';
  import AppHoverEffect from '../../components/animations/AppHoverEffect';
  import AppImageEffect from '../../components/animations/AppImageEffect';
  
  export default {
    name: 'AppAniDetailPage',
    data(){
      return{
        id: Number(this.$route.params.id),
        pageName: this.$route.meta.name,
      }
    },
    components: {
      AppWaveEffect,
      AppParticleEffect,
      AppHoverEffect,
      AppImageEffect,
    },
  }
</script>
<style lang="scss" scoped>
  #back{
    position: fixed; top: $icon-size1; left: $icon-size1; z-index: 999;
    border: 0;
    color: $white;
  }
  .back-svg{
    width: 100%; height: 100%;
    position: absolute;top: 60%;left: 62%;
    transform: translate(-50%, -50%) scale(1.8);
    filter: opacity(0.5);
    &-path{
      stroke: {
        dasharray: 500;
        dashoffset:500;
        linecap:round;
        miterlimit:10;
      }
      fill:none;
      stroke:#fff;
      transition-duration: 1s;
    }
    &:hover{
      .back-svg-path{
        stroke-dashoffset:0;
      }
    } 
  }
</style>