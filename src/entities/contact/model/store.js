import { defineStore } from 'pinia'
import { contactEntity } from '@/entities'
import { ref } from 'vue'
import { Routes } from '@/shared/index.js'
import { useRouter } from 'vue-router'

export const useStore = defineStore('contacts', () => {
  const contacts = ref({})
  const router = useRouter()

  const getContacts = async () => {
    contacts.value = await contactEntity.getContacts()
  }

  const updateContacts = async (model) => {
    const { data } = await contactEntity.updateContacts(model)
    router.push({name: `${Routes.admin.children.cats}`})
  }

  return {
    contacts,
    getContacts,
    updateContacts,
  }
})
