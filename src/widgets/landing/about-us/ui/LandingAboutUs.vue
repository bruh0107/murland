<template>
  <section id="about-us" class="about-us">
    <div>
      <div class="about-us__inner inner">
        <img class="about-us__img" src="@/assets/img/about-us-cat.png" alt="about-us-cat" />
        <div class="flex flex-col gap-9">
          <h2 class="about-us__title">О нашем питомнике</h2>
          <div class="about-us__cards">
            <landing-about-us-card
              v-for="(card, index) in aboutUs"
              :key="index"
              :img="card.img"
              :text="card.text"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { LandingAboutUsCard } from '@/widgets'
import AboutUsSun from '@/assets/img/about-us/sun.png'
import AboutUsPlus from '@/assets/img/about-us/plus.png'
import AboutUsHeart from '@/assets/img/about-us/heart.png'

const aboutUs = [
  {
    img: AboutUsSun,
    text: '<b>Питомник Murland</b> — это место, где с любовью и вниманием выращиваются грациозные кошки. Мы начали свою деятельность, вдохновленные красотой и интеллектом этой породы, и стремимся сохранить её уникальность.',
  },
  {
    img: AboutUsPlus,
    text: 'Наши котята <b>растут здоровыми</b>, социализированными и готовы радовать новых владельцев. Мы уделяем особое внимание генетике, здоровью и воспитанию, чтобы каждый малыш стал настоящим другом.',
  },
  {
    img: AboutUsHeart,
    text: 'Наш питомник также <b>предоставляет поддержку</b> новым владельцам на всех этапах – от первых дней адаптации котёнка до консультаций по уходу и воспитанию. ',
  },
]
</script>

<style scoped lang="scss">
.about-us {
  @apply px-2 lg:px-5;

  & > div {
    background: url('@/assets/icons/paws.svg'), var(--secondary-color);
    @apply rounded-lg lg:rounded-[1.875rem] max-md:bg-[size:185px];
  }

  &__inner {
    @apply xl:max-w-[1694px] py-[1.875rem] lg:py-[3.75rem] px-5 flex flex-col-reverse gap-2 lg:grid lg:grid-cols-[5fr_6fr] lg:items-center lg:gap-5;
  }

  &__title {
    @apply font-second text-[1.75rem] text-center xl:text-5xl;
  }

  &__cards {
    @apply flex flex-col gap-4;
  }

  &__img {
    @apply max-md:scale-[1.1];
  }
}
</style>
