<template>
    <div id="homePage">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <img id="odIcon" src="../assets/images/orangeDolphin.png" alt="Orange Dolphin Icon" >
                <!-- Sandwich menu on mobile -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li v-for="(page, index) in pages" :key="page" @click="active = page; $router.push(page)" class="nav-item">
                            <a :class="{active:active === page}" class="nav-link" href="#">{{pagesName[index]}}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'NavBar',

  data(){
    return {
        active: 'home',
        pages: ['home-page', 'about-us', 'society', 'education', 'testimonials', 'coaching', 'contact-us'],
        pagesName: ['Home', 'About Us', 'Society', 'Education', 'Testimonials', 'Coaching', 'Contact Us']
    }
  },
  mounted(){
  }
}
</script>
<style>
/* li{
    font-size:24px;
} */
.nav-item{
    padding: 0 15px;
}
#odIcon{
    width: 60px;
    height: 60px;
}
</style>
