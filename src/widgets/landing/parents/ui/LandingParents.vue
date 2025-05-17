<template>
  <section id="parents" class="parents px-2 lg:px-5">
    <div>
      <div class="parents-inner inner">
        <div class="flex flex-col gap-5">
          <div class="flex flex-col items-center">
            <h2 class="font-h2 parents-title">Производители питомника</h2>
            <app-icon name="underline" class="parents-underline" />
          </div>
          <p class="parents-description">
            Здесь вы можете увидеть фотографии родителей наших милейших котят. Мы с любовью
            заботимся о них, создавая идеальные условия для их жизни и развития.
          </p>
        </div>
      </div>
      <div class="rounded-lg lg:rounded-[1.875rem] overflow-hidden">
        <div class="py-9 px-4 lg:max-w-[1660px] flex flex-col gap-5 mx-auto">
          <horizontal-carousel basis :items="parents" v-slot="{ item }">
            <cat-card :item="item" />
          </horizontal-carousel>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { AppIcon, HorizontalCarousel } from '@/shared'
import { catEntity } from '@/entities'
import { CatCard } from '@/widgets'
import { asyncComputed } from '@vueuse/core'

const parents = asyncComputed(() => catEntity.getParents())
</script>

<style scoped lang="scss">
.parents {
  & > div {
    background: url('@/assets/icons/paws.svg'), var(--secondary-color);
    @apply rounded-[1.875rem] py-24;
  }

  &-inner {
    @apply flex flex-col items-center mb-5 md:mb-7 lg:mb-9;
  }

  &-title {
    @apply text-center;
  }
  &-underline {
    @apply w-[248px] md:w-[420px] h-auto text-primary;
  }
  &-description {
    @apply max-md:max-w-[315px] max-w-[820px] text-xs/none md:text-base/none lg:text-xl text-center;
  }
  &-cards {
    @apply grid grid-cols-2 gap-2.5 lg:gap-5 xl:grid-cols-3 2xl:grid-cols-4;
  }
}
</style>
