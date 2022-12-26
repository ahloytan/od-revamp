<template>
    <div id="testimonials">

        <div id="society-testimonials">
            <h2 class="blue" data-aos="zoom-out">Society Testimonials</h2>
            <div v-for="(info, key) in society" :key="key" class="testimonial-box d-flex row" data-aos="fade-down">
                    <div class="image-container col-lg-6 col-md-12">
                        <div class="image-box">
                            <img :src="getImage1(info.imagePath)" :alt="info.name">
                        </div>
                    </div>

                    <div  class="text-container col-lg-6 col-md-12">
                        <div class="text-box">
                            <div class="testimonial-name">
                                <h2>{{info.name}}</h2>
                            </div>
                            <div class="q1">
                                <h4 class="question">Why did you join OD?</h4>
                                <span v-html="info.q1"></span>
                            </div>
                            <br>
                            <div class="q2">
                                <h4 class="question">What have you given to help in growing?</h4>
                                <span v-html="info.q2"></span>
                            </div>
                            <br>
                            <div class="q3">
                                <h4 class="question">How has this journey in OD help you to grow?</h4>
                                <span v-html="info.q3"></span>
                            </div>
                        </div>
                    </div>
            </div>
        </div>

        <div id="education-testimonials">
            <h1 class="blue" data-aos="zoom-out">Education Testimonials</h1>
            <div v-for="(info, key) in education" :key="key" class="testimonial-box d-flex row" data-aos="fade-down">
                    <div  class="image-container col-lg-6 col-md-12">
                        <div class="image-box">
                            <img :src="getImage1(info.imagePath)" :alt="info.name">
                        </div>
                    </div>

                    <div  class="text-container col-lg-6 col-md-12">
                        <div class="text-box">
                            <div class="testimonial-name">
                                <h2>{{info.name}}</h2>
                            </div>
                            <div class="q1">
                                <h4 class="question">Why did you join OD?</h4>
                                <span v-html="info.q1"></span>
                            </div>
                            <br>
                            <div class="q2">
                                <h4 class="question">What have you given to help in growing?</h4>
                                <span v-html="info.q2"></span>
                            </div>
                            <br>
                            <div class="q3">
                                <h4 class="question">How has this journey in OD help you to grow?</h4>
                                <span v-html="info.q3"></span>
                            </div>
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
                    name: "Dexter Chua",
                    role: "Community Service",
                    q1: "I decided to join OD because I want to make a positive impact in the youth that I am mentoring.", 
                    q2: "I guess my knowledge of life experience to the youth for them to understand that even though studies are important, it is not the most important thing in life.", 
                    q3: "One of the key benefit/takeaway pointer is that OD focuses on growth not only to their clients but also their volunteers. Organising workshop and even pairing them up with mentors for their career goals and communication workshop to help one improve on their soft skills. That is the biggest takeaway because at the end of the day, what matters the most is soft skills when you interact with people. It happens on a daily basis and one need such skills regardless on where they are in life.",
                    imagePath: "dexter_chua.jpeg"
                },
                {
                    name: "Rachel Ong",
                    role: "Community Service",
                    q1: "I enjoy helping people and since I've got volunteer experience in helping the elderly and those primary school students and below, I wanted to try coaching the secondary school students.", 
                    q2: "In terms of what I have contributed to the students, I would say my personal experience back when I was in secondary school, as well as certain life advice.", 
                    q3: " I felt like having conversations with the students helped to better converse with my brother, who also happen to be sec 4 this year and just completed his o'levels as well. Being able to see things from the perspective of the GY students helped me relate better to my brother and be more patient when communicating with him.",
                    imagePath: "rachel_ong.jpg"
                }, 
                {
                    name: "Constance",
                    role: "Community Service",
                    q1: "To help students who are struggling with their secondary school subjects by providing academic and non-academic advice. I saw OD as a nice initiative and platform for students like myself to help younger students do better in their education journey and have the courage to persevere even when they are not confident of their abilities.", 
                    q2: "I've given advice and encouragement to the students in the OD mentoring program. Sometimes, just providing a listening ear to the students really goes a long way in providing support to them. :)",
                    q3: "I believe that through the experience of mentoring a small group of students in their academics, it allows me to go beyond tapping on my academic knowledge to help them. The journey of mentoring them helped me to develop soft skills such as actively listening to their stories and worries that they may share with me.",
                    imagePath: "constance.jpg"
                }
            ], 
            education: [
                  {
                    name: "Chua Sim Yee",
                    role: "Community Service",
                    q1: "I joined OD as I thought that the mentoring programme is very meaningful. It provides me with an opportunity to support and encourage young individuals to maximize their potential, develop their skills and become the person they want to be.", 
                    q2: "I have shared useful study tips and knowledge gained through my experiences with my mentees. Furthermore, I have helped my mentees in setting realistic goals and have guided them in achieving these goals along the way.", 
                    q3: "It allows me to enhance my practical skills required in the working world. For example, leadership, problem solving skills and communication skills are developed as I mentored my mentees. In addition, it helps me to better manage relationships with different backgrounds and personalities.",
                    imagePath: "chua_sim_yee.jpg"
                },
                {
                    name: "Rayvaithi Alagappan",
                    role: "Community Service",
                    q1: "OD has influenced my confidence in Academic subjects that I wasn't good in. The support I received from my peers and Mr Seah has shaped my view in how I view challenges. That allowed me to jump my grades from F9 to B3 within 6 months. So I'm still in the organization to proof that one need not have to be best in all subjects or challenges we face. When we try we discover our true path to our potential.", 
                    q2: "My experience and creative knowledge in executing brand collaterals and marketing materials(Offline/ Online).", 
                    q3: "OD has allowed me to pursue my dream in the creative path. Today I'm building a startup (Answered.sg) that not only supports educators in translating their teaching materials effectively online; but also be valued and accessed by the public for their relentless hard work.",
                    imagePath: "Rayvaithi_Alagappan.jpeg"
                }, 
                {
                    name: "Dennis Chew",
                    role: "Community Service",
                    q1: "To participate in the growth and development of youths in Singapore", 
                    q2: "Time but lesser lately. It's a joy to interact with youths and still a joy catching up with them and old friends.", 
                    q3: "Finding the little pockets of joy in mentoring youths and seeing them develop into young adults. We all need friends and mentors around to help us to grow and learn sometimes.",
                    imagePath: "dennis_chew.jpg"
                }
            ]
        }
    }, 
    mounted(){
    },
    methods:{
    getImage1(imagePath) {
        return require("@/assets/images/" + imagePath);
    }
    },
}

</script>
<style scoped lang="scss">

.blue{
    color: $od-blue;
}

h2 {
    font-size: 40px;
}


#testimonials {
    margin-top: 50px;
}

#society-testimonials, #education-testimonials {
    margin-top: 20px;

    .testimonial-box:nth-child(odd) {
        background-color: #FFFFFF;
        .image-container{
            order: 2;
        }
        .text-container{
            order: 1;

        .question {
            color: #1B21C4;
        }

        }
    }

    .testimonial-box:nth-child(even){
        background-color:#333333;
        color:#FFFFFF;

        .question {
            color: #48CCF4;
        }
    }
}


.testimonial-box{
    // height: fit-content;
    min-height: 200px;
    margin:auto;
}

.image-box{
    img {
        margin: auto;
        height: 100%;
        width: 100%;
        aspect-ratio: 1/1;
        object-fit: cover;
        object-position: right top;
    }
}

.text-container {
    display: flex;
    .text-box{
        margin: auto;
        text-align: left;
        padding: 10px;

        .testimonial-name{
            color: $od-red;
        }
    }
}


@media screen and (max-width: 990px) {
    .testimonial-box{

    .image-container{
        order: 2;
        padding-left: 0px;
        padding-right: 0px;

        .image-box{
            padding-bottom: 10px;
        }
    }
    .text-container{
        order: 1;
    }
}
}

</style>