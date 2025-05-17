import { computed, ref } from 'vue'

export const useGallery = (imagesRef) => {
  const selected = ref(0)

  const unwrapped = computed(() => imagesRef.value.map((wrappedImage) => wrappedImage.image))
  const selectedImage = computed(() => unwrapped.value[selected.value])

  const selectImage = (i) => {
    selected.value = i
  }

  const prev = () => selectImage(selected.value - 1)
  const next = () => selectImage(selected.value + 1)

  return { selectedIndex: selected, images: unwrapped, selectImage, selectedImage, prev, next }
}
