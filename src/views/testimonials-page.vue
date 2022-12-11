<template>
    <div id="testimonials">

        <div id="society-testimonials">
            <h1 class="blue" data-aos="zoom-out">Society Testimonials</h1>
            <div v-for="(info, key) in society" :key="key" class="testimonial-box d-flex row" >
                    <div data-aos="fade-down" class="image-container col-lg-4 col-md-12">
                        <div class="image-box">
                            <img :src="require('@/assets/testimonials/society/leona_chin.png')" :alt="info.name">
                        </div>
                    </div>

                    <div  data-aos="fade-down" class="text-container col-lg-8 col-md-12">
                        <div class="text-box">
                            <span v-html="info.testimonial"></span>
                            <br><br>
                            <p class="testimonial-name">- {{info.name}}</p>
                        </div>
                    </div>
            </div>
        </div>

        <div id="education-testimonials">
            <h1 class="blue" data-aos="zoom-out">Education Testimonials</h1>
            <div v-for="(info, key) in education" :key="key" class="testimonial-box d-flex row" >
                    <div  data-aos="fade-down" class="image-container col-lg-4 col-md-12">
                        <div class="image-box">
                            <img :src="require('@/assets/testimonials/society/leona_chin.png')" :alt="info.name">
                        </div>
                    </div>

                    <div class="text-container col-lg-8 col-md-12">
                        <div  data-aos="fade-down" class="text-box">
                            <span v-html="info.testimonial"></span>
                            <br><br>
                            <p class="testimonial-name">- {{info.name}}</p>
                        </div>
                    </div>
            </div>
        </div>

    </div>

</template>

<script>
export default {
    name: 'testimonials-page',
    data(){
        return {
            society: [
                {
                    name: "Leona Chin",
                    role: "Community Service",
                    testimonial: "I was volunteering at a student care back in 2016 whereby I met my former school teacher, Mr Jerry Seah, in BDSS and that’s how I became a part of OD com service since then. I wasn’t a confident person back then, so during one of the projects, Mr Seah told me to take up the project lead. One most important thing that I've learned from Mr Seah during my journey with OD is, nothing is perfect, you will definitely make mistakes in life. Even without any experience, Mr Seah gave me the opportunity to learn and the chance to lead a team.<br /><br /> OD allows me to grow from a person who is not ready to take up any challenges, to become a person who’s anytime ready to take up a new challenge, which is a really big step for me. OD has given me a lot of opportunities to take up roles, to give so much more to the community, participating in home projects for the elderly, planning activities for the children and also guiding them in their studies. To be able to interact and help the elderly makes me understand a lot more about life. Being a part of OD also helped me to grow as a better person and gain positivity. Without the support from OD, Mr Seah, my schoolmates from BDSS and the com service team, I won’t be who I am today. So thank you to everyone of you who has guided me through this journey.<br /><br />I wish OD a happy 10th year anniversary! ", 
                    imagePath: "leona_chin.png"
                },
                {
                    name: "Shawn, Seah En Hai",
                    occupation: "", 
                    testimonial: "OD is more than just an organisation to me. As a Chairperson in Committee Service, i hope that my fellow leader and i would be able to create a platform to give back to the society by Giving and Growing, No words is able to express that feeling when you have accomplise one com svc by one com svc and the smile you have given to the beneficary and eventually your volunteer too. Jerry ( founder of OD) and my group of committee has always been there for me whenever I’ve needed, they stood by me when i was at the lowest of my life, cheer me up when i was the lowest of my life and cover my job scope of area while waiting for me to get back on my knees. 2 years was the duration, it wasn’t easy for them esp to able to cover addition scope as everyone is busying with school/work.<br /><br />No matter what we called ourselves it really doesn’t matter, what matter is what really come out from your heart!", 
                    imagePath: ""
                }, 
                {
                    name: "Toh Si Min Jaclyn",
                    occupation: "", 
                    testimonial: "Being in OD for almost 4 years, i think OD has been improving regardless of teaching methods or personal characters developing or others. It’s been a great journey for me to learn and grow as well. There’s a lot I’ve learned in OD, from values to personal characters. When i was a mentee, learning how to tackle qn like looking for keywords, thinking more in depth like .Being a student coaches now, i have to take up more responsibility and constantly learning skills that will help me in life or in school. I choose to stay because OD once helped me before when i was a mentee and i see great improvement in my science chemistry and also knowing that there are seniors who also being helped by OD too coming back to OD to help out so now I wanted to give back and help out whatever that i can It has great changes in my life because i choose to believe in OD and continue on. <br /><br /> When I was a mentee, knowing that OD can help me and that I constantly put in my best, in the end getting good results in my science. And now coming back OD to help out has given me a great opportunity to grow.", 
                    imagePath: ""
                }
            ], 
            education: [
                  {
                    name: "Leona Chin",
                    role: "Community Service",
                    testimonial: "I was volunteering at a student care back in 2016 whereby I met my former school teacher, Mr Jerry Seah, in BDSS and that’s how I became a part of OD com service since then. I wasn’t a confident person back then, so during one of the projects, Mr Seah told me to take up the project lead. One most important thing that I've learned from Mr Seah during my journey with OD is, nothing is perfect, you will definitely make mistakes in life. Even without any experience, Mr Seah gave me the opportunity to learn and the chance to lead a team.<br /><br /> OD allows me to grow from a person who is not ready to take up any challenges, to become a person who’s anytime ready to take up a new challenge, which is a really big step for me. OD has given me a lot of opportunities to take up roles, to give so much more to the community, participating in home projects for the elderly, planning activities for the children and also guiding them in their studies. To be able to interact and help the elderly makes me understand a lot more about life. Being a part of OD also helped me to grow as a better person and gain positivity. Without the support from OD, Mr Seah, my schoolmates from BDSS and the com service team, I won’t be who I am today. So thank you to everyone of you who has guided me through this journey.<br /><br />I wish OD a happy 10th year anniversary! ", 
                    imagePath: "leona_chin.png"
                },
                {
                    name: "Shawn, Seah En Hai",
                    occupation: "", 
                    testimonial: "OD is more than just an organisation to me. As a Chairperson in Committee Service, i hope that my fellow leader and i would be able to create a platform to give back to the society by Giving and Growing, No words is able to express that feeling when you have accomplise one com svc by one com svc and the smile you have given to the beneficary and eventually your volunteer too. Jerry ( founder of OD) and my group of committee has always been there for me whenever I’ve needed, they stood by me when i was at the lowest of my life, cheer me up when i was the lowest of my life and cover my job scope of area while waiting for me to get back on my knees. 2 years was the duration, it wasn’t easy for them esp to able to cover addition scope as everyone is busying with school/work.<br /><br />No matter what we called ourselves it really doesn’t matter, what matter is what really come out from your heart!", 
                    imagePath: ""
                }, 
                {
                    name: "Toh Si Min Jaclyn",
                    occupation: "", 
                    testimonial: "Being in OD for almost 4 years, i think OD has been improving regardless of teaching methods or personal characters developing or others. It’s been a great journey for me to learn and grow as well. There’s a lot I’ve learned in OD, from values to personal characters. When i was a mentee, learning how to tackle qn like looking for keywords, thinking more in depth like .Being a student coaches now, i have to take up more responsibility and constantly learning skills that will help me in life or in school. I choose to stay because OD once helped me before when i was a mentee and i see great improvement in my science chemistry and also knowing that there are seniors who also being helped by OD too coming back to OD to help out so now I wanted to give back and help out whatever that i can It has great changes in my life because i choose to believe in OD and continue on. <br /><br /> When I was a mentee, knowing that OD can help me and that I constantly put in my best, in the end getting good results in my science. And now coming back OD to help out has given me a great opportunity to grow.", 
                    imagePath: ""
                }
            ]
        }
    }, 
    mounted(){
    },
    methods:{
        getImageEducation(path) {
            return require("@/assets/testimonials/education/" + path);
        }, 
        getImageSociety(path){
            console.log("@/assets/testimonials/society/" + path)
            return require("@/assets/testimonials/society/" + path);
        }

    },
}

</script>
<style scoped lang="scss">
.blue{
    color: $od-blue;
}

h1{
    margin-bottom: 30px;
}

#society-testimonials {

    .testimonial-box:nth-child(odd) {

        .image-container{
            order: 2;
        }
        .text-container{
            order: 1;
        }
    }
}

#education-testimonials {
    .testimonial-box:nth-child(odd) {

        .image-container{
            order: 2;
        }
        .text-container{
            order: 1;
        }
    }
} 

.col-md-12 {
    .image-container{
        order: 1;
        }

    .text-container{
        order: 2;
        }
}

.testimonial-box{
    width: 90%;
    height: fit-content;
    margin:auto;
}

.image-box{
    height: 70%;

    img {
    height: 80%;
    margin: auto;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 50%;
    border: 1px solid $black;
    }
}

.text-box{
    height: fit-content;
    text-align: left;
    background: #fff;
    border: 4px solid $od-red;
    border-radius: 10px;
    padding: 10px;
    
    .testimonial-name{
        color: $od-red;
    }

}



</style>