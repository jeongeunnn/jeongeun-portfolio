<template>
  <nav class="accordion">
    <div class="accordion-item" v-for="(item,index) in nav" :key="index">
      <h2 class="accordion-header" :id="`panelsStayOpen-heading${index}`">
        <button 
          @click="handleLayer($event)"
          class="accordion-button" 
          type="button" 
          data-bs-toggle="collapse" 
          :data-bs-target="`#panelsStayOpen-collapse${index}`" 
          aria-expanded="true" 
          :aria-controls="`panelsStayOpen-collapse${index}`"
        >
          <span class="material-symbols-outlined">{{ item.icon }}</span>{{ item.title }}
        </button>
      </h2>
      <div 
        :id="`panelsStayOpen-collapse${index}`" 
        class="accordion-collapse show" 
        :aria-labelledby="`panelsStayOpen-heading${index}`"
      >
        <div class="accordion-body">
          <router-link class="list-item" 
            :to="setUrl(item.url, counter, item.subTitle.length)" 
            v-for="(list, counter) in item.subTitle" :key="counter"
            @click="isDevice === 'mobile' ? $store.commit('handleNav') : null"
          >
            {{ list }}
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  //vuex mapMutations
  import { mapState } from "vuex";

  export default {
    name: 'AppNavgation', 
    data() {
      return {
        isDevice: ''
      }
    },
    props: {
      hideSideBar: Boolean,
    },
    computed: {
      ...mapState({
        nav: 'nav',
      }),
    },
    created() {
      this.checkSize();
      window.addEventListener("resize", this.checkSize);
    },
    unmounted() {
      window.removeEventListener("resize", this.checkSize);
    },
    methods: {
      checkSize(){
        const ww = document.body.clientWidth;
        if(ww < 768){
          this.isDevice = 'mobile';
        }
      },
      setUrl(url, counter, numberOfSubTitle){
        const pathOfElem = `${url}/${counter}`;
        return numberOfSubTitle > 1 ? pathOfElem : url
      },
      handleLayer(item){
        if(this.hideSideBar === true){
          item.delegateTarget.parentNode.nextElementSibling.classList.remove('collapse');
          document.body.classList.remove('sideBar-hide');
          document.body.classList.add('offCanvas');
          this.$emit('newTitle');
        }
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>