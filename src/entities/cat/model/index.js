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

  const addCat = async (model) => {
    const { data } = await catEntity.createCat(model)
    router.push(Routes.admin.children.cats)
  }

  return {
    cats,
    parents,
    getCats,
    getParents,
    addCat,
  }
})
