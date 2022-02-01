<template>
  <v-app>
    <v-app-bar
      class="px-lg-15 px-xs-10 px-md-10 px-sm-15 elevation-1"
      app
      color="primary"
      dark
    >
      <v-img
        class="hover shrink"
        min-width="50"
        :src="require('./assets/logo.svg')"
        width="50"
        @click="jump('/')"
      />

      <v-spacer></v-spacer>
      <div class="d-flex justift-space-around align-baseline">
        <ul class="d-flex justify-space-between align-center">
          <li class="navMenu" v-for="(navItem, index) in navList" :key="index">
            <router-link
              :hidden="!navItem.isActive"
              class="navitem"
              :to="navItem.link"
            >
              {{ navItem.text }}
            </router-link>
          </li>
        </ul>
        <v-btn
          icon
          small
          href="https://github.com/Favcolz/dydevelop"
          target="_blank"
        >
          <v-icon>mdi-github</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
    <v-main class="px-lg-15 secondary">
      <transition name="fade">
        <router-view />
      </transition>
    </v-main>
  </v-app>
</template>

<script>
import mixin from "./scripts/mixins";
export default {
  mixins: [mixin],
  name: "App",
  data() {
    return {
      navList: [
        {
          text: "Coffee",
          link: "/coffee",
          isActive: true,
        },
        {
          text: "Game",
          link: "/game",
          isActive: true,
        },
        {
          text: "Crypto",
          link: "/crypto",
          isActive: false,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "./assets/styles/main.scss";
</style>
