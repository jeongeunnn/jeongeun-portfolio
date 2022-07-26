<template>
  <div class="round-box">
    <AppSvg/>
    <h3 class="fs-3">This is<br>A <b class="fw-bold">Web Publisher's Portfolio</b></h3>
    <p>
      안녕하세요:) 매일매일 성장하는 4년차 웹퍼블리셔 박정은입니다.<br>
      사용자 중심적인 웹사이트 구현을 위해 꾸준히 공부하며 경력을 쌓아 왔습니다. 
    </p>
    <router-link :to="nav[0].url" class="btn btn--primary">자세히 보기</router-link>
  </div>
</template>

<script>
  import AppSvg from "./AppSvg";

  import { mapState } from "vuex";

  export default {
      name: 'AppIntro',
      components: {
        AppSvg
      },
      computed: {
        ...mapState({
          buttons: 'buttons',
          nav: 'nav'
        })
      }
  }
</script>

<style lang="scss" scoped>

</style>