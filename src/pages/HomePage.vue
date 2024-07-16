<template>
  <div class="md-body">
    <p>Hello World!</p>
    <div class="card__wrapper" v-for="item in items" :key="item.id">
        <CardInfo :name="`${item.lvl} lvl`" :title="item.title" :imgUrl="item.img" :link="`/${item.alias}`">
            <template v-slot:body>
              {{ item.description }}
            </template>
            <template v-slot:footer>
              <div class="card-stats">
                <div v-for="(stat, index) in item.info" :key="index" class="one-third">
                  <p class="stat-value">{{ stat.value }}</p>
                  <p class="stat">{{ stat.title }}</p>
                </div>
              </div>
            </template>
        </CardInfo>
    </div>
  </div>
</template>

<script>
import items from "@/seeders/items.js"; 
import CardInfo from "@/components/UI/CardInfo.vue";

export default {
  components: {
    CardInfo,
  },
  data() {
    return {
      items: items
    };
  },
};
</script>