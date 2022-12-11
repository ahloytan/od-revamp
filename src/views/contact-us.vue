<template>
    <div id="contactUs">
        <h1 id="title">{{title}}</h1>

        <form id="contentBox" @submit.prevent="sendEmail">

            <div class="form-input" id="firstName">
                <label for="first-name" class="form-label">First Name*</label>
                <input ref="firstName" v-model="userInput.firstName" type="text" class="form-control" id="first-name">
            </div>

            <div class="form-input" id="lastName">
                <label for="last-name" class="form-label">Last Name*</label>
                <input v-model="userInput.lastName" type="text" class="form-control" id="last-name">
            </div>

            <div class="form-input" id="email">
                <label for="email-input" class="form-label">Email*</label>
                <input v-model="userInput.email" type="text" class="form-control" id="email-input">
            </div>

            <div class="form-input" id="interest">
                <label for="checkboxes" class="form-label">Interests</label>

                <div v-for="(key, interest) in interests" :key="interest" id="checkboxes">
                    <div class="form-check">
                    <input v-model="interests[interest]" class="form-check-input" type="checkbox" value="" id="{{interest}}">
                    <label class="form-check-label" for="{{interest}}">
                        {{interest}}
                    </label>
                    </div>
                </div>

            </div>

            <div class="form-input" id="comments">
                    <label for="comments-input" class="form-label">Comments | Feedback | Suggestions</label>
                    <textarea v-model="userInput.comments" class="form-control" id="comments-input" rows="3"></textarea>
            </div>

            <div class="form-input" id="comments">
                <button @click="sendEmail()" type="button" class="btn btn-primary">Submit</button>
            </div>


        </form>
    </div>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
    name: 'ContactUs', 
    components: {

    }, 
    data(){
        return {
            title: "Contact Us",
            interests: {
                "Coaching": false,
                "Social": false,
                "Education": false, 
                "Partnership": false
            }, 
            userInput: {
                firstName: "Arthur", 
                lastName: "Hain", 
                email: "arthurhain@gmail.com", 
                comments: "Hello there kenobi.", 
                selectedInterests:[]
            }
        }
    }, 
    mounted() {

    }, 
    methods: {
        handleSubmit(interests, userInput) {
            console.log(interests)
            console.log(userInput)
        }, 
        sendEmail() {
            for (this.interest in this.interests){
                if (this.interests[this.interest]) {
                    this.userInput.selectedInterests.push(this.interest)
                }
            }

            emailjs.send(
                "service_zhxno5e","template_y28mc95", this.userInput, '61tCBexbBAaxeBnxf'
            ).then((result) => {
                    console.log('SUCCESS!', result.text);
                }, (error) => {
                    console.log('FAILED...', error.text);
                });
        }
    }
}
</script>

<style>
#contactUs {
    height: 80%;
    width: 60%;
    text-align: center;
    margin: auto;
}

#title {
    font-size:40px;
    color: #1528B9;
    margin-top: 20px;
}

#contentBox{
    text-align: left;
    width: 80%;
    margin:auto;
}

.form-input:nth-of-type(n+1){
    margin-top: 20px;
}

.form-input:nth-last-child(1){
    margin-bottom: 20px;

}

.btn-primary{
    background-color: #7879F1;
    position: relative;
    left: 45%;
}
</style>
