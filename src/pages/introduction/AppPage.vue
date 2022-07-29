<template>
  <AppTop/>
  <h5 class="fs-3 fw-bold">{{ nav[0].subTitle[0] }}</h5>
  <section class="subpage">
    <article class="typing-box">
      <h6 class="typing-box__text">
        <span class="typed-text"></span>
        <span class="blinking-cursor">|</span>
      </h6>
      <h6 class="typing-box__text hide">
        <span>안녕하세요:)<br>매일매일 성장하는<br>4년차 웹퍼블리셔 박정은입니다.</span>
        <span class="blinking-cursor">|</span>
      </h6>
    </article>
    <div class="nav nav-tabs" id="nav-tab" role="tablist">
      <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Skills</button>
      <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Timeline</button>
      <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Who I am</button>
    </div>
    <article class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
        <ul class="row g-4 tab-content__item text-center">
          <li class="col-lg-4" v-for="item in skills" :key="item">
            <strong :class="`${item.cName} skill-title`">{{ item.name }}</strong>
            <p class="skill-description">{{ item.description }}</p>
          </li>
        </ul>
        <ul class="tab-content__item">
          <li class="circle-items">모듈 번들러(Webpack), Task Runner(Gulp)를 사용한 경험이 있습니다.</li>
          <li class="circle-items">사용자 중심의 UI/UX에 대한 관심이 있습니다.</li>
        </ul>
        <div class="tab-content__item row g-4">
          <ul class="col-xl-6">
            <li class="chart"><AppCodingSkill/></li>
          </ul>
          <ul class="col-xl-6">
            <li class="chart"><AppDesignSkill/></li>
          </ul>
        </div>
      </div>
      <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
        <ul class="tab-content__item">
          <li class="circle-items">
            기획자, 디자이너, 개발자 등 다양한 실무진들과의 다양한 협업 경험이 있습니다.
          </li>
          <li class="circle-items">
            책임감 있고 능동적으로 업무를 처리해왔습니다.  
          </li>
        </ul>
        <div class="tab-content__item row g-4">
          <ul class="col-lg-6">
            <li><AppEducation/></li>
          </ul>
          <ul class="col-lg-6">
            <li><AppExperience :role="role"/></li>
          </ul>
        </div>
      </div>
      <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
        <ul class="tab-content__item">
          <li class="circle-items">책임감이 강합니다.</li>
          <li class="circle-items">계획적이고 꼼꼼합니다.</li>
          <li class="circle-items">성실한 ISTJ입니다!</li>
        </ul>
        <div class="tab-content__item row g-4">
          <ul class="col-xl-6">
            <li class="faq"><AppFaq/></li>
          </ul>
          <ul class="col-xl-6">
            <li class="chart"><AppMbti/></li>
          </ul>
        </div>
      </div>
    </article>
  </section>
</template>

<script>

  import AppTop from "../../components/AppTop";
  import AppDesignSkill from "../../components/introduction/AppDesignSkill";
  import AppCodingSkill from "../../components/introduction/AppCodingSkill";
  import AppMbti from "../../components/introduction/AppMbti";
  import AppFaq from "../../components/introduction/AppFaq";
  import AppExperience from "../../components/introduction/AppExperience";
  import AppEducation from "../../components/introduction/AppEducation";

  import { mapState } from "vuex";

  export default {
    name: 'IntroPage',  
    data() {
      return {
        role: true,
        displayTextArray: ['안녕하세요:)', '매일매일 성장하는', '4년차 웹퍼블리셔 박정은입니다.'],
        typingSpeed: 100,
        charIndex: 0,
        textArrayIndex: 0,
      }
    },
    components: {
      AppTop,
      AppDesignSkill,
      AppCodingSkill,
      AppMbti,
      AppFaq,
      AppExperience,
      AppEducation,
    },
    computed: {
      ...mapState({
        nav: 'nav',
        skills: 'skills'
      })
    },
    methods: {
      typeText(){
        const typedText = document.querySelector('.typed-text');
        if(typedText != null){
          const typingText = this.displayTextArray[this.textArrayIndex].charAt(this.charIndex);
          if(this.charIndex < this.displayTextArray[this.textArrayIndex].length && this.textArrayIndex <= this.displayTextArray.length-1){
            typedText.innerHTML += typingText;
            this.charIndex += 1;
            setTimeout(this.typeText, this.typingSpeed);
          }
          if(this.charIndex == this.displayTextArray[this.textArrayIndex].length && this.textArrayIndex != this.displayTextArray.length-1){
            typedText.innerHTML += '<br>';
            this.textArrayIndex += 1;
            this.charIndex = 0;
          }
        }
      }
    },
    mounted() {
      document.querySelector('.typed-text').innerHTML = '';
      setTimeout(this.typeText);
    },
  }
</script>

<style lang="scss" scoped>
  
</style>