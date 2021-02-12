<template>
  <header class="header">
    <div class="header__top">
      <p class="header__top-title">Мы не просто лыжный магазин</p>
      <ui-burger-menu class="header__top-menu" />
    </div>
    <nav class="header__nav">
      <search-header-block class="header__nav-search"/>
      <div class="header__nav-wrapper">
        <nav-bar />
        <div class="header__auth">
          <div class="header__auth-wrapper">
            <app-button class="header__auth-enter">Войти</app-button>
            <app-button class="header__auth-registration">
              Регистрация
            </app-button>
          </div>
          <ui-btn-cart class="header__auth-cart" />
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import NavBar from "@/layouts/headerLayoutsElement/NavBar";
import SearchHeaderBlock from "@/layouts/headerLayoutsElement/SearchHeaderBlock";
import AppButton from "@/components/appComponents/AppButton";
import UiBtnCart from "@/components/uiComponents/UiBtnCart";
import UiBurgerMenu from "@/components/uiComponents/UiBurgerMenu";
export default {
  name: "Header",
  components: { UiBurgerMenu, UiBtnCart, AppButton, SearchHeaderBlock, NavBar }
};
</script>

<style lang="scss" scoped>
.header {
  &__nav {
    max-width: var(--desctop-width);
    padding: 0 15px;
    margin: 20px auto;
    &-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  &__top {
    width: 100%;
    background-color: var(--vue-color);
    padding: 10px 0;
    color: var(--white-color);
    text-align: center;
    &-title {
      margin: 0;
      text-transform: uppercase;
    }
    &-menu {
      display: none;
    }
  }
  &__auth {
    display: flex;
    align-items: center;
    &-enter {
      margin-right: 10px;
    }
    &-registration {
      margin-right: 10px;
    }
    &-wrapper {
      margin-right: 50px;
    }
  }
}

@media (max-width: 992px) {
  .header {
    &__top {
      cursor: pointer;
      z-index: 1000;
      &:hover {
        color: var(--black-color);
      }
      &-title {
        display: none;
      }
      &-menu {
        display: flex;
      }
    }

    &__nav {
      &-wrapper {
        display: none;
      }
    }
  }
}

@media (max-width: 767px) {
  .header {
    &__nav {
      margin: 0;
      &-search {
        flex-direction: column;
        padding: 5px 0;
      }
    }
  }
}
</style>
