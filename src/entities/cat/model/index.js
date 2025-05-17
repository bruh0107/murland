import { defineStore } from 'pinia'
import { catEntity } from '@/entities'
import { ref } from 'vue'

export const useStore = defineStore('cat', () => {
  const children = ref([])
  const graduates = ref([])

  const getChildren = async ({ breed, gender } = {}) => {
    children.value = await catEntity.getChildren({ breed, gender })
  }

  const getGraduates = async () => {
    graduates.value = await catEntity.getGraduates()
  }

  return {
    children,
    graduates,
    getChildren,
    getGraduates,
  }
})
