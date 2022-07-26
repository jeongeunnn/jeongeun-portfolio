<template>
  <div class="title">
      <h4 class="fs-3 fw-bold">Coding Skills</h4>
  </div>
  <div class="round-box space-box">
    <AppCodingSkillChart/>
  </div>
</template>

<script>
  //chart.js
  import AppCodingSkillChart from './AppCodingSkillChart'

  export default {
    name: 'AppCodingSkill',
    components: {
      AppCodingSkillChart,
    },
  };
</script>

<style lang='scss' scoped>

</style>