import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/home-page.vue'),
        meta: {
            title: 'Home',
        },
    },
    {
        path: '/about-us',
        name: 'About Us',
        component: () => import('../views/about-us.vue'),
        meta: {
            title: 'About Us',
        },
    },
    {
        path: '/society-page',
        name: 'Society',
        component: () => import('../views/society-page.vue'),
        meta: {
            title: 'Society',
        },
    },
    {
        path: '/education-page',
        name: 'Education',
        component: () => import('../views/education-page.vue'),
        meta: {
            title: 'Education',
        },
    },
    {
        path: '/testimonials-page',
        name: 'Testimonials',
        component: () => import('../views/testimonials-page.vue'),
        meta: {
            title: 'Testimonials',
        },
    },
    {
        path: '/coaching-page',
        name: 'Coaching',
        component: () => import('../views/coaching-page.vue'),
        meta: {
            title: 'Coaching',
        },
    },
    {
        path: '/contact-us',
        name: 'Contact Us',
        component: () => import('../views/contact-us.vue'),
        meta: {
            title: 'Contact Us',
        },
    },
    {
        path: '/forbidden',
        name: 'Forbidden',
        component: () => import(/* webpackChunkName: "403" */ '../views/error-403.vue'),
        meta: {
            title: 'Forbidden',
        },
    },
    {
        //https://stackoverflow.com/questions/63526486/vue-router-catch-all-wildcard-not-working
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: () => import(/* webpackChunkName: "404" */ '../views/error-404.vue'),
        meta: {
            title: 'NotFound',
        },
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach(async (to, _from, next) => {
    to.name == "NotFound" ? next({path: '/'}) : next();
});

export default router
