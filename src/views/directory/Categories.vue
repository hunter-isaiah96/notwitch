<template>
  <div>
    <v-row>
      <v-col cols="2" v-for="(index, item) in 11" :key="index">
        <v-card class="mt-5" height="250">
          <v-card-title> Category {{ item + 1 }} </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>