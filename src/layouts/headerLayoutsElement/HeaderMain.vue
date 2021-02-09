<template>
  <header class="header">
    <div class="header__top">
      <div class="header__top-banner">
        <span>Мы не просто лыжный магазин</span>
      </div>
    </div>
    <nav class="header__nav">
      <search-header-block />
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
export default {
  name: "Header",
  components: { UiBtnCart, AppButton, SearchHeaderBlock, NavBar }
};
</script>

<style lang="scss" scoped>
.header {
  &__nav {
    width: var(--desctop-width);
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
    &-banner {
      width: 1000px;
      padding: 0 15px;
      margin: 0 auto;
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
</style>
