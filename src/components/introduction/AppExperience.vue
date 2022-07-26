<template>
  <div class="title">
    <h4 class="fs-3 fw-bold">Experience</h4>
  </div>
  <div class="round-box space-box">
    <AppExperienceElem :role="role" />
  </div>
</template>

<script>
  import AppExperienceElem from "./AppExperienceElem";

  export default {
    name: 'AppExperience',
    props: {
      role: Boolean
    },
    components: {
      AppExperienceElem,
    },
  }
</script>

<style lang="scss" scoped>

</style>