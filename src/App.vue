<template>
  <v-app>
    <Header/>
    <v-main>
      <Posts/>
    </v-main>
  </v-app>
</template>

<script>
import Posts from "@/components/PostsView";
import Header from "@/components/TheHeader";

export default {
  name: 'App',
  components: {Header, Posts},

  data: () => ({
    //
  }),
};
</script>
