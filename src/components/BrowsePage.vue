<template>
  <main>
    <TheHeader/>
    <BrowseItem
        class="profile-container"
        v-for="profile in profiles"
        v-bind="profile"
        :key="profile.id">
    </BrowseItem>

  </main>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import BrowseItem from "@/components/BrowseItem";
import {mapState} from 'vuex';

export default {
  name: "BrowsePage",
  components: {BrowseItem, TheHeader},
  computed: mapState({
    profiles: state => state.profiles
  }),
  mounted() {
    this.$store.dispatch("loadPosts");
  }
}
</script>

<style scoped>

body {
  height: 100%;
  padding: 0;
  margin: 0;
}

main {
  width: 50%;
  min-width: 450px;
  min-height: 100%;
  margin: auto auto;
  padding: 90px 15px 15px 15px;
  background-color: #ffffff;
}

.profile-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
}

</style>