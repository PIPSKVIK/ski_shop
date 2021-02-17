<template>
  <div class="mobile-menu">
    <header class="mobile-menu__header" @click="$emit('close-icon-menu')">
      <app-icon class="mobile-menu__header-icon" view-box="0 0 47.971 47.971">
        <icon-close-menu />
      </app-icon>
    </header>
    <main class="mobile-menu__main">
      <nav-bar mobile-menu="false" />
    </main>
    <footer class="mobile-menu__footer"></footer>
  </div>
</template>

<script>
import AppIcon from "@/components/appComponents/AppIcon";
import IconCloseMenu from "@/assets/icons/icon-close-menu";
import NavBar from "@/layouts/headerLayoutsElement/NavBar";
export default {
  name: "MobileNavMenu",
  components: { NavBar, IconCloseMenu, AppIcon }
};
</script>

<style lang="scss" scoped>
.mobile-menu {
  width: 250px;
  height: 100%;
  background: var(--gray-strong-color);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__header {
    align-self: flex-end;
    padding: 10px;
    &:hover {
      color: #3fb984;
      cursor: pointer;
    }
  }

  &__main {
    margin-top: 10px;
  }
}
</style>
