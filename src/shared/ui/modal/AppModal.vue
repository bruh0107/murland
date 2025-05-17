<template>
  <div class="modal" :class="{ opened: openedModal === name }">
    <transition name="scale">
      <div ref="inner" class="modal__inner" v-if="openedModal === name">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script setup>
import { useModal } from '@/shared'
import { onClickOutside } from '@vueuse/core'
import { useTemplateRef } from 'vue'

defineProps({
  name: {
    type: String,
    required: true,
  },
  routeSave: {
    type: Boolean,
    default: false,
  },
})

const { openedModal, openModal } = useModal()

onClickOutside(useTemplateRef('inner'), () => openModal({}))
</script>

<style scoped lang="scss">
.modal {
  @apply z-50 left-0 right-0 bottom-0 top-0 fixed duration-300 flex items-center justify-center pointer-events-none;

  &.opened {
    @apply bg-[#00000030] pointer-events-auto;
  }

  &__inner {
    @apply p-5 md:p-8 lg:p-10 bg-background mx-4 rounded-xl md:rounded-2xl lg:rounded-[1.875rem];
  }
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.3s ease;
}

.scale-enter-from,
.scale-leave-to {
  scale: 0;
}
</style>
