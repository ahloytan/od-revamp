<template>
    <div id="homePage">
        <div class="container">
            <div v-for="text in texts" :key="text.header" class="row mt-5 textHolder">
                <h2 class="mvv" data-aos="fade-down">{{text.header}}</h2>
                <div class="fs-xsmall" :data-aos="text.animation" v-html="text.words"></div>
            </div>
            <div class="row mt-5">
                <h2 class="mvv" data-aos="fade-down">VALUES</h2>
                <div data-aos="slide-right"> 
                    <span v-for="(value) in values" :key="value">
                        <span class="glow">{{value.charAt(0)}}</span>
                        <span class="fs-xsmall">{{value.substring(1, value.length)}}&nbsp;</span>
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

h2 {
    font-size: 40px;
}

.textHolder{
    max-width: 875px;
    margin: 0 auto;
}

.fs-xsmall{
    font-size: $fs-xs;
}

.glow{
    color: $od-red;
    font-size: $fs-s;
    animation-name: glow;
    animation-duration: 1s;
    animation-direction: alternate;
    animation-iteration-count: infinite;

    @include breakpoint(tablet){
        font-size: $fs-m;
    }
}

@keyframes glow{
  from{text-shadow:0px 0px 5px #fff,0px 0px 5px $od-red;}
  to{text-shadow:0px 0px 20px #fff,0px 0px 20px $od-red;}
}
</style>