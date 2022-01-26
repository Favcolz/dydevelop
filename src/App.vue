<template>
  <v-app>
    <v-app-bar class="px-15 elevation-1" app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Name"
          class="shrink hidden-sm-and-down"
          contain
          min-width="50"
          :src="require('./assets/logo.svg')"
          width="50"
        />
      </div>

      <v-spacer></v-spacer>
      <input
        type="text"
        class="rounded-xl elevation-1 mx-1 text-end"
        style="background-color: white; padding: 1px 10px; font-size: 16px"
        placeholder="Search"
      />
      <v-btn icon small><v-icon>mdi-github</v-icon></v-btn>
    </v-app-bar>
    <v-main class="px-15 secondary">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
