<template>
  <div class="wrapper">
    <TheHeader />
    <div class="wrapper-content">
      <div class="container">
        <h1>Hello World!</h1>
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style>
</style>
