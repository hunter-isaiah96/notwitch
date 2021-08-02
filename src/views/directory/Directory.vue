<template>
  <div>
    <v-main>
      <vue-custom-scrollbar
        class="main-content-wrapper"
        :settings="{ supressY: false }"
      >
        <v-container class="pt-10">
          <router-view></router-view>
        </v-container>
      </vue-custom-scrollbar>
    </v-main>
  </div>
</template>
<script>
import vueCustomScrollbar from "vue-custom-scrollbar";
import "vue-custom-scrollbar/dist/vueScrollbar.css";
export default {
  components: {
    vueCustomScrollbar,
  },
};
</script>