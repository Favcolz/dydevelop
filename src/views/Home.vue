<template>
  <v-container class="py-lg-5">
    <v-row>
      <v-col cols="12" lg="8" md="12" sm="12">
        <v-carousel class="rounded-lg">
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
          ></v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col cols="12" lg="4" md="12" sm="12">
        <v-card
          v-for="(news, index) in newsList"
          :key="index"
          dark
          class="news elevation-1 my-1"
        >
          <v-card-title primary-title> {{ news.topic }} </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            {{ news.content.substring(0, 100).concat("...") }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        class="text-white d-flex justify-space-between align-baseline"
      >
        <span class="display-1"> Covid-19</span>
      </v-col>
      <v-col
        cols="12"
        lg="3"
        md="6"
        v-for="(covid, index) in covidList"
        :key="index"
      >
        <v-card height="130" dark class="accent">
          <v-card-text class="d-flex justify-space-between align-center">
            <img
              width="100"
              :src="require('../assets/images/covid19/virus_corona.png')"
            />
            <div class="text-end">
              <h3 class="body-2">{{ covid.topic }}</h3>
              <div class="display-1">{{ covid.value }}</div>
              <div class="caption">{{ covid.total }}</div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <!-- <v-row>
      <v-col>
        <v-data-table
          dark
          dense
          :headers="dataHeaders"
          :items="dataBody"
          class="elevation-1 accent"
          hide-default-footer
        >
        </v-data-table>
      </v-col>
    </v-row> -->
    <v-row>
      <v-col
        cols="12"
        class="text-white d-flex justify-space-between align-baseline"
      >
        <span class="display-1"> Coffee</span>
        <router-link to="/coffee">more...</router-link>
      </v-col>
      <v-col cols="12">
        <v-row>
          <v-col
            cols="12"
            lg="3"
            md="4"
            v-for="(coffee, index) in coffees"
            :key="index"
          >
            <v-card dark class="rounded-lg accent">
              <v-img
                :src="coffee.images"
                alt=""
                min-height="200"
                class="elevation-4 rounded-lg"
              ></v-img>
              <v-card-text class="fill-height">
                <div class="pb-10">
                  <span class="body-1">{{ coffee.name }} </span>
                  <small>{{ coffee.weight }}g.</small>
                </div>
                <v-divider class="my-5"></v-divider>
                <div class="d-flex justify-space-between">
                  <span class="display-1">{{ coffee.price }}</span>
                  <v-btn icon medium>
                    <v-icon>mdi-storefront-outline</v-icon>
                  </v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        class="text-white d-flex justify-space-between align-baseline"
      >
        <span class="display-1"> Game</span>
        <router-link to="/game">more...</router-link>
      </v-col>
      <v-col cols="12">
        <v-row nowrap>
          <v-col
            lg="3"
            md="4"
            cols="12"
            v-for="(coffee, index) in coffees"
            :key="index"
          >
            <v-card dark class="rounded-lg accent">
              <v-img
                :src="coffee.images"
                alt=""
                min-height="200"
                class="elevation-4 rounded-lg"
              ></v-img>
              <v-card-text class="fill-height">
                <div class="pb-10">
                  <span class="body-1">{{ coffee.name }} </span>
                  <small>{{ coffee.weight }}g.</small>
                </div>
                <v-divider class="my-5"></v-divider>
                <div class="d-flex justify-space-between">
                  <span class="display-1">{{ coffee.price }}</span>
                  <v-btn icon medium>
                    <v-icon>mdi-storefront-outline</v-icon>
                  </v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
      newsList: [
        {
          topic: "Update Patch !!",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
          topic: "Update Patch !!",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
          topic: "Update Patch !!",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      ],
      covidList: [
        {
          topic: "Covid Today",
          value: 999,
          total: 34534345,
        },
        {
          topic: "New Case",
          value: 30000,
          total: 1241454,
        },
        {
          topic: "New Death",
          value: 2000,
          total: 3453424,
        },
        {
          topic: "New Recovery",
          value: 999,
          total: 34345235,
        },
      ],
      dataHeaders: [
        {
          text: "#",
          value: "index",
        },
        {
          text: "",
          value: "img",
        },
        {
          text: "coin",
          value: "name",
        },
        {
          text: "",
          value: "symbol",
        },
        {
          text: "Price",
          value: "price",
        },
        {
          text: "1Hr",
          value: "hr1",
        },
        {
          text: "24Hr",
          value: "hr24",
        },
        {
          text: "7Days",
          value: "days7",
        },
        {
          text: "Volume 24 Hr",
          value: "volume24hr",
        },
        {
          text: "Market Volume",
          value: "marketvolume",
        },
        {
          text: "Chart",
          value: "chart",
        },
      ],
      dataBody: [
        {
          index: 1,
          img: "img",
          name: "name",
          symbol: "symbol",
          price: "9999",
          hr1: "asd",
          hr24: "asd",
          days7: "asd",
          volume24hr: "volume24hr",
          marketvolume: "marketvolume",
          chart: "chart",
        },
        {
          index: 2,
          img: "img",
          name: "name",
          symbol: "symbol",
          price: "9999",
          hr1: "asd",
          hr24: "asd",
          days7: "asd",
          volume24hr: "volume24hr",
          marketvolume: "marketvolume",
          chart: "chart",
        },
        {
          index: 3,
          img: "img",
          name: "name",
          symbol: "symbol",
          price: "9999",
          hr1: "asd",
          hr24: "asd",
          days7: "asd",
          volume24hr: "volume24hr",
          marketvolume: "marketvolume",
          chart: "chart",
        },
        {
          index: 4,
          img: "img",
          name: "name",
          symbol: "symbol",
          price: "9999",
          hr1: "asd",
          hr24: "asd",
          days7: "asd",
          volume24hr: "volume24hr",
          marketvolume: "marketvolume",
          chart: "chart",
        },
        {
          index: 5,
          img: "img",
          name: "name",
          symbol: "symbol",
          price: "9999",
          hr1: "asd",
          hr24: "asd",
          days7: "asd",
          volume24hr: "volume24hr",
          marketvolume: "marketvolume",
          chart: "chart",
        },
      ],
      coffees: [
        {
          name: "Sleepy Head",
          weight: 250,
          price: 300,
          link_shop: "https://facebook.com",
          images: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
          recommand: true,
        },
        {
          name: "Sleepy Head",
          weight: 250,
          price: 300,
          link_shop: "https://facebook.com",
          images: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
          recommand: true,
        },
        {
          name: "Sleepy Head",
          weight: 250,
          price: 300,
          link_shop: "https://facebook.com",
          images: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
          recommand: true,
        },
        {
          name: "Sleepy Head",
          weight: 250,
          price: 300,
          link_shop: "https://facebook.com",
          images: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
          recommand: true,
        },
        {
          name: "Sleepy Head",
          weight: 250,
          price: 300,
          link_shop: "https://facebook.com",
          images: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
          recommand: true,
        },
        {
          name: "Sleepy Head",
          weight: 250,
          price: 300,
          link_shop: "https://facebook.com",
          images: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
          recommand: true,
        },
      ],
    };
  },
};
</script>
