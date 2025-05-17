<template>
  <header class="header">
    <div class="header-inner inner">
      <router-link :to="Routes.landing.path">
        <app-icon class="header__logo" name="logo" />
      </router-link>
      <header-navigation />
      <div class="flex gap-8 items-center">
        <app-button
          @click="openModal({ name: 'cart' })"
          class="header__btn text-nowrap"
          color="primary"
          size="small"
        >
          Позвоните нам
        </app-button>
        <app-icon class="header__burger-menu" name="burger-menu" @click="toggleOpen" />
      </div>
    </div>
  </header>
</template>

<script setup>
import { AppIcon, AppButton, useBurgerMenu, useModal, Routes } from '@/shared'
import { HeaderNavigation } from '@/features'

const { toggleOpen } = useBurgerMenu()
const { openModal } = useModal()
</script>

<style scoped lang="scss">
.header {
  @apply bg-secondary;

  &-inner {
    @apply py-5 px-7 flex justify-end items-center md:justify-between max-w-[1650px];
  }

  &__burger-menu {
    @apply w-[1.5625rem] h-[1.3125rem] text-primary xl:hidden;
  }

  &__logo {
    @apply w-80 h-20 text-primary hidden md:block;
  }

  &__btn {
    @apply hidden md:block;
  }
}
</style>
