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
        <div class="header__nav-auth">
          <button>Войти</button>
          <button>Регистрация</button>
          <span class="header__nav-cart"> (0) Корзина</span>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import NavBar from "@/layouts/headerLayoutsElement/NavBar";
import SearchHeaderBlock from "@/layouts/headerLayoutsElement/SearchHeaderBlock";
export default {
  name: "Header",
  components: { SearchHeaderBlock, NavBar }
};
</script>

<style lang="scss" scoped>
.header {
  &__nav {
    width: var(--desctop-width);
    padding: 0 15px;
    margin: 0 auto;

    &-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &-auth {
    }

    &-cart {
      background-color: grey;
      padding: 10px 20px;
      color: white;
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
}
</style>
