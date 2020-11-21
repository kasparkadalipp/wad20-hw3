<template>
  <v-container>
    <TheHeader/>
    <Post v-for="post in posts" v-bind="post" :key="post.id"></Post>
  </v-container>
</template>

<script>
import axios from 'axios'
import Post from "@/components/PostItem";
import TheHeader from "@/components/TheHeader";

export default {
  name: "PostsPage",
  components: {TheHeader, Post},
  data: () => ({
    posts: null
  }),
  mounted() {
    axios
        .get('https://private-anon-5c2a2318a7-wad20postit.apiary-mock.com/posts')
        .then(response => (this.posts = response.data))
  }
}
</script>

<style scoped>

</style>