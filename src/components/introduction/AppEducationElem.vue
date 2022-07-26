<template>
  <div class=" timeline">
    <dl class="detail" v-for="(item, index) in education" :key="index">
      <dt class="detail__title">
        {{ item.name }}
      </dt>
      <dd class="detail__contents">
          <dl>
            <dt>기간</dt>
            <dd>{{ item.period }}</dd>
          </dl>
      </dd>
    </dl>
  </div>
</template>

<script>
  //vuex
  import { mapState } from "vuex";

  export default {
    name: 'AppExperienceElem',
    computed: {
      ...mapState({
        education: 'education',
      }),
    }
  }
</script>

<style lang="scss" scoped>

</style>