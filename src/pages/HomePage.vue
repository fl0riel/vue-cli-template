<template>
  <div class="md-body">
    <p>Hello World!</p>
    <div class="card__wrapper" v-for="item in items" :key="item.id">
        <CardInfo :name="`${item.lvl} lvl`" :title="item.title">
            <template v-slot:body>
                {{   item.description   }}
            </template>
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
                lvl: 4,
            },
            {
                id: 2,
                title: "Wizard",
                description: "Lorem ipsum...",
                lvl: 5,
            },
        ]
    };
  },
};
</script>