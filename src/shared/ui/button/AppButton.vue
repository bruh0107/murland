<template>
  <button class="btn" :class="`btn-${props.size} btn-${props.color}`" :disabled>
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  size: {
    type: String,
    default: 'normal',
  },
  color: {
    type: String,
    default: 'brown',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped lang="scss">
.btn {
  @apply rounded-2xl font-bold;

  &:disabled {
    @apply opacity-50;
  }

  &-primary {
    @apply bg-primary text-white hover:bg-primary-300 active:bg-primary-700;

    &.btn-small {
      &:not(:disabled):hover {
        @apply bg-primary-400;
      }

      &:not(:disabled):active {
        @apply bg-primary-600;
      }
    }
  }

  &-accent {
    @apply bg-accent text-white hover:bg-accent-400 active:bg-accent-600;
  }

  &-empty {
    @apply bg-white text-primary hover:bg-primary-550 active:bg-primary active:text-white;
  }

  &-delete {
    @apply bg-delete text-white;
  }

  &-normal {
    @apply py-[1.125rem] px-[3.75rem] text-2xl leading-none;
  }

  &-small {
    @apply py-[0.5625rem] px-[2.1875rem] text-[1rem];
  }
}
</style>
