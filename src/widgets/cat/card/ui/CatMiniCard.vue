<template>
  <div class="cat-mini">
    <app-icon class="cat-mini__cross" name="cross" @click="removeFromCart(item?.id)" />
    <img class="cat-mini__image" :src="item.image" alt="Изображение" />
    <div class="cat-mini__name">{{ item?.name }}</div>
  </div>
</template>

<script setup>
import { AppIcon } from '@/shared'
import { cartEntity } from '@/entities'

defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
})

const { removeFromCart } = cartEntity.useStore()
</script>

<style scoped lang="scss">
.cat-mini {
  @apply flex flex-col relative shadow-lg rounded-xl overflow-hidden h-fit;

  &__cross {
    @apply p-1.5 md:p-2 lg:p-2.5 w-6 h-6 md:w-7 md:h-7 lg:w-9 lg:h-9 text-white cursor-pointer absolute top-0 right-0;
  }

  &__image {
    @apply object-cover aspect-square h-32 md:h-40 lg:h-44;
  }

  &__name {
    @apply w-full py-1.5 text-sm md:text-base lg:text-lg font-bold text-center bg-white;
  }
}
</style>
