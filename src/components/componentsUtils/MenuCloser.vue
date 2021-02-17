<template>
  <div class="menu-closer"></div>
</template>

<script>
export default {
  name: "MenuCloser"
};
</script>

<style lang="scss" scoped>
.menu-closer {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.52);
  top: 0;
  left: 0;
  z-index: 1010;
}
</style>
