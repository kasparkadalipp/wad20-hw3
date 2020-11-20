<template>
  <v-container>
    <v-img :src="post.author.avatar" alt="Post author"></v-img>
    <p>{{fullName}}</p>
    <p>{{ this.post.createTime }}</p>

    <div v-if="post.media !== null">
      <v-img class="shrink mr-2" v-if="post.media.type === 'image'" :src="post.media.url"></v-img>
      <!-- TODO video     -->
    </div>
    <p :v-if="post.text !== null">{{ this.post.text }}</p>
    <v-btn>
      <v-icon>mdi-thumb-up</v-icon>
      {{ this.post.likes }}
    </v-btn>
  </v-container>
</template>

<script>

export default {
  name: "Post",
  props: ["post"],
  computed:{
    fullName: function (){
      return this.post.author.firstname + " " + this.post.author.lastname
    }
  }

}
</script>

<style scoped>

</style>