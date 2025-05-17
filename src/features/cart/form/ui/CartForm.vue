<template>
  <form class="max-w-[600px]" @submit.prevent="sendApplication(model)">
    <p class="text-sm md:text-base lg:text-xl opacity-50 mb-3 lg:mb-7">
      Оставьте ваши контактные данные, мы свяжемся с вами для обсуждения ваших вопросов
    </p>
    <div class="flex flex-col gap-2.5 md:gap-4 lg:gap-5">
      <form-field v-model="model.name" type="text" placeholder="Ваше имя" label="Имя" />
      <form-field
        type="tel"
        v-model="model.phone"
        placeholder="+7 (999) 999-99-99"
        label="Номер телефона"
        mask="+7 (###) ###-##-##"
      />
      <form-checkbox v-model="model.check">
        <template #label>
          Я подтверждаю, что ознакомлен с условиями
          <span @click="goToTerms" class="underline font-medium cursor-pointer">
            Согласия на обработку персональных данных пользователя сайта
          </span>
          и выражаю согласие на обработку моих персональных данных в порядке и условиях, изложенных
          документе
        </template>
      </form-checkbox>
      <app-button
        class="text-sm md:text-sm lg:text-2xl"
        color="primary"
        size="small"
        :disabled="!isValid"
      >
        Отправить
      </app-button>
    </div>
  </form>
</template>

<script setup>
import { FormField, FormCheckbox, AppButton, Routes, useModal } from '@/shared'
import { cartEntity } from '@/entities'
import { computed, reactive } from 'vue'
import { useRouter } from 'vue-router'

const { sendApplication } = cartEntity.useStore()
const { openModal } = useModal()

const router = useRouter()

const model = reactive({
  name: '',
  phone: '',
  check: false,
})

const isValid = computed(() => {
  return model.name && model.phone && model.check
})

const goToTerms = () => {
  openModal({})
  router.push(Routes.terms.path)
}
</script>

<style scoped lang="scss"></style>
