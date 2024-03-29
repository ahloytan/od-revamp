<template>
    <div id="aboutUs">
        <div class="container">
            <div class="row">
                <h2 class="blue mt-5" data-aos="flip-up">Timeline</h2>
                <Timeline :value="events" align="alternate" class="customized-timeline">
                    <template #marker="slotProps">
                        <span class="custom-marker p-shadow-2" :style="{backgroundColor: slotProps.item.color}">
                            <i :class="slotProps.item.icon"></i>
                        </span>
                    </template>
                    <template #content="slotProps">
                        <Card :data-aos="slotProps.item.animation">
                            <template #title>
                                <span class="fs-small">{{slotProps.item.status}}</span>
                            </template>
                            <template #subtitle>
                                <span class="fs-small">{{slotProps.item.date}}</span>
                            </template>
                            <template #content>
                                <img v-if="slotProps.item.image" :src="getImage(slotProps.item.image)" :alt="slotProps.item.name" class="timeline-img p-shadow-2" />
                                <p class="mt-2 fs-xsmall">{{slotProps.item.text}}</p>
                            </template>
                        </Card>
                    </template>
                </Timeline>
                <!-- <h2 class="blue" data-aos="flip-down">Orange Dolphin's Story</h2> -->
            </div>
        </div>
        <!-- <div class="bg-light bg-gradient">
            <div class="container py-3">
                <p v-for="(paragraph, index) in paragraphs" :key="index" class="text-start fs-xsmall">{{paragraph}}</p>
            </div>
        </div> -->
    </div>
</template>
<script>
import Timeline from 'primevue/timeline';
import Card from 'primevue/card';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css'; 
import 'primeicons/primeicons.css';


export default {
  name: 'AboutUs',
  components: {
    Timeline,
    Card,
  },
  data() {
        return {
            events: [
                {status: 'Celebrating Our 10th Year Anniversary', date: 'September 2022', icon: 'pi pi-thumbs-up', color: '#607D8B', image: '2022.png', animation: 'fade-down-left', text: 'Here we are! Celebrating our 10th year anniversary'},
                {status: 'Partnership With SMU', date: 'September 2021', icon: 'pi pi-search-plus', color: '#FF9800', image: 'gyss.png', animation: 'fade-down-right', text: 'Started our 1st partnership with SMU'},
                {status: 'Partnership With BSS', date: 'September 2018', icon: 'pi pi-megaphone', color: '#673AB7', image: '2018.png', animation: 'fade-down-left', text: 'Outreached to Beatty Secondary School and started Mindfulnessjourney by conducting mindfulness workshops'},
                {status: 'We Are Registered', date: 'September 2017', icon: 'pi pi-id-card', color: '#607D8B', image: '2017.png', animation: 'fade-down-left', text: 'Officially registered as a society with Registry of Society (ROS). Ended our service with BDSS after 8 years.'},
                {status: 'Partnership With GYSS', date: 'September 2013', icon: 'pi pi-heart', color: '#FF9800', image: '2013.png', animation: 'fade-down-right', text: 'Expanded to Guangyang Secondary School (GYSS), exploring on organising other community service projects'},
                {status: 'Project Orange Dolphin', date: 'September 2012', icon: 'pi pi-cog', color: '#673AB7', image: '2012.png', animation: 'fade-down-left', text: 'Officially form ourselves as a society with our first batch of Exco, named Project Orange Dolphin'},
                {status: 'Our First Volunteers', date: 'September 2009', icon: 'pi pi-info-circle', color: '#9C27B0', image: '2009.jpg', animation: 'fade-down-right', text: 'Started with having a group of self-voluntary alumni that helps their junior on Saturdays at Bendemeer Secondary School (BDSS)'},
            ],
            paragraphs: [
                "There once was a dolphin who was injured.",
                "Instead of fellow dolphins ignoring the injured dolphin and leaving it alone to fend itself, a school of dolphins began to swim around the dolphin. This ensured that the dolphin was protected from predators while recovering as the injury would have placed it in a vulnerable state. As the days went by, the injured dolphin finally recovered. ", 
                "Eventually, the moment came when the recovered dolphin instead, becomes a guarding angel for other dolphins that needed help. The school of dolphins leap in joy at the end of the day, basking in the sunset & the orange sun rays. The culture of giving and growing continues.", 
                "This is how the culture started in 2009 which eventually was known as Orange Dolphin in 2012. We wanted to provide assistance to people who needed help – to those that wanted to help themselves, but lacked the necessary resources to do so.", 
                "Dolphins are similar to humans in many ways – not only are they smart mammals, they operate in a group as well. This is extremely similar to human reliance on each other, where interaction is close to inevitable. Dolphins are undoubtedly grateful individuals that look after one another in a united community.",
                "At the end of the day, the dolphins leap in joy, basking in ORANGE – sun rays radiating the values of Open, Reflective, Adventurous to accept, Never give up, Genuine in giving, and Enthusiastic to embrace."
            ]
        }
    },
    mounted(){
    },  
    methods: {
        getImage(imagePath) {
            return require("@/assets/timeline/" + imagePath);
        }
    }
}
</script>
<style scoped lang="scss">
.blue{
    color: $od-blue;
    margin-top: 100px;
}

h2 {
    font-size: 40px;
}

.fs-xsmall{
    font-size: $fs-xs;
}

.fs-small{
  font-size: $fs-s;
}

.timeline-img{
    width: 200px;

    @include breakpoint(tablet){
        width: 400px;
    }   
}

.custom-marker{
    z-index: 1;
    width: 2rem;
    height: 2rem;
    color: #fff;
    display: flex;
    border-radius: 50%;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    -ms-flex-pack: center;
    -ms-flex-align: center;
    justify-content: center;
    -webkit-box-pack: center;
    -webkit-box-align: center;
}

.p-card{
    color: #495057;
    border-radius: 6px;
    background: #ffffff;
    box-shadow: 0 2px 1px -1px rgba(0,0,0,0.15), 0 1px 1px 0 rgba(0,0,0,0.15), 0 1px 3px 0 rgba(0,0,0,0.15);
}

::v-deep(.p-timeline-event-content),
::v-deep(.p-timeline-event-opposite) {
    line-height: 1;
}

@media screen and (max-width: 960px) {
    ::v-deep(.customized-timeline) {
        .p-timeline-event:nth-child(even) {
            flex-direction: row !important;
            
            .p-timeline-event-content {
                text-align: left !important;
            }
        }

        .p-timeline-event-opposite {
            flex: 0;
        }

        .p-card {
            margin-top: 1rem;
        }
    }
}
</style>