import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginPage.vue'),
  },
  {
    path: '/note',
    name: 'note',
    component: () => import('../views/TakeNotes.vue'),
  },
  {
    path: '/question',
    name: 'question',
    component: () => import('../views/HaveQuestion.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
