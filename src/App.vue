<template>
  <v-app style="background: #0277bd">
    <router-view></router-view>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    created() {
      this.$router.push("/posts");
      this.$store.dispatch("loadData");
    }
  };
</script>
