<template>
  <section id="banner" class="banner">
    <div class="banner-inner inner">
      <h1 class="banner-title">
        <span class="text-primary">Murland</span>
        - питомник кошек абиссинской породы и европейской бурмы
      </h1>
      <div class="relative w-fit">
        <a href="#children">
          <app-button class="ml-3 md:hidden" color="primary" size="small">
            Смотреть котят
          </app-button>
          <app-button class="hidden md:flex" color="primary" size="normal">
            Смотреть котят
          </app-button>
        </a>
        <app-icon class="banner-squiggle" name="squiggle" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { AppButton, AppIcon } from '@/shared'
</script>

<style scoped lang="scss">
.banner {
  @apply min-h-[720px] md:min-h-[900px] xl:min-h-[900px] duration-500
  bg-no-repeat bg-[--secondary-color] bg-[url('@/assets/img/banner.png')]
  bg-[position:calc(50%)_calc(90%)] bg-contain lg:bg-[size:auto_80%] xl:bg-[size:auto_90%]
  lg:bg-[position:calc(50%+20vw)_100%] xl:bg-[position:calc(50%+20vw)];

  &-inner {
    @apply pl-[1.875rem] pr-6 pt-9 xl:pt-[13.75rem] max-w-[1650px];
  }

  &-squiggle {
    @apply text-primary absolute -right-[55%] -top-2 w-[6.8125rem] h-[6.5625rem] md:w-[8.25rem] md:h-[9.375rem];
  }

  &-title {
    @apply font-second text-3xl lg:text-6xl lg:max-w-[50.3125rem] leading-none mb-[1.875rem] lg:mb-[3.125rem];
  }
}
</style>
