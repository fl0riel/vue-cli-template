<template>
  <div class="wrapper">
    <TheHeader :title="title" :links="links" />
    <div class="wrapper-content">
      <div class="container">
        <h1>Hello World!</h1>
      </div>
    </div>
    <TheFooter :links="links" />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
  data() {
    return {
      title: "Template",
      links: [
        {
          title: "Home",
          alias: "home",
          url: "/",
        },
        {
          title: "About",
          alias: "about",
          url: "/about",
        },
      ],
    };
  },
};
</script>

<style>
</style>
