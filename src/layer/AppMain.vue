<template>
  <section class="mainpage">
      <article class="section1__left">
        <AppIntro/>
      </article>
      <article class="section1__right">
        <AppProfile/>
      </article>
      <article class="section2__left">
        <AppExperience :role="role"/>
      </article>
      <div class="section2__right">
        <article class="top">
          <AppCodingSkill/>
        </article>
        <article class="middle">
          <AppProject/>
        </article>
        <article class="bottom">
          <AppAnimations/>
        </article>
      </div>
  </section>
  
</template>

<script>
  /* components */
  //introduction
  import AppIntro from "../components/introduction/AppIntro";
  import AppProfile from "../components/introduction/AppProfile";
  //import AppMbti from "../components/introduction/AppMbti";
  import AppCodingSkill from "../components/introduction/AppCodingSkill";
  import AppExperience from "../components/introduction/AppExperience";
  //portfolio
  import AppProject from "../components/portfolio/AppProject";

  //import AppContents from "../components/contents/AppContents";
  //animations
  import AppAnimations from "../components/animations/AppAnimations";
  
  export default {
    name: 'AppMain',
    data() {
      return {
        role: false
      }
    },
    components: {
      AppProfile,
      AppIntro,
      AppProject,
      //AppMbti,
      AppCodingSkill,
      AppExperience,
      //AppContents,
      AppAnimations,
    },
  }
</script>

<style lang="scss" scoped>
</style>