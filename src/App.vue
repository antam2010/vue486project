<script setup>
/*
  라우팅 
*/
import { ref, computed } from 'vue'
import DiaryBoard from './route/DiaryBoard.vue'
import DiaryCalendar from './route/DiaryCalendar.vue'
import DiaryGallery from './route/DiaryGallery.vue'
import DiaryLogin from './route/DiaryLogin.vue'

const routes = {
  '/' : DiaryBoard,
  './route/DiaryLogin' : DiaryLogin,
  './route/DiaryCalendar' : DiaryCalendar,
  './route/DiaryGallery' : DiaryGallery,
}
  
const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/']
})

/*
  Nav js
*/
const show = ref(true)
// const showList = ref(true)
</script>

<template>
  <div class="container">
    <div class="main_bg">
      <div class="main_bg_inner">
        <!--상단 네비게이션 영역-->
        <div class="DiaryHome">
          <nav class="bookmark">
            <div @click="show = !show" class="bookmarkArea"><font-awesome-icon :icon="['fass', 'bookmark']" /></div>
            <ul v-if="!show" class="bookmarkNav">
              <li><a @click="show = !show" href="#./route/DiaryLogin" class="navBar">Login</a></li>
              <li><a @click="show = !show" href="#/" class="navBar">Main</a></li>
              <li><a @click="show = !show" href="#./route/DiaryCalendar" class="navBar">Calendar</a></li>
              <li><a @click="show = !show" href="#./route/DiaryGallery" class="navBar">Gallery</a></li>
            </ul>
          </nav>    
        </div>
        <!--네비게이션에서 라우팅 된 페이지 영역-->
        <div class="DiaryRouter">
          <component :is="currentView" />
        </div>        
      </div>
    </div> 
  </div>
</template>

<style>
@import "./assets/css/reset.css";
@import "./assets/css/variable.css";
@import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&display=swap');
/*배경 커스텀 css*/
.container{
  width:100%;
  height:100%;
  max-width:480px;
  margin:auto;
}
.main_bg{
  width:100%;
  height:100%;
  background-color:var(--color-bg);
  padding:10px;
  box-sizing:border-box;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  display: flex;
  align-items: center;
}
.main_bg_inner{
  width:100%;
  height:100%;
  background-color:var(--color-inner-bg);
  border-radius: 5px;
}
.DiaryRouter{
  width:100%;
  height:90%;
  margin:auto;
  max-width:480px;
}
/* 책갈피 custom css */
.DiaryHome{
  width:100%;
  height:10%;
  max-width:480px;
  margin:auto;
  padding: 10px;
  box-sizing: border-box;
  position:relative;
}
.bookmark{
  width: 100%;
  height: fit-content;
}
.bookmarkArea{
  position:absolute;
  top:0;
  right:0;
  z-index:2;
}
.bookmark svg.svg-inline--fa.fa-bookmark {
  font-size: 80px;
  position: absolute;
  right: 10px;
  color: #6F3806;
  transform: rotateY(55deg);
  cursor: pointer;
}
.bookmarkNav {
    width: 100%;
    position:absolute;
    z-index:1;
    top:10px;
    left:0;
    transition:0.5s;
}
.bookmarkNav >li {
    width: 100%;
    background-color: #CCA7A7;
    height: 3rem;
    font-size: 27px;
    font-weight: bold;
    display: flex;
    align-items: center;
    padding-left: 10px;
    box-sizing: border-box;
    color:#6F3806;
}
.bookmarkNav >li:not(:last-child) {
    border-bottom: 2px solid #8b6172;
}
.bookmarkNav >li:hover{
  background-color:#e5d1cc
}
.navBar{
  display:flex;
  flex-direction: column;  
  width: 100%;
  height: 100%;
  justify-content: center;
}
</style>
