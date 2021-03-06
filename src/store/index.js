import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        user: {},
        posts: [],
        profiles:[]
    },
    actions: {
        loadData({commit}) {
            axios
                .get('https://private-anon-5c2a2318a7-wad20postit.apiary-mock.com/posts')
                .then(response => commit('setPosts', response.data.map(post => Object.assign(post, {liked:false}))))
            axios
                .get('https://private-anon-5c2a2318a7-wad20postit.apiary-mock.com/users/1')
                .then(response => commit('setUserProfile', response.data))
            axios
                .get('https://private-anon-be803d4906-wad20postit.apiary-mock.com/profiles')
                .then(response => commit('setProfiles', response.data.map(profile => Object.assign(profile, {followed:false}))))
        },
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts
        },
        toggleLiked(state, id){
            state.posts = state.posts.map(post => post.id === id ? {...post, liked:!post.liked} : post)
        },
        setUserProfile(state, user) {
            state.user = user
        },
        setProfiles(state, profiles) {
            state.profiles = profiles
        },
        toggleFollowed(state, id){
            state.profiles = state.profiles.map(profile => profile.id === id ? {...profile, followed:!profile.followed} : profile)
        }
    }
})