<template>
  <div class="footer">
    <div class="footer__wrapper">
      <p class="footer__wrapper-content">
        footer footer footer footer footer footer footer footer footer footer
        footer footer footer
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterMain",
  props: {}
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: var(--gray-color);
  &__wrapper {
    max-width: var(--desctop-width);
    padding: 0 15px;
    margin: 0 auto;

    &-content {
      text-align: center;
      padding: 30px 0;
    }
  }
}
</style>
