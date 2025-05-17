<template>
  <swiper slides-per-view="auto" centered-slides-bounds>
    <swiper-slide
      :class="basis ? `basis-1/2 md:basis-1/3 lg:basis-1/4` : 'w-fit'"
      v-for="(item, i) in items"
      :key="item.id ?? i"
    >
      <slot :item="item" :index="i" />
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'

defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  basis: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped>
.swiper {
  @apply flex w-full;
  width: 100%;
  overflow: visible;
  height: auto;
}

.swiper-wrapper {
  @apply flex gap-2.5 lg:gap-7 w-fit;
}

.swiper-slide {
  @apply mr-2.5 md:mr-5 lg:mr-7 object-cover;

  & > * {
    @apply w-full;
  }
}
</style>
