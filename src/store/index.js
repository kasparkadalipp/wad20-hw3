import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

const state = {
    user: {},
    posts: [],
    profiles:[]
}

const getters = {
    posts: state => state.posts,
    userProfile: state => state.user,
    profiles: state => state.profiles
}

const actions = {
    loadPosts({commit}) {
        axios
            .get('https://private-anon-5c2a2318a7-wad20postit.apiary-mock.com/posts')
            .then(response => commit('setPosts', response.data))
    },
    loadUserProfile({commit}) {
        axios
            .get('https://private-anon-5c2a2318a7-wad20postit.apiary-mock.com/users/1')
            .then(response => commit('setUserProfile', response.data))
    },
    loadProfiles({commit}) {
        axios
            .get('https://private-anon-be803d4906-wad20postit.apiary-mock.com/profiles')
            .then(response => commit('setProfiles', response.data))
    },
}

const mutations = {
    setPosts(state, posts) {
        state.posts = posts
    },
    setUserProfile(state, user) {
        state.user = user
    },
    setProfiles(state, user) {
        state.user = user
    },
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})