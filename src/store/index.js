import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

const state = {
    posts: []
}

const getters = {
    posts: (state) => state.posts
}

const actions = {
    loadPosts({commit}) {
        axios
            .get('https://private-anon-5c2a2318a7-wad20postit.apiary-mock.com/posts')
            .then(response => commit('setPosts', response.data))
    }
}

const mutations = {
    setPosts(state, posts) {
        state.posts = posts
    }
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})