<template>
  <div class="search">
    <h2 class="search__logo">{{ logo }}</h2>
    <input type="text" placeholder="Поиск по каталогу" class="search__input" />
    <a href="#">Адресс магазина</a>
  </div>
</template>

<script>
export default {
  name: "SearchHeaderBlock",
  data() {
    return {
      logo: "<My_Ski />"
    };
  }
};
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  &__logo {
    display: inline-block;
    font-size: 30px;
  }

  &__input {
    min-width: 300px;
    padding: 5px 20px;
  }
}
</style>
