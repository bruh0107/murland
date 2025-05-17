<template>
  <div class="flex items-center gap-1 lg:gap-5 flex-wrap">
    <p v-if="label" class="font-bold text-sm lg:text-2xl">{{ label }}</p>
    <div class="select-field">
      <button
        v-for="({ title, id }, i) in extendedOptions"
        :key="i"
        class="select-field__item"
        :class="{ selected: isSelected(id) }"
        @click="select(id)"
      >
        {{ title }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  options: {
    type: Array,
    default: () => [],
  },
})

const model = defineModel({ type: String, default: undefined })

const isSelected = computed(() => (id) => model.value === id || (!model.value && id === 0))

const extendedOptions = computed(() => {
  return [{ id: 0, title: 'Все' }, ...props.options]
})

const select = (id) => {
  if (id === 0) model.value = undefined
  else model.value = id
}
</script>

<style scoped lang="scss">
.select-field {
  @apply flex gap-1 lg:gap-2.5;

  &__item {
    @apply text-primary text-[10px] lg:text-base font-bold border-2 border-solid border-primary px-3 md:px-6 lg:px-9 py-1 lg:py-2 rounded-lg lg:rounded-2xl;

    &.selected {
      @apply text-white bg-primary;
    }
  }
}
</style>
