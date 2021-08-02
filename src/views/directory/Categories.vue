<template>
  <div>
    <v-row class="d-flex flex-wrap" dense>
      <v-col
        :style="{
          minWidth: `calc(100% / ${!navigationDrawer ? 9 : 10})`,
          maxWidth: `calc(100% / ${!navigationDrawer ? 9 : 10})`,
        }"
        v-for="(index, item) in 50"
        :key="index"
      >
        <v-card>
          <v-img
            src="https://i.pinimg.com/236x/b8/2a/3f/b82a3f7b31e990e54600e62df8885c0e--doom-game-doom-video-game.jpg"
          ></v-img>
          <v-card-title>
            <v-list-item class="pa-0">
              <v-list-item-content class="pa-0">
                <v-list-item-subtitle class="mb-1 white--text">
                  Category {{ item + 1 }}
                </v-list-item-subtitle>
                <v-list-item-subtitle class="mb-1 caption font-weight-light">
                  User
                </v-list-item-subtitle>
                <div>
                  <v-chip x-small> Default </v-chip>
                </div>
              </v-list-item-content>
            </v-list-item>
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