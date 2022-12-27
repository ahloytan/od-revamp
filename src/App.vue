<template>
  <NavBar></NavBar>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/PageFooter.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  },
}
</script>

<style>

@font-face {
  font-family: "KayakSans Regular";
  src: local("KayakSans Regular"), 
  url("~@/assets/fonts/KayakSans/Kayak Sans Regular.otf") format('opentype');
}

@font-face {
  font-family: "KayakSans Bold";
  src: local("KayakSans Bold"), 
  url("~@/assets/fonts/KayakSans/Kayak Sans Bold.otf") format('opentype');
}

@font-face {
  font-family: "KayakSans Light";
  src: local("KayakSans Light"), 
  url("~@/assets/fonts/KayakSans/Kayak Sans Light.otf") format('opentype');
}

@font-face {
  font-family: "LeagueSpartan Regular";
  src: local("LeagueSpartan Regular"), 
  url("~@/assets/fonts/LeagueSpartan/LeagueSpartan-Regular.ttf") format('truetype');
}

@font-face {
  font-family: "LeagueSpartan Light";
  src: local("LeagueSpartan Light"), 
  url("~@/assets/fonts/LeagueSpartan/LeagueSpartan-Thin.ttf") format('truetype');
}

@font-face {
  font-family: "LeagueSpartan Bold";
  src: local("LeagueSpartan Bold"), 
  url("~@/assets/fonts/LeagueSpartan/LeagueSpartan-Bold.ttf") format('truetype');
}

@font-face {
  font-family: "LeagueSpartan Medium";
  src: local("LeagueSpartan Medium"), 
  url("~@/assets/fonts/LeagueSpartan/LeagueSpartan-Medium.ttf") format('truetype');
}
#app {
  text-align: center;
  color: #2c3e50;
  /* font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
  /* background: url("./assets/images/bgImage.png"); */
  background:#f0f3f5;
  background-size: cover;
  background-repeat: no-repeat;
  overflow-x: hidden;
}

h1, h2 {
  font-family: 'LeagueSpartan Medium';
  font-size: 34px;
}

h3, h4 {
  font-family: 'KayakSans Regular'
}

span,p, li {
  font-family: "KayakSans Light";
}

</style>
