<script setup>

// import { ref } from 'vue'
// function todayDateText() {   
//   const masTime = new Date("2021-06-26");
//   const todayDate = new Date();
//   const diff = todayDate - masTime;
//   const diffDay = Math.ceil(diff / (1000*60*60*24));

//   return `${diffDay}일`;
// }
import { ref, computed } from 'vue'
import DiaryBoard from '../route/DiaryBoard.vue'
import DiaryCalendar from '../route/DiaryCalendar.vue'
import DiaryGallery from '../route/DiaryGallery.vue'

const routes = {
  '../route/' : DiaryBoard,
  '../route/diaryCalendar' : DiaryCalendar,
  '../route/DiaryGallery' : DiaryGallery,
}
  
const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/']
})

function openNav(){
  

}

</script>

<template>
  <div class="DiaryHome">
    <!-- <nav class="bookmark" @click="openNav">
      <font-awesome-icon :icon="['fass', 'bookmark']" />
      <a href="#/" class="navBar">Main</a>
      <a href="#../route/DiaryCalendar.vue" class="navBar">Calendar</a>
    </nav>     -->
    <nav class="bookmark" @click="openNav">
      <details>
        <summary><font-awesome-icon :icon="['fass', 'bookmark']" /></summary>
        <ul class="bookmarkNav">
          <li><a href="#/" class="navBar">Main</a></li>
          <li><a href="#../route/diaryCalendar" class="navBar">Calendar</a></li>
          <li><a href="#../route/DiaryGallery" class="navBar">Gallery</a></li>
        </ul>
      </details>
    </nav>  
    <component :is="currentView" />
  </div>
</template>

<style scoped>
@import "../assets/css/reset.css";
@import "../assets/css/variable.css";
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
  summary{
    position:absolute;
    top:0;
    right:0;
    z-index:2;
  }
  summary::marker{font-size:0;}
  .bookmark svg.svg-inline--fa.fa-bookmark {
    font-size: 50px;
    position: absolute;
    right: 10px;
    color: #6F3806;
    transform: rotateY(55deg);
    cursor: pointer;
  }
  details {
    width: 100%;
    height: fit-content;
    position:relative;
}
  .bookmarkNav {
      width: 100%;
      position:absolute;
      z-index:1;
      top:10px;
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
  .navBar{
    /* display:none; */
    display:flex;
    flex-direction: column;
    
  }
</style>
