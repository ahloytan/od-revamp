<template>
    <div id="society">
      <!-- What We Do -->
      <h2 class="blue mt-5" data-aos="zoom-in">What We Do</h2>
      <div id="container">
          <div id="flip">
              <div><div>COMMUNITY SERVICE</div></div>
              <div><div>MENTORING</div></div>
              <div><div>GIVE AND GROW</div></div>
          </div>
      </div>
      <!-- How We Work-->
      <h2 class="blue" data-aos="zoom-out">How We Work</h2>
      <div id="mentoring">
        <div class="container">
          <div class="row" >
            <div class="col-lg-8" data-aos="slide-right"><img class="img-fluid h-100" src="@/assets/images/bendemeer-sec.jpg" alt="bendemeer sec image"></div>
            <div class="col-lg-1"></div>
            <div class="col-lg-3" data-aos="slide-left">
              <div class="header">MENTORING & COACHING</div>
              <hr/>
              <div class="content" v-for="content in contents" :key="content.icon" data-aos="slide-left">
                <img class="list-items" :src="getImage(content.icon)" :alt="content.icon">
                <div class="mb-4">{{content.name}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="communityService" class="my-5 text-white">
        <div class="container">
          <div class="row" >
            <div class="col-lg-3" data-aos="slide-right">
              <div class="header">COMMUNITY SERVICE</div>
              <hr/>
              <div class="content" v-for="content in contents" :key="content.icon" data-aos="slide-right">
                <img class="list-items" :src="getImage(content.icon)" :alt="content.icon">
                <div class="mb-4">{{content.name}}</div>
              </div>
            </div>
            <div class="col-lg-1"></div>
            <div class="col-lg-8" data-aos="slide-left"><img class="img-fluid h-100" src="@/assets/carousel/c2.jpg" alt="bendemeer sec image"></div>
          </div>
        </div>
      </div>
      <!-- Partnerships (Mentoring) -->
      <h2 class="blue" data-aos="zoom-in-left">Partnerships (Mentoring)</h2>
      <div class="container">
        <div class="row fs-small">
          <div class="col-lg-6 px-5">
            <div class="fw-bold fs-medium" data-aos="slide-down">GUANGYANG SECONDARY SCHOOL</div>
            <div class="" data-aos="slide-down">Learners for Today, Leaders for Tomorrow.</div>
            <div><img class="mt-5 img-fluid" data-aos="slide-up" src="@/assets/images/gyss.jpg" alt="gyss"></div>
          </div>
          <div class="col-lg-6 px-5">
              <img id="bendemeerSec" class="img-fluid" data-aos="slide-down" src="@/assets/images/bmss.jpg" alt="bmss">
              <div class="fw-bold fs-medium mt-5" data-aos="slide-down">BENDEMEER SECONDARY SCHOOL</div>
              <div class="" data-aos="slide-up">Active Learners, Responsible Citizens</div>
          </div>
        </div>
      </div>
      <!-- Partnerships (Community Service) -->
      <h2 class="blue" data-aos="zoom-in-left">Partnerships (Community Service)</h2>
      <div class="container">
        <div class="row fs-small fw-bold">
          <div class="col-lg-4" v-for="community in communityServices" :key="community.name" :data-aos="community.animation">
            <div>{{community.name}}</div>
            <img class="csImages" :src="getImage1(community.path)" :alt="community.name"> 
          </div>
        </div>
      </div>

      <!-- Youth Development-->
      <h2 class="blue" data-aos="zoom-in-right">Youth Development</h2>
      <div class="bg-light">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 d-flex">
              <div class="col-lg-6">
                <div data-aos="fade-up-right" :class="'yd ' + yd1.bgColor" v-for="yd1 in youthDevelopment1" :key="yd1.title">
                  <img class="list-items ydIcons" :src="getImage2(yd1.path)" :alt="yd1.path"> &nbsp;
                  <span>{{yd1.title}}</span>
                </div>
              </div>
              <div class="col-lg-6">
                <div data-aos="fade-up-left" :class="'yd ' + yd2.bgColor" v-for="yd2 in youthDevelopment2" :key="yd2.title">
                  <span>{{yd2.title}}</span> &nbsp;
                  <img class="list-items ydIcons" :src="getImage2(yd2.path)" :alt="yd2.path">
                </div>
              </div>
            </div>
            <div class="col-lg-4 d-flex align-items-center">
              <div class="header" data-aos="slide-left">MINDFULNESS/ COACHING</div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default{
  name: 'society-page',
  data(){
    return {
      contents: [{name: "Timeline", icon: "timeline"}, 
        {name: "OD Model", icon: "model"}, 
        {name: "Target Audience", icon: "audience"}, 
        {name: "Roles and Responsibilities", icon: "responsibility"}, 
        {name: "3 Key Pillars of OD", icon: "pillars"}, 
        {name: "Sustainability", icon: "sustainability"} 
      ],
      communityServices: [
        {name: "TPY CARE CENTRE", path: "tpy-care-centre.jpg", animation: "zoom-out-left"}, 
        {name: "RAMADAN ON WHEELS", path: "ramadan-on-wheels.png", animation: "zoom-out-down"}, 
        {name: "WILLING HEARTS", path: "willing-hearts.jpg", animation: "zoom-out-right"},
      ],
      youthDevelopment1: [
        {title: "Adult Mentoring", path: "mentoring", bgColor: "bg-warning"},
        {title: "Profiling (DISC + MBTI)", path: "profiling", bgColor: "bg-warning"},
        {title: "Consultations from Experts", path: "consultations", bgColor: "bg-warning"}
      ],
      youthDevelopment2: [
        {title: "Crafting CV", path: "crafting-cv", bgColor: "bg-info"},
        {title: "Learn Soft Skills", path: "soft-skills", bgColor: "bg-info"},
        {title: "Topic Sharing", path: "topic-sharing", bgColor: "bg-info"}
      ],
    }
  },
  mounted(){
  },
  methods:{
    getImage(imagePath) {
        return require("@/assets/mentoring-items/" + imagePath + ".png");
    },
    getImage1(imagePath) {
        return require("@/assets/images/" + imagePath);
    },
    getImage2(imagePath) {
        return require("@/assets/youth-development/" + imagePath + ".png");
    },
  }
}
</script>
<style scoped lang="scss">

h2 {
    font-size: 40px;
}

#bendemeerSec{
  height: auto;

  @include breakpoint(tablet){
    height: 75%;
  }
}

#mentoring {
  background-color: #FFFFFF;

  .header {
    color: #1B21C4;
  }
}

#communityService{
  background-color:#333333;
  
  .header {
    color: #48CCF4;
  }
}

.csImages{
  width: 100%;
  height: 75%;
}

.yd{
  margin: auto;
  padding: 10px;
  margin: 10px;
  font-size: 14px;
  font-weight: bold;

  @include breakpoint(tablet){
    font-size: 16px;
  }

  .ydIcons{
    display: block;
    margin: 0 auto;

    @include breakpoint(tablet){
      display: inline;
    }  
  }
}

.list-items{
  width: 42px;
  height: 42px;
}
.blue{
  color: $od-blue;
  margin-top: 100px;
}

.header{
  font-size: 24px;
  font-weight: 700;

  @include breakpoint(tablet){
    font-size: 40px;
  }
}

.content{
  font-size: 16px;
  font-weight: 500;
}

.fs-medium{
  font-size: $fs-m;
}

.fs-small{
  font-size: $fs-s;
}

//https://codepen.io/yemon/details/pWoROm
#container {
  width: 100%;
  bottom: 45%;
  color: #999;
  display: block;
  font-size: $fs-m;
  font-weight: bold;
}

#flip {
  height:80px;
  overflow:hidden;
}

#flip > div > div {
  color:#fff;
  height: 60px;
  padding: 4px 12px;
  margin-bottom: 35px;
  display: inline-block;
}

#flip div:first-child {
  animation: show 5s linear infinite;
}

#flip div div {
  background:#42c58a;
}
#flip div:first-child div {
  background:#4ec7f3;
}
#flip div:last-child div {
  background: $od-red;
}

@keyframes show {
  0% {margin-top:-270px;}
  5% {margin-top:-180px;}
  33% {margin-top:-180px;}
  38% {margin-top:-90px;}
  66% {margin-top:-90px;}
  71% {margin-top:0px;}
  99.99% {margin-top:0px;}
  100% {margin-top:-270px;}
}
</style>