<template>
  <div class="home-page">
    <div class="home-page__main-slider">
      <main-slider />
    </div>
    <div class="home-page__advantages">
      <home-page-advantages :items="getAdvantagesItems" />
    </div>
  </div>
</template>

<script>
import "swiper/css/swiper.css";
import MainSlider from "@/components/componentsUtils/MainSlider";
import HomePageAdvantages from "@/layouts/homePageLayout/HomePageAdvantages";
import { mapGetters } from "vuex";

export default {
  name: "HomePage",
  components: {
    HomePageAdvantages,
    MainSlider
  },
  computed: {
    ...mapGetters(["getAdvantagesItems"])
  }
};
</script>

<style lang="scss" scoped>
.home-page {
  max-width: 1170px;
  padding: 0 15px;
  margin: 0 auto;
  &__advantages {
    padding-top: 10px;
  }
}
</style>
