import { createRouter, createWebHashHistory } from "vue-router";
const  Layout  =  () => import('views/Layout/index.vue')
const  Home  =  () => import('views/home/index.vue')
const  Football  = () =>  import('views/football/index.vue')
const  Basketball  = () =>  import('views/basketball/index.vue')
const  Gaming  =  () => import('views/gaming/index.vue')
const  Live  =  () => import('views/live/index.vue')
const  WorldCup  =  () => import('views/worldCup/index.vue')
const  News  =  () => import('views/news/index.vue')
const routes = [
  {
    path: "/",
    redirect:"/home",
    component: Layout,
    children:[
      {
        path: "home",
        name: "home",
        component: Home,
      },
      {
        path: "football",
        name: "football",
        component: Football
      },
      {
        path: "basketball",
        name: "basketball",
        component: Basketball
      },
      {
        path: "gaming",
        name: "gaming",
        component: Gaming
      },
      {
        path: "live",
        name: "live",
        component: Live
      },
      {
        path: "worldCup",
        name: "worldCup",
        component: WorldCup
      },
      {
        path: "news",
        name: "news",
        component: News,
      }
    ]
  },

];

const Router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default Router;