import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    // {
    //     path: '/',
    //     name: 'Home',
    //     component: () => import('../views/Navbar.vue'),
    //     meta: {
    //         title: 'Home',
    //     },
    // },
    {
        path: '/about-us',
        name: 'About Us',
        component: () => import('../views/about-us.vue'),
        meta: {
            title: 'About Us',
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

// router.beforeEach(async (to, _from, next) => {
//     if (to.matched.some(record => record.meta.atLeast1LJ)) {
//         to.query.learningJourneyID ? next() : next({path: '/learningJourney'});
//     }

//     if (to.matched.some(record => record.meta.requiresAuth)) {
//       sessionStorage.getItem("role") ? next() : next({ path: '/', });

//     } else if (to.matched.some(record => record.meta.isAuth)) {
//       sessionStorage.getItem("role") ? next({path: '/learningJourney'}) : next();

//     } else {
//       next();

//     }
//   });

export default router
