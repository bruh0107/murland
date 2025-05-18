<template>
  <nav class="nav">
    <router-link
      v-for="(item, index) in adminNavItems"
      :key="index"
      :to="{ name: item.to }"
      class="nav__item"
    >
      {{ item.title }}
    </router-link>
  </nav>
</template>

<script setup>
import { navigationFeature } from '@/features'

const { adminNavItems } = navigationFeature.useStore()
</script>

<style scoped lang="scss">
.nav {
  @apply hidden gap-[1.875rem] items-center xl:flex text-nowrap;

  &__item {
    @apply text-2xl leading-none text-dark font-bold;

    &:hover {
      @apply text-primary;
    }

    &:active {
      @apply text-black;
    }
  }
}
</style>
