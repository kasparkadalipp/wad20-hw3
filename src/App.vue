<template>
  <v-app>
    <PostsPage/>
  </v-app>
</template>

<script>
import PostsPage from "@/components/PostsPage";

export default {
  name: 'App',
  components: {PostsPage},

  data: () => ({
    //
  }),
};
</script>
