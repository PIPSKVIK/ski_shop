<template>
  <div class="home-page">
    <div class="home-page__main-slider">
      <main-slider />
    </div>
    <div class="home-page__advantages">
      <home-page-advantages :items="getAdvantagesItems" />
    </div>
    <div class="home-page__catalog">
      <home-page-catalog-links />
    </div>
  </div>
</template>

<script>
import "swiper/css/swiper.css";
import MainSlider from "@/components/componentsUtils/MainSlider";
import HomePageAdvantages from "@/layouts/homePageLayout/HomePageAdvantages";
import { mapGetters } from "vuex";
import HomePageCatalogLinks from "@/layouts/homePageLayout/HomePageCatalogLinks";

export default {
  name: "HomePage",
  components: {
    HomePageCatalogLinks,
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
    margin-top: 10px;
  }
  &__catalog {
    margin-top: 40px;
  }
}
</style>
