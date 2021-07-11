import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MovieDetail from "../views/MovieDetail.vue";
import PersonDetail from "../views/PersonDetail.vue";
import Persons from "../views/Persons.vue";
import Movies from "../views/Movies.vue";
import Tv from "../views/Tv.vue";
import TvDetail from "../views/TvDetail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/movies",
    name: "Movies",
    component: Movies,
  },
  {
    path: "/movie/:id",
    name: "Movie",
    props: true,
    component: MovieDetail,
  },
  {
    path: "/persons",
    name: "Persons",
    component: Persons,
  },
  {
    path: "/person/:id",
    name: "Person",
    props: true,
    component: PersonDetail,
  },
  {
    path: "/tv",
    name: "Tv",
    component: Tv,
  },
  {
    path: "/show/:id",
    name: "Show",
    props: true,
    component: TvDetail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
