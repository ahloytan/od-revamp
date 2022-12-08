<template>
  <div id="education">
      <div class="container fs-xsmall">
          <div class="row">
              <h1 class="blue mt-5" data-aos="flip-up">What Do We Offer?</h1>
              <h5 class="text-muted">Hover to view more information!</h5>
              <main class="page-content">
                  <div class="card" v-for="card in cards" :key="card.title" :data-aos="card.animation">
                      <div class="content">
                        <h2 class="title">{{card.title}}</h2>
                        <p class="copy">{{card.content}}</p>
                        <a href="/contact-us"><button class="btn">Join Us Now!</button></a>
                      </div>
                  </div>
              </main>
          </div>
          <div class="row">
              <h1 class="blue" data-aos="flip-up">How We Work?</h1>
              <div data-aos="slide-right">
                In terms of working with school, we are a young company who currently based our program at Assumption English School. We are helping AES to manage their students at risk through 1) Mentoring 2) Doing workshops for the group which teach them values. We also provide youth worker to take care of their weekly cabin activities
              </div>
          </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <h1 class="blue" data-aos="flip-up">Partnerships</h1>
          <div class="col-lg-4 mt-4" v-for="partnership in partnerships" :key="partnership.title" :data-aos="partnership.animation">
            <div class="fw-bold fs-small">{{partnership.title}}</div>
            <img :src="getImage(partnership.path)" class="img-fluid" :alt="partnership.path">
          </div>
        </div>
      </div>
  </div>
</template>
<script>
export default{
    name: 'education-page',
    data(){
        return {
          cards: [
            {title: "1. Begin anew with ORANGE", animation: "slide-right", content: "It is a program based on our ORANGE model and mindfulness. The purpose of these series of workshops is to help us to gain clarity so that we will respond with kindness, increased with our wellness. It is a model to help us manage ourselves better. Combined with mindfulness practice in the workshops, it will help us to be more resilience and grateful."},
            {title: "2. Mentor for Cabin", animation: "slide-up", content: "We provide mentor for school cabin for after school engagement program. The role of mentor is to develop student leaders and guide them to run the cabin. We believe in teaching the spirit of paying it forward so that we can build a community to sustain a good culture. We will help to build the eco system by encouraging and supporting student leaders to take up mentorship roles as the graduate from the cabin."},
            {title: "3. Personalised programme for students at risk", animation: "slide-left", content: "We have seen many successful examples of working with less advantage students as a society. The continuity of Orange Dolphin is the evidence of these success stories who wanted to pay it forward. Our youth workers also have a heart for the at-risk students and have diversity of experience working with youths from voluntary welfare organisations. We believe in journeying with these group of students."}
          ],
          partnerships: [
            {title: "BEATTY SECONDARY SCHOOL", path: "beatty.jpg", animation: "fade-down-left"},
            {title: "GUANGYANG SECONDARY SCHOOL", path: "gyss.png", animation: "fade-down"},
            {title: "SINGAPORE MANAGEMENT UNIVERSITY", path: "smu.png", animation: "fade-down-right"},            
          ]
        }
    },
    mounted(){
    },
    methods:{
      getImage(imagePath) {
        return require("@/assets/images/" + imagePath);
      }
    }
}
</script>
<style scoped lang="scss">
.blue{
  color: $od-blue;
  margin-top: 100px;
}

.fs-xsmall{
    font-size: $fs-xs;
}

.fs-small{
  font-size: $fs-s;
}

//Card hover interactions
//https://codepen.io/hexagoncircle/details/XWbWKwL
$imageIds: 'mountain', 'beach', 'desert', 'galaxy';

$bp-md: 767px;
$bp-lg: 1400px;

#education {
  --d: 700ms;
  --e: cubic-bezier(0.19, 1, 0.22, 1);
}

.page-content {
  display: grid;
  grid-gap: 1rem;
  padding: 1rem;
  margin: 0 auto;
  font-family: var(--font-sans);
  
  @media (min-width: $bp-md) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: $bp-lg) {
    grid-template-columns: repeat(3, 1fr);
  }
}


.card {  
  position: relative;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  padding: 1rem;
  width: 100%;
  text-align: center;
  color: whitesmoke;
  background-color: whitesmoke;
  box-shadow: 0 1px 1px rgba(0,0,0,0.1), 
    0 2px 2px rgba(0,0,0,0.1), 
    0 4px 4px rgba(0,0,0,0.1), 
    0 8px 8px rgba(0,0,0,0.1),
    0 16px 16px rgba(0,0,0,0.1);
  
  @media (min-width: $bp-md) {
    height: 600px;
  }

  @media (min-width: $bp-lg) {
    height: 500px;
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 110%;
    background-size: cover;
    background-position: 0 0;
    transition: transform calc(var(--d) * 1.5) var(--e);
    pointer-events: none;
  }
  
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200%;
    pointer-events: none;
    background-image: linear-gradient(
      to bottom,
      hsla(0, 0%, 0%, 0) 0%,
      hsla(0, 0%, 0%, 0.009) 11.7%,
      hsla(0, 0%, 0%, 0.034) 22.1%,
      hsla(0, 0%, 0%, 0.072) 31.2%,
      hsla(0, 0%, 0%, 0.123) 39.4%,
      hsla(0, 0%, 0%, 0.182) 46.6%,
      hsla(0, 0%, 0%, 0.249) 53.1%,
      hsla(0, 0%, 0%, 0.320) 58.9%,
      hsla(0, 0%, 0%, 0.394) 64.3%,
      hsla(0, 0%, 0%, 0.468) 69.3%,
      hsla(0, 0%, 0%, 0.540) 74.1%,
      hsla(0, 0%, 0%, 0.607) 78.8%,
      hsla(0, 0%, 0%, 0.668) 83.6%,
      hsla(0, 0%, 0%, 0.721) 88.7%,
      hsla(0, 0%, 0%, 0.762) 94.1%,
      hsla(0, 0%, 0%, 0.790) 100%
    );
    transform: translateY(-50%);
    transition: transform calc(var(--d) * 2) var(--e);
  }
  
  @each $id in $imageIds {
    $i: index($imageIds, $id);
    
    &:nth-child(#{$i}):before {
      background-image: url("@/assets/education-cards/#{$id}.jpg");
    }
  }
}

.content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem;
  transition: transform var(--d) var(--e);
  z-index: 1;
  
  > * + * {
    margin-top: 1rem;
  }
}

.title {
  font-size: 1.6rem;
  font-weight: bold;
  line-height: 1.2;
}

.copy {
  font-family: var(--font-serif);
  font-size: 1.125rem;
  font-style: italic;
  line-height: 1.35;
}

.btn {
  cursor: pointer;
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 0.65rem;
  font-weight: bold;
  letter-spacing: 0.025rem;
  text-transform: uppercase;
  color: white;
  background-color: black;
  border: none;
  
  &:hover {
    background-color: lighten(black, 5%);
  }
  
  &:focus {
    outline: 1px dashed yellow;
    outline-offset: 3px;
  }
}

@media (hover: hover) and (min-width: $bp-md) {
  .card:after {
    transform: translateY(0);
  }
  
  .content {
    transform: translateY(calc(100% - 4.5rem));
    
    > *:not(.title) {
      opacity: 0;
      transform: translateY(1rem);
      transition:
        transform var(--d) var(--e),
        opacity var(--d) var(--e);
    }
  }
  
  .card:hover,
  .card:focus-within {
    align-items: center;

    &:before { transform: translateY(-4%); }
    &:after { transform: translateY(-50%); }

    .content {
      transform: translateY(0);

      > *:not(.title) {
        opacity: 1;
        transform: translateY(0);
        transition-delay: calc(var(--d) / 8);
      }
    }
  }
  
  .card:focus-within {
    &:before,
    &:after,
    .content,
    .content > *:not(.title) {
      transition-duration: 0s;
    }
  }
}
</style>