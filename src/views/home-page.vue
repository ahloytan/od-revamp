<template>
    <div id="homePage">
        <div class="container">
            <div class="row">
                <div id="carouselExampleDark" class="carousel carousel-dark slide mt-5" data-bs-ride="carousel" data-bs-interval="3000">
                    <div class="carousel-indicators">
                        <button :id="'btn' + image" v-for="(image, index) in images" :key="image+index" type="button" class="" data-bs-target="#carouselExampleDark" :data-bs-slide-to="index" aria-current="true" :aria-label="'Slide' + index "></button>
                    </div>
                    <div class="carousel-inner">
                        <div :id="image" v-for="image in images" :key="image" class="carousel-item">
                            <img :src="getImage(image)" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
  name: 'HomePage',
  components: {
  },
  data(){
    return {
        images: ['c1', 'c2', 'c3', 'c4', 'c5', 'c6']
    }
  },
  mounted(){
    document.getElementById('c1').classList.add('active');
    document.getElementById('btnc1').classList.add('active');
  },
  methods: {
        getImage(imagePath) {
            return require("@/assets/carousel/" + imagePath + ".jpg");
        }
    }
}

</script>
<style>

</style>