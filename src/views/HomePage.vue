<template>
  <div class="home-page">
    <div class="home-page__main-slider">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide><span>pickture_1</span></swiper-slide>
        <swiper-slide><span>pickture_2</span></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
    <div class="home-page__advantages">
      <home-page-advantages />
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import HomePageAdvantages from "@/layouts/homePageLayout/HomePageAdvantages";

export default {
  name: "HomePage",
  title: "Loop mode / Infinite loop",
  components: {
    HomePageAdvantages,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
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
.swiper {
  height: 500px;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
    font-size: 18px * 2;
    background-color: white;
  }
}
.swiper-button-next::after,
.swiper-button-prev::after {
  color: var(--vue-color);
}
.swiper-pagination-bullet .swiper-pagination-bullet-active {
  color: var(--swiper-theme-color);
}
</style>
