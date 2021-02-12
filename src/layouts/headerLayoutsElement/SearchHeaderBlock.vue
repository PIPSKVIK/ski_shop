<template>
  <div class="search">
    <app-logo class="search__logo" />
    <app-input
      name="search"
      class="search__input"
      placeholder="Поиск по каталогу"
    >
      <app-icon
        view-box="0 0 56.966 56.966"
        width="14"
        height="14"
        class="search__input-icon"
      >
        <icon-input-search />
      </app-icon>
    </app-input>
    <div class="search__link">
      <app-link>
        <app-icon view-box="-119 -21 682 682.66669" class="search__link-icon">
          <icon-location />
        </app-icon>
        <span>Адрес магазина</span>
      </app-link>
    </div>
  </div>
</template>

<script>
import AppInput from "@/components/appComponents/AppInput";
import AppIcon from "@/components/appComponents/AppIcon";
import IconInputSearch from "@/assets/icons/icon-input-search";
import AppLogo from "@/components/appComponents/AppLogo";
import AppLink from "@/components/appComponents/AppLink";
import IconLocation from "@/assets/icons/icon-location";
export default {
  name: "SearchHeaderBlock",
  components: {
    IconLocation,
    AppLink,
    AppLogo,
    IconInputSearch,
    AppIcon,
    AppInput
  }
};
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;

  &__logo {
    display: inline-block;
  }

  &__input {
    width: 30%;
    position: relative;
    transition-property: color;
    transition-delay: 0.2s;
    transition-duration: 0.2s;
    transition-timing-function: ease-in;

    &-icon {
      position: absolute;
      right: 5px;
      top: 50%;
      transform: translate(0, -50%);
    }
  }

  &__link {
    &-icon {
      margin-right: 5px;
    }
  }

  &__input:focus-within {
    color: var(--vue-color);
  }
}

@media (max-width: 767px) {
  .search {
    &__logo {
      margin-bottom: 10px;
    }
    &__input {
      width: 60%;
      margin-bottom: 10px;
    }
  }
}
</style>
