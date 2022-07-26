<template>
  <button type="button" id="back" @click="$router.go(-1)">뒤로가기</button>
  <AppWaveEffect v-if="id == 0 && pageName == 'animation'"/>
  <AppParticleEffect v-if="id == 1 && pageName == 'animation'"/>
  <AppGsapEffect v-if="id == 2 && pageName == 'animation'"/>
  <AppWebglEffect v-if="id == 3 && pageName == 'animation'"/>
  <AppToDo v-if="id == 0 && pageName == 'contents'"/>
  <AppDrawingBoard v-if="id == 1 && pageName == 'contents'"/>
</template>
<script>
  //animations
  import AppWaveEffect from '../../components/animations/AppWaveEffect';
  import AppParticleEffect from '../../components/animations/AppParticleEffect';
  import AppGsapEffect from '../../components/animations/AppGsapEffect';
  import AppWebglEffect from '../../components/animations/AppWebglEffect';

  //contents
  import AppToDo from '../../components/contents/AppToDo';
  import AppDrawingBoard from '../../components/contents/AppDrawingBoard';

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
      AppGsapEffect,
      AppWebglEffect,
      AppToDo,
      AppDrawingBoard,
    },
    methods: {
      checkPage(){

      }
    },
  }
</script>
<style lang="scss" scoped>
  #back{
    position: fixed; top: 10px; left: 10px; z-index: 999;
  }
</style>