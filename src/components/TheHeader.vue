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

    <v-menu
        v-model="showMenu"
        absolute
        offset-y
        style="max-width: 200px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-card
            class="portrait"
            img=user.avatar
            height="40"
            width="40"
            v-bind="attrs"
            v-on="on"
        ></v-card>
      </template>

      <v-list>
        <v-list-item
            v-for="(item, index) in items"
            :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>


  </v-app-bar>
</template>

<script>
import axios from "axios";

export default {
  name: "TheHeader",
  data: () => ({
    user: null,
    items: [
      { title: this.user.firstname + " " + this.user.lastname },
      { title: this.user.email },
      { title: "Browse" },
      { title: "Log out"}
    ]
  }),
  mounted() {
    axios
        .get('https://private-anon-5c2a2318a7-wad20postit.apiary-mock.com/users/1')
        .then(response => (this.user = response.data))
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