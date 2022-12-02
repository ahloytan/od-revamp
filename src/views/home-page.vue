<template>
    <div id="homePage">
        <div class="container">
            <div v-for="(text, index) in texts" :key="index" class="row mt-5">
                <h1 class="mvv">{{textsHeader[index]}}</h1>
                <div class="fs-5">{{text}}</div>
            </div>
            <div class="row mt-5">
                <h1 class="mvv">VALUES</h1>
                <div> 
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

export default {
    name: 'HomePage',
    components: {
        theCarousel
    },
    data(){
        return {
            textsHeader: ["VISION", "MISSION"],
            texts: [
                "Orange Dolphin, OD, was formed in 2012 and officially registered as a society in 2017. It is a community of people (dolphins) who wanted to pay it forward and has a belief in \"giving is growing\". We hope to help every young to fulfil their potential by coaching, mentoring, and volunteering.", 
                "To grow grateful and resilience young through the mentoring network"
            ],
            values: ["Open | ", "Reflective | ", "Adventurous | ", "Never give up | ", "Genuine | ", "Enthusiastic"],
            carouselLoadedOnce: false
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