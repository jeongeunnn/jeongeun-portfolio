<template>
    <div class="breadcrumb"></div>
</template>

<script>
  export default {
    name: 'AppTop',
    mounted() {
      const route = this.$route;
      const pageRoot = route.matched[0].name;
      const pageTitle = route.matched[1].name;
      const subheader = document.querySelector('.breadcrumb');
      let htmlUl = '';
            htmlUl += '<p class="material-symbols-outlined breadcrumb__home">home</p>'
            htmlUl += '<ul class="breadcrumb__items">'
            if(pageRoot != undefined){htmlUl += `<li>${pageRoot}</li>`}
            if(pageTitle != undefined){htmlUl += `<li>${pageTitle}</li>`}
            htmlUl += '</ul>'

      subheader.innerHTML = htmlUl;
      
    }
  }
</script>

<style lang="scss" scoped>

</style>