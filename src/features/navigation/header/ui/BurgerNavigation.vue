<template>
  <nav class="nav">
    <router-link
      v-for="(item, index) in navItems"
      :key="index"
      :to="{ path: Routes.landing.path, hash: item.href }"
      class="nav__item"
      @click="toggleOpen"
    >
      {{ item.title }}
    </router-link>
  </nav>
</template>

<script setup>
import { navigationFeature } from '@/features'
import { Routes, useBurgerMenu } from '@/shared'

const { toggleOpen } = useBurgerMenu()
const { navItems } = navigationFeature.useStore()
</script>

<style scoped lang="scss">
.nav {
  @apply flex flex-col gap-6 items-center font-bold text-primary text-2xl/none;
}
</style>
