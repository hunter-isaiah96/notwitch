<template>
  <v-container class="pt-10">
    <h2 class="text-h2 font-weight-medium">Browse</h2>
    <div>
      <v-tabs class="my-6" background-color="transparent" :optional="true">
        <v-tab :to="{ name: 'directory-categories' }" exact>Categories</v-tab>
        <v-tab :to="{ name: 'all-live-streams' }" exact>Live Channels</v-tab>
      </v-tabs>
      <router-view></router-view>
    </div>
  </v-container>
</template>