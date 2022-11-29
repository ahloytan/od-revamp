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
                        <!-- Home -->
                        <li class="nav-item dropdown" @click="active = 'home'">
                            <a :class="{active:active === 'home'}" class="nav-link dropdown-toggle" aria-current="page" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Home</a>
                            <!-- <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Vision</a></li>
                                <li><a class="dropdown-item" href="#">Mission</a></li>
                                <li><a class="dropdown-item" href="#">Values</a></li>
                                <li><a class="dropdown-item" href="#">ProtoSlider</a></li>
                                <li><a class="dropdown-item" href="#">Follow Us</a></li>
                            </ul> -->
                        </li>
                        <!-- About Us -->
                        <li class="nav-item dropdown" @click="active = 'about-us'">
                            <a :class="{active:active === 'about-us'}" class="nav-link dropdown-toggle" aria-current="page" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">About Us</a>
                            <!-- <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">OD's Story</a></li>
                                <li><a class="dropdown-item" href="#">Timeline</a></li>
                            </ul> -->
                        </li>
                        <!-- Society -->                    
                        <li class="nav-item dropdown" @click="active = 'society'">
                            <a :class="{active:active === 'society'}" class="nav-link dropdown-toggle" aria-current="page" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Society</a>
                            <!-- <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">What do we do?</a></li>
                                <li><a class="dropdown-item" href="#">How does OD work?</a></li>
                                <li><a class="dropdown-item" href="#">Partnerships</a></li>
                                <li><a class="dropdown-item" href="#">Youths' Development</a></li>
                                <li><a class="dropdown-item" href="#">Join Us</a></li>
                            </ul> -->
                        </li>
                        <!-- Education -->
                        <li class="nav-item dropdown" @click="active = 'education'">
                            <a :class="{active:active === 'education'}" class="nav-link dropdown-toggle" aria-current="page" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Education</a>
                            <!-- <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">What do we do?</a></li>
                                <li><a class="dropdown-item" href="#">How does OD work?</a></li>
                                <li><a class="dropdown-item" href="#">Partnerships</a></li>
                                <li><a class="dropdown-item" href="#">Join Us</a></li>
                            </ul> -->
                        </li>
                        <!-- Testimonials -->
                        <li class="nav-item dropdown" @click="active = 'testimonials'">
                            <a :class="{active:active === 'testimonials'}" class="nav-link dropdown-toggle" aria-current="page" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Testimonials</a>
                            <!-- <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Society's Testimonials (Volunteers, etc.)</a></li>
                                <li><a class="dropdown-item" href="#">Education's Testimonials (Partners, etc.)</a></li>
                            </ul> -->
                        </li>
                        <!-- Coaching -->
                        <li class="nav-item dropdown" @click="active = 'coaching'">
                            <a :class="{active:active === 'coaching'}" class="nav-link dropdown-toggle" aria-current="page" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Coaching</a>
                            <!-- <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Joyful Educator</a></li>
                                <li><a class="dropdown-item" href="#">Experience (Mr Seah)</a></li>
                            </ul> -->
                        </li>
                        <!-- Contact Us -->
                        <li class="nav-item" @click="active = 'contact-us'">
                            <a :class="{active:active === 'contact-us'}" class="nav-link" href="#">Contact Us</a>
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
        active: 'home'
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
