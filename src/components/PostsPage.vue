<template>
  <div>
    <main>
      <Post v-for="post in posts" v-bind="post" :key="post.id"></Post>
    </main>
  </div>
</template>

<script>
import Post from "@/components/PostItem";
import {mapState} from 'vuex';

export default {
  name: "PostsPage",
  components: {Post},
  computed: mapState({
    posts: state => state.posts
  })
}
</script>

<style scoped>
main {
  width: 80%;
  padding-top: 70px;
  margin: 0 auto;
  background-color: white;
  min-width: 450px;
}
</style>