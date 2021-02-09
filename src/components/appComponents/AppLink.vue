<template>
  <div>
    <a :href="href" class="link">
      <slot>Link</slot>
    </a>
  </div>
</template>

<script>
export default {
  name: "AppLink",

  props: {
    href: {
      type: String,
      default: "#"
    }
  }
};
</script>

<style lang="scss" scoped>
.link {
  font-size: 16px;
  color: var(--black-color);
  text-decoration: none;
  transition-property: color;
  transition-delay: 0.2s;
  transition-duration: 0.2s;
  transition-timing-function: ease-in;
}

.link:hover {
  color: var(--vue-color);
}
</style>
