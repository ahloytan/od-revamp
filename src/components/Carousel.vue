<template>
    <div id="mainCarousel">
        <!-- https://codepen.io/PedalsUp/pen/ZErypwK -->
        <div v-if="isDesktop" class="carouselContainer">
            <div class="slider">
                <div v-for="(image, index) in images" :key="index" :class="('box' + (index + startIndex))"></div>
            </div>
        </div>
        <div v-else class="container">
            <div id="carouselExampleDark" class="carousel carousel-dark slide mt-5" data-bs-ride="carousel" data-bs-interval="3000">
                <div class="carousel-indicators">
                    <button :id="'btn' + image" v-for="(image, index) in images" :key="image+index" type="button" class="" data-bs-target="#carouselExampleDark" :data-bs-slide-to="index" aria-current="true" :aria-label="'Slide' + index "></button>
                </div>
                <div class="carousel-inner">
                    <div :id="image" v-for="image in images" :key="image" class="carousel-item">
                        <img :src="getImage(image)" class="img-fluid d-block w-100" :alt="image">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery';

export default {
    name: 'theCarousel',
    data(){
        return {
            timer: null,
            startIndex: 1,
            isDesktop: null,
            images: ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7'],
        }
    },  
    mounted(){
        if (window.innerWidth < 990){ 
            this.isDesktop = false; 
            $('#c1, #btnc1').addClass('active');
        } else {
            this.isDesktop = true;
            this.timer = setInterval(() => { this.rotate(); }, 3500);
        }
    },
    methods:{
        rotate() {
            var lastChild = $('.slider div:last-child').clone();
            $('.slider div').removeClass('firstSlide');
            $('.slider div:last-child').remove();
            $('.slider').prepend(lastChild);
            $(lastChild).addClass('firstSlide');
        },
        getImage(imagePath) {
            return require("@/assets/carousel/" + imagePath + ".jpg");
        },
    },
    //https://stackoverflow.com/questions/49849376/vue-js-triggering-a-method-function-every-x-seconds
    beforeUnmount() {
        clearInterval(this.timer);
    }
}
</script>
<style scoped>
#mainCarousel{
    overflow-x: hidden;
}
.carouselContainer{
    width:100vw;
    height:70vh;
    display:flex;
    justify-content:center;
    align-items:center;
}
.slider {
    height: 750px;
    width:100vw;
    display: flex;
    perspective: 1000px;
    position: relative;
    align-items:center;
}
.box1{      
    background:url('../assets/carousel/c1.jpg');
    background-size:cover;
    background-position:center center;
}
.box2{
    background:url('../assets/carousel/c2.jpg');
    background-size:cover;
    background-position:center center;
}
.box3{
    background:url('../assets/carousel/c3.jpg');
    background-size:cover;
    background-position:center center;
}
.box4{
    background:url('../assets/carousel/c4.jpg');
    background-size:cover;
    background-position:center center;
}
.box5{
    background:url('../assets/carousel/c5.jpg');
    background-size:cover;
    background-position:center center;
}
.box6{
    background:url('../assets/carousel/c6.jpg');
    background-size:cover;
    background-position:center center;
}
.box7{
    background:url('../assets/carousel/c7.jpg');
    background-size:cover;
    background-position:center center;
}

.slider [class*="box"] {
    overflow: hidden;
    border-radius:20px;
    transition: all 1s cubic-bezier(0.68, -0.6, 0.32, 1.6);
    position:absolute;
}
.slider [class*="box"]:nth-child(7),
.slider [class*="box"]:nth-child(1) {
    width: 100vh;
    height: 60vh;
    transform: scale(0.2) translate(-50%,-50%);
    top: 10%;
    z-index:1;
}
.slider [class*="box"]:nth-child(2),
.slider [class*="box"]:nth-child(6) {
    width: 100vh;
    height: 60vh;
    transform: scale(0.4) translate(-50%,-50%);
    top: 20%;
    z-index:2;
}
.slider [class*="box"]:nth-child(3),
.slider [class*="box"]:nth-child(5) {
    width: 100vh;
    height: 60vh;
    transform: scale(0.6) translate(-50%,-50%);
    top: 30%;
    z-index:3;
}
.slider [class*="box"]:nth-child(4) {
    width: 60vw;
    height: 60vh;
    border-color: #c92026;
    color: #fff;
    transform: scale(1) translate(-50%,-50%);
    top: 50%;
    z-index:4;
}
.slider [class*="box"]:nth-child(1){
    left:0%;
}
.slider [class*="box"]:nth-child(2){
    left:5%;
}
.slider [class*="box"]:nth-child(3){
    left:20%;
}
.slider [class*="box"]:nth-child(4){
    left:50%;
}
.slider [class*="box"]:nth-child(5){
    left:60%;
}
.slider [class*="box"]:nth-child(6){
    left:62%;
}
.slider [class*="box"]:nth-child(7){
    left:50%;
}
.slider .firstSlide {
    -webkit-animation:  firstChild 1s;
    animation:  firstChild 1s;
}
/*Animation for buyers landing page slider*/
@-webkit-keyframes firstChild {
    0% {left:62%; transform: scale(0.2) translate(-50%,-50%);}
    100% {left: 0%; transform: scale(0.2) translate(-50%,-50%);}
}
@keyframes firstChild {
   0% {left:62%; transform: scale(0.2) translate(-50%,-50%);}
    100% {left: 0%; transform: scale(0.2) translate(-50%,-50%);}
}

</style>