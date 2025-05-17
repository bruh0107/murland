import { defineStore } from 'pinia'
import { accountEntity } from '@/entities'
import { ref } from 'vue'

export const useStore = defineStore('account', () => {
  const contacts = ref({})

  const getContacts = async () => {
    contacts.value = await accountEntity.getContacts()
  }

  return {
    contacts,
    getContacts,
  }
})
