import { computed, ref } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import { defineStore, storeToRefs } from 'pinia'

import { useModal } from '@/shared'
import { catEntity, cartEntity } from '@/entities'

export const useStore = defineStore('cart', () => {
  const { cats } = storeToRefs(catEntity.useStore())

  const { openModal } = useModal()

  const cart = useLocalStorage('cart', [])

  const cartChildren = computed(() => {
    return cart.value.map((id) => cats.value.find((child) => child?.id === id))
  })

  const countCats = computed(() => cart.value.length)

  const addToCart = (id) => {
    if (!cart.value.includes(id)) cart.value.push(id)
  }

  const removeFromCart = (id) => {
    const index = cart.value.indexOf(id)
    if (index !== -1) cart.value.splice(index, 1)
  }

  const sendApplication = async (model) => {
    try {
      await cartEntity.sendApplication({ cat_ids: cart.value, ...model })
    } finally {
      cart.value = []
      openModal({})
    }
  }

  return {
    cartChildren,
    countCats,
    addToCart,
    removeFromCart,
    sendApplication,
  }
})
