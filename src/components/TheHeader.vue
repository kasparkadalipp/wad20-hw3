<template>
  <v-app-bar
      app
      color="white"
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

    <input v-model="message" placeholder="edit me">

    <button>
      Search
    </button>

    <div>
      <img @click="toggleDiv" :src= user.avatar>
    </div>

  </v-app-bar>
</template>

<script>
import axios from "axios";

export default {
  name: "TheHeader",
  data: () => ({
    user: null,
    showDropdown: false
  }),
  mounted() {
    axios
        .get('https://private-anon-5c2a2318a7-wad20postit.apiary-mock.com/users/1')
        .then(response => (this.user = response.data))
  },
  methods: {
    toggleDiv () {
      this.showDropdown = !this.showDropdown
    }
  }
}
</script>

<style scoped>
img {
  border-radius: 100%;
  width: 40px;
  height: 40px;
}
button {
  color: blue;
}

</style>