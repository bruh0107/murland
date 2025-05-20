import { api } from '@/shared'

export const getOrders = () => api.get('admin/orders').then(({ data }) => data.orders)

export const orderApprove = (id) => api.post(`admin/orders/${id}/approve`).then(({ data }) => data)

export const orderDecline = (id) => api.post(`admin/orders/${id}/decline`).then(({ data }) => data)
