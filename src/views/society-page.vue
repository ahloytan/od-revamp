<template>
    <div id="society">
      <!-- What We Do -->
      <h1 class="blue mt-5" data-aos="zoom-in">What We Do</h1>
      <div id="container" class="fs-1">
          <div id="flip">
              <div><div>COMMUNITY SERVICE</div></div>
              <div><div>MENTORING</div></div>
              <div><div>GIVE AND GROW</div></div>
          </div>
      </div>
      <!-- How We Work-->
      <h1 class="blue mt-5" data-aos="zoom-out">How We Work</h1>
      <div id="mentoring" class="bg-light">
        <div class="container">
          <div class="row" >
            <div class="col-lg-8" data-aos="slide-right"><img class="img-fluid h-100" src="@/assets/images/bendemeer-sec.jpg" alt="bendemeer sec image"></div>
            <div class="col-lg-1"></div>
            <div class="col-lg-3" data-aos="slide-left">
              <div class="header">MENTORING</div>
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
      <h1 class="blue mt-5" data-aos="zoom-in-left">Partnerships (Mentoring)</h1>
      <div class="container">
        <div class="row fs-2">
          <div class="col-6 px-5">
            <div class="fw-bold" data-aos="slide-down">GUANGYANG SECONDARY SCHOOL</div>
            <div class="fs-3" data-aos="slide-down">Learners for Today, Leaders for Tomorrow.</div>
            <div><img class="mt-5 img-fluid" data-aos="slide-up" src="@/assets/images/gyss.jpg" alt="gyss"></div>
          </div>
          <div class="col-6 px-5">
              <img class="img-fluid" data-aos="slide-down" src="@/assets/images/bmss.jpg" alt="gyss">
              <div class="fw-bold mt-5" data-aos="slide-down">BENDEMEER SECONDARY SCHOOL</div>
              <div class="fs-3" data-aos="slide-up">Active Learners, Responsible Citizens</div>
          </div>
        </div>
      </div>
      <!-- Partnerships (Community Service) -->
      <h1 class="blue mt-5" data-aos="zoom-in-left">Partnerships (Community Service)</h1>
      <div class="container">
        <div class="row fs-2 fw-bold">
          <div class="col-4" v-for="community in communityServices" :key="community.name" :data-aos="community.animation">
            <div>{{community.name}}</div>
            <img class="csImages" :src="getImage1(community.path)" :alt="community.name"> 
          </div>
        </div>
      </div>

      <!-- Youth Development-->
      <h1 class="blue mt-5" data-aos="zoom-in-right">Youth Development</h1>
      <div class="bg-light">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="header">MINDFULNESS/ COACHING</div>
            </div>
            <div id="ydItemsHolder" class="col-lg-8">
              <div class="d-flex">
                <div class="yd">Adult mentoring</div>
                <div class="yd">Profiling <br> (DISC + MBTI)</div>
                <div class="yd">Consultations from Experts</div>
              </div>
              <div class="d-flex">
                <div class="yd">CV Crafting</div>
                <div class="yd">Learn Soft Skills</div>
                <div class="yd">Topic Sharing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import AOS from "aos";

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
      ]
    }
  },
  mounted(){
    AOS.init();
  },
  methods:{
    getImage(imagePath) {
        return require("@/assets/mentoring-items/" + imagePath + ".png");
    },
    getImage1(imagePath) {
        return require("@/assets/images/" + imagePath);
    },
  }
}
</script>
<style scoped lang="scss">
#communityService{
  background-color: $apple-purple;
}

#ydItemsHolder{
  display: flex;

  @include breakpoint($mobile){
    display: block;
  }
}

.csImages{
  width: 100%;
  height: 75%;
}

.yd{
  padding: 20px;
  font-size: 21px;
  font-weight: bold;
  margin: auto;
}

.list-items{
  width: 42px;
  height: 42px;
}
.blue{
    color: $od-blue;
}

.header{
  font-size: 48px;
  font-weight: 700;
}

.content{
  font-size: 21px;
  font-weight: 500;
}

//https://codepen.io/yemon/details/pWoROm
#container {
  color:#999;
  font-weight:bold;
  width:100%;
  bottom:45%;
  display:block;
}

#flip {
  height:80px;
  overflow:hidden;
}

#flip > div > div {
  color:#fff;
  padding:4px 12px;
  height:60px;
  margin-bottom: 35px;
  display:inline-block;
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