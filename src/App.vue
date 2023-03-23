<script setup>
// export default {
//   name: 'App',
//   components: {
//     DiaryHome,
//   }
// }

import { ref, computed } from 'vue'
import DiaryHome from './components/DiaryHome.vue'
import DiaryBoard from './route/DiaryBoard.vue'
import DiaryCalendar from './route/DiaryCalendar.vue'
import DiaryGallery from './route/DiaryGallery.vue'

const routes = {
  '/' : DiaryBoard,
  '/route/DiaryCalendar/' : DiaryCalendar,
  '/route/DiaryGallery' : DiaryGallery,
}
  
const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/']
})

</script>

<template>
  <div class="container">
    <div class="main_bg">
      <div class="main_bg_inner">
        <DiaryHome></DiaryHome>
        <component :is="currentView" />
      </div>
    </div>
  
  </div>
</template>

<style>
@import "./assets/css/reset.css";
@import "./assets/css/variable.css";
.container{
  width:100%;
  height:100%;
}
.main_bg{
  width:100%;
  height:100%;
  background-color:var(--color-bg);
  padding:10px;
  box-sizing:border-box;
}
.main_bg_inner{
  width:100%;
  height:100%;
  background-color:var(--color-inner-bg);
}
</style>
