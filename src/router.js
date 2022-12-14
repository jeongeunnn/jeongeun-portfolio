import { createWebHashHistory, createRouter } from "vue-router";

import AppMain from './layer/AppMain.vue';
import AppPage from './layer/AppPage.vue';

//introduction
import AppIntroPage from './pages/introduction/AppPage.vue';
import AppIntroDetailPage from './pages/introduction/AppDetailPage.vue';
//portfolio
import AppProjectPage from './pages/portfolio/AppPage.vue';
import AppProjectDetailPage from './pages/portfolio/AppDetailPage.vue';
//contents animations
import AppAniContentsPage from './pages/animation/AppPage.vue';
import AppAniContentsDetailPage from './pages/animation/AppDetailPage.vue';




const routes = [
  {
    name: 'main',
    path: '/',
    component: AppMain,
    meta: {
      hideSpecificElem: true,
    }
  },
  {
    name: 'Portfolio',
    path: '/portfolio',
    component: AppPage,
    meta: {
      hideSpecificElem: true,
    },
    children: [
      {
        name:'All Projects',
        path: '',
        component: AppProjectPage,
        meta: {
          hideSpecificElem: true,
        }
      },
      {
        name: 'Portfolio Detail',
        path: 'detail/:id',
        component: AppProjectDetailPage,
        meta: {
          hideSpecificElem: true,
        }
      },
    ]
  },
  {
    name: 'Introduction',
    path: '/introduction',
    component: AppPage,
    meta: {
      hideSpecificElem: true,
    },
    children: [
      {
        name:'About me',
        path: '',
        component: AppIntroPage,
        meta: {
          hideSpecificElem: true,
        }
      },
      {
        name: 'Introduction Detail',
        path: 'detail/:id',
        component: AppIntroDetailPage,
        meta: {
          hideSpecificElem: true,
        }
      },
    ]
  },
  {
    name: 'Animations',
    path: '/animations',
    component: AppPage,
    children: [
      {
        name:'All Animations',
        path: '',
        component: AppAniContentsPage,
      },
      {
        name: 'Animations Detail',
        path: ':id',
        component: AppAniContentsDetailPage,
        meta: {
          hideAllElems: true,
          name: 'animation'
        }
      },
    ]
  },
];

const router = createRouter({
  history: createWebHashHistory(),
    routes,
});

export default router;