<template>
  <div class="link-tabs">
    <router-link
      exact
      v-for="tab in tabs"
      :key="tab.to.name || tab.to"
      :to="tab.to"
      class="link-tabs__item"
      active-class="link-tabs__item_active"
    >
      {{ tab.text }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: "AppRouterLink",
  props: {
    tabs: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.link-tabs {
  &__item:hover {
    border-bottom: 2px solid var(--vue-color);
  }
  &__item {
    margin-right: 15px;
    padding-bottom: 5px;
    text-decoration: none;
    font-size: 17px;
    color: var(--black-color);
    text-transform: uppercase;

    &_active {
      border-bottom: 2px solid var(--vue-color);
      color: var(--vue-color);
    }
  }
}
</style>
