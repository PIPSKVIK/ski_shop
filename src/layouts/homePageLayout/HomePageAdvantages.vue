<template>
  <div class="advantages">
    <div class="advantages__item" v-for="item in items" :key="item.id">
      <slot />
      <span>{{ item.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePageAdvantages",
  data() {
    return {
      items: [
        { id: 1, text: "Качественные товары" },
        { id: 2, text: "Широкий ассортимент товаров" },
        { id: 3, text: "Быстрая доставка по всей России" },
        { id: 4, text: "Профессиональные консультанты" }
      ]
    };
  }
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
    box-sizing: border-box;
    border: 2px solid var(--white-color);
    &:hover {
      border: 2px solid var(--vue-color);
    }
  }
}
</style>
