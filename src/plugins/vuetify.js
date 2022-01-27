import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#031B26", // #E53935
        secondary: "#04293A", // #FFCDD2
        accent: "#064663", // #3F51B5
        news: "#041C32",
        textw: "#eee",
        textb: "#333",
      },
      dark: {
        primary: "#031B26", // #E53935
        secondary: "#04293A", // #FFCDD2
        accent: "#064663", // #3F51B5
        textw: "#eee",
        textb: "#333",
      },
    },
  },
});
