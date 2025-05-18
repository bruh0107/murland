<template>
  <div class="catalog">
    <div>
      <div class="catalog-inner inner">
        <h2 class="catalog-title">Все наши малыши</h2>
        <div class="flex flex-col gap-5">
          <landing-cat-filter v-model="params" />
          <div class="catalog-cards">
            <cat-card v-for="cat in cats" :key="cat.id" :item="cat" interaction is-child />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { LandingCatFilter } from '@/features'
import { catEntity } from '@/entities'
import { CatCard } from '@/widgets'
import { ref } from 'vue'
import { asyncComputed } from '@vueuse/core'

const params = ref()
const cats = asyncComputed(() => catEntity.getCats(params.value))
// вынести это в отдельный виджет и то что в landing children
</script>

<style scoped lang="scss">
.catalog {
  @apply my-[120px] px-5;

  & > div {
    @apply rounded-[30px];
    background: url('@/assets/icons/paws.svg'), var(--secondary-color);
  }

  &-inner {
    @apply max-w-[1650px] py-[110px];
  }

  &-title {
    @apply text-5xl leading-none font-second text-center text-dark mb-[60px];
  }
  &-cards {
    @apply grid grid-cols-2 gap-2.5 lg:gap-5 xl:grid-cols-3 2xl:grid-cols-4;
  }
}
</style>
