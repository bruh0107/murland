import { defineStore } from 'pinia'
import { contactEntity } from '@/entities'
import { ref } from 'vue'

export const useStore = defineStore('contacts', () => {
  const contacts = ref({})

  const getContacts = async () => {
    contacts.value = await contactEntity.getContacts()
  }

  return {
    contacts,
    getContacts,
  }
})
