<template>
  <AppTop/>
  <h5 class="fs-3 fw-bold">{{ timeline[id].company }}</h5>
  <section class="subpage">
    <dl class="detail">
      <dt class="detail__title">Info</dt>
      <dd class="detail__contents">
        <dl>
          <dt>주소</dt>
          <dd>{{ timeline[id].address }}</dd>
        </dl>
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
        <ul class="project-list row g-4">
          <li 
            :class="item.company != this.timeline[this.id].company ? `specific-project ${cName}` : cName"
            v-for="(item, index) in projects" :key="index"
          >
            <AppCard :projects="projects[index]" />
          </li>
        </ul>
      </dd>
    </dl>
  </section>
</template>

<script>
  import AppTop from "../../components/AppTop";
  import AppCard from "../../components/AppCard";

  import { mapState } from "vuex";

  export default {
    name: 'AppIntroDetailPage',
    data(){
      return{
        id: Number(this.$route.params.id),
        cName: '',
      }
    },
    components: {
      AppTop,
      AppCard
    },
    created() {
      this.checkSize();
      window.addEventListener("resize", this.checkSize);
    },
    unmounted() {
      window.removeEventListener("resize", this.checkSize);
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
        elems.remove();
      });
    },
    methods: {
      checkSize(){
        const ww = document.body.clientWidth;
        if(ww >= 1400){
          this.cName = 'col-xxl-2';
        }else if(ww < 1400 && ww >= 1200){
          this.cName = 'col-xl-3';
        }else if(ww < 1200 && ww >= 992){
          this.cName = 'col-lg-4';
        }else if(ww < 992 && ww >= 768){
          this.cName = 'col-md-6';
        }
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>