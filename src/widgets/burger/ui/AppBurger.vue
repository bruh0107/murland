<template>
  <div class="burger-menu" :class="[opened ? '' : '_closed']">
    <app-icon name="cross" class="burger-menu__cross" @click="toggleOpen" />
    <burger-navigation />
    <app-icon name="logo-big" class="burger-menu__logo" />
  </div>
</template>

<script setup>
import { useBurgerMenu, AppIcon } from '@/shared'
import { useWindowSize } from '@vueuse/core'
import { watch } from 'vue'
import { BurgerNavigation } from '@/features'

const { opened, toggleOpen } = useBurgerMenu()

watch(useWindowSize().width, (value) => value > 768 && opened.value && toggleOpen())
</script>

<style scoped lang="scss">
.burger-menu {
  @apply flex flex-col justify-end items-center gap-[20vh] fixed left-0 top-0 bottom-0 right-0 duration-300 bg-background py-12;

  &__cross {
    @apply text-primary w-6 h-6 absolute top-5 right-5;
  }

  &__logo {
    @apply text-primary max-w-[230px];
  }

  &._closed {
    @apply translate-x-full;
  }
}
</style>
