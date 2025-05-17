<template>
  <div @click="addToCart(id)" class="w-fit h-fit">
    <slot />
  </div>
</template>

<script setup>
import { cartEntity } from '@/entities'

defineProps({
  id: {
    type: Number,
    required: true,
  },
})

const { addToCart } = cartEntity.useStore()
</script>
