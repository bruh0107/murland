import { defineStore } from 'pinia'
import { orderEntity } from '@/entities'
import { ref } from 'vue'

export const useStore = defineStore('order', () => {
  const orders = ref([])

  const getOrders = async () => {
    orders.value = await orderEntity.getOrders()
  }

  const orderApprove = async (id) => {
    await orderEntity.orderApprove(id)
    await getOrders()
  }

  const orderDecline = async (id) => {
    await orderEntity.orderDecline(id)
    await getOrders()
  }

  return {
    orders,
    getOrders,
    orderApprove,
    orderDecline,
  }
})
