<template>
  <div class="flex flex-col items-center gap-4 md:gap-5 lg:gap-7">
    <div class="relative">
      <template v-if="unwrappedImages.length > 1">
        <button
          class="absolute top-1/2 -translate-y-1/2 left-3 max-md:hidden"
          @click="prev"
          :disabled="selectedIndex <= 0"
        >
          <app-icon name="button" />
        </button>
        <button
          class="absolute top-1/2 -translate-y-1/2 right-3 max-md:hidden"
          @click="next"
          :disabled="selectedIndex >= unwrappedImages.length - 1"
        >
          <app-icon class="rotate-180" name="button" />
        </button>
      </template>

      <img
        class="aspect-square object-cover w-[300px] md:w-[400px] lg:w-[500px] rounded-[1.875rem]"
        :src="selectedImage"
        alt="изображение"
      />
    </div>
    <div class="flex gap-6" v-if="unwrappedImages.length > 1">
      <img
        v-for="(image, i) in unwrappedImages"
        :key="i"
        class="duration-300 aspect-square object-cover w-[80px] lg:w-[100px] rounded-2xl cursor-pointer"
        :class="{ 'scale-95': selectedIndex === i }"
        :src="image"
        @click="selectImage(i)"
        alt="изображение"
      />
    </div>
  </div>
</template>

<script setup>
import { useGallery } from '@/shared'
import { AppIcon } from '@/shared/index.js'
import { computed } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    default: () => [],
  },
})

const propsImages = computed(() => props.images)

const {
  selectedImage,
  selectImage,
  images: unwrappedImages,
  prev,
  next,
  selectedIndex,
} = useGallery(propsImages)
</script>

<style scoped lang="scss"></style>
