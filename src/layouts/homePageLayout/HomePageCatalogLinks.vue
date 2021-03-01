<template>
  <div class="catalog">
    <h3 class="catalog__title">Каталог товаров</h3>
    <div class="catalog__items">
      <card-catalog-link
        v-for="link in getLinks"
        :key="link.id"
        :cardName="link.cardName"
        :background-img="link.backgroundImg"
        :cardLink="link.cardLink"
      />
    </div>
  </div>
</template>

<script>
import CardCatalogLink from "@/components/uiComponents/CardCatalogLink";
import { mapGetters } from "vuex";
export default {
  name: "HomePageCatalogLinks",
  components: { CardCatalogLink },
  computed: {
    ...mapGetters(["getLinks"])
  }
};
</script>

<style lang="scss" scoped>
.catalog {
  text-align: center;
  &__title {
    margin: 0 20px;
    font-size: 20px;
    text-transform: uppercase;
  }
  &__items {
    display: flex;
    justify-content: space-between;
  }
}

@media (max-width: 1120px) {
  .catalog {
    &__items {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
