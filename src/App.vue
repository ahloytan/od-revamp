<template>
  <link href='https://fonts.googleapis.com/css?family=League Spartan' rel='stylesheet'>
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
@import url('https://fonts.cdnfonts.com/css/kayak-sans');
/* @import url('https://fonts.googleapis.com/css?family=League%20Spartan'); */

#app {
  text-align: center;
  color: #2c3e50;
  /* font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
  background: url("./assets/images/bgImage.png");
  background-size: cover;
  background-repeat: no-repeat;
  overflow-x: hidden;
}

h1 {
  font-family: 'League Spartan';
  font-weight: bolder;
}

h2 {
  font-family: 'Kayak Sans', sans-serif;
}

span,p {
  font-family: 'Kayak Sans', sans-serif;
  font-weight: lighter;
}

</style>
