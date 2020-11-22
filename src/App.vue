<template>
  <v-app style="background: #0277bd">
    <TheHeader v-if="$route.fullPath !== '/login'"></TheHeader>
    <router-view></router-view>
  </v-app>

</template>

<script>

import TheHeader from "@/components/TheHeader";

export default {
  name: 'App',
  components: {TheHeader},
  created() {
    this.$router.push("/posts");
    this.$store.dispatch("loadProfiles");
    this.$store.dispatch("loadPosts");
    this.$store.dispatch("loadUserProfile");
  }
};
</script>
