<template>
  <section class="why-us">
    <div class="why-us__inner inner">
      <div class="flex flex-col items-center mb-10">
        <h2 class="why-us__title">Почему именно мы?</h2>
        <app-icon name="underline" class="why-us__underline" />
      </div>
      <div
        class="flex flex-col md:flex-row flex-wrap md:justify-center gap-[1.875rem] md:gap-[2vw]"
      >
        <landing-why-us-card
          v-for="(card, index) in whyUsCards"
          :key="index"
          :img="card.img"
          :text="card.text"
          :index="index"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { AppIcon } from '@/shared'
import { LandingWhyUsCard } from '@/widgets'
import WhyUsCat1 from '@/assets/img/why-us-cats/why-us-cat-1.png'
import WhyUsCat2 from '@/assets/img/why-us-cats/why-us-cat-2.png'
import WhyUsCat3 from '@/assets/img/why-us-cats/why-us-cat-3.png'

const whyUsCards = [
  { img: WhyUsCat1, text: 'Социализация с первых дней жизни' },
  { img: WhyUsCat2, text: 'Породы, которые влюбляют' },
  { img: WhyUsCat3, text: 'Регулярные осмотры и вакцинация' },
]
</script>

<style scoped lang="scss">
.why-us {
  &__inner {
    @apply px-[1.875rem];
  }

  &__title {
    @apply font-second text-[1.75rem] lg:text-5xl;
  }

  &__underline {
    @apply w-[15.5rem] lg:w-[26.625rem] h-[1.6875rem] lg:h-11 text-primary;
  }
}
</style>
