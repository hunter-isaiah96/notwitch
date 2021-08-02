<template>
  <v-container class="pt-10">
    <h2 class="text-h2 font-weight-medium">Browse</h2>
    <div>
      <v-tabs class="transparent">
        <v-tab to="/directory">Categories</v-tab>
        <v-tab to="/directory/all">Live Channels</v-tab>
      </v-tabs>
      <router-view></router-view>
    </div>
  </v-container>
</template>