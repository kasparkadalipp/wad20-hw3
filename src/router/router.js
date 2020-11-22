import Vue from 'vue'
import VueRouter from 'vue-router'
import BrowsePage from "@/components/BrowsePage";
import PostsPage from "@/components/PostsPage";
import LoginPage from "@/components/LoginPage";

const routes = [
    { path: '/browse', component: BrowsePage },
    { path: '/posts', component: PostsPage },
    { path: '/login', component: LoginPage }
]

Vue.use(VueRouter)

export default new VueRouter({
    routes // short for `routes: routes`
})