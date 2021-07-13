<template>
  <v-app id="app">
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
    <v-app-bar color="secondary" height="72" app clipped-right flat>
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
    <v-router>
      <v-main>
        <div class="main-content-wrapper">
          <video width="100%" controls>
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
          </video>
          <v-card class="mx-auto" max-width="344" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="text-overline mb-4">OVERLINE</div>
                <v-list-item-title class="text-h5 mb-1">
                  Headline 5
                </v-list-item-title>
                <v-list-item-subtitle
                  >Greyhound divisely hello coldly
                  fonwderfully</v-list-item-subtitle
                >
              </v-list-item-content>

              <v-list-item-avatar
                tile
                size="80"
                color="grey"
              ></v-list-item-avatar>
            </v-list-item>

            <v-card-actions>
              <v-btn outlined rounded text> Button </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </v-main>
      <v-navigation-drawer
        class="chat-navigation"
        width="340"
        app
        clipped
        right
        floating
        light
      >
        <template v-slot:prepend>
          <v-toolbar height="60" elevation="0">
            <v-app-bar-nav-icon>
              <v-icon>mdi-forwardburger</v-icon>
            </v-app-bar-nav-icon>

            <v-toolbar-title>Profile</v-toolbar-title>
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
                      I don't know who the hell you are bucko
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
    </v-router>
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
<style lang="scss">
html {
  overflow: hidden !important;
}
.v-main {
  height: 100vh;
}

.chat-navigation .v-navigation-drawer__content {
  display: flex;
  flex-direction: column;
  .chat-navigation-list {
    flex: 1;
    overflow: hidden;
  }
  .v-list {
    overflow: auto;
  }
}
.main-content-wrapper {
  height: 100%;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>

<style lang="scss">
$bg-color: purple;
.vb > .vb-dragger {
  z-index: 5;
  width: 12px;
  right: 0;
}

.vb > .vb-dragger > .vb-dragger-styler {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform: rotate3d(0, 0, 0, 0);
  transform: rotate3d(0, 0, 0, 0);
  -webkit-transition: background-color 100ms ease-out, margin 100ms ease-out,
    height 100ms ease-out;
  transition: background-color 100ms ease-out, margin 100ms ease-out,
    height 100ms ease-out;
  // background-color: rgba(48, 121, 244, 0.1);
  margin: 5px 5px 5px 0;
  border-radius: 20px;
  height: calc(100% - 10px);
  display: block;
}

.vb-visible:hover {
  .vb-dragger-styler {
    background-color: $bg-color;
  }
}

.vb.vb-scrolling-phantom > .vb-dragger > .vb-dragger-styler {
  background-color: $bg-color;
}

.vb > .vb-dragger:hover > .vb-dragger-styler {
  background-color: $bg-color;
  margin: 0px;
  height: 100%;
}

.vb.vb-dragging > .vb-dragger > .vb-dragger-styler {
  background-color: $bg-color;
  margin: 0px;
  height: 100%;
}

.vb.vb-dragging-phantom > .vb-dragger > .vb-dragger-styler {
  background-color: $bg-color;
}
</style>