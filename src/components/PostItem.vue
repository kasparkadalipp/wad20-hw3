<template>
  <div class="post">
    <div class="post-author">
      <PostAuthor v-bind="author"></PostAuthor>
      <small>{{ createTime }}</small>
    </div>
    <PostMedia v-if="media !== null" v-bind="media"></PostMedia>
    <p :v-if="text !== null">{{ text }}</p>
    <v-btn
        class="ml-2 mb-4"
        @click="toggleLiked(id)"
        :color="liked ? 'primary' : 'secondary'"
    >
      <v-icon>mdi-thumb-up</v-icon>
      {{ likes }}
    </v-btn>
  </div>
</template>

<script>

import PostMedia from "@/components/PostMedia";
import PostAuthor from "@/components/PostAuthor";
import {mapMutations} from "vuex";

export default {
  name: "Post",
  components: {PostAuthor, PostMedia},
  props: {
    id: Number,
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
    text: String,
    liked: Boolean
  },
  methods: mapMutations([
    'toggleLiked'
  ]),

}
</script>

<style scoped>
p {
  font-weight: bold;
  margin: 10px;
}

.post {
  background-color: white;
  width: 80%;
  min-width: 450px;
  margin: 15px auto;
  box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
  border-radius: 5px;
}

.post-author {
  width: 100%;
  height: 50px;
  padding: 10px;
}

.post-author-info + small {
  float: right;
  color: grey;
  padding: 10px;
}
</style>