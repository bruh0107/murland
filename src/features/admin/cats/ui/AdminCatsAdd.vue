<template>
  <div class="cats-add">
    <div>
      <form action="" class="cats-add__form">
        <div class="flex flex-col gap-2.5">
          <form-input placeholder="Введите имя" />
          <div class="flex gap-2.5">
            <select class="select-input">
              <option class="select-input">qweasd123</option>
            </select>
            <select class="select-input">
              <option class="select-input">qweasd123</option>
            </select>
          </div>
          <form-input type="date" />
          <form-input placeholder="Введите окрас" />
          <div class="flex gap-2.5">
            <select class="select-input">
              <option class="select-input">qweasd123</option>
            </select>
            <select class="select-input">
              <option class="select-input">qweasd123</option>
            </select>
          </div>
        </div>
        <app-button color="primary">Добавить котенка</app-button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { FormInput, AppButton } from '@/shared'
</script>

<style scoped lang="scss">
.cats-add {
  @apply pt-[45px] px-5;

  & > div {
    @apply rounded-[30px] py-28 min-w-full flex justify-center items-center;
    background: url('@/assets/icons/paws.svg'), var(--secondary-color);
  }

  &__form {
    @apply flex flex-col gap-10 p-10 bg-secondary rounded-[1.875rem] w-[842px];
  }

  .select-input {
    @apply text-black bg-white w-full rounded-lg md:rounded-xl lg:rounded-[1.25rem] text-xs md:text-sm lg:text-base font-bold duration-300 shadow lg:focus:shadow-xl px-2.5 lg:px-5 py-2 lg:py-4 outline-none;
  }
}
</style>
