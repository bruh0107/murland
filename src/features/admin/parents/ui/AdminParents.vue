<template>
  <div class="parents">
    <div>
      <div class="parents-inner inner">
        <h2 class="parents-title">Все родители</h2>
        <div class="parents-cards">
          <cat-card
            v-for="parent in parents"
            :key="parent.id"
            :item="parent"
            interaction
            is-child
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { asyncComputed } from '@vueuse/core'
import { CatCard } from '@/widgets'
import { catEntity } from '@/entities'

const parents = asyncComputed(() => catEntity.getParents())
</script>

<style scoped lang="scss">
.parents {
  @apply my-[45px] px-5;

  &-inner {
    @apply max-w-[1650px] py-[60px];
  }

  & > div {
    @apply rounded-[30px];
    background: url('@/assets/icons/paws.svg'), var(--secondary-color);
  }

  &-title {
    @apply font-second text-5xl text-primary mb-[4rem];
  }

  &-cards {
    @apply grid grid-cols-2 gap-2.5 lg:gap-5 xl:grid-cols-3 2xl:grid-cols-4;
  }
}
</style>
