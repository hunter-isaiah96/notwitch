<template>
  <div>
    <h3 class="mb-5 text-capitalize">Followed Channels</h3>
    <v-row>
      <v-col
        :style="{
          minWidth: `calc(100% / ${!navigationDrawer ? 5 : 5})`,
          maxWidth: `calc(100% / ${!navigationDrawer ? 5 : 5})`,
        }"
        v-for="(user, index) in users"
        :key="index"
      >
        <profile-card :user="user"></profile-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import ProfileCard from "@/components/ProfileCard";
export default {
  data: () => ({
    users: [
      {
        id: 1,
        displayName: "rhynoboy2009",
        url: "/rhynoboy2009",
        images: {
          avatar:
            "https://static-cdn.jtvnw.net/jtv_user_pictures/enragedgamersofficial-profile_image-a0fcd808beaa7bc4-70x70.png",
          banner:
            "https://marketplace.canva.com/EAEeOQwo3jY/1/0/1600w/canva-purple-mountain-vintage-retro-twitch-banner-1NYTq34QR6I.jpg",
        },
        isFriend: false,
        isFollowing: true,
      },
      {
        id: 1,
        displayName: "rhynoboy2009",
        url: "/rhynoboy2009",
        images: {
          avatar:
            "https://static-cdn.jtvnw.net/jtv_user_pictures/enragedgamersofficial-profile_image-a0fcd808beaa7bc4-70x70.png",
          banner:
            "https://marketplace.canva.com/EAEeOQwo3jY/1/0/1600w/canva-purple-mountain-vintage-retro-twitch-banner-1NYTq34QR6I.jpg",
        },
        isFriend: false,
        isFollowing: true,
      },
    ],
  }),
  components: {
    ProfileCard,
  },
  computed: {
    ...mapGetters({
      navigationDrawer: "navigationDrawer",
    }),
  },
};
</script>