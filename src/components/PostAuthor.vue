<template>
  <span class="post-author-info">
    <img :src="avatar" alt="Post author">
    <small>{{ fullName }}</small>
  </span>
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
}
.post .post-author .post-author-info {
  float: left;
  position: relative;
  width: 50%;
}

.post .post-author .post-author-info img {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  object-fit: cover;
  object-position: top;
  margin: 5px;
}

.post .post-author .post-author-info small {
  position: absolute;
  top: 10px;
  left: 35px;
}

.post .post-author .post-author-info + small {
  float: right;
  color: grey;
  padding: 10px;
}

</style>