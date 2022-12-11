<template>
    <div id="coaching-page">
        <h1 class="blue" id="title" data-aos="zoom-out">Coaching</h1>

        <div class="row" id="content-box">
            <div data-aos="slide-right" class="col-6" id="image-box">
                <img :src="require('@/assets/testimonials/society/leona_chin.png')" alt="">
            </div>

            <div class="col-6" id="text-box">
                <div data-aos="slide-left" id="joyful-educator">
                    <h2 class="blue">Joyful Educator</h2>
                    <p v-html="joyfulEducator.text1"></p>
                    <div id="drive-link">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdf9dHHFT3abgQXC2A8OHrwQ15JyGLPCVOiaRS7dRAdGPvCiw/viewform?usp=sf_link">Place Your Orders Here!</a>    
                    </div>
                    <p v-html="joyfulEducator.text2"></p>
                </div>

                <div data-aos="slide-left" id="experience">
                    <h2 class="blue">Experiences</h2>
                    <p>In terms of working with school, we are a young company who currently based our program at Assumption English School.</p>
                    <p>We are helping AES to manage their students at risk through:</p>
                    <ol>
                        <li>Mentoring</li>
                        <li>Doing workshops for the group which teach them values</li>
                    </ol>
                    <p>We also provide youth worker to take care of their weekly cabin activities</p>
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

#title{
    margin-bottom: 30px;
}

#content-box{

    width: 80%;
    margin: auto;
    
    #image-box{
        img {
            position: relative;
            top: 30%;
            border-radius: 10%;
            aspect-ratio: 1/1;
            height: 40%;
            object-fit: cover;
        }
    }

    #text-box{
    text-align: left;

    #drive-link{
        text-align: center;
        a{
            text-decoration: inherit;
            color: $od-red;
            text-align: center;
    
        }
    }
    }


}
</style>