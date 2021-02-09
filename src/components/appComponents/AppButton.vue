<template>
  <button :type="type" class="button" v-bind="$attrs" v-on="$listeners">
    <slot />
  </button>
</template>

<script>
export default {
  name: "AppButton",

  inheritAttrs: false,

  props: {
    type: {
      type: String,
      default: "button"
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  box-sizing: border-box;
  background-color: transparent;
  outline: none;
  display: inline-block;
  text-align: center;
  padding: 5px 12px;
  border-radius: 5px;
  border: 1px solid var(--vue-color);
  color: var(--black-color);
  cursor: pointer;
  transition: all 0.2s linear;

  &:hover {
    background-color: var(--vue-color);
    border: 1px solid var(--vue-color);
    color: var(--white-color);
  }

  &:active {
    background-color: var(--vue-color-active);
  }
}
</style>
