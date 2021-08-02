<template>
  <div>
    <v-row dense>
      <v-col
        :style="{
          minWidth: `calc(100% / ${!navigationDrawer ? 5 : 6})`,
          maxWidth: `calc(100% / ${!navigationDrawer ? 5 : 6})`,
        }"
        v-for="(index, item) in 20"
        :key="index"
      >
        <v-card color="transparent" elevation="0">
          <router-link to="/">
            <v-img
              :aspect-ratio="16 / 9"
              src="https://www.gamespace.com/wp-content/uploads/2019/05/doom-enteral-new.jpg"
            >
              <v-container class="fill-height py-0">
                <v-row class="fill-height flex-column">
                  <v-col cols="6">
                    <v-chip class="disable-events" color="red" label small>
                      LIVE
                    </v-chip>
                  </v-col>
                  <v-col class="d-flex align-end disable-events" cols="6">
                    <v-chip class="px-1" color="grey darken-2" label small>
                      200 viewers
                    </v-chip></v-col
                  >
                </v-row>
              </v-container>
            </v-img>
          </router-link>
          <v-card-title class="px-0">
            <v-list-item class="pa-0">
              <v-list-item-avatar
                class="align-self-start my-0"
                size="40"
                color="grey"
                left
              ></v-list-item-avatar>
              <v-list-item-content class="pa-0">
                <v-list-item-subtitle class="d-flex white--text align-center">
                  <div class="flex-grow-1">Live Channel {{ item + 1 }}</div>
                  <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        width="18"
                        height="18"
                        v-bind="attrs"
                        v-on="on"
                        icon
                      >
                        <v-icon size="18">mdi-dots-vertical</v-icon>
                      </v-btn>
                    </template>
                    <v-list dense>
                      <v-list-item>
                        <v-list-item-icon>
                          <v-icon>mdi-eye-off</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Not Interested</v-list-item-title>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-icon>
                          <v-icon>mdi-alert-octagon</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title
                          >Report User {{ item + 1 }}</v-list-item-title
                        >
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </v-list-item-subtitle>
                <v-list-item-subtitle class="caption font-weight-light">
                  User {{ item + 1 }}
                </v-list-item-subtitle>
                <v-list-item-subtitle class="caption font-weight-light">
                  Game
                </v-list-item-subtitle>
                <div>
                  <v-chip
                    to="/"
                    class="mr-1"
                    v-for="item in 2"
                    :key="item"
                    small
                  >
                    Default
                  </v-chip>
                </div>
              </v-list-item-content>
            </v-list-item>
            <!-- <h2>Live Channel {{ item + 1 }}</h2> -->
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      navigationDrawer: "navigationDrawer",
    }),
  },
};
</script>