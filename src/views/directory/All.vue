<template>
  <div>
    <v-row>
      <v-col cols="2" v-for="(index, item) in 11" :key="index">
        <v-card class="mt-5">
          <v-img
            :aspect-ratio="16 / 9"
            :width="width"
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          >
            <v-container class="fill-height py-0">
              <v-row class="fill-height flex-column">
                <v-col cols="6">
                  <v-chip color="red" label small> LIVE </v-chip>
                </v-col>
                <v-col class="d-flex align-end" cols="6">
                  <v-chip class="px-1" color="grey darken-2" label small>
                    200 viewers
                  </v-chip></v-col
                >
              </v-row>
            </v-container>
          </v-img>
          <v-card-title>
            <v-list-item class="pa-0">
              <v-list-item-avatar size="40" color="grey"></v-list-item-avatar>
              <v-list-item-content class="pa-0">
                <v-list-item-subtitle class="mb-1 white--text">
                  Live Channel {{ item + 1 }}
                </v-list-item-subtitle>
                <v-list-item-subtitle class="mb-1 caption font-weight-light">
                  User
                </v-list-item-subtitle>

                <v-list-item-subtitle class="caption font-weight-light">
                  Game
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <!-- <h2>Live Channel {{ item + 1 }}</h2> -->
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>