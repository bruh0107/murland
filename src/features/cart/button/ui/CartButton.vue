<template>
  <button class="cart-button" @click="openModal({ name: 'cart' })" v-if="countCats">
    <app-icon class="cart-button__icon" name="cart" />
    <span class="cart-button__count">
      {{ countCats }}
    </span>
  </button>
</template>

<script setup>
import { cartEntity } from '@/entities'
import { storeToRefs } from 'pinia'
import { AppIcon, useModal } from '@/shared'

const { countCats } = storeToRefs(cartEntity.useStore())
const { openModal } = useModal()
</script>

<style scoped lang="scss">
.cart-button {
  @apply z-40 fixed rounded-full bg-primary text-background w-10 h-10 md:w-16 md:h-16 lg:w-[4.625rem] lg:h-[4.625rem] flex justify-center items-center top-28 right-[5.5vw];

  &__icon {
    @apply min-w-4 h-4 md:min-w-6 md:h-6 lg:min-w-7 lg:h-7;
  }

  &__count {
    @apply bottom-0 right-0 flex items-center justify-center w-3 h-3 md:w-5 md:h-5 lg:w-6 lg:h-6 absolute bg-accent text-[9px] md:text-xs lg:text-sm rounded-full;
  }
}
</style>
