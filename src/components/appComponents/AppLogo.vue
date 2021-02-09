<template>
  <div class="logo">
    <router-link class="logo__text" :to="{ name: 'HomePage' }">
      {{ text }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: "AppLogo",

  data() {
    return {
      text: "</My_Ski>"
    };
  }
};
</script>

<style lang="scss" scoped>
.logo {
  &__text {
    text-decoration: none;
    color: var(--black-color);
    font-size: 30px;
    transition-property: color;
    transition-delay: 0.2s;
    transition-duration: 0.2s;
    transition-timing-function: ease-in;
  }

  &__text:hover {
    color: var(--vue-color);
  }
}
</style>
