<template>
  <v-app style="background: #0277bd"
  >
    <BrowsePage/>
  </v-app>
</template>

<script>
import BrowsePage from "@/components/BrowsePage";

export default {
  name: 'App',
  components: {BrowsePage},

  data: () => ({
    //
  }),
};
</script>
