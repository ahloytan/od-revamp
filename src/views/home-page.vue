<template>
    <div id="homePage">
        <div class="container" :data-aos-duration="animateSpeed">
            <div v-for="text in texts" :key="text.header" class="row mt-5">
                <h1 class="mvv" data-aos="fade-down" :data-aos-duration="animateSpeed">{{text.header}}</h1>
                <div class="fs-5" :data-aos="text.animation" :data-aos-duration="animateSpeed">{{text.words}}</div>
            </div>
            <div class="row mt-5">
                <h1 class="mvv" data-aos="fade-down">VALUES</h1>
                <div data-aos="slide-right" :data-aos-duration="animateSpeed"> 
                    <span v-for="(value) in values" :key="value">
                        <span class="glow fs-2">{{value.charAt(0)}}</span>
                        <span class="fs-5">{{value.substring(1, value.length)}}&nbsp;</span>
                    </span>
                </div>
            </div>
        </div>
        <theCarousel></theCarousel>
    </div>
</template>
<script>
import theCarousel from "../components/Carousel.vue";
import AOS from "aos"; //https://dev.to/sabbirsobhani/aos-scrolling-animation-with-vuejs-3-4hp7

export default {
    name: 'HomePage',
    components: {
        theCarousel
    },
    data(){
        return {
            animateSpeed: 800,
            texts: [
                {header: "VISION", animation: "slide-right", words: "Orange Dolphin, OD, was formed in 2012 and officially registered as a society in 2017. It is a community of people (dolphins) who wanted to pay it forward and has a belief in \"giving is growing\". We hope to help every young to fulfil their potential by coaching, mentoring, and volunteering."},
                {header: "MISSION", animation: "slide-left", words: "To grow grateful and resilience young through the mentoring network"}
            ],
            values: ["Open | ", "Reflective | ", "Adventurous | ", "Never give up | ", "Genuine | ", "Enthusiastic"],
        }
    },
    mounted(){
        AOS.init();
    },
    methods: {
    }
}

</script>
<style scoped lang="scss">
.mvv{
    color: $od-blue;
}

.glow{
  margin-top:45vh;
  color: $od-red;
  animation-name:glow;
  animation-duration:1s;
  animation-iteration-count:infinite;
  animation-direction:alternate;
}

@keyframes glow{
  from{text-shadow:0px 0px 5px #fff,0px 0px 5px $od-red;}
  to{text-shadow:0px 0px 20px #fff,0px 0px 20px $od-red;}
}
</style>