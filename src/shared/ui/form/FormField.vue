<template>
  <div class="form-field">
    {{ label }}
    <form-input v-bind="$props" v-model="model" />
  </div>
</template>

<script setup>
import { FormInput } from '@/shared'

defineProps({
  label: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
  mask: {
    type: String,
    default: null,
  },
})

const model = defineModel({ type: [String, Number] })
</script>

<style scoped lang="scss">
.form-field {
  @apply flex flex-col gap-1 lg:gap-2.5 text-sm md:text-base lg:text-xl text-black font-bold;
}
</style>
