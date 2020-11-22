<template>
  <div class="post-author-info">
    <img :src="avatar" alt="Post author">
    <small>{{ fullName }}</small>
  </div>
</template>

<script>
export default {
  name: "PostAuthor",
  props: {
    avatar: String,
    firstname: String,
    lastname: String
  },
  computed: {
    fullName: function () {
      return this.firstname + " " + this.lastname
    }
  }
}
</script>

<style scoped>
img {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  object-fit: cover;
  object-position: top;
  margin: 5px;
}

.post-author-info {
  float: left;
  position: relative;
  width: 80%;
}

small {
  position: absolute;
  top: 10px;
  left: 40px;
}
</style>