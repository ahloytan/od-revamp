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
#app {
  text-align: center;
  color: #2c3e50;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: url("./assets/images/bgImage.png");
  background-size: cover;
  background-repeat: no-repeat;

}

</style>
