<template>
  <router-link class="card" :to="{ name: cardLink }">
    <img
      :src="
        require('../../assets/images/catalogImage/linkImage/' + backgroundImg)
      "
      alt="123"
      width="200"
      height="250"
    />
    {{ cardName }}
  </router-link>
</template>

<script>
export default {
  name: "CardCatalogLink",
  props: {
    cardName: {
      type: String,
      default: "Default Name"
    },
    cardLink: {
      type: String,
      default: "CatalogSki"
    },
    backgroundImg: {
      type: String,
      default: "image-catalog-link-ski.jpg"
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  width: 32%;
  padding: 20px 0;
  background-color: var(--white-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--vue-color);
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  border: 2px solid var(--white-color);
  &:hover {
    border: 2px solid var(--vue-color);
  }
}

@media (max-width: 1120px) {
  .card {
    width: 60%;
    margin: 10px 0;
  }
}

@media (max-width: 850px) {
  .card {
    width: 100%;
  }
}
</style>
