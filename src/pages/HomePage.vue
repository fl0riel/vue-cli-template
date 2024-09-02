<template>
  <div class="">
    <p>Hello World!</p>
    <carousel :breakpoints="breakpoints">
      <slide lass="card__wrapper" v-for="item in items" :key="item.id">
        <CardInfo
          :name="`${item.lvl} lvl`"
          :title="item.title"
          :imgUrl="item.img"
          :link="`/${item.alias}`"
        >
          <template v-slot:body>
            {{ item.description }}
          </template>
          <template v-slot:footer>
            <div class="card-stats">
              <div
                v-for="(stat, index) in item.info"
                :key="index"
                class="one-third"
              >
                <p class="stat-value">{{ stat.value }}</p>
                <p class="stat">{{ stat.title }}</p>
              </div>
            </div>
          </template>
        </CardInfo>
      </slide>

      <template #addons="{ slidesCount }">
        <navigation v-if="slidesCount > 1" />
      </template>
    </carousel>
  </div>
</template>

<script>
import items from "@/seeders/items.js";
import CardInfo from "@/components/UI/CardInfo.vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

export default {
  components: {
    CardInfo,
    Carousel,
    Slide,
    Navigation
  },
  data() {
    return {
      items: items,
      breakpoints: {
        300: {
          itemsToShow: 1
          },
        700: {
          itemsToShow: 1.5,
          snapAlign: 'start',
        },
        1250: {
          itemsToShow: 3
        }
      }
    };
  }
};
</script>