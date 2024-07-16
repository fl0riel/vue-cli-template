<template>
  <div class="wrapper-person">
    <div v-if="item">
      <img :src="item.img" :alt="item.title" />
      <h1 class="title">
        {{ item.title }}
      </h1>
      <p>
        {{ item.description }}
      </p>
      <div class="card-stats">
        <div v-for="(stat, index) in item.info" :key="index" class="one-third">
          <p class="stat-value">{{ stat.value }}</p>
          <p class="stat">{{ stat.title }}</p>
        </div>
      </div>
      <router-link to="/" class="btn btnPrimary">Back to home</router-link>
    </div>
  </div>
</template>

<script>
import items from "@/seeders/items.js";

export default {
  data() {
    return {
      item: null,
    };
  },
  created() {
    const alias = this.$route.params.itemAlias;
    const item = items.find((el) => el.alias === alias);
    this.item = item;
  },
};
</script>