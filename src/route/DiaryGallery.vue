<script setup>
import {ref} from 'vue'

/*디데이 설정*/
const masTime = new Date("2021-06-26")
const todayDate = new Date()
const diff = todayDate - masTime
const todayDday = ref(Math.ceil(diff / (1000*60*60*24)))

/*게시판 날짜 담기*/
const todayDateYear = ref(new Date().getFullYear())
const todayDateMonth = ref(new Date().getMonth() + 1)
const todayDateDay = ref(new Date().getDate())

</script>

<template>
    <div class="DiaryGallery">
        <div class="todayDday">{{ todayDday }}일째 기록</div>
        <ol class="galleryWrap">
            <li class="gallery">
                <div class="galleryImg"></div>
                <div class="galleryTitle">
                    <h2>게시물 타이틀</h2>
                    <p>{{ todayDateYear }}년 {{  todayDateMonth }}월 {{ todayDateDay }}일</p>
                </div>
            </li>
            <li class="gallery">
                <div class="galleryImg"></div>
                <div class="galleryTitle">
                    <h2>게시물 타이틀</h2>
                    <p>{{ todayDateYear }}년 {{  todayDateMonth }}월 {{ todayDateDay }}일</p>
                </div>
            </li>
            <li class="gallery">
                <div class="galleryImg"></div>
                <div class="galleryTitle">
                    <h2>게시물 타이틀</h2>
                    <p>{{ todayDateYear }}년 {{  todayDateMonth }}월 {{ todayDateDay }}일</p>
                </div>
            </li>
        </ol>
    </div>
</template>

<style scoped>
.todayDday {
    width: 100%;
    height: 10%;
    font-size: 2rem;
    font-weight: bold;
    box-sizing: border-box;
    padding-left: 20px;
}
.DiaryGallery {
    width: 100%;
    height: 100%;
}
.galleryWrap {
    width: 100%;
    height: 90%;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.gallery {
    width: 80%;
    max-height: 300px;
    min-height: 250px;
    height: calc(33.3333% - 20px);
    margin-bottom: 20px;
}
.galleryImg {
    width: 100%;
    height: 76%;
    background-color: #d9d9d9;
}
.galleryTitle {
    width: 100%;
    height: 26%;
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    flex-direction: column;
    background-color: #decccc;
}
.galleryTitle >h2 {
    font-size: 18px;
    margin-bottom: 7px;
}
.galleryTitle p {
    font-size: 14px;
}
</style>