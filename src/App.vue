<template>
  <v-app id="app">
    <v-app-bar class="pa-0" app clipped-right clipped-left flat>
      <v-app-bar-nav-icon>
        <v-icon>mdi-controller-classic</v-icon>
      </v-app-bar-nav-icon>
      <v-row>
        <v-col cols="4">
          <v-app-bar-title class="pa-0">
            <v-tabs background-color="transparent">
              <v-tab :to="{ name: 'directory-following-overview' }" exact>
                Following
              </v-tab>
              <v-tab :to="{ name: 'directory-browse-categories' }" exact
                >Browse</v-tab
              >
            </v-tabs>
          </v-app-bar-title>
        </v-col>
        <v-col align-self="center" cols="4">
          <v-responsive class="mx-auto" max-width="355">
            <v-text-field
              label="Search"
              append-icon="mdi-magnify"
              dense
              flat
              hide-details
              solo
            ></v-text-field>
          </v-responsive>
        </v-col>
        <v-col align-self="center" cols="4">
          <div class="d-flex justify-end">
            <div v-if="!authToken">
              <v-btn class="mr-2" @click="openAuth(0)">Log In</v-btn>
              <v-btn color="primary" @click="openAuth(1)">Sign up</v-btn>
            </div>
            <v-toolbar-title v-if="authToken">
              {{ username }}
            </v-toolbar-title>
          </div>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-navigation-drawer
      :mini-variant.sync="miniHeader"
      mini-variant-width="50"
      app
      floating
      clipped
      permanent
    >
      <v-list nav dense>
        <v-list-item @click.stop="miniHeader = !miniHeader" :ripple="false">
          <v-list-item-title v-if="!miniHeader"
            >Followed Channels</v-list-item-title
          >
          <v-list-item-icon>
            <v-icon v-if="!miniHeader">mdi-backburger</v-icon>
            <v-icon v-else>mdi-forwardburger</v-icon>
          </v-list-item-icon>
        </v-list-item>
        <!-- Followed Channels List Start-->
        <v-list-item
          v-for="item in 3"
          :key="item"
          @click.stop
          link
          to="/profile"
        >
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
    <v-dialog v-model="authOpen" max-width="390">
      <v-card>
        <v-card-title>
          <span>{{
            authState == 0 ? "Log in to Notwitch" : "Join Notwitch today"
          }}</span>
          <v-spacer></v-spacer>
          <v-btn @click="authOpen = false" icon>
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-tabs v-model="authState">
            <v-tab>Log In </v-tab>
            <v-tab>Sign Up</v-tab>
            <v-tab-item>
              <v-card class="transparent mt-5">
                <v-form ref="loginForm">
                  <v-text-field
                    v-model="user.username"
                    maxlength="25"
                    label="Username"
                    :rules="formRules.username"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="user.password"
                    :rules="formRules.password"
                    label="Password"
                    type="password"
                    required
                  ></v-text-field>
                  <v-btn color="primary" width="100%">Log In</v-btn>
                </v-form>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card class="transparent mt-5">
                <v-form
                  ref="registerForm"
                  v-model="validRegistration"
                  lazy-validation
                >
                  <v-text-field
                    v-model="user.username"
                    maxlength="25"
                    label="Username"
                    hint="This is the name people will know you by on Notwitch. You can always change it later."
                    :rules="formRules.username"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="user.password"
                    :rules="formRules.password"
                    label="Password"
                    type="password"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="user.confPassword"
                    :rules="formRules.confPassword"
                    label="Confirm Password"
                    type="password"
                    required
                  ></v-text-field>
                  <v-row>
                    <v-col cols="6">
                      <v-select
                        v-model="user.birth.month"
                        :items="months"
                        :rules="formRules.birth.month"
                        item-text="name"
                        item-value="num"
                        label="Month"
                        required
                      ></v-select>
                    </v-col>
                    <v-col cols="3">
                      <v-text-field
                        v-model="user.birth.day"
                        @keydown="numberOnly"
                        :rules="formRules.birth.day"
                        label="Day"
                        maxlength="2"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="3">
                      <v-text-field
                        v-model="user.birth.year"
                        :rules="formRules.birth.year"
                        @keydown="numberOnly"
                        maxlength="4"
                        label="Year"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-text-field
                    v-model="user.email"
                    label="Email"
                    hint="You'll need to verify that you own this email account."
                    :rules="formRules.email"
                    required
                  ></v-text-field>
                  <small class="d-block text-center text--disabled mt-3">
                    By clicking Sign Up, you are indicating that you have read
                    and acknowledge the
                    <a href="/">Terms of Service</a> and
                    <a href="/">Privacy Notice</a>.
                  </small>
                  <v-btn
                    @click="registerUser"
                    color="primary"
                    class="mt-5"
                    width="100%"
                  >
                    Sign Up
                  </v-btn>
                </v-form>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import moment from "moment";
import { mapGetters } from "vuex";
export default {
  computed: {
    formRules() {
      return {
        birth: {
          month: [
            (v) => {
              const eighteenYearsAgo = moment().subtract(18, "years");
              const birthday = moment(
                new Date(
                  `${this.user.birth.month}/${v}/${this.user.birth.year}`
                )
              );
              if (!birthday.isValid()) {
                // INVALID DATE
                return "Invalid date";
              } else if (!eighteenYearsAgo.isAfter(birthday)) {
                // < 18
                return "Must be at least 18 years of age";
              }
              return true;
            },
          ],
          day: [
            (v) => !!v || "*Required",
            (v) => (v <= 31 && v >= 1) || "Choose a day between 1 - 31",
          ],
          year: [(v) => !!v || "*Required"],
        },
        username: [
          (v) => !!v || "*Required",
          (v) => v.length >= 6 || "Username must be at least 6 characters long",
          (v) => v.length <= 25 || "Username must be 25 characters or shorter",
        ],
        email: [
          (v) => !!v || "*Required",
          (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
        ],
        password: [(v) => !!v || "*Required"],
        confPassword: [
          (v) => !!v || "*Required",
          (v) =>
            this.user.password == v || "Please make sure your passwords match",
        ],
      };
    },
    ...mapGetters({
      navigationDrawer: "navigationDrawer",
      username: "auth/username",
      authToken: "auth/authToken",
    }),
    miniHeader: {
      get() {
        return this.navigationDrawer;
      },
      set(newValue) {
        return this.$store.dispatch("setNavigationDrawer", newValue);
      },
    },
  },
  data: () => ({
    user: {
      username: "rhynoboy2009",
      password: "isaiah",
      confPassword: "isaiah",
      email: "rhynoboy2009@gmail.com",
      birth: {
        month: 9,
        day: "5",
        year: "1996",
      },
    },
    validLogin: true,
    validRegistration: true,
    authOpen: false,
    authState: 0,
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
    months: [
      { num: 1, name: "January" },
      { num: 2, name: "February" },
      { num: 3, name: "March" },
      { num: 4, name: "April" },
      { num: 5, name: "May" },
      { num: 6, name: "June" },
      { num: 7, name: "July" },
      { num: 8, name: "August" },
      { num: 9, name: "September" },
      { num: 10, name: "October" },
      { num: 11, name: "November" },
      { num: 12, name: "December" },
    ],
  }),
  methods: {
    openAuth: function (state) {
      this.authOpen = true;
      this.authState = state;
    },
    authenticateUser: async function () {
      if (this.$refs.registerForm.validate()) {
        return;
      }
    },
    registerUser: async function () {
      if (this.$refs.registerForm.validate()) {
        try {
          const { data } = await this.axios.post("user/register", {
            username: this.user.username,
            password: this.user.password,
            email: this.user.email,
          });
          this.$store.dispatch("auth/setAuthToken", data.token);
          this.$store.dispatch("auth/setUsername", data.username);
          this.authOpen = false;
        } catch (e) {
          console.log(e);
        }
      }
    },
    numberOnly: function ($event) {
      let keyCode = $event.keyCode ? $event.keyCode : $event.which;
      if ((keyCode < 48 || keyCode > 57) && keyCode !== 46 && keyCode != 8) {
        // 46 is dot
        $event.preventDefault();
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.date-of-birth {
  & > * {
    flex: 1;
  }
}
</style>
<style lang="scss" src="./scss/vbar.scss"></style>
<style lang="scss" src="./scss/app.scss"></style>