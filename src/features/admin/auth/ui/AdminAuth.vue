<template>
  <div class="admin-auth">
    <h2 class="admin-auth__title">Вход в админ-панель Murland</h2>
    <form action="" class="admin-auth__form">
      <div class="flex flex-col gap-2.5">
        <form-input placeholder="Введите логин" />
        <form-input type="password" placeholder="Введите пароль" />
      </div>
      <app-button color="primary">Войти</app-button>
    </form>
  </div>
</template>

<script setup>
import { FormInput, AppButton } from '@/shared'
</script>

<style scoped lang="scss">
.admin-auth {
  @apply h-screen flex flex-col gap-[2.875rem] justify-center items-center;

  &__title {
    @apply font-bold text-[1.7rem];
  }

  &__form {
    @apply flex flex-col gap-10 p-10 bg-secondary rounded-[1.875rem] w-[510px];
  }
}
</style>
