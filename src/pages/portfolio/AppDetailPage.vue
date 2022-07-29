<template>
  <AppTop/>
  <h5 class="fs-3 fw-bold">{{ projects[id].name }}</h5>
  <section class="subpage">
    <dl class="detail">
      <dt class="detail__title">Info</dt>
      <dd class="detail__contents">
        <dl>
          <dt>프로젝트명</dt>
          <dd>{{ projects[id].title }}</dd>
        </dl>
        <dl>
          <dt>개발 기간</dt>
          <dd>{{ projects[id].period }}</dd>
        </dl>
        <dl>
          <dt>URL</dt>
          <dd>
            <a id="url" :href="projects[id].url" target="_blank" :title="`${projects[id].name} 바로가기`">
              {{ projects[id].url }}
            </a>
          </dd>
        </dl>
        <dl>
          <dt>개발 언어</dt>
          <dd>{{ projects[id].language }}</dd>
        </dl>
        <dl>
          <dt>담당업무</dt>
          <dd>
            <ul>
              <li class="list-item" v-for="item in projects[id].role" :key="item">{{ item }}</li>
            </ul>
          </dd>
        </dl>
        <dl>
          <dt>기타사항</dt>
          <dd>
            <ul>
              <li class="list-item" v-for="item in projects[id].etc" :key="item">{{ item }}</li>
            </ul>
          </dd>
        </dl>
      </dd>
    </dl>
    <dl class="detail" v-if="projects[id].url != null">
      <dt class="detail__title">View</dt>
      <dd class="detail__contents">
        <iframe class="detail__view" :src="projects[id].url" frameborder="0"></iframe>
      </dd>
    </dl>
  </section>
</template>

<script>
  import AppTop from "../../components/AppTop";
  
  import { mapState } from "vuex";

  export default {
    name: 'ProjectDetailePage',
    data(){
      return{
        id: Number(this.$route.params.id),
      }
    },
    components: {
      AppTop
    },
    computed: {
      ...mapState({
        projects: 'projects',
      })
    },
    mounted() {
      const url = document.querySelector('#url');
      const urlName = this.projects[this.id].url;
      const newUrl = this.projects[this.id].url == null ? '보안상의 이유로 URL 공개 불가' : urlName;

      url.innerHTML = newUrl;
    },
  }
</script>

<style lang="scss" scoped>

</style>