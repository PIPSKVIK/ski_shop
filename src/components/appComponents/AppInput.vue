<template>
  <label :id="name" class="input">
    {{ labelTitle }}
    <input :name="name" class="input__item" v-bind="$attrs" v-on="listeners" />
    <slot />
  </label>
</template>

<script>
export default {
  name: "AppInput",

  inheritAttrs: false,

  props: {
    name: String,
    labelTitle: String
  },

  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: $event => {
          this.$emit("input", $event.target.value);
        }
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.input {
  &__item {
    width: 100%;
    outline: none;
    padding: 5px 10px;
    box-sizing: border-box;
    border: 1px solid var(--gray-color);
    transition-property: border;
    transition-delay: 0.2s;
    transition-duration: 0.2s;
    transition-timing-function: ease-in;
  }

  &__item:focus {
    border: 1px solid var(--vue-color);
  }
}
</style>
