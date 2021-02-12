<template>
  <div class="menu" @click="toggleIcon = !toggleIcon">
    <app-icon
      v-if="toggleIcon"
      class="menu__icon"
      view-box="0 0 341.333 341.333"
    >
      <icon-burger-menu />
    </app-icon>
    <app-icon v-else class="menu__icon" view-box="0 0 47.971 47.971">
      <icon-close-menu />
    </app-icon>
    <p class="menu__title">Меню</p>
  </div>
</template>

<script>
import AppIcon from "@/components/appComponents/AppIcon";
import IconBurgerMenu from "@/assets/icons/icon-burger-menu";
import IconCloseMenu from "@/assets/icons/icon-close-menu";
export default {
  name: "UiBurgerMenu",
  components: { IconCloseMenu, IconBurgerMenu, AppIcon },

  data() {
    return {
      toggleIcon: true
    };
  }
};
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  justify-content: center;
  align-items: center;

  &__title {
    margin: 0;
    text-transform: uppercase;
  }
  &__icon {
    margin-right: 10px;
  }
}
</style>
