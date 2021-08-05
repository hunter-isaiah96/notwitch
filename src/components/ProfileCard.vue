<template>
  <v-hover v-slot="{ hover }">
    <v-card color="transparent" elevation="0">
      <v-img
        :aspect-ratio="16 / 9"
        src="https://www.gamespace.com/wp-content/uploads/2019/05/doom-enteral-new.jpg"
      >
        <v-list-item class="fill-height profile-card" three-line>
          <v-list-item-content>
            <v-list-item-title :class="{ 'd-invisible': !hover }">
              <div>
                <v-btn color="primary" small>Add Friend</v-btn>
              </div>
            </v-list-item-title>
            <v-list-item-subtitle class="d-flex flex-column align-center">
              <router-link :to="user.url">
                <div class="d-flex flex-column align-center">
                  <v-avatar size="40">
                    <img :src="user.images.avatar" alt="John" />
                  </v-avatar>
                  <span class="subtitle-2 white--text">
                    {{ user.displayName }}
                  </span>
                </div>
              </router-link>
            </v-list-item-subtitle>
            <v-list-item-subtitle
              class="d-flex align-center"
              :class="{ 'd-invisible': !hover }"
            >
              <v-hover v-slot="{ hover }">
                <v-btn
                  class="rounded-sm"
                  :color="hover ? 'red' : 'green'"
                  elevation="0"
                  height="30"
                  x-small
                  fab
                  tile
                >
                  <v-icon color="black">
                    {{ hover ? "mdi-heart-broken" : "mdi-heart" }}
                  </v-icon>
                </v-btn>
              </v-hover>
              <v-menu offset-y :close-on-content-click="false">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="rounded-sm"
                    color="primary"
                    elevation="0"
                    height="30"
                    v-bind="attrs"
                    v-on="on"
                    x-small
                    fab
                    tile
                  >
                    <v-icon color="white"> mdi-chevron-down </v-icon>
                  </v-btn>
                </template>
                <v-card max-width="275">
                  <v-toolbar dense>
                    <v-toolbar-title class="mr-10 subtitle-1"
                      >Notifications
                    </v-toolbar-title>

                    <v-spacer></v-spacer>

                    <v-switch
                      prepend-icon="mdi-check"
                      inset
                      hide-details
                    ></v-switch>
                  </v-toolbar>
                  <p class="subtitle-2 ma-0 pa-5">
                    Opt in to notifications to receive updates on this channel's
                    activity, including when they go live.
                  </p>
                </v-card>
              </v-menu>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                prepend-icon="mdi-message"
                height="30"
                tile
                small
              >
                <v-icon color="white" left> mdi-chat-outline </v-icon>
                Whisper
              </v-btn>
              <v-card> </v-card>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-img>
    </v-card>
  </v-hover>
</template>
<script>
export default {
  props: {
    user: {
      type: Object,
      require: true,
    },
  },
  data: () => ({}),
};
</script>
<style lang="scss" scoped>
.profile-card {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>