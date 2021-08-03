<template>
  <div>
    <h2 class="text-h2 font-weight-medium">Following</h2>
    <div>
      <v-tabs class="my-6" background-color="transparent">
        <v-tab :to="{ name: 'directory-overview' }" exact>Overview</v-tab>
        <v-tab :to="{ name: '' }" exact>Live</v-tab>
        <v-tab :to="{ name: '' }" exact>Videos</v-tab>
        <v-tab :to="{ name: '' }" exact>Hosts</v-tab>
        <v-tab :to="{ name: '' }" exact>Categories</v-tab>
        <v-tab :to="{ name: '' }" exact>Channels</v-tab>
      </v-tabs>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    selectedSortingOption: 1,
  }),
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
    sortOptions() {
      return this.$route.name == "directory-categories"
        ? [
            {
              id: 1,
              name: "Recommended for you",
            },
            {
              id: 2,
              name: "Viewers (High to Low)",
            },
          ]
        : [
            {
              id: 1,
              name: "Recommended for you",
            },
            {
              id: 2,
              name: "Viewers (High to Low)",
            },
            {
              id: 3,
              name: "Viewers (Low to High)",
            },
            {
              id: 4,
              name: "Recently Started",
            },
          ];
    },
  },
};
</script>
