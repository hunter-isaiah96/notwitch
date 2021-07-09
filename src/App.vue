<template>
  <v-app id="inspire">
    <v-navigation-drawer color="secondary" app mini-variant permanent floating>
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar color="primary"> I </v-list-item-avatar>
        </v-list-item>
      </v-list>
      <v-list nav dense>
        <v-list-item v-for="(item, index) in sidebarItems" :key="index" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="secondary" app>
      <v-toolbar-title>NoTwitch</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-responsive max-width="260">
        <v-text-field
          placeholder="Search"
          dense
          flat
          hide-details
          rounded
          solo-inverted
        ></v-text-field>
      </v-responsive>
      <v-menu top v-for="(item, index) in sidebarItems" :key="index">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon color="primary" dark v-bind="attrs" v-on="on">
            <v-icon>{{ item.icon }}</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in sidebarItems" :key="index">
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <!--  -->
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    sidebarItems: [
      {
        name: "Search",
        icon: "mdi-magnify",
      },
      {
        name: "Gamepad",
        icon: "mdi-gamepad",
      },
      {
        name: "Heart",
        icon: "mdi-heart",
      },
      {
        name: "Community",
        icon: "mdi-account-multiple",
      },
    ],
  }),
};
</script>