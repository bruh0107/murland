import { ref } from 'vue'
import { asyncComputed } from '@vueuse/core'

export const useFilteredData = (executeMethod) => {
  const params = ref()

  const data = asyncComputed(() => executeMethod(params.value))

  return {
    data,
    params,
  }
}
