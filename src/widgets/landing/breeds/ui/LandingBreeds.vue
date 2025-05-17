<template>
  <section id="breeds" class="breeds">
    <div>
      <div class="breeds-inner inner">
        <article class="breeds-card">
          <img
            class="breeds-card__img"
            src="@/assets/img/breeds-cat/breeds-cat-1.png"
            alt="breeds-cat-1"
          />
          <div class="breeds-card__text">
            <h2 class="breeds-card__title">
              <span class="md:hidden">{{ breeds[0].title }}</span>
              <span class="max-md:hidden">{{ breeds[1].title }}</span>
            </h2>
            <p class="breeds-card__description">
              <span class="md:hidden">
                {{ breeds[0].description }}
              </span>
              <span class="max-md:hidden">
                {{ breeds[1].description }}
              </span>
            </p>
          </div>
        </article>
        <article class="breeds-card">
          <img
            class="breeds-card__img"
            src="@/assets/img/breeds-cat/breeds-cat-2.png"
            alt="breeds-cat-2"
          />
          <div class="breeds-card__text">
            <h2 class="breeds-card__title">
              <span class="md:hidden">{{ breeds[1].title }}</span>
              <span class="max-md:hidden">{{ breeds[0].title }}</span>
            </h2>
            <p class="breeds-card__description">
              <span class="md:hidden">
                {{ breeds[1].description }}
              </span>
              <span class="max-md:hidden">
                {{ breeds[0].description }}
              </span>
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const breeds = [
  {
    title: 'Абиссинская порода',
    description:
      'Абиссинская кошка — грациозное животное с шелковистой шерстью тикового окраса, выразительными глазами и большими ушами. Активная, игривая и преданная, она идеально подходит для любящей семьи.',
  },
  {
    title: 'Европейская бурма',
    description:
      'Европейская бурма — изящная кошка с короткой шелковистой шерстью, выразительными глазами и дружелюбным характером. Она ласкова, общительна и легко находит общий язык с людьми, идеально подходя для домашнего уюта.',
  },
]
</script>

<style scoped lang="scss">
.breeds {
  @apply px-2 lg:px-5;

  & > div {
    background: url('@/assets/icons/paws.svg'), var(--secondary-color);
    @apply rounded-[0.4375rem] lg:rounded-[1.875rem] max-md:bg-[size:185px];
  }

  &-inner {
    @apply py-12 md:px-5 xl:px-0 lg:py-20 flex flex-col max-md:gap-14 md:gap-[10vw] justify-between md:flex-row-reverse lg:min-h-[1107px] max-w-[1320px];
  }

  &-card {
    @apply flex flex-col gap-[1.125rem] items-center lg:w-full lg:justify-between;

    &:nth-child(2) {
      @apply flex md:flex-col-reverse;
    }

    &__img {
      @apply w-[17.5rem] h-60 lg:w-[37.5rem] lg:h-[30.9375rem] object-contain;
    }

    &__text {
      @apply flex flex-col items-center md:items-start gap-2;
    }

    &__title {
      @apply text-2xl md:text-4xl lg:text-5xl leading-none text-center md:text-start font-second lg:pt-[6.25rem];
    }

    &__description {
      @apply text-center md:text-start max-md:px-5 text-[0.75rem] md:text-[1rem] lg:text-xl lg:pb-[6.25rem];
    }
  }
}
</style>
