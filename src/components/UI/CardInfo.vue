<template>
  <div class="card">
    <div v-if="imgUrl" class="card-img__wrapper">
      <img class="card-img" :src="imgUrl" :alt="title" />
    </div>
    <span class="card-name">{{  name  }}</span>
    <span class="card-title">{{ title }}</span>
    <div class="card-body">
      <slot name="body"></slot>
      <router-link :v-if="link" class="link" :to="link">See more</router-link>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
    },
    link: {
      type: String,
    }
  }
}
</script>