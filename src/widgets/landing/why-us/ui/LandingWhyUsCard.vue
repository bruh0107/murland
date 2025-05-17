<template>
  <div class="why-us-card">
    <img :src="img" alt="cat-1" class="why-us-card__img" />
    <p class="why-us-card__text">{{ text }}</p>
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
  index: {
    type: Number,
    default: null,
  },
})
</script>

<style scoped lang="scss">
.why-us-card {
  @apply flex flex-col items-center gap-1 md:self-end h-full;

  &__text {
    @apply text-[0.875rem] lg:text-2xl leading-none font-bold max-w-[150px] lg:max-w-[277px] text-center;
  }

  &__img {
    @apply w-[270px] md:w-[370px] lg:w-[480px] object-contain h-full;
  }

  &:nth-child(2) {
    & .why-us-card__img {
      @apply transform translate-y-2 lg:translate-y-[30px];
    }
  }
}
</style>
