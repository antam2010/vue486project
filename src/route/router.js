// Vuex 때 처럼 create* 함수를 제공한다.
import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/route/DiaryBoard'), // 동적 import
  },
  {
    path: '/DiaryCalendar',
    name: 'Calendar',
    component: () => import('@/views/DiaryCalendar'),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});