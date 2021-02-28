<template>
  <div class="mobile-menu">
    <header class="mobile-menu__header" @click="closeMenuEvent">
      <app-icon class="mobile-menu__header-icon" view-box="0 0 47.971 47.971">
        <icon-close-menu />
      </app-icon>
    </header>
    <main class="mobile-menu__main">
      <nav-bar mobile-menu="false" />
    </main>
    <footer class="mobile-menu__footer">
      <app-button class="mobile-menu__footer-enter" @click="closeMenuEvent">
        Войти
      </app-button>
      <app-button
        class="mobile-menu__footer-registration"
        @click="closeMenuEvent"
      >
        Регистрация
      </app-button>
      <ui-btn-cart @handleCartEvent="closeMenuEvent" />
    </footer>
  </div>
</template>

<script>
import AppIcon from "@/components/appComponents/AppIcon";
import IconCloseMenu from "@/assets/icons/icon-close-menu";
import NavBar from "@/layouts/headerLayoutsElement/NavBar";
import AppButton from "@/components/appComponents/AppButton";
import UiBtnCart from "@/components/uiComponents/UiBtnCart";
import { mapMutations } from "vuex";
export default {
  name: "MobileNavMenu",

  components: { UiBtnCart, NavBar, IconCloseMenu, AppIcon, AppButton },

  methods: {
    ...mapMutations(["changeToggleMenu"]),
    closeMenuEvent() {
      this.changeToggleMenu();
    }
  }
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

  &__footer {
    display: flex;
    flex-direction: column;
    &-enter {
      margin-bottom: 10px;
    }
    &-registration {
      margin-bottom: 10px;
    }
  }

  &__main {
    margin-top: 10px;
  }
}
</style>
