<template>
    <div id="homePage">
        <div class="container" :data-aos-duration="animateSpeed">
            <div v-for="text in texts" :key="text.header" class="row mt-5 textHolder">
                <h1 class="mvv" data-aos="fade-down" :data-aos-duration="animateSpeed">{{text.header}}</h1>
                <div class="fs-small" :data-aos="text.animation" :data-aos-duration="animateSpeed" v-html="text.words"></div>
            </div>
            <div class="row mt-5">
                <h1 class="mvv" data-aos="fade-down">VALUES</h1>
                <div data-aos="slide-right" :data-aos-duration="animateSpeed"> 
                    <span v-for="(value) in values" :key="value">
                        <span class="glow">{{value.charAt(0)}}</span>
                        <span class="fs-small">{{value.substring(1, value.length)}}&nbsp;</span>
                    </span>
                </div>
            </div>
        </div>
        <theCarousel></theCarousel>
    </div>
</template>
<script>
import theCarousel from "../components/Carousel.vue";

export default {
    name: 'HomePage',
    components: {
        theCarousel
    },
    data(){
        return {
            animateSpeed: 800,
            texts: [
                {header: "VISION", animation: "slide-right", words: "Orange Dolphin (OD) was formed in 2012 and officially registered as a society in 2017. It is a <b>community of people</b> (dolphins) who wanted to <b>pay it forward</b> and has a belief in <b>\"giving is growing\"</b>. We believe that through <b>coaching</b>, <b>mentoring</b>, and <b>volunteering</b>, we can unlock every youth's fullest potential."},
                {header: "MISSION", animation: "slide-left", words: "To grow grateful and resilience young through the mentoring network"}
            ],
            values: ["Open | ", "Reflective | ", "Adventurous | ", "Never give up | ", "Genuine | ", "Enthusiastic"],
        }
    },
    mounted(){
    },
    methods: {
    }
}

</script>
<style scoped lang="scss">
.mvv{
    color: $od-blue;
}

.textHolder{
    max-width: 875px;
    margin: 0 auto;
}

.fs-small{
    font-size: $fs-xs;

    @include breakpoint(tablet){
        font-size: $fs-m;
    }
}

.glow{
    color: $od-red;
    font-size: $fs-s;
    margin-top: 45vh;
    animation-name: glow;
    animation-duration: 1s;
    animation-direction: alternate;
    animation-iteration-count: infinite;

    @include breakpoint(tablet){
        font-size: $fs-xl;
    }
}

@keyframes glow{
  from{text-shadow:0px 0px 5px #fff,0px 0px 5px $od-red;}
  to{text-shadow:0px 0px 20px #fff,0px 0px 20px $od-red;}
}
</style>