<template>
  <div class="title">
    <h4 class="fs-3 fw-bold">Education</h4>
  </div>
  <div class="round-box space-box">
    <AppEducationElem />
  </div>
</template>

<script>
  import AppEducationElem from "./AppEducationElem";

  export default {
    name: 'AppExperience',
    props: {
      role: Boolean
    },
    components: {
      AppEducationElem,
    },
  }
</script>

<style lang="scss" scoped>

</style>