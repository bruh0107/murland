<template>
  <div class="cats">
    <div>
      <div class="cats-inner inner">
        <div class="flex justify-between mb-[60px]">
          <h2 class="cats-title">Все котята</h2>
          <router-link to="/admin/cats/add" class="cats-btn__primary">
            <app-button size="small" color="primary">Добавить котенка</app-button>
          </router-link>
        </div>
        <div class="cats-cards">
          <cat-card v-for="cat in catsAdmin" :key="cat.id" :item="cat" interaction is-child />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { AppButton } from '@/shared'
import { catEntity } from '@/entities'
import { CatCard } from '@/widgets'
import {storeToRefs} from "pinia";
import {onMounted} from "vue";

const { getAdminCats } = catEntity.useStore()
const { catsAdmin } = storeToRefs(catEntity.useStore())

onMounted(() => getAdminCats())
</script>

<style scoped lang="scss">
.cats {
  @apply my-[45px] px-5;

  &-inner {
    @apply max-w-[1650px] py-[60px];
  }

  & > div {
    @apply rounded-[30px];
    background: url('@/assets/icons/paws.svg'), var(--secondary-color);
  }

  &-title {
    @apply font-second text-5xl text-primary;
  }

  &-cards {
    @apply grid grid-cols-2 gap-2.5 lg:gap-5 xl:grid-cols-3 2xl:grid-cols-4;
  }
}
</style>
