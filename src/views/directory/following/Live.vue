<template>
  <div>
    <h3 class="mb-5 text-capitalize">Live channels</h3>
    <v-row dense>
      <v-col
        :style="{
          minWidth: `calc(100% / ${!navigationDrawer ? 5 : 6})`,
          maxWidth: `calc(100% / ${!navigationDrawer ? 5 : 6})`,
        }"
        v-for="(stream, index) in streams"
        :key="index"
      >
        <stream-card :streamInfo="stream"></stream-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    streams: [
      {
        title: "Example Title",
        viewers: 0,
        url: "/rhynoboy2009",
        type: {
          id: 1,
          label: "Live",
        },
        user: {
          displayName: "rhynoboy2009",
        },
        game: {
          title: "Guilty Gear: Strive",
        },
        tags: ["Fighting Games", "English"],
      },
    ],
  }),
  computed: {
    ...mapGetters({
      navigationDrawer: "navigationDrawer",
    }),
  },
};
</script>