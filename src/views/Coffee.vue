<template>
  <v-container class="py-lg-5">
    <v-row justify="center">
      <v-col lg="5" cols="12" sm="10">
        <v-img
          min-height="500"
          height="500"
          class="rounded-lg"
          src="https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
        ></v-img>
      </v-col>
      <v-col cols="12" lg="7" sm="10" class="d-flex flex-column">
        <v-card
          style="position: relative"
          :min-height="$vuetify.breakpoint.name == 'xs' ? 600 : 500"
          class="primary"
        >
          <v-card-text class="d-flex flex-column justify-space-between">
            <v-row justify="space-between" align="center">
              <v-col lg="8" cols="12">
                <div><h3 class="text-white">Sleepy Head (250g.)</h3></div>
              </v-col>
              <v-col lg="4" cols="12">
                <v-rating
                  v-model="rating"
                  background-color="orange lighten-3"
                  color="orange"
                  small
                ></v-rating>
              </v-col>
            </v-row>
            <v-divider class="pt-10"></v-divider>
            <v-row>
              <v-col cols="12">
                <v-row>
                  <v-col>
                    <h4 class="text-white">Infomation</h4>
                  </v-col>
                </v-row>
                <v-row class="px-3 text-white">
                  <v-col cols="4" class="text-end"> Genre </v-col>
                  <v-col cols="8" class="text-start"> Action,Adventure </v-col>
                  <v-col cols="4" class="text-end"> Developer</v-col>
                  <v-col cols="8" class="text-start">
                    Ubisoft Montreal, Massive Entertainment, and Ubisoft
                    Shanghai</v-col
                  >
                  <v-col cols="4" class="text-end"> Publisher </v-col>
                  <v-col cols="8" class="text-start"> Ubisoft </v-col>
                  <v-col cols="4" class="text-end"> Release Date </v-col>
                  <v-col cols="8" class="text-start"> 29 Nov, 2012 </v-col>
                  <v-col cols="4" class="text-end"> Rating for </v-col>
                  <v-col cols="8" class="text-start"> PEGI </v-col>
                </v-row>
              </v-col>
            </v-row>
            <v-spacer></v-spacer>
            <v-row
              style="
                position: absolute;
                width: 100%;
                bottom: 0px;
                padding-bottom: 10px;
              "
            >
              <v-col cols="12">
                <v-card dark class="pricebg">
                  <v-card-text>
                    <v-row justify="space-around" align="center">
                      <v-col cols="6" lg="9">
                        <span class="display-1">฿ 250.-</span>
                      </v-col>
                      <v-col cols="6" lg="3">
                        <v-btn block class="primary">
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
      <v-col class="text-center">
        <span class="section-break"> Coffee Lists </span>
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
      // items: [
      //   {
      //     text: "Coffee",
      //     disabled: false,
      //     href: "/coffee",
      //   },
      //   {
      //     text: "Sleepy Head",
      //     disabled: true,
      //     href: "/coffee",
      //   },
      // ],
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
