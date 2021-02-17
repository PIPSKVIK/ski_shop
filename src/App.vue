<template>
  <div id="app">
    <div class="container">
      <transition name="fade">
        <mobile-nav-menu
          class="nav-menu"
          v-if="toggleMenu"
          @close-icon-menu="toggleMenu = false"
        />
      </transition>
      <menu-closer
        v-if="toggleMenu"
        class="nav-menu__closer"
        @close-menu="toggleMenu = false"
      />
      <header-main @handleToggleMenu="toggleMenu = !toggleMenu" />
      <BaseLayout class="base">
        <router-view />
      </BaseLayout>
      <footer-main />
    </div>
  </div>
</template>

<style lang="scss"></style>
<script>
import BaseLayout from "@/layouts/baseLayoutsElenet/BaseLayout";
import HeaderMain from "@/layouts/headerLayoutsElement/HeaderMain";
import FooterMain from "@/layouts/footerLayoutsElement/FooterMain";
import MobileNavMenu from "@/layouts/headerLayoutsElement/MobileNavMenu";
import MenuCloser from "@/components/componentsUtils/MenuCloser";
export default {
  components: { MenuCloser, MobileNavMenu, FooterMain, BaseLayout, HeaderMain },

  data() {
    return {
      toggleMenu: false
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}

.base {
  background-color: var(--base-layout-background);
  height: 100%;
  border-top: 2px solid var(--vue-color);
  border-bottom: 2px solid var(--vue-color);
}

.nav-menu {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1020;
  &__closer {
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.58);
    }
  }
}

//transition

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
