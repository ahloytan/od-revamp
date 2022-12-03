<template>
    <div id="homePage">
        <nav class="navbar navbar-expand-lg">
            <div class="container ">
                <img id="odIcon" src="../assets/images/orangeDolphin.png" alt="Orange Dolphin Icon" >
                <!-- Sandwich menu on mobile -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-center">
                        <li v-for="(page, index) in pages" :key="page" class="nav-item" @click="active = page; $router.push(page)">
                            <span :class="{active:active === page}" class="nav-link fs-5 fw-bold px-4">{{pagesName[index]}}</span>
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
        active: "/",
        pages: ['/', 'about-us', 'society-page', 'education-page', 'testimonials-page', 'coaching-page', 'contact-us'],
        pagesName: ['Home', 'About Us', 'Society', 'Education', 'Testimonials', 'Coaching', 'Contact Us']
    }
  },
  mounted(){
    let path = window.location.href.split("/");
    let endPage = path[path.length - 1];
    this.active = endPage ? endPage : "/";
  },
  methods:{
  }
}
</script>
<style scoped lang="scss">
#odIcon{
    width: 60px;
    height: 60px;
}

.active{
    color: $od-red !important;
}

.nav-item{
    cursor: pointer;
}

</style>
