<template>
  <router-link class="project__box round-box project" :to="`/portfolio/detail/${projects.id}`" :title="`${projects.name} 바로가기`">
    <img :src="require(`@/assets/images/${projects.file}`)" :alt="projects.name"/>
    <div class="project__text">
        <b>{{ projects.name }}</b>
        <p>{{ projects.period }}</p>
    </div>
  </router-link>
</template>





<script>

  export default {
    name: 'AppCard',
    props: {
      projects: Object
    },
  }
</script>

<style lang="scss" scoped>

</style>