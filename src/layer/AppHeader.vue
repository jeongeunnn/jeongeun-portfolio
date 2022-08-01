<template>
  <header class="header">
    <h2 :class="`fs-4 ${logoClassName}`">
      <span v-if="isWideDevice === true">Welcome Here!</span>
      <router-link v-if="isMobile === true"  to="/" title="Home">
        <img :src="require(`@/assets/images/${logoSrc}`)" :alt="logoAlt">
      </router-link>
    </h2>
    <div class="header__btn">
      <a 
        href="./UI개발자(웹퍼블리셔)-박정은.pdf" 
        target="_blank"
        class="resume btn btn--dark-grey btn-sm bi bi-file-earmark-text"
      >
        {{ buttons.resume }}
      </a>
      <button 
        @click="$store.commit('getModalTitle',`${buttons.contact}`)" 
        type="button" 
        class="btn btn--light-grey btn-sm bi bi-envelope-paper" 
        data-bs-toggle="modal" 
        data-bs-target="#exampleModal"
      >
        {{ buttons.contact }}
      </button>
    </div>
    <button 
      v-if="isMobile === true" 
      type="button" 
      ref="hamberger"
      class="btn hamberger"
      :class="{ 'close': isNav == true }"
      @click="$store.commit('handleNav')"
    >
      <span></span>
    </button>
  </header>
</template>

<script>
  import { mapState, mapMutations } from "vuex";

  export default {
    name: 'AppHeader',
    data() {
      return {
        isMobile: null,
        isWideDevice: null,
        resume: 'UI개발자(웹퍼블리셔)-박정은.pdf',
        logoClassName: '',
        hambergerClassName: 'close',
      }
    },
    computed: {
      ...mapState({
        buttons: 'buttons',
        logoSrc: state => state.logo.file,
        logoAlt: state => state.logo.alt,
        isNav: 'isNav',
      })
    },
    created() {
      this.resize();
      window.addEventListener("resize", this.resize);
    },
    unmounted() {
      window.removeEventListener("resize", this.resize);
    },
    methods: {
      showElem(ww){
        if(ww < 768){
          this.isMobile = true;
          this.isWideDevice = false;
          this.logoClassName = 'm-logo';
        }else{
          this.isWideDevice = true;
          this.isMobile = false;
          this.logoClassName = '';
        }
      },
      resize(){
        const ww = document.body.clientWidth;
        this.showElem(ww);
      },
      ...mapMutations({
        getModalTitle: 'getModalTitle',
      }),
    },
  }
</script>

<style lang="scss" scoped>

</style>