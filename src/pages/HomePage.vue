<template>
  <div class="md-body">
    <p>Hello World!</p>
    <div class="card__wrapper" v-for="item in items" :key="item.id">
        <CardInfo :name="`${item.lvl} lvl`" :title="item.title" :imgUrl="item.img">
            {{   item.description   }}
        </CardInfo>
    </div>
  </div>
</template>

<script>
import CardInfo from "@/components/UI/CardInfo.vue";

export default {
  components: {
    CardInfo,
  },
  data() {
    return {
        items: [
            {
                id: 1,
                title: "Archer",
                description: "Lorem ipsum...",
                img: require("@/assets/img/archer.png"),
                lvl: 4,
            },
            {
                id: 2,
                title: "Wizard",
                description: "Lorem ipsum...",
                img: require("@/assets/img/wizard.png"),
                lvl: 5,
            },
        ]
    };
  },
};
</script>