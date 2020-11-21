<template>
  <v-container>
    <TheHeader/>
    <Post v-for="post in posts" v-bind="post" :key="post.id"></Post>
  </v-container>
</template>

<script>
import Post from "@/components/PostItem";
import TheHeader from "@/components/TheHeader";

export default {
  name: "PostsPage",
  components: {TheHeader, Post},
  computed: {
    posts() {
      return this.$store.getters.posts
    }
  },
  mounted() {
    this.$store.dispatch("loadPosts");
  }

}
</script>

<style scoped>

</style>