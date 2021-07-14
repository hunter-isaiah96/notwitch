<template>
  <div>
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
  </div>
</template>