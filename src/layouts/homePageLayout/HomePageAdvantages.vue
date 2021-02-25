<template>
  <div class="advantages">
    <div class="advantages__item">
      <span>Качественные товары</span>
    </div>
    <div class="advantages__item">
      <span>Широкий ассортимент товаров</span>
    </div>
    <div class="advantages__item">
      <span>Быстрая доставка по всей России</span>
    </div>
    <div class="advantages__item">
      <span>Профессиональные консультанты</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePageAdvantages"
};
</script>

<style lang="scss" scoped>
.advantages {
  display: flex;
  justify-content: space-between;
  &__item {
    width: 250px;
    padding: 50px 5px;
    background: var(--white-color);
    text-align: center;
  }
}
</style>
