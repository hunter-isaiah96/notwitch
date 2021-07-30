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
      light
    >
      <template v-slot:prepend>
        <v-toolbar height="60" elevation="0">
          <v-app-bar-nav-icon
            class="chat-drawer-icon"
            @click.stop="chatDrawer = !chatDrawer"
            :class="{ closed: !chatDrawer }"
          >
            <v-icon :color="chatDrawer ? 'black' : 'white'">{{
              chatDrawer ? "mdi-forwardburger" : "mdi-backburger"
            }}</v-icon>
          </v-app-bar-nav-icon>
          <v-toolbar-title>Stream Chat</v-toolbar-title>
        </v-toolbar>
      </template>
      <div class="chat-navigation-list" v-bar>
        <v-list class="fill-height">
          <v-list-item class="mb-2" v-for="(item, index) in 30" :key="index">
            <v-card flat width="100%">
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
      </div>
      <v-footer color="transparent" inset>
        <v-card flat width="100%">
          <v-card-text>
            <v-text-field
              background-color="grey lighten-1"
              dense
              flat
              hide-details
              rounded
              solo
            ></v-text-field>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="white--text d-flex">
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-cog</v-icon>
            </v-btn>
            <v-btn>Send</v-btn>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-navigation-drawer>
  </div>
</template>

<script>
import Hls from "hls.js";

export default {
  data: () => ({
    chatDrawer: true,
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