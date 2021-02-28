<template>
  <div class="home-page">
    <div class="home-page__main-slider">
      <main-slider />
    </div>
    <div class="home-page__advantages">
      <home-page-advantages>
        <app-icon view-box="0 0 512 512">
          <icon-quality />
        </app-icon>
      </home-page-advantages>
    </div>
  </div>
</template>

<script>
import "swiper/css/swiper.css";
import HomePageAdvantages from "@/layouts/homePageLayout/HomePageAdvantages";
import AppIcon from "@/components/appComponents/AppIcon";
import IconQuality from "@/assets/icons/icon-quality";
import MainSlider from "@/components/componentsUtils/MainSlider";

export default {
  name: "HomePage",
  components: {
    MainSlider,
    IconQuality,
    AppIcon,
    HomePageAdvantages
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
