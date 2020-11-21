<template>
  <v-app-bar class="header"
      color="white"
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

    <div class="searchFields">

      <input
          v-model="searchInput"
          placeholder="Search..."
      >

      <button>
        Search
      </button>
    </div>

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
    user: state => state.user,
    dropdownMenu: state => [
      {title: state.user.firstname + " " + state.user.lastname},
      {title: state.user.email},
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
  padding: 8px 16px;
  margin: 4px 0;
  color: #ffffff;
  background-color: #01579b;
  border: none;
  border-radius: 4px;
}

button:hover {
  box-shadow: 0 0 5px rgba(38, 50, 56, 0.7);
  cursor: pointer;
}

.header {
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  top: 0;
}

.searchFields {
  padding: 10px;
  display: flex;
 }

</style>