import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Portfolio from '../views/Portfolio.vue'
import Contacts from "../views/Contacts.vue";
import Parcours from "../views/Parcours.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes:[{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/About',
        name: 'About',
        component: About
    },
    {
        path: '/Portfolio',
        name: 'Portfolio',
        component: Portfolio
    },
    {
        path: '/Contacts',
        name: 'Contacts',
        component: Contacts
    },
    {
        path: '/Parcours',
        name: 'Parcours',
        component: Parcours
    },
    // 404
    // {
    //     path: '/:catchALL(.)',
    //     name: 'NotFound',
    //     component: NotFound
    // }
],

scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      // This ensures that if hash is provided to router.push it works as expected.
      //  & since we have used "behavior: 'smooth'" the browser will slowly come to this hash position.
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    else {
        return { top: 0 }
    }
  }
});


export default router;