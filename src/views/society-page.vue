<template>
    <div id="society">
        <h1 class="blue mt-5">What We Do</h1>
        <!-- https://codepen.io/yemon/details/pWoROm -->
        <div id="container" class="fs-3">
            <div id="flip">
                <div><div>MENTORING</div></div>
                <div><div>COMMUNITY SERVICE</div></div>
                <div><div>GIVE AND GROW</div></div>
            </div>
        </div>
        <h1 class="blue mt-5">How We Work</h1>
        <div class="bg-light" style="height: 500px;"></div>
        <div class="bg-secondary" style="height: 500px;"></div>
        <h1 class="blue mt-5">Partnerships</h1>
        <h1 class="blue mt-5">Youth Development</h1>
    </div>
</template>
<script>

export default{
    name: 'society-page',
    data(){
        return {
            
        }
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
.blue{
    color: $od-blue;
}


#container {
  color:#999;
  font-weight:bold;
  width:100%;
  bottom:45%;
  display:block;
}

#flip {
  height:50px;
  overflow:hidden;
}

#flip > div > div {
  color:#fff;
  padding:4px 12px;
  height:50px;
  margin-bottom: 50px;
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