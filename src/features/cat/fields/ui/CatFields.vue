<template>
  <p
    class="text-[0.625rem] md:text-sm lg:text-base"
    :class="[ui?.base]"
    v-for="([label, el], i) in fields"
    :key="i"
  >
    <span class="text-xs font-bold lg:text-lg" :class="[ui?.title]" v-if="label">{{ label }}</span>
    {{ el }}
  </p>
</template>

<script setup>
import { CAT_BREEDS, CAT_GENDER } from '@/shared/index.js'
import { computed } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
  ui: {
    type: Object,
    default: () => ({}),
  },
  detailed: {
    type: Boolean,
    default: false,
  },
})

const fields = computed(() => [
  ['Пол:', CAT_GENDER[props.item?.gender] ?? '-'],
  ['Порода:', CAT_BREEDS[props.item?.breed] ?? '-'],
  ['Дата рождения:', props.item?.birth_date?.split('-').reverse().join('.') ?? '-'],
  ['Окрас:', props.item?.color ?? '-'],
  ...(props.detailed
    ? [
        ['Титул:', props.item?.title ?? '-'],
        ['Анализы:', props.item?.analyses ?? '-'],
      ]
    : []),
  ['', props.item?.additional_info],
])
</script>

<style scoped lang="scss"></style>
