<template>
    <div id="aboutUs">
        <div class="container">
            <div class="row">
                <h1 class="mt-5">OD's Story</h1>
                <p class="text-start">Who are we?</p>
                <p class="text-start">We started from a non-profit society formed in 2012 and officially registered in 2017. We started the society because we believe everyone deserved to grow. When we give wellness to ourselves, growth will become natural. We believe in giving and growing together.</p>
                <p class="text-start">In 2019, there is a opportunity for us to take a step forward to share what has worked as we started to build our activities based on our ORANGE framework together with mindfulness. We started a company to sustain our non-profit society so that we can grow and share our program with more people and hopefully they will find it beneficial and join our community.</p>
                <h1>Timeline</h1>
                <Timeline :value="events" align="alternate" class="customized-timeline">
                    <template #marker="slotProps">
                        <span class="custom-marker p-shadow-2" :style="{backgroundColor: slotProps.item.color}">
                            <i :class="slotProps.item.icon"></i>
                        </span>
                    </template>
                    <template #content="slotProps">
                        <Card>
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
            events: [
                {status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg'},
                {status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7'},
                {status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800'},
                {status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B'}
            ],
        }
    },
    methods: {
        getImage(imagePath) {
            return require("@/assets/images/" + imagePath);
        }
    }
}
</script>
<style scoped>
.custom-marker{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 2rem;
    height: 2rem;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    color: #fff;
    border-radius: 50%;
    z-index: 1;
}

.p-card{
    background: #ffffff;
    color: #495057;
    box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
    border-radius: 6px;
}
</style>