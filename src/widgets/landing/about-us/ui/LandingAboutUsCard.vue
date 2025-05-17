<template>
  <div class="about-us-card">
    <img class="w-[70px]" :src="img" alt="about-us-cat" />
    <p v-html="text" class="about-us-card__text" />
  </div>
</template>

<script setup>
defineProps({
  img: {
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
.about-us-card {
  @apply bg-background flex gap-[1.375rem] xl:gap-14 p-4 xl:py-7 xl:pl-[1.875rem] xl:pr-[2.688rem] items-center rounded-[0.625rem];

  &__text {
    @apply text-xs md:text-sm lg:text-base xl:text-xl;
  }
}
</style>
