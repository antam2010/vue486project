<script setup>
import Modal from '../modals/LoginModal.vue'
import { ref } from 'vue'

const showModal = ref(false)
console.log(showModal)
</script>

<template>
  <div class="DiaryLogin">
    <div id="show-modal" class="lock" @click="showModal = true"><font-awesome-icon :icon="['fas', 'lock']" /></div>
    <Teleport to="body">
        <!-- use the modal component, pass in the prop -->
        <modal :show="showModal" @close="showModal = false">
            <template #header>
                <h3>custom header</h3>
            </template>       
        </modal>
    </Teleport>

    <div class="DiaryTitle">
        486Diary
    </div>
    <div class="imgArea">
        <img src="@/assets/images/mainImg.png" alt="메인이미지"/>
    </div>
    <div class="copyright">@2021.06.26</div>
  </div>
</template>

<style>
.main_bg_inner:has(.DiaryLogin){
    width:90% !important;
    height:70% !important;
    border-radius: 0px !important;
    position:relative;
}
.DiaryLogin{
    width: 100%;
    height: 100%;
}
.lock {
    position: absolute;
    top: 47%;
    right: -5%;
    font-size: 50px;
    color: #D6D0BC;
    cursor: pointer;
}
.DiaryTitle{
    width: 50%;
    height: 10%;
    font-size: 36px;
    display: flex;
    align-items: center;
    font-weight: bold;
    border-bottom: 1px solid #000;
    margin-left: 15px;
    box-sizing: border-box;
    letter-spacing: 5px;
}
.imgArea{
    width: 100%;
    height: 80%;
    padding: 15px;
    box-sizing:border-box;
}
.copyright{
    width: 100%;
    height: 10%;
    display:flex;
    align-items:start;
    justify-content:center;
    font-weight:bold;
}
</style>