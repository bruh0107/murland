<template>
  <div class="flex flex-wrap gap-2 justify-between">
    <select-field
      label="Порода:"
      v-model="data.breed"
      :options="[
        { id: 'abis', title: 'Абиссинская' },
        { id: 'euro', title: 'Европейская бурма' },
      ]"
    />
    <select-field
      label="Пол:"
      v-model="data.gender"
      :options="[
        { id: 'male', title: 'Коты' },
        { id: 'female', title: 'Кошки' },
      ]"
    />
  </div>
</template>

<script setup>
import { SelectField } from '@/shared/index.js'
import { ref } from 'vue'
import { syncRefs } from '@vueuse/core'

const model = defineModel({ type: Object })

const data = ref({
  gender: undefined,
  breed: undefined,
})

syncRefs(data, model)
</script>

<style scoped lang="scss"></style>
