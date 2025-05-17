<template>
  <label class="form-checkbox__wrapper opacity-70">
    <input class="form-checkbox" type="checkbox" v-model="model" />
    <span class="font-light"><slot name="label" /></span>
  </label>
</template>

<script setup>
const model = defineModel({ type: Boolean })
</script>

<style scoped lang="scss">
.form-checkbox__wrapper {
  @apply flex gap-2 md:gap-3 lg:gap-4 items-start lg:items-baseline text-xs md:text-base;
}

.form-checkbox {
  @apply appearance-none min-w-4 h-4 lg:min-w-5 lg:h-5 rounded border-[3px] border-solid border-[#231F1F] cursor-pointer;

  &:checked {
    background: url('@/assets/icons/check.svg') no-repeat center;
    background-size: 80%;
  }
}
</style>
