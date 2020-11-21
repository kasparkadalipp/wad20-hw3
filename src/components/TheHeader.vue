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

    <input v-model="searchInput" placeholder="edit me">

    <button>
      Search
    </button>

    <v-menu
        absolute
        offset-y
        style="max-width: 200px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-card
            class="portrait"
            :img="user.avatar"
            height="40"
            width="40"
            v-bind="attrs"
            v-on="on"
        ></v-card>
      </template>

      <v-list>
        <v-list-item
            v-for="(item, index) in dropdownMenu"
            :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>


  </v-app-bar>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: "TheHeader",
  data: () => ({
    searchInput: "",
  }),
  computed: mapState({
    user: state => state.userProfile,
    dropdownMenu: state => [
      {title: state.userProfile.firstname + " " + state.userProfile.lastname},
      {title: state.userProfile.email},
      {title: "Browse"},
      {title: "Log out"}
    ]

  }),
  mounted() {
    this.$store.dispatch("loadUserProfile");
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