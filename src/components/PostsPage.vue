<template>
  <div>
    <TheHeader/>
    <main>
      <Post v-for="post in posts" v-bind="post" :key="post.id"></Post>
    </main>
  </div>
</template>

<script>
import Post from "@/components/PostItem";
import TheHeader from "@/components/TheHeader";
import {mapState} from 'vuex';

export default {
  name: "PostsPage",
  components: {TheHeader, Post},
  computed: mapState({
    posts: state => state.posts
  }),
  mounted() {
    this.$store.dispatch("loadPosts");
  }
}
</script>

<style scoped>
main {
  margin-top: 60px;
}
</style>