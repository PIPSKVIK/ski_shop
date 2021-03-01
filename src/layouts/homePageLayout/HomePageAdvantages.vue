<template>
  <div class="advantages">
    <div class="advantages__item item" v-for="item in items" :key="item.id">
      <app-icon class="item__icon" width="30" height="30" view-box="0 0 512 512">
        <icon-quality />
      </app-icon>
      <p class="item__text">{{ item.text }}</p>
    </div>
  </div>
</template>

<script>
import AppIcon from "@/components/appComponents/AppIcon";
import IconQuality from "@/assets/icons/icon-quality";
export default {
  name: "HomePageAdvantages",
  components: { IconQuality, AppIcon },
  props: {
    items: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.advantages {
  display: flex;
  justify-content: space-between;
  &__item {
    width: 230px;
    padding: 50px 5px;
    background: var(--white-color);
    text-align: center;
    box-sizing: border-box;
    border: 2px solid var(--white-color);
    &:hover {
      border: 2px solid var(--vue-color);
    }
  }
}

.item {
  &__text {
    margin: 0;
    font-size: 18px;
    font-weight: bold;
  }
  &__icon {
    color: var(--vue-color);
  }
}

@media (max-width: 992px) {
  .advantages {
    &__item {
      width: 20%;
    }
  }
}

@media (max-width: 850px) {
  .advantages {
    flex-wrap: wrap;
    &__item {
      width: 48%;
      margin: 5px 0;
    }
  }
}

@media(max-width: 767px) {
  .advantages {
    &__item {
      width: 100%;
    }
  }
}
</style>
