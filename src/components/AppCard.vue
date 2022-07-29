<template>
  <router-link 
    class="project__box round-box project" 
    :class="{ 'ani': animations !== false }"
    :to="handlePageId()" 
    :title="`${handleName()} 바로가기`"
  >
    <img :src="require(`@/assets/images/${handleFileName()}`)" :alt="handleName()"/>
    <div class="project__text">
        <b>{{ handleName() }}</b>
        <p v-if="projects !== false">{{ projects.period }}</p>
    </div>
  </router-link>
</template>





<script>

  export default {
    name: 'AppCard',
    props: {
      projects: {
        default: false,
      },
      animations: {
        default: false,
      },
    },
    methods: {
      handleName(){
        if(this.projects !== false){
          return this.projects.name;
        }else if(this.animations !== false){
          return this.animations.name;
        }
      },
      handleFileName(){
        if(this.projects !== false){
          return this.projects.file;
        }else if(this.animations !== false){
          return this.animations.file;
        }
      },
      handlePageId(){
        if(this.projects !== false){
          return `/portfolio/detail/${this.projects.id}`;
        }else if(this.animations !== false){
          return `/animations/${this.animations.id}`;
        }
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>