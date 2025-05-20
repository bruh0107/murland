<template>
  <input
    class="form-input"
    v-bind="$props"
    v-mask="mask"
    v-model="model"
    @change="emit('change', $event)"
  />
</template>

<script setup>
defineProps({
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

const emit = defineEmits(['change'])

const model = defineModel({ type: [String, Number] })
</script>

<style scoped lang="scss">
.form-input {
  @apply text-black bg-white rounded-lg md:rounded-xl lg:rounded-[1.25rem] text-xs md:text-sm lg:text-base font-bold duration-300 shadow lg:focus:shadow-xl px-2.5 lg:px-5 py-2 lg:py-4 outline-none;
}
</style>
