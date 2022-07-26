<template>
  <div class="title">
    <h4 class="fs-3 fw-bold">Faq</h4>
  </div>
  <div class="accordion accordion-flush" id="accordionFlushExample">
    <div class="accordion-item" v-for="(item,index) in faq" :key="index">
      <h2 class="accordion-header" :id="`flush-headingOne${index}`">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="`#flush-collapse${index}`" aria-expanded="false" :aria-controls="`flush-collapse${index}`">
          <span class="material-symbols-outlined">quiz</span>{{ item.question }}
        </button>
      </h2>
      <div :id="`flush-collapse${index}`" class="accordion-collapse collapse" :aria-labelledby="`flush-heading${index}`" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body" v-html="item.answer"></div>
      </div>
    </div>
  </div>
</template>
<script>
  //vuex
  import { mapState } from "vuex";

  export default {
    name: 'AppFaq',
    computed: {
      ...mapState({
        faq: 'faq',
      }),
    },
  }
</script>
<style lang="scss" scoped>

</style>