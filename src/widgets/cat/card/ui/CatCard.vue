<template>
  <article class="cat-card card-shadow-sm lg:card-shadow">
    <div class="flex flex-col gap-2.5 lg:gap-5">
      <img class="cat-card__img" :src="item.image" alt="cat photo" />
      <div class="flex flex-col gap-1 lg:gap-2.5">
        <p class="cat-card__name">{{ item.name }}</p>
        <div class="cat-card__info">
          <cat-fields :item />
        </div>
      </div>
    </div>
    <cart-add v-if="interaction" :id="item?.id">
      <app-button @click="openContactForm" class="cat-card__btn" size="small" color="primary">
        Узнать цену
      </app-button>
    </cart-add>
    <div
      class="flex items-center gap-5 max-xl:hidden"
      :class="interaction ? 'justify-evenly' : 'justify-start'"
    >
      <app-button size="small" color="primary"> Подробнее </app-button>
      <cart-add v-if="interaction" :id="item?.id">
        <app-button size="small" color="accent" @click="openContactForm"> Узнать цену </app-button>
      </cart-add>
    </div>
  </article>
</template>

<script setup>
import { AppButton, useModal } from '@/shared'
import { CatFields, CartAdd } from '@/features'

const props = defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
  interaction: {
    type: Boolean,
    default: false,
  },
  isChild: {
    type: Boolean,
    default: false,
  },
})

const { openModal } = useModal()
const openContactForm = () => openModal({ name: 'cart' })
</script>

<style scoped lang="scss">
.cat-card {
  @apply bg-white p-3 lg:p-5 rounded-[0.625rem] lg:rounded-[1.875rem] flex flex-col gap-4;

  &__img {
    @apply rounded-[0.4375rem] lg:rounded-[1.25rem] h-[120px] md:h-[180px] lg:h-[280px] object-cover cursor-pointer;
  }

  &__name {
    @apply text-sm md:text-lg font-bold lg:text-[1.625rem] lg:text-primary;
  }

  &__info {
    @apply flex flex-col gap-0.5;
  }

  &__btn {
    @apply text-[0.625rem] md:text-[14px] rounded-[0.5rem] py-1.5 xl:hidden;
  }
}
</style>
