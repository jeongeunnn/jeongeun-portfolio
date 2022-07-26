<template>
  <div class="title">
      <h4 class="fs-3 fw-bold">Design Skills</h4>
  </div>
  <div class="round-box space-box">
    <AppDesignSkillChart/>
  </div>
</template>

<script>
  //chart.js
  import AppDesignSkillChart from './AppDesignSkillChart'

  export default {
    name: 'AppDesignSkill',
    components: {
      AppDesignSkillChart,
    },
  };
</script>

<style lang='scss' scoped>

</style>