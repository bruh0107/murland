import { ref } from 'vue'

const opened = ref(false)

export const useBurgerMenu = () => {
  const toggleOpen = () => (opened.value = !opened.value)

  return { opened, toggleOpen }
}
