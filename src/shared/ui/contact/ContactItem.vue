<template>
  <div class="contact-item">
    <app-icon class="contact-item__icon" :name="icon" />
    <p class="contact-item__text">{{ text }}</p>
  </div>
</template>

<script setup>
import { AppIcon } from '@/shared'

defineProps({
  icon: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    default: '',
  },
})
</script>

<style scoped lang="scss">
.contact-item {
  @apply flex gap-2.5 font-bold;

  &__icon {
    @apply w-6 xl:w-[2rem] text-primary;
  }
  &__text {
    @apply font-bold lg:text-2xl;
  }
}
</style>
