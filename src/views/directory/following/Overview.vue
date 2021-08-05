<template>
  <div>
    <div v-for="(section, prop) in sections" :key="prop">
      <h3 class="mb-5 text-capitalize">{{ prop | split }}</h3>
      <v-row dense>
        <v-col
          :style="{
            minWidth: `calc(100% / ${!navigationDrawer ? 5 : 6})`,
            maxWidth: `calc(100% / ${!navigationDrawer ? 5 : 6})`,
          }"
          v-for="(stream, index) in section"
          :key="index"
        >
          <StreamCard :streamInfo="stream"></StreamCard>
        </v-col>
      </v-row>
      <div class="d-flex align-center">
        <v-divider></v-divider>
        <v-btn class="mx-5" text>See more</v-btn>
        <v-divider></v-divider>
      </div>
    </div>
    <div>
      <h3 class="mb-5 text-capitalize">Live categories</h3>
      <v-row class="d-flex flex-wrap" dense>
        <v-col
          :style="{
            minWidth: `calc(100% / ${!navigationDrawer ? 9 : 10})`,
            maxWidth: `calc(100% / ${!navigationDrawer ? 9 : 10})`,
          }"
          v-for="item in 5"
          :key="item"
        >
          <CategoryCard></CategoryCard>
        </v-col>
      </v-row>
      <div class="d-flex align-center">
        <v-divider></v-divider>
        <v-btn class="mx-5" text>See more</v-btn>
        <v-divider></v-divider>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import StreamCard from "@/components/StreamCard";
import CategoryCard from "@/components/CategoryCard";
export default {
  data: () => ({
    sections: {
      live_channels: [
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
      recommend_channels: [
        {
          title: "Example Title",
          viewers: 120,
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
      latest_videos: [
        {
          title: "Example Title",
          viewers: 1143,
          url: "/rhynoboy2009",
          type: {
            id: 2,
            label: "0:22:34",
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
      live_hosts: [
        {
          title: "Example Title",
          viewers: 1000,
          url: "/rhynoboy2009",
          type: {
            id: 3,
            label: "Hosting",
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
    },
  }),
  components: {
    StreamCard,
    CategoryCard,
  },
  computed: {
    ...mapGetters({
      navigationDrawer: "navigationDrawer",
    }),
  },
};
</script>