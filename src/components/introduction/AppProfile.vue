<template>
  <div class="round-box">
    <div class="profile"><img :src="require(`@/assets/images/${myProfile.file}`)" alt=""></div>
    <p class="">
      <b class="fs-5 fw-bold">{{ myProfile.name }}</b>
      <span>{{ myProfile.email }}</span>
    </p>
    <a href="javascript:void(0);" 
      @click="$store.commit('getModalTitle',`${buttons.contact}`)" class="underline-text"
      data-bs-toggle="modal" data-bs-target="#exampleModal"
    >Contact me</a>
  </div>
</template>
<script>
  import { mapState, mapMutations } from "vuex";

  export default {
    name: 'AppProfile',
    computed: {
      ...mapState({
        profile: 'profile',
        myProfile: 'myProfile',
        buttons: 'buttons',
      }),
    },
    methods: {
      ...mapMutations(['getModalTitle']),
    },  
  }
</script>
<style lang="scss" scoped>
    
</style>