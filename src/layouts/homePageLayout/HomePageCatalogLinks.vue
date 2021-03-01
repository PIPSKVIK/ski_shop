<template>
  <div class="catalog">
    <h3 class="catalog__title">Каталог товаров</h3>
    <div class="catalog__items">
      <card-catalog-link
        cardName="Лыжы"
        background-img="image-catalog-link-ski.jpg"
        cardLink="CatalogSki"
      />
      <card-catalog-link
        cardName="Палки"
        background-img="image-catalog-link-poles.jpg"
        cardLink="CatalogSkiPoles"
      />
      <card-catalog-link
        cardName="Ботинки"
        background-img="images-catalog-link-boots.jpeg"
        cardLink="CatalogSkiBoots"
      />
    </div>
  </div>
</template>

<script>
import CardCatalogLink from "@/components/uiComponents/CardCatalogLink";
export default {
  name: "HomePageCatalogLinks",
  components: { CardCatalogLink }
};
</script>

<style lang="scss" scoped>
.catalog {
  text-align: center;
  &__title {
    margin: 0;
    font-size: 20px;
    text-transform: uppercase;
    margin-bottom: 20px;
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
