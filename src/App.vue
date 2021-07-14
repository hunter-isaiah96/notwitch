<template>
  <v-app id="app">
    <v-app-bar
      color="secondary"
      height="72"
      app
      clipped-right
      clipped-left
      flat
    >
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
    </v-app-bar>
    <v-navigation-drawer
      color="secondary"
      app
      floating
      clipped
      v-model="drawer"
      :mini-variant.sync="miniHeader"
      mini-variant-width="57"
      permanent
    >
      <v-list nav dense>
        <v-list-item @click.stop="miniHeader = !miniHeader" :ripple="false">
          <v-list-item-title v-if="!miniHeader"
            >Followed Channels</v-list-item-title
          >
          <v-list-item-icon>
            <v-icon>mdi-forwardburger</v-icon>
          </v-list-item-icon>
        </v-list-item>
        <!-- Followed Channels List Start-->
        <v-list-item @click.stop v-for="item in 3" :key="item">
          <v-list-item-avatar size="28">
            <v-img
              src="https://randomuser.me/api/portraits/women/75.jpg"
            ></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>AnaLIse_Funk01</v-list-item-title>
            <v-list-item-subtitle>Gran Theft Auto V</v-list-item-subtitle>
          </v-list-item-content>
          <v-icon size="10" color="red">mdi-checkbox-blank-circle</v-icon>
          <small class="ml-1">58.4k</small>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list nav dense>
        <!-- Navigation Links List Start -->
        <v-list-item
          v-for="(item, index) in sidebarItems"
          :key="index"
          link
          :to="item.route"
          @click.stop
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    miniHeader: true,
    sidebarItems: [
      {
        name: "Search",
        icon: "mdi-magnify",
        route: "/search",
      },
      {
        name: "Gamepad",
        icon: "mdi-gamepad",
        route: "/games",
      },
      {
        name: "Heart",
        icon: "mdi-heart",
        route: "/followers",
      },
      {
        name: "Community",
        icon: "mdi-account-multiple",
        route: "/community",
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