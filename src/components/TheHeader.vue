<template>
  <header>
    <nav>
      <div class="logo-container">
        <img src="/images/logo.png" alt="postIt">
      </div>
      <div class="search-container">
        <input type="text" name="search">
        <button type="button">Search</button>
      </div>
      <div class="avatar-container">
        <img :src="user.avatar" class="avatar" alt="Me" @click="toggle">
        <div class="dropdown-menu" v-if="showMenu">
          <ul>
            <li>
              <p>{{ user.firstname + " " + user.lastname }}</p>
              <p>{{ user.email }}</p>
            </li>
            <li>
              <router-link to="/browse">Browse</router-link>
            </li>
            <li>
              <router-link to="/login">Log Out</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: "TheHeader",
  data: () => ({
    searchInput: "",
    showMenu: false,
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
  methods: {
    toggle() {
      this.showMenu = !this.showMenu;
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

ul li:nth-child(n+2) {
  padding-bottom: 4px;
  padding-top: 2px;
  border-top: 0.5px solid #d0d0d0;
}

ul li p {
  margin: 0;
  padding-bottom: 4px;
}

header {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
  height: 50px;
}

header:hover {
  box-shadow: 5px -20px 30px 10px #4d4d4d;
}

nav {
  display: flex;
  background-color: #ffffff;
  align-items: center;
  height: 50px;
}

div {
  height: 100%;
  flex-grow: 4;
  padding: 10px;
}

button {
  padding: 8px 16px;
  margin: 4px 0;
  color: #ffffff;
  background-color: #01579b;
  border: none;
  border-radius: 4px;
}

img {
  width: 30px;
  height: 30px;
  margin-left: 15px;
  object-fit: cover;
  object-position: top center;
}

.avatar-container img {
  border-radius: 100%;
}

input {
  box-sizing: border-box;
  height: 30px;
  width: 80%;
  padding: 5px;
  border: 1px solid #e0e0e0;
}

button {
  height: 30px;
  width: 20%;
  margin: 0;
  padding: 4px 5px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.avatar-container {
  margin-right: 15px;
  text-align: right;
}

.dropdown-menu {
  position: absolute;
  background-color: white;
  right: 5px;
  width: auto;
  height: auto;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
  text-align: left;
}
</style>