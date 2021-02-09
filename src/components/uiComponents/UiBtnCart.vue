<template>
  <router-link class="btn-cart" :to="{ name: 'CartPage' }">
    <app-icon view-box="0 -31 512.00026 512" class="btn-cart__icon">
      <icon-cart-product />
    </app-icon>
    Корзина: {{ quantity }}
  </router-link>
</template>

<script>
import AppIcon from "@/components/appComponents/AppIcon";
import IconCartProduct from "@/assets/icons/icon-cart-product";
export default {
  name: "UiBtnCart",
  components: { IconCartProduct, AppIcon },
  props: {
    quantity: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style lang="scss" scoped>
.btn-cart {
  padding: 5px 20px;
  text-decoration: none;
  color: var(--white-color);
  background-color: var(--gray-strong-color);
  transition: all 0.3s linear;
  display: flex;

  &__icon {
    margin-right: 10px;
  }

  &:hover {
    background-color: var(--gray-strong-color-hover);
  }
}

.router-link-active {
  color: var(--black-color);
  background-color: var(--vue-color);
}
</style>
