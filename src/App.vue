<template>
  <div id="app">
    <div class="container">
      <header-main />
      <BaseLayout class="base">
        <router-view />
      </BaseLayout>
      <footer-main />
    </div>
  </div>
</template>

<style lang="scss"></style>
<script>
import BaseLayout from "@/layouts/baseLayoutsElenet/BaseLayout";
import HeaderMain from "@/layouts/headerLayoutsElement/HeaderMain";
import FooterMain from "@/layouts/footerLayoutsElement/FooterMain";
export default {
  components: { FooterMain, BaseLayout, HeaderMain }
};
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.base {
  background-color: var(--base-layout-background);
  height: 100%;
  margin-top: 10px;
  border-top: 2px solid var(--vue-color);
  border-bottom: 2px solid var(--vue-color);
}
</style>
