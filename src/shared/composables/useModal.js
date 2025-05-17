import { ref } from 'vue'

const openedModal = ref('')

export const useModal = () => {
  const openModal = ({ name, id = undefined }) => {
    openedModal.value = `${name}${id ? `:${id}` : ''}`
  }

  return { openedModal, openModal }
}
