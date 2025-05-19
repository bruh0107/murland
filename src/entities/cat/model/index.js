import { defineStore } from 'pinia'
import { catEntity } from '@/entities'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Routes } from '@/shared'

export const useStore = defineStore('cat', () => {
  const cats = ref([])
  const parents = ref([])
  const router = useRouter()

  const getCats = async (params) => {
    cats.value = await catEntity.getCats(params)
    return cats.value
  }

  const getParents = async () => {
    parents.value = await catEntity.getParents()
    return parents.value
  }

  const getMothers = async () => {
    return await catEntity.getCats({ gender: 'кошка' })
  }

  const getFathers = async () => {
    return await catEntity.getCats({ gender: 'кот' })
  }

  const addCat = async (model) => {
    const formData = new FormData()
    for (const [key, value] of Object.entries(model)) {
      formData.append(key, value)
    }
    const { data } = await catEntity.createCat(formData)
    router.push({ name: `${Routes.admin.children.cats}` })
  }

  return {
    cats,
    parents,
    getCats,
    getParents,
    addCat,
    getMothers,
    getFathers,
  }
})
