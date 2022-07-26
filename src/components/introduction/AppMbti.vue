<template>
  <div class="title">
      <h4 class="fs-3 fw-bold">MBTI</h4>
  </div>
  <div class="round-box space-box">
    <AppMbtiChart/>
  </div>
</template>

<script>
  import AppMbtiChart from './AppMbtiChart';

  export default {
    name: 'AppMbti',
    components: {
      AppMbtiChart,
    },
  };
</script>

<style lang="scss" scoped>

</style>