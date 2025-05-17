<template>
  <section id="graduates" class="graduates">
    <div
      class="max-w-[1720px] mx-auto w-full px-7 mb-14 flex flex-col max-md:text-center max-md:items-center max-md:pb-48"
    >
      <div class="w-fit">
        <h2 class="font-h2">Наши выпускники</h2>
        <app-icon name="underline" class="text-primary mb-5 scale-105" />
      </div>
      <p class="text-sm md:text-base lg:text-xl md:max-w-[400px] lg:max-w-[600px] xl:max-w-[820px]">
        Здесь вы можете увидеть фотографии наших выпускников с их новыми владельцами. Каждое фото —
        это история любви и дружбы, которая началась с момента усыновления.
      </p>
    </div>
    <div class="graduates-slider__wrapper">
      <img class="graduates__cat" src="@/assets/img/graduates-cat.png" alt="graduates-cat" />
      <horizontal-carousel :items="graduates" v-slot="{ item }">
        <img class="graduates-slider__item" :src="item.image" alt="изображение" />
      </horizontal-carousel>
    </div>
  </section>
</template>

<script setup>
import { HorizontalCarousel } from '@/shared'
import { catEntity } from '@/entities'
import { storeToRefs } from 'pinia'
import { AppIcon } from '@/shared/index.js'

const { graduates } = storeToRefs(catEntity.useStore())
</script>

<style scoped lang="scss">
.graduates {
  @apply overflow-hidden relative md:pt-[10.3rem];

  &__cat {
    @apply absolute right-0 top-0 z-10 -translate-y-[74%] w-[clamp(364px,60vw,906px)] pointer-events-none;
  }

  &-slider {
    &__wrapper {
      @apply relative bg-secondary py-2.5 md:py-3.5 lg:py-5;
    }

    &__item {
      @apply max-w-[160px] md:max-w-[300px] lg:max-w-[400px] aspect-square rounded-lg md:rounded-2xl lg:rounded-[30px];
    }
  }
}
</style>
