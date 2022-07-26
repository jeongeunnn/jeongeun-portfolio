<template>
  <AppTop/>
  <h5 class="fs-3 fw-bold">{{ timeline[id].company }}</h5>
  <section class="subpage">
    <dl class="detail">
      <dt class="detail__title">Info</dt>
      <dd class="detail__contents">
        <dl>
            <dt>직책</dt>
            <dd>{{ timeline[id].position }}</dd>
          </dl>
          <dl>
            <dt>기간</dt>
            <dd>{{ timeline[id].period }}</dd>
          </dl>
          <dl>
            <dt>담당업무</dt>
            <dd>
              <ul>
                <li class="list-item" v-for="elem in timeline[id].role" :key="elem">{{ elem }}</li>
              </ul>
            </dd>
          </dl>
      </dd>
    </dl>
    <dl class="detail" v-if="id != 2">
      <dt class="detail__title">View</dt>
      <dd class="detail__contents">
        <ul class="project-list">
          <li class="project round-box specific-project"
          v-for="(item, index) in projects" :key="index">
            <AppCard v-if="showSpecificCard(item)" :projects="projects[index]" />
          </li>
        </ul>
      </dd>
    </dl>
  </section>
</template>

<script>
  import AppTop from "../../components/AppTop";
  import AppCard from "../../components/portfolio/AppCard";

  import { mapState } from "vuex";

  export default {
    name: 'AppIntroDetailPage',
    data(){
      return{
        id: Number(this.$route.params.id),
      }
    },
    components: {
      AppTop,
      AppCard
    },
    methods: {
      showSpecificCard(item){
        return item.company == this.timeline[this.id].company;
      }
    },
    computed: {
      ...mapState({
        timeline: 'timeline',
        projects: 'projects',
      })
    },
    mounted() {
      const elem = document.querySelectorAll('.specific-project');
      Array.prototype.forEach.call(elem,function (elems){
        const childElem = elems.childNodes;
        Array.prototype.forEach.call(childElem,function (childElems){
          childElems.className == 'project__box'? null : elems.remove();
        });
      });
    },
  }
</script>

<style lang="scss" scoped>

</style>