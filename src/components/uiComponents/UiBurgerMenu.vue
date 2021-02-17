<template>
  <div class="menu" @click="handleClick">
    <app-icon class="menu__icon" view-box="0 0 341.333 341.333">
      <icon-burger-menu />
    </app-icon>
    <p class="menu__title">Меню</p>
  </div>
</template>

<script>
import AppIcon from "@/components/appComponents/AppIcon";
import IconBurgerMenu from "@/assets/icons/icon-burger-menu";
export default {
  name: "UiBurgerMenu",

  components: { IconBurgerMenu, AppIcon },

  methods: {
    handleClick() {
      this.$emit("handleToggleMenu");
    }
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
