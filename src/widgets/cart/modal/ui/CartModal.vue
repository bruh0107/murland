<template>
  <app-modal name="cart">
    <div class="flex flex-col md:flex-row gap-5 md:gap-7 lg:gap-10">
      <div class="flex flex-col gap-3 md:gap-4 lg:gap-6 min-w-52 md:min-w-72" v-if="countCats">
        <h2 class="text-xl lg:text-3xl font-bold">Ваш выбор:</h2>
        <div
          class="grid grid-cols-2 sm:grid-cols-3 gap-5 max-md:max-h-48"
          :class="[
            countCats >= 2 ? 'md:grid-cols-2' : 'md:grid-cols-1',
            countCats >= 3 && 'max-md:overflow-y-auto py-2',
          ]"
        >
          <cat-mini-card v-for="item in cartChildren" :item :key="item?.id" />
        </div>
      </div>
      <cart-form />
    </div>
  </app-modal>
</template>

<script setup>
import { AppModal } from '@/shared'
import { cartEntity } from '@/entities'
import { CartForm } from '@/features'
import { CatMiniCard } from '@/widgets'
import { storeToRefs } from 'pinia'

const { cartChildren, countCats } = storeToRefs(cartEntity.useStore())
</script>
