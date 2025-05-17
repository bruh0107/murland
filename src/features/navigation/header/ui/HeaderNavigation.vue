<template>
  <nav class="nav">
    <router-link
      v-for="(item, index) in navItems"
      :key="index"
      :to="{ path: Routes.landing.path, hash: item.href }"
      class="nav__item"
    >
      {{ item.title }}
    </router-link>
  </nav>
</template>

<script setup>
import { navigationFeature } from '@/features'
import { Routes } from '@/shared/index.js'

const { navItems } = navigationFeature.useStore()
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
