<template>
  <section class="catalog" id="children">
    <div>
      <div class="catalog-inner inner">
        <h2 class="catalog-title">Наши малыши ищут новых мам и пап!</h2>
        <landing-cat-filter class="mb-5" v-model="params" />
        <div class="catalog-cards">
          <cat-card v-for="cat in cats" :key="cat.id" :item="cat" interaction is-child />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useFilteredData } from '@/shared'
import { catEntity } from '@/entities'
import { LandingCatFilter } from '@/features'
import { CatCard } from '@/widgets'

const { data: cats, params } = useFilteredData(catEntity.getChildren)
</script>

<style scoped lang="scss">
.catalog {
  @apply px-2 lg:px-5;

  & > div {
    background: url('@/assets/icons/paws.svg'), var(--secondary-color);
    @apply rounded-lg lg:rounded-[1.875rem] max-md:bg-[size:185px];
  }

  &-inner {
    @apply py-[1.875rem] lg:py-28 px-4 lg:max-w-[1660px] flex flex-col;
  }

  &-title {
    @apply font-second text-[1.75rem] lg:text-5xl text-center leading-none mb-9 lg:mb-[3.75rem];
  }

  &-cards {
    @apply grid grid-cols-2 gap-2.5 lg:gap-5 xl:grid-cols-3 2xl:grid-cols-4;
  }
}
</style>
