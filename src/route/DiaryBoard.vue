<script setup>

import { ref } from 'vue'
// import { DiaryHome } from '../components/DiaryHome.vue'

const name1 = ref('Hi')
const name2 = ref('Hi')
const ing = ref('2021-06-20')
</script>

<template>
  <div class="DiaryBoard">
    <!-- <DiaryHome></DiaryHome> -->
    <section class="home_title">
      <h1> {{ name1 }} <font-awesome-icon :icon="['fass', 'heart']" /> {{ name2 }}</h1>
      <p class="date">{{ ing }} ~ ing</p>
    </section>
    <section class="board">
      <div class="board_top"></div>
      <div class="board_cont">
        <div class="polaroid">
          <div class="polaroid_img"></div>
          <div></div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
  .DiaryBoard{
    width: 100%;
    height: 90%;
    max-width:480px;
    margin:auto;
    padding: 10px;
    box-sizing: border-box;
    position:relative;
  }
  .home_title {
    width: 100%;
    height: 15%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .home_title >h1{
    font-size:3rem;
  }
  .home_title .date{
    font-size:1.5rem;
    padding: 5px 0 15px 0;
    box-sizing: border-box;
    border-bottom: 2px solid #000;
    width: 60%;
  }
  .board {
      width: 100%;
      height: 85%;
  }
  .board_top {
    background-color: #d3c3b5;
    width: 100%;
    height: 10%;
  }
  .board_cont {
      background-color: #e8dcd0;
      width: 100%;
      height: 80%;
      position:relative;
  }
  .polaroid {
    width: 11rem;
    height: 14rem;
    background-color: var(--color-white);
    box-sizing: border-box;
    padding: 15px 15px 50px 15px;
    position: absolute;
    transform: rotate(-5deg);
  }
  .polaroid_img {
    width: 100%;
    height: 100%;
    background-color: #C1B2B2;
    position:relative;
  }
  .polaroid_img::before{
    content: '';
    width: 1rem;
    height: 3rem;
    background-color: #F9F7E4;
    position: absolute;
    top: -35px;
    left: 50%;
    transform: translateX(-50%) rotate(5deg);
  }
</style>
