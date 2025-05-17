<template>
  <section id="contacts" class="contacts">
    <div class="contacts-inner inner">
      <div class="flex flex-col items-center xl:items-start gap-[2.875rem]">
        <div class="flex flex-col gap-[1.75rem] items-center xl:items-start">
          <div class="flex flex-col gap-2.5 items-center xl:items-start">
            <h2 class="contacts-title">Свяжитесь с нами!</h2>
            <p class="contacts-text">
              Если у вас остались к нам какие-либо вопросы, позвоните нам или отправьте заявку.
            </p>
          </div>
          <app-button class="md:hidden" color="primary" size="small">Связаться с нами</app-button>
          <div class="relative w-fit">
            <app-button
              class="hidden md:flex"
              color="primary"
              size="normal"
              @click="openModal({ name: 'cart' })"
              >Связаться с нами</app-button
            >
            <app-icon
              class="max-lg:hidden absolute top-0 right-0 translate-x-[115%] -translate-y-[50%]"
              name="arrow"
            />
          </div>
        </div>
        <div class="contacts-list">
          <h2 class="contacts-list__title">Наши контакты:</h2>
          <contact-list />
        </div>
      </div>
      <img src="@/assets/img/contacts-cats.png" alt="contact-cat" />
    </div>
  </section>
</template>

<script setup>
import { AppButton, AppIcon, useModal } from '@/shared'
import { ContactList } from '@/features'

const { openModal } = useModal()
</script>

<style scoped lang="scss">
.contacts {
  @apply px-2.5 xl:px-0;

  &-inner {
    @apply flex flex-col xl:px-5 gap-[1.875rem] lg:grid lg:grid-cols-[4fr_6fr] xl:justify-center xl:items-center xl:max-w-[1620px];
  }
  &-title {
    @apply font-second text-[1.75rem] md:text-4xl xl:text-5xl;
  }
  &-text {
    @apply text-xs max-md:max-w-[316px] md:max-w-[540px] text-center md:text-xl xl:text-start xl:text-[1.25rem];
  }
  &-list {
    &__title {
      @apply font-second text-[1.75rem] text-center mb-2.5 xl:text-start xl:text-[2rem];
    }
  }
}
</style>
