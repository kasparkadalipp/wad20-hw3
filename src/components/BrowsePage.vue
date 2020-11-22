<template>

  <main>
    <BrowseItem
        class="profile-container"
        v-for="profile in profiles"
        v-bind="profile"
        :key="profile.id">
    </BrowseItem>

  </main>
</template>

<script>


import BrowseItem from "@/components/BrowseItem";
import {mapState} from 'vuex';

export default {
  name: "BrowsePage",
  components: {BrowseItem},
  computed: mapState([
    'profiles'
  ])
}
</script>

<style scoped>


main {
  width: 50%;
  min-width: 450px;
  min-height: 100%;
  margin: auto auto;
  padding: 90px 15px 15px 15px;
  background-color: #ffffff;
}

.profile-container {
  display: inline-flex;
  flex-direction: column;
  width: 45%;
  margin: 10px;
  border-style: groove;
  border-width: 1.5px;
  border-radius: 5px;
}

</style>