<template>
  <div class="nav">
    <app-router-link :tabs="tabs" />
  </div>
</template>

<script>
import AppRouterLink from "@/components/appComponents/AppRouterLink";
export default {
  name: "NavBar",
  components: { AppRouterLink },
  data() {
    return {
      tabs: [
        { to: { name: "HomePage" }, text: "Главная" },
        { to: { name: "CatalogPage" }, text: "Каталог" },
        { to: { name: "NewsPage" }, text: "Новости" },
        { to: { name: "CommentsPage" }, text: "Отзывы" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
