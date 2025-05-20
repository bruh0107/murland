import { defineStore } from 'pinia'
import { catEntity } from '@/entities'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Routes } from '@/shared'

export const useStore = defineStore('cat', () => {
  const cats = ref([])
  const catsAdmin = ref([])
  const parents = ref([])
  const router = useRouter()

  const getCats = async (params) => {
    return await catEntity.getCats(params)
  }

  const getAdminCats = async () => {
    catsAdmin.value = await catEntity.getAdminCats()
    return catsAdmin.value
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
    await catEntity.createCat(formData)
    router.push({ name: `${Routes.admin.children.cats}` })
  }

  const editCat = async (id, model) => {
    await catEntity.updateCat(id, model)
    router.push({ name: `${Routes.admin.children.cats}` })
  }

  const deleteCat = async (id) => {
    await catEntity.deleteCat(id)
    await getAdminCats()
  }

  const getOneCat = async (id) => {
    return await catEntity.getOneCat(id)
  }

  const setAvailableCats = async () => {
    cats.value = await getCats({})
  }

  return {
    cats,
    parents,
    getCats,
    getParents,
    addCat,
    getMothers,
    getFathers,
    editCat,
    deleteCat,
    getAdminCats,
    catsAdmin,
    getOneCat,
    setAvailableCats,
  }
})
