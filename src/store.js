import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      nav: [
        {
            title: 'Introduction',
            icon: 'person_pin',
            subTitle: ['About Me'],
            url: '/introduction'
        },
        {
            title: 'Portfolio',
            icon: 'view_list',
            subTitle: ['All Projects'],
            url: '/portfolio'
        },
       /*  {
            title: 'Contents',
            icon: 'dashboard',
            subTitle: ['To Do List', 'Drawing Board',],
            url: '/contents'
        }, */
        {
            title: 'Animations',
            icon: 'animation',
            subTitle: ['Wave Effect', 'Particle Effect', 'Mouse Effect', 'Image Effect'],
            url: '/animations'
        },
      ],
      buttons: {
        resume: '이력서 보기',
        contact: '연락하기',
      },
      modal: {
        title: '',
      },
      logo: {
        file: 'logo.png',
        alt: '박정은의 포트폴리오 사이트에 오신 걸 환영합니다.'
      },
      myProfile: {
        name: 'Jeongeun Park',
        email: 'qkdy01423@gmail.com',
        file: 'profile.jpg'
      },
      sns: [
        {
          cName: 'bi bi-github',
          title: 'github'
        },
        {
          cName: 'bi bi-instagram',
          title: 'instagram'
        },
      ],
      projects: [
        {
          title: '대한항공케이터링센터 NonERP UI 고도화 구축',
          period: '2021.12 ~ 2022.05',
          url: null,
          language: 'Html, Scss, Javascript, jQuery',
          role: ['UI디자인(100%)', '퍼블리싱(100%)'],
          etc: ['adobe XD 사용하여 UI디자인',
              '형상관리도구 SVN 사용하여 개발', 
              'Google Chart 라이브러리 사용하여 통계 수치 시각화',
              '자동화 빌드 시스템 Gulp 구축하여 퍼블리싱',
              'Babel을 사용하여 ES6작성 코드를 버전다운하여 배포',
              '사용자 인터렉션 위주의 구현(Javascript, jQuery)',
              '크로스브라우징'],
          id: 0,
          file: 'koreanair.jpg',
          name: '대한항공 케이터링센터',
          company: '(주)데이터사이언스연구소',
        },
        {
          title: '한솔PNS PMS UI 고도화 구축',
          period: '2022.03 ~ 2022.04',
          url: null,
          language: 'Html, Scss, Javascript, jQuery',
          role: ['퍼블리싱(100%)'],
          etc: ['자동화 빌드 시스템 Gulp 사용하여 퍼블리싱',
              'Babel을 사용하여 ES6작성 코드를 버전다운하여 배포',
              '사용자 인터렉션 위주의 구현(Javascript, jQuery, pqGrid)',
              '크로스브라우징'],
          id: 1,
          file: 'hansol.jpg',
          name: '한솔PNS',
          company: '(주)미래와기술',
        },
        {
          title: '청소년지원센터 꿈드림 반응형 홈페이지 리뉴얼',
          period: '2021.01 ~ 2021.04',
          url: 'https://www.kdream.or.kr:446/user/index.asp',
          language: 'Html, Css, Javascript, jQuery',
          role: ['UI디자인(100%)', '퍼블리싱(100%)'],
          etc: ['웹표준/웹접근성/크로스브라우징',
              '사용자 인터렉션 위주의 구현(Javascript, jQuery, Kakao maps API, Swiper)'],
          id: 2,
          file: 'kdream.jpg',
          name: '청소년지원센터 꿈드림',
          company: '비즈메이커(웹에이전시)',
        },
        {
          title: '독거노인종합지원센터 반응형 홈페이지 리뉴얼',
          period: '2020.10 ~ 2021.04',
          url: 'http://www.1661-2129.or.kr/main/index.do ',
          language: 'Html, Css, Javascript, jQuery',
          role: ['UI디자인(100%)', '퍼블리싱(60%)'],
          etc: ['웹표준/웹접근성/크로스브라우징',
              'eGov프레임워크에서 SVN사용하여 개발',
              '사용자 인터렉션 위주의 구현(Javascript, jQuery, Swiper)',
              '서비스(독거노인종합지원센터, 노인맞춤돌봄서비스 배움터) 및 관리자페이지 퍼블리싱'],
          id: 3,
          file: 'elderly.jpg',
          name: '독거노인종합지원센터',
          company: '비즈메이커(웹에이전시)',
        },
        {
          
          title: '필스테이지 반응형 홈페이지 구축',
          period: '2020.05 ~ 2021.02',
          url: 'http://feelstage.com/index.php',
          language: 'Html, Css, Javascript, jQuery',
          role: ['UI디자인(100%)', '퍼블리싱(100%)'],
          etc: ['웹표준/웹접근성/크로스브라우징',
              '사용자 인터렉션 위주의 구현(Javascript, jQuery, Swiper)',
              '서비스 및 관리자페이지 퍼블리싱',
              '유지보수',
              '다국어 홈페이지'],
          id: 4,
          file: 'feelstage.jpg',
          name: '필스테이지',
          company: '비즈메이커(웹에이전시)',
        },
        {
          title: '전국성폭력상담소협의회 내부 업무 시스템 구축',
          period: '2020.07 ~ 2020.11',
          url: null,
          language: 'Html, Css, Javascript, jQuery',
          role: ['UI디자인(100%)', '퍼블리싱(100%)'],
          etc: ['웹표준/웹접근성/크로스브라우징'],
          id: 5,
          file: 'kasvrc.jpg',
          name: '전국성폭력상담소협의회',
          company: '비즈메이커(웹에이전시)',
        },
        {
          title: '밀양시청소년수련관 홈페이지 구축',
          period: '2020.01 ~ 2020.02',
          url: 'http://www.miryouth.net/milyang/index.do',
          language: 'Html, Css, Javascript, jQuery',
          role: ['UI디자인(100%)', '퍼블리싱(100%)'],
          etc: ['웹표준/웹접근성/크로스브라우징',
              '사용자 인터렉션 위주의 구현(Javascript, jQuery, Kakao maps API, Swiper)'],
          id: 6,
          file: 'miryouth.jpg',
          name: '밀양시청소년수련관',
          company: '비즈메이커(웹에이전시)',
        },
        {
          title: '여수여성인력개발센터 pc/mobile 홈페이지 리뉴얼',
          period: '2019.11 ~ 2020.02',
          url: 'https://yswoman.or.kr/yeosu/index.do',
          language: 'Html, Css, Javascript, jQuery',
          role: ['UI디자인(100%)', '퍼블리싱(100%)'],
          etc: ['웹표준/웹접근성/크로스브라우징',
              '사용자 인터렉션 위주의 구현(Javascript, jQuery, Kakao maps API, BxSlider)'],
          id: 7,
          file: 'yswoman.jpg',
          name: '여수여성인력개발센터',
          company: '비즈메이커(웹에이전시)',
        },
        {
          title: '호치민한국교육원 홈페이지 구축',
          period: '2019.10~2019.11',
          url: 'http://www.klech.org',
          language: 'Html, Css, Javascript, jQuery',
          role: ['UI디자인(100%)', '퍼블리싱(100%)'],
          etc: ['웹표준/웹접근성/크로스브라우징',
              '사용자 인터렉션 위주의 구현(Javascript, jQuery, BxSlider)'],
          id: 8,
          file: 'klech.jpg',
          name: '호치민한국교육원',
          company: '비즈메이커(웹에이전시)',
        },
        {
          title: '광주시노인복지관 pc/mobile 홈페이지 리뉴얼',
          period: '2019.08~2019.09',
          url: 'http://www.gjswc.kr/gjnoin/index.do',
          language: 'Html, Css, Javascript, jQuery',
          role: ['UI디자인(100%)', '퍼블리싱(100%)'],
          etc: ['웹표준/웹접근성/크로스브라우징',
              '사용자 인터렉션 위주의 구현(Javascript, jQuery, BxSlider)'],
          id: 9,
          file: 'gjswc.jpg',
          name: '광주시노인복지관',
          company: '비즈메이커(웹에이전시)',
        }
      ],
      pageRoot: undefined,
      pageTitle: undefined,
      timeline: [
        {
          company: '(주)데이터사이언스연구소',
          position: '개발팀/책임(프리랜서)',
          period: '2021.12 ~ 2022.05',
          role: ['대한항공케이터링센터 NonERP UI 고도화 구축 프로젝트', 
                'UI디자인(adobeXD)', 
                '퍼블리싱(Html, Scss)', 
                '사용자 인터렉션 위주의 구현(Javascript, jQuery)'],
          id: 0,
        },
        {
          company: '(주)미래와기술',
          position: '개발팀/책임(프리랜서)',
          period: '2022.03 ~ 2022.04',
          role: ['한솔PNS PMS UI 고도화 구축 프로젝트', 
                '퍼블리싱(Html, Scss)', 
                '사용자 인터렉션 위주의 구현(Javascript, jQuery)'],
          id: 1,
        },
        {
          company: 'sbs아카데미컴퓨터아트학원',
          position: '교육부/강사',
          period: '2021.04 ~ 2021.12',
          role: ['웹퍼블리싱(Html, Css, Javascript, jQuery) 기초 및 포트폴리오 강의',
                'UI/UX디자인(AdobeXD, Zeplin) 강의'],
          id: 2,   
        },
        {
          company: '비즈메이커(웹에이전시)',
          position: '개발팀/대리',
          period: '2019.02 ~ 2021.04',
          role: ['프로젝트 신규개발 담당(Html/Css/javascript/jQuery/웹표준/웹접근성)', 
                '유지보수',
                '반응형 웹사이트제작'],
          id: 3,  
        },
      ],
      education: [
        {
          name: 'sbs아카데미컴퓨터아트학원 웹퍼블리싱과정 수료',
          period: '2018.10 ~ 2019.01'
        },
        {
          name: '동아대학교 목조형가구디자인학과',
          period: '2010.03 ~ 2015.02'
        },
      ],
      skills: [
        {
          name: 'Javascript',
          cName: 'js',
          description: `Javascript(ES5,ES6)와 jQuery를 활용하여 
                        사용자 인터랙션 위주의 개발 경험이 있으며
                        Front-End Framework 중 하나인 Vue.js를 공부하여 
                        기본 동작 원리를 이해하고 활용하여 본 포트폴리오를 제작하였습니다.`,
        },
        {
          name: 'Html5',
          cName: 'html',
          description: `Html5에서 권장하는 웹표준 마크업방식과 
                        시멘틱 태그를 이용해 전체 레이아웃을 설계합니다.
                        웹접근성 준수를 위해 키보드에 대한 적절한 대응과 
                        대체 텍스트를 제공하고자 노력합니다.`,
        },
        {
          name: 'Css3',
          cName: 'css',
          description: `Media Query를 활용하여 반응형 웹 제작 경험이 있으며
                        크로스브라우징을 위해 안정적인 속성을 사용하고
                        최신 트랜드에 맞추어 작성하고자 노력합니다.
                        또한 재활용성과 가독성을 보완할 수 있는 Scss전처리기를 사용합니다.`,
        }
      ],
      faq: [
        {
          question: '자신에 대해 자유롭게 표현해 주세요.',
          answer: `저는 4년차 웹퍼블리셔로 웹에이전시에서 웹 서비스 개발과 유지보수를 담당하였고, 
                  이후 프리랜서로 프로젝트에 참여하여 백오피스를 개발한 경험이 있습니다.
                  처음 일했던 웹에이전시에서는 주로 학교와 복지관 웹사이트 위주의 개발을 진행하여 
                  웹표준과 웹접근성을 준수하는 마크업해왔으며 반응형 웹 설계 및 크로스브라우징 경험이 있습니다.
                  그리고 디자인과 퍼블리싱 두가지 업무를 하였기에 
                  웹에 적합한 UI/UX에 대한 경험과 감각을 바탕으로 커뮤니케이션 할 수 있습니다.<br><br>

                  반복되는 일을 줄여 효율적으로 개발하는 일에 관심이 많습니다.
                  그래서 프리랜서로 참여한 대한항공케이터링센터와 한솔PNS에서의 UI고도화 프로젝트에서
                  자동화 빌드 시스템 Gulp와 Css의 단점인 재활용성과 가독성을 보완할 수 있는 
                  Scss를 사용하여 정해진 기한내 빠르게 작업하였습니다.<br><br>

                  더 나은 사용자 경험을 제공하고 나아가 비즈니스 성장에 기여하는 일을 하고 싶습니다.
                  이를 위해 Single Page Application, Web-App 개발 시 사용하는 Front-End Framework를 하나씩 공부해 나갈 계획이며
                  Front-End Framework 중 러닝 커브가 낮은 Vue.js를 공부하여 본 포트폴리오를 제작하였습니다.`,
        },
        {
          question: '기억에 남는 개발 프로젝트가 있다면 무엇인가요?',
          answer: `전 직장동료의 추천으로 프리랜서로 참여했던, 대한항공케이터링센터 프로젝트가 가장 기억에 남습니다.<br><br>

                  이 프로젝트에서는 6개월간 기내면세품 관리시스템(AFS:Advanced Flight Service & Catering System),
                  기내식 관리시스템(COS:Catering Operation System),
                  주요 기내면세품 실적 관리시스템(IFS:In-flight Sales Analysis System), 
                  이렇게 세가지의 백오피스 UI고도화를 진행하였는데 개발완료 후 
                  유지보수 담당자분께 인수인계할 때 담당자분께서는 Html,Css에 대해서는 잘 모르셔서, 
                  좀 더 유지보수를 고려한 코드를 작성했으면 좋았겠다는 아쉬움이 남았습니다.<br><br>

                  이를 계기로 Front-End Framework와 TypeScript의 필요성을 느끼게 되어, 
                  Vue.js를 공부하게 되었고 앞으로 하나씩 습득하여 더 나은 웹 서비스를 제공하고 싶습니다.`,
        },
        {
          question: '업무 역량을 강화하기 위한 본인의 학습 방법을 설명해주세요.',
          answer: `새로운 기술을 배워 토이 프로젝트를 만들거나 누군가에게 설명하는 방법이 좋다고 생각합니다.<br><br>

                  처음 일을 시작하였을 때, jQuery와 기초적인 Javascript만 사용했습니다. 
                  하지만 기술 트렌드가 바뀌면서 역량강화를 위해서 javascript(ES6), Vue.js에 대해서
                  강의를 들으며 예제를 따라 하지만 이렇게만 하면 이해가 안 되는 부분이 많습니다.
                  그래서 스터디를 만들어서 함께 공부하기도 하지만 미리 강의를 듣고 스터디 파트너가 
                  잘 모르는 부분이 있을 때 설명을 할 수 있도록 준비하기도 합니다.
                  그리고 최근에 배운 Vue.js를 좀 더 이해하기 위해 해당 포트폴리오를 만들어봤습니다.<br><br>

                  또 어려워 보이지 않는 스킬이면서 동시에 업무에 도움이 된다면, 다른 업무를 최대한 빠르게 진행하여 
                  시간적 여유를 만들어 놓은 후 생각하고 고민하고 찾아보기를 반복하며 적용하는 방향으로 학습하기도 합니다.`,
        },
      ],
    }
  },
  mutations: {
    updateCards(state, cards) {
      state.cards = cards;
    },
    getModalTitle(state, payload){
      state.modal = payload;
    },
  }
})

export default store