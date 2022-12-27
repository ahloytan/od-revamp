<template>
    <div id="coaching-page">
        <h2 class="blue" id="title" data-aos="zoom-out">Coaching</h2>

        <div class="row" id="content-box">
            <div class="col-lg-6 row" id="image-box" data-aos="slide-right">
                <img :src="require('@/assets/testimonials/society/leona_chin.png')" alt="">
                <div>
                    <h2 id="educator-name">Seah Fucai Jerry</h2>
                    <span id="educator-role">Director & Founder</span>
                </div>
            </div>

            <div class="col-lg-6" id="text-box" data-aos="slide-left">
                <div id="joyful-educator">
                    <h2 class="title">Joyful Educator</h2>
                    <div id="text">
                        <p v-html="joyfulEducator.text1"></p>
                        <div id="drive-link">
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdf9dHHFT3abgQXC2A8OHrwQ15JyGLPCVOiaRS7dRAdGPvCiw/viewform?usp=sf_link">Place Your Orders Here!</a>    
                        </div>
                        <p v-html="joyfulEducator.text2"></p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return {
            joyfulEducator: {
                text1: "“Happy teachers will change the world.” <br/><br/>I am truly inspired by this phrase and this phrase would not have come at a better time. A lot has been discussed on the well-being of our students but the teacher in me felt that we should also take care of the well-being of our teachers. I came across this phrase in 2018 when I started to pick up the practice of mindfulness. This journey has brought more clarity and purpose to my teaching. True enough, 15 years as an educator, I would like to sum up what has kept me going strong as ORANGE. ORANGE as my guiding values in how I apply mindfulness to my daily teaching, a simple practice to stop and check-in, reflecting on being Open, Reflective, Adventurous, Never give up, Genuine, and Enthusiastic. <br/><br/>Today I decided to share my practice through creating a journal, 30 Days Of Being A Joyful Educator, to share what has benefited me with others educators out there and connect with them and support them in my small ways. <br/><br/>It is a simple postcard size journal that is easy to bring along. It contains some simple mindful tips and 30 questions based on the ORANGE value to reflect on, providing more clarity. You could be a teacher who wanted to find something to take care of your well-being, or even a student or parent who is looking at getting a meaningful gift to show appreciation to our teachers since Teacher’s Day is coming. This will be sold at $5 each. Below are samples of what is in the journal and how some educators have used it. If you are interested to get one, please feel up the form below and I will connect with you shortly. If you are interested to get one, please feel up the form below and I will connect with you shortly. If you are keen to order in bulk, please feel free to contact me at groworangedolphin@gmail.com. <br/>", 
                text2: "<br/>If what I shared here connects with you, feel free to comment. If you have gotten this journal and is using it, please take picture and share our practice with others by posting on Instagram and #orangeEducators so that we are aware that we are not alone. Let’s learn and encourage each other to begin anew with ORANGE. Please help to like and share. Thank you!"
            }, 
            experiences: {

            }, 

        }
    }, 
    mounted(){
    
    }, 
    methods: {

    }
}
</script>


<style scoped lang="scss">
.blue{
    color: $od-blue;
}

h2 {
    font-size: 40px;
}

#title{
    margin:50px 0px 0px 0px;
}

#content-box{
    width: 80%;
    margin: auto;

    #text{
        margin-top: 10px;
        color: white;
    }
    
    #image-box{
        // height: fit-content;
        background-color: #FFFFFF;
        display: flex;
        img {
            margin: auto;
            aspect-ratio: 1/1;
            object-fit: cover;
        }

        #educator-name {
            color: #1B21C4;
        }

        #educator-role {
            color: $od-red;
        }
    }

    #text-box{
    padding: 50px;
    text-align: left;
    background-color: #333333;


    .title {
        color: #48CCF4;
    }

    #drive-link{
        text-align: center;
        a{
            text-decoration: inherit;
            color: $od-red;
            text-align: center;
            font-size: 20px;
        }
    }
    }
}

@media screen and (max-width: 990px) {
    #content-box {
        width: 100%;

        #image-box{
            padding: 0px 0px 30px 0px;
            margin: 0px;

            #educator-name{
                margin:0px;
                padding: 20px 0px 0px 0px;
            }
            img {
                aspect-ratio: 1/1;
                width: 100%;
                padding: 0px;
            }
        }
        
        #text-box {
            padding: 20px;
        }
    }

    #joyful-educator {
        margin-top:30px;
    }


}
</style>