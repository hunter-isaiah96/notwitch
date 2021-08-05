<template>
  <div>
    <h2 class="text-h2 font-weight-medium">Browse</h2>
    <div>
      <v-tabs
        class="my-6"
        v-model="activeTab"
        background-color="transparent"
        :optional="true"
      >
        <v-tab :to="{ name: 'directory-browse-categories' }" exact>
          Categories
        </v-tab>
        <v-tab :to="{ name: 'all-live-streams' }" exact> Live Channels </v-tab>
      </v-tabs>
      <div class="d-flex mb-5">
        <div>
          <div class="d-inline-flex align-center">
            <span>Filter by</span>
            <v-text-field
              style="width: 250px"
              class="ml-2"
              label="Search Tags"
              append-icon="mdi-magnify"
              dense
              flat
              hide-details
              solo
            ></v-text-field>
          </div>
        </div>
        <v-spacer></v-spacer>
        <div>
          <div class="d-inline-flex align-center">
            <span>Sort by</span>
            <v-select
              style="width: 250px"
              class="ml-2"
              label="Sort By"
              v-model="selectedSortingOption"
              :items="sortOptions"
              item-text="name"
              item-value="id"
              dense
              flat
              hide-details
              solo
            >
            </v-select>
          </div>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    activeTab: 1,
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
