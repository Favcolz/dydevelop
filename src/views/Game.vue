<template>
  <v-container class="py-lg-5">
    <v-row justify="center">
      <v-col sm="10" lg="5">
        <v-img
          min-height="500"
          height="500"
          class="rounded-lg"
          src="https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
        ></v-img>
      </v-col>
      <v-col lg="7" sm="10" class="d-flex flex-column justify-space-between">
        <v-card style="position: relative" min-height="500" class="primary">
          <v-card-text>
            <v-row justify="space-between" align="center">
              <v-col lg="9">
                <div><h3 class="text-white">Farcry 3</h3></div>
              </v-col>
              <v-col lg="3">
                <v-rating
                  block
                  v-model="rating"
                  background-color="orange lighten-3"
                  color="orange"
                  small
                ></v-rating>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row>
              <v-col cols="12">
                <v-row>
                  <v-col>
                    <h4 class="text-white">Infomation</h4>
                  </v-col>
                </v-row>
                <v-row class="px-3 text-white">
                  <v-col cols="3" class="text-end"> Genre </v-col>
                  <v-col cols="1" class="text-center"> :</v-col>
                  <v-col cols="8" class="text-start"> Action,Adventure </v-col>
                  <v-col cols="3" class="text-end"> Developer</v-col>
                  <v-col cols="1" class="text-center"> :</v-col>
                  <v-col cols="8" class="text-start">
                    Ubisoft Montreal, Massive Entertainment, and Ubisoft
                    Shanghai</v-col
                  >
                  <v-col cols="3" class="text-end"> Publisher </v-col>
                  <v-col cols="1" class="text-center"> :</v-col>
                  <v-col cols="8" class="text-start"> Ubisoft </v-col>
                  <v-col cols="3" class="text-end"> Release Date </v-col>
                  <v-col cols="1" class="text-center"> :</v-col>
                  <v-col cols="8" class="text-start"> 29 Nov, 2012 </v-col>
                  <v-col cols="3" class="text-end"> Rating for </v-col>
                  <v-col cols="1" class="text-center"> :</v-col>
                  <v-col cols="8" class="text-start"> PEGI </v-col>
                </v-row>
              </v-col>
            </v-row>
            <v-row
              style="
                position: absolute;
                width: 99%;
                bottom: 0px;
                padding-bottom: 10px;
              "
              class="align-self-stretch pt-10 mt-10"
            >
              <v-col cols="12">
                <v-card dark class="pricebg">
                  <v-card-text>
                    <v-row justify="space-between" align="center">
                      <v-col cols="3">
                        <span class="display-1">฿ 250.-</span>
                      </v-col>
                      <v-col cols="2">
                        <v-btn class="primary" block>
                          Shop
                          <v-icon>mdi-store</v-icon>
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="10" lg="12">
        <v-card class="rounded-lg" dark>
          <v-tabs
            class="rounded-lg"
            v-model="tab"
            background-color="primary"
            dark
          >
            <v-tabs-slider></v-tabs-slider>
            <v-tab class="rounded-lg" href="#infomation">
              Infomation Ex.
            </v-tab>
            <v-tab class="rounded-lg" href="#video"> Video </v-tab>
            <v-tab class="rounded-lg" href="#screenshots"> Screenshots </v-tab>
            <v-tab class="rounded-lg" href="#requirement">
              System Requirement
            </v-tab>
          </v-tabs>

          <v-tabs-items class="accent" v-model="tab">
            <v-tab-item
              v-for="(item, i) in tabContent"
              :key="i"
              :value="item.tab"
            >
              <v-card
                v-if="item.tab == 'infomation'"
                class="accent"
                dark
                flat
                min-height="500"
              >
                <v-card-text v-html="item.content"></v-card-text>
              </v-card>
              <v-card
                v-if="item.tab == 'video'"
                class="accent"
                dark
                flat
                min-height="500"
              >
                <v-card-text>
                  <v-row justify="center">
                    <v-col lg="10" cols="12">
                      <iframe
                        class="rounded-lg"
                        width="100%"
                        height="500px"
                        :src="item.content"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
              <v-card
                v-if="item.tab == 'screenshots'"
                class="accent"
                dark
                flat
                min-height="500"
              >
                <v-card-text>
                  <v-row>
                    <v-col
                      cols="12"
                      lg="4"
                      v-for="img in item.content"
                      :key="img"
                    >
                      <v-img
                        class="rounded-lg"
                        max-height="400"
                        :src="img.images"
                        alt="s"
                      ></v-img>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
              <v-card
                v-if="item.tab == 'requirement'"
                class="accent py-10 px-5"
                dark
                flat
                min-height="500"
              >
                <v-row justify="center">
                  <v-col
                    v-for="(req, i) in item.content"
                    :key="i"
                    cols="12"
                    lg="4"
                  >
                    <h2>{{ i == 0 ? "Minimum" : "Recommanded" }}</h2>
                    <ul class="requirement">
                      <li class="requirement__row">{{ req.explain }}</li>
                      <li class="requirement__row">OS : {{ req.os }}</li>
                      <li class="requirement__row">
                        Memory : {{ req.memory }}
                      </li>
                      <li class="requirement__row">
                        Processor : {{ req.processor }}
                      </li>
                      <li class="requirement__row">
                        Graphic : {{ req.graphics }}
                      </li>
                    </ul>
                  </v-col>
                </v-row>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="2">
        <span class="section-break"> Other Coffee </span>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="10" lg="12">
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
                min-height="250"
                height="250"
                max-height="250"
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
          text: "Game",
          disabled: false,
          href: "/game",
        },
        {
          text: "Farcry 3",
          disabled: true,
          href: "/coffee",
        },
      ],
      tab: null,
      tabContent: [
        {
          tab: "infomation",
          content:
            "<h3>ABOUT THIS GAME</h3> <br> <p class='text-indent-4'> Far Cry 3 is an open world first-person shooter set on an island unlike any other. A place where heavily armed warlords traffic in slaves. Where outsiders are hunted for ransom. And as you embark on a desperate quest to rescue your friends, you realize that the only way to escape this darkness… is to embrace it</p>",
        },
        {
          tab: "video",
          content: "https://www.youtube.com/embed/J6gnOVJsCsM",
        },
        {
          tab: "screenshots",
          content: [
            { images: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg" },
            { images: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg" },
            { images: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg" },
            { images: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg" },
          ],
        },
        {
          tab: "requirement",
          content: [
            {
              explain: "Requires a 64-bit processor and operating system",
              os: "Windows 7",
              processor: "Intel Core 2 Duo E8400 | AMD Phenom II X2 550",
              memory: "2 GB RAM",
              graphics: "DirectX 11 Graphics Adapter with 1 GB VRAM",
            },
            {
              explain: "Requires a 64-bit processor and operating system",
              os: "Windows 10",
              processor: "Intel Core i5-2300 | AMD FX-4350",
              memory: "4 GB RAM",
              graphics:
                "Nvidia GeForce GTS 450, 1 GB | AMD Radeon HD 5770, 1 GB",
            },
          ],
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
