<template>
  <v-app-bar
      app
      color="primary"
      dark
  >
    <div class="d-flex align-center">
      <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="/images/logo.png"
          transition="scale-transition"
          width="40"
      />
    </div>

    <v-input
        hint="I am hint"
        persistent-hint
    >
      Input
    </v-input>

    <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
    >
      <span class="mr-2">Latest Release</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import axios from "axios";

export default {
  name: "TheHeader",
  data: () => ({
    user: null
  }),
  mounted() {
    axios
        .get('https://private-anon-5c2a2318a7-wad20postit.apiary-mock.com/users/1')
        .then(response => (this.user = response.data))
  }
}
</script>

<style scoped>

</style>