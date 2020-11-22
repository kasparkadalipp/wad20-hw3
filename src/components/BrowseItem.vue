<template>
  <div class="profile">
    <div class="mask">
      <img :src="avatar" alt="User">
    </div>
    <p>{{ fullName }}</p>
    <button @click="toggleFollowed(id)" v-if="followed" class="followed">Followed</button>
    <button @click="toggleFollowed(id)" v-else class="follow">Follow</button>
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
  methods: mapMutations([
    'toggleFollowed'
  ]),

}
</script>

<style scoped>
p {
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

img {
  max-width: 100%;
  min-height: 100%;
  object-fit: cover;
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

button {
  display: block;
  margin: 0 auto 4px auto;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
}

</style>