<template>
    <div id="aboutUs">
        <div class="container">
            <div class="row">
                <h1 class="blue mt-5" data-aos="flip-up" :data-aos-duration="animateSpeed">Timeline</h1>
                <Timeline :value="events" align="alternate" class="customized-timeline">
                    <template #marker="slotProps">
                        <span class="custom-marker p-shadow-2" :style="{backgroundColor: slotProps.item.color}">
                            <i :class="slotProps.item.icon"></i>
                        </span>
                    </template>
                    <template #content="slotProps">
                        <Card :data-aos="slotProps.item.animation" :data-aos-duration="animateSpeed">
                            <template #title>
                                {{slotProps.item.status}}
                            </template>
                            <template #subtitle>
                                {{slotProps.item.date}}
                            </template>
                            <template #content>
                                <img v-if="slotProps.item.image" :src="getImage(slotProps.item.image)" :alt="slotProps.item.name" width="200" class="p-shadow-2" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                                    quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                                <Button label="Read more" class="p-button-text"></Button>
                            </template>
                        </Card>
                    </template>
                </Timeline>
                <h1 class="blue" data-aos="flip-down" :data-aos-duration="animateSpeed">Orange Dolphin's Story</h1>
            </div>
        </div>
        <div class="bg-light bg-gradient">
            <div class="container py-3">
                <p v-for="(paragraph, index) in paragraphs" :key="index" class="text-start fs-small">{{paragraph}}</p>
            </div>
        </div>
    </div>
</template>
<script>
import Timeline from 'primevue/timeline';
import Card from 'primevue/card';
import Button from 'primevue/button';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css'; 
import 'primeicons/primeicons.css';


export default {
  name: 'AboutUs',
  components: {
    Timeline,
    Card,
    Button
  },
  data() {
        return {
            animateSpeed: 500,
            events: [
                {status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg', animation: 'fade-down-right'},
                {status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7', image: 'game-controller.jpg', animation: 'fade-down-left'},
                {status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800', image: 'game-controller.jpg', animation: 'fade-down-right'},
                {status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B', image: 'game-controller.jpg', animation: 'fade-down-left'}
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
            return require("@/assets/images/" + imagePath);
        }
    }
}
</script>
<style scoped lang="scss">
.blue{
    color: $od-blue;
    margin-top: 100px;
}

.fs-small{
    font-size: $fs-xs;

    @include breakpoint(tablet){
        font-size: $fs-m;
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