import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

const state = {
    posts: [],
    userProfile: {}

}

const getters = {
    posts: (state) => state.posts,
    userProfile: (state) => state.userProfile
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
}

const mutations = {
    setPosts(state, posts) {
        state.posts = posts
    },
    setUserProfile(state, user) {
        state.userProfile = user
    },

}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})