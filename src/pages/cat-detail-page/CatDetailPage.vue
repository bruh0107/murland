<template>
  <div class="cat-detail">
    <img class="cat-detail__img" :src="cat.photo" alt="" />
    <div class="flex flex-col gap-5 items-start">
      <div class="cat-detail__info">
        <p class="cat-detail__name">{{ cat.name }}</p>
        <p>Пол: {{ cat.gender }}</p>
        <p>Порода: {{ cat.breed }}</p>
        <p>Дата рождения: {{ cat.birth_date }}</p>
        <p>Окрас: {{ cat.color }}</p>
        <p>Родители: Муня и Кисяня</p>
      </div>
      <div class="cat-detail__parent">
        <div class="flex flex-col items-center">
          <img class="cat-detail__parent-photo" src="" alt="" />
          <p>Муня</p>
        </div>
        <div class="flex flex-col items-center">
          <img class="cat-detail__parent-photo" src="" alt="" />
          <p>Кисяня</p>
        </div>
      </div>
      <cart-add :id="+route.params.id">
        <app-button @click="openModal({ name: 'cart' })" size="small" color="primary"
          >Узнать цену</app-button
        >
      </cart-add>
    </div>
  </div>
</template>

<script setup>
import { AppButton, useModal } from '@/shared'
import { catEntity } from '@/entities'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { CartAdd } from '@/features/index.js'

const route = useRoute()

const { getOneCat } = catEntity.useStore()
const { openModal } = useModal()

const cat = ref({})

onMounted(() => getOneCat(route.params.id).then((data) => (cat.value = data)))
</script>

<style scoped lang="scss">
.cat-detail {
  @apply flex gap-[118px] justify-center py-[150px];

  &__img {
    @apply w-[722px] h-[695px] object-cover rounded-[30px];
  }

  &__name {
    @apply text-5xl font-bold;
  }

  &__info {
    @apply text-xl;
  }

  &__parent {
    @apply flex gap-5;

    &-photo {
      @apply w-[260px] h-[240px] rounded-[27px];
    }
  }
}
</style>
