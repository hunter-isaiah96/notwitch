<template>
  <div>
    <v-main>
      <div class="main-content-wrapper">
        <div class="video-player">
          <video width="100%" autoplay playerinline ref="videoplayer">
            <source src="http://localhost:8080/live/test.m3u8" />
          </video>
          <div class="player-controls d-flex pa-2">
            <!-- Play/Pause Button -->
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" icon>
                  <v-icon>mdi-pause</v-icon>
                </v-btn>
              </template>
              <span>Play</span>
            </v-tooltip>
            <!-- Mute Button -->
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" icon>
                  <v-icon>mdi-volume-high</v-icon>
                </v-btn>
              </template>
              <span>Mute</span>
            </v-tooltip>
            <v-spacer></v-spacer>
            <!-- Settings Button -->
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" icon>
                  <v-icon>mdi-cog</v-icon>
                </v-btn>
              </template>
              <span>Settings</span>
            </v-tooltip>
            <!-- Theater Mode Button -->
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" icon>
                  <v-icon>mdi-theater</v-icon>
                </v-btn>
              </template>
              <span>Theater Mode</span>
            </v-tooltip>
            <!-- Fullscreen Button -->
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" icon>
                  <v-icon>mdi-fullscreen</v-icon>
                </v-btn>
              </template>
              <span>Fullscreen</span>
            </v-tooltip>
          </div>
        </div>
        <v-card elevation="0">
          <v-list-item three-line>
            <v-list-item-avatar size="50" color="grey"></v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>Three-line item</v-list-item-title>
              <v-list-item-subtitle class="my-2">
                Secondary line text Lorem ipsum dolor sit amet
              </v-list-item-subtitle>
              <v-list-item-subtitle>
                <span class="primary--text">Technology</span>
                <v-chip v-for="item in 4" :key="item" class="ml-2" small>
                  Default
                </v-chip>
              </v-list-item-subtitle>
            </v-list-item-content>
            <div>
              <v-hover v-slot="{ hover }">
                <v-btn color="primary">
                  <v-icon left>{{
                    hover ? "mdi-heart" : "mdi-heart-outline"
                  }}</v-icon>
                  <span>Follow</span>
                </v-btn>
              </v-hover>
            </div>
          </v-list-item>
        </v-card>
      </div>
    </v-main>
    <!-- Side Navigation -->
    <v-navigation-drawer
      class="chat-navigation"
      width="340"
      v-model="chatDrawer"
      app
      clipped
      right
      floating
    >
      <template v-slot:prepend>
        <v-toolbar height="60" elevation="0">
          <v-app-bar-nav-icon
            class="chat-drawer-icon"
            @click.stop="chatDrawer = !chatDrawer"
            :class="{ closed: !chatDrawer }"
          >
            <v-icon>{{
              chatDrawer ? "mdi-forwardburger" : "mdi-backburger"
            }}</v-icon>
          </v-app-bar-nav-icon>
          <v-toolbar-title>Stream Chat</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn @click="currentlyViewing = !currentlyViewing" icon>
            <v-icon>mdi-account-multiple</v-icon>
          </v-btn>
        </v-toolbar>
      </template>
      <v-list class="grey darken-4">
        <v-list-item class="mb-2" v-for="(item, index) in 30" :key="index">
          <v-card flat width="100%" class="transparent">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Isaiah</v-list-item-title>
                <v-list-item-subtitle>
                  I don't know who you are bucko
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-list-item>
      </v-list>
      <v-footer color="grey darken-4" inset>
        <v-card flat width="100%">
          <v-card-text>
            <v-text-field
              placeholder="Send a message"
              dense
              flat
              hide-details
              solo
            ></v-text-field>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="white--text d-flex">
            <v-spacer></v-spacer>
            <v-btn small icon>
              <v-icon small>mdi-cog</v-icon>
            </v-btn>
            <v-btn small>Send</v-btn>
          </v-card-text>
        </v-card>
      </v-footer>
      <v-dialog
        v-model="currentlyViewing"
        transition="dialog-bottom-transition"
        class="current-viewers"
        :retain-focus="false"
        attach
        hide-overlay
        persistent
        no-click-animation
        fullscreen
        scrollable
      >
        <v-card>
          <v-toolbar class="flex-grow-0">
            <v-btn icon dark @click="currentlyViewing = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Users In Chat</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-list class="current-viewers-list">
              <v-subheader>Broadcaster</v-subheader>
              <v-list-item>
                <router-link to="/">User</router-link>
              </v-list-item>
              <v-subheader>Moderators</v-subheader>
              <v-list-item v-for="(index, item) in 3" :key="index">
                <router-link to="/">Moderator {{ item + 1 }}</router-link>
              </v-list-item>
              <v-subheader>Users</v-subheader>
              <v-list-item v-for="(index, item) in 15" :key="index">
                <router-link to="/">User {{ item + 1 }}</router-link>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-dialog>
      <!-- <v-dialog attach v-model="currentlyViewing"> </v-dialog> -->
    </v-navigation-drawer>
  </div>
</template>

<script>
import Hls from "hls.js";

export default {
  data: () => ({
    chatDrawer: true,
    currentlyViewing: false,
  }),
  mounted: function () {
    const video = this.$refs.videoplayer;
    const videoSrc = "http://localhost:8080/live/test.m3u8";
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
    }
  },
};
</script>
<style lang="scss" scoped>
.v-card__text {
  padding: 10px;
}
</style>
<style lang="scss">
.current-viewers {
  &-list {
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .v-dialog {
    height: calc(100% - 60px) !important;
    top: unset;
    bottom: 0;
  }
}
</style>
<style lang="scss" scoped>
video {
  max-height: calc(100vh - 10rem);
}
.video-player {
  position: relative;
  &:hover {
    .player-controls {
      opacity: 1;
    }
  }
  .player-controls {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    transition: opacity 0.3s;
  }
}
.chat-navigation {
  overflow: visible;
}
.chat-drawer-icon {
  &.closed {
    left: -4em;
  }
}
.v-navigation-drawer--close {
  visibility: visible;
}
</style>