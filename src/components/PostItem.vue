<template>
  <v-container>
    <v-img :src="author.avatar" alt="Post author"></v-img>
    <p>{{ fullName }}</p>
    <p>{{ this.createTime }}</p>

    <div v-if="media !== null">
      <v-img class="shrink mr-2" v-if="media.type === 'image'" :src="media.url"></v-img>
      <!-- TODO video     -->
    </div>
    <p :v-if="text !== null">{{ this.text }}</p>
    <v-btn>
      <v-icon>mdi-thumb-up</v-icon>
      {{ this.likes }}
    </v-btn>
  </v-container>
</template>

<script>

export default {
  name: "Post",
  props: {
    author: {
      avatar: String,
      firstname: String,
      lastname: String
    },
    createTime: String,
    likes: String,
    media: {
      type: Object,
      required: false
    },
    text: String
  },
  computed: {
    fullName: function () {
      return this.author.firstname + " " + this.author.lastname
    }
  }
}
</script>

<style scoped>

</style>