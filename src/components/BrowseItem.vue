<template>
  <div class="profile">
    <div class="mask">
      <img :src="avatar" alt="User">
    </div>
    <p>{{ fullName }}</p>
    <div class="browse-actions">
      <button @click="toggleFollowed(id)" v-if="followed" class="followed">Followed</button>
      <button @click="toggleFollowed(id)" v-else class="follow">Follow</button>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex';

export default {
  name: "BrowseItem",
  props: {
    id: Number,
    firstname: String,
    lastname: String,
    avatar: String,
    followed: Boolean
  },
  computed: {
    fullName: function () {
      return this.firstname + " " + this.lastname
    }
  },
  methods: {
    ...mapMutations([
      'toggleFollowed'
    ]),
  },
}
</script>

<style scoped>

.profile {
  display: inline-block;
  background-color: #fefefe;
  border-style: groove;
  border-width: 1px;
  border-radius: 5px;
  padding: 2px;
}

.profile p {
  text-align: center;
  font-weight: bold;
  font-size: larger;
}

.mask {
  margin: 15px auto;
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
}

.mask img {
  max-width: 100%;
  min-height: 100%;
  object-fit: cover;
}

.profile button {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.follow {
  background-color: #82008f;
  color: white;
}

.followed {
  background-color: #fefefe;
  color: #82008f;
  border: 1px #82008f solid;
  border-radius: 4px;
}
</style>