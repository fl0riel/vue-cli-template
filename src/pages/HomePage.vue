<template>
  <div class="md-body">
    <p>Hello World!</p>
    <div class="card__wrapper" v-for="item in items" :key="item.id">
        <CardInfo :name="`${item.lvl} lvl`" :title="item.title" :imgUrl="item.img" :link="`/${item.alias}`">
            {{   item.description   }}
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