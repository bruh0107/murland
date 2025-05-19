<template>
  <div class="cats-add">
    <div>
      <form @submit.prevent="submit" class="cats-add__form">
        <div class="flex flex-col gap-2.5">
          <form-input placeholder="Введите имя" v-model="data.name" />
          <div class="flex gap-2.5">
            <select class="select-input" v-model="data.breed_id">
              <option
                class="select-input"
                v-for="(breed, index) in CAT_BREEDS"
                :key="index"
                :value="index === 'Бурма' ? 1 : 2"
              >
                {{ breed }}
              </option>
            </select>
            <select class="select-input" v-model="data.gender">
              <option
                class="select-input"
                v-for="(gender, index) in CAT_GENDER"
                :key="index"
                :value="gender"
              >
                {{ gender }}
              </option>
            </select>
          </div>
          <form-input type="date" v-model="data.birth_date" />
          <form-input placeholder="Введите окрас" v-model="data.color" />
          <div class="flex gap-2.5">
            <select class="select-input" v-model="data.mother_id">
              <option
                v-for="mother in mothers"
                :key="mother.id"
                :value="mother.id"
                class="select-input"
              >
                {{ mother.name }}
              </option>
            </select>
            <select class="select-input" v-model="data.father_id">
              <option
                v-for="father in fathers"
                :key="father.id"
                :value="father.id"
                class="select-input"
              >
                {{ father.name }}
              </option>
            </select>
          </div>
        </div>
        <app-button color="primary">Изменить котенка</app-button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { FormInput, AppButton, CAT_GENDER, CAT_BREEDS } from '@/shared'
import { catEntity } from '@/entities'
import { onMounted, ref } from 'vue'
import { useRoute } from "vue-router";

const route = useRoute()

const { getMothers, getFathers, editCat } = catEntity.useStore()

const mothers = ref([])
const fathers = ref([])

const data = ref({
  name: '',
  gender: CAT_GENDER['кот'],
  birth_date: new Date(),
  color: '',
  breed_id: 1,
  status: '',
  photo: '',
  mother_id: 1,
  father_id: 2,
})

const submit = () => editCat(route.params.id, data.value)

onMounted(() => {
  getMothers().then((data) => (mothers.value = data))
  getFathers().then((data) => (fathers.value = data))
})
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
