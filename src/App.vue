<template>
  <v-app style="background: #0277bd">
    <TheHeader v-if="$route.fullPath!='/login'"> </TheHeader>
    <router-view></router-view>
  </v-app>

</template>

<script>

import TheHeader from "@/components/TheHeader";
export default {
  name: 'App',
  components: {TheHeader},

  data: () => ({
    //
  }),
};
</script>
