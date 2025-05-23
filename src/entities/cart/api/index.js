import { api } from '@/shared'

export const sendApplication = ({ cat_ids = [], name = '', phone = '' }) =>
  api.post('orders', { cat_ids, name, phone }).then(({ data }) => data)

export const getOrders = () => api.get('admin/orders').then(({ data }) => data.orders)

export const orderApprove = (id) => api.post(`admin/orders/${id}/approve`).then(({ data }) => data)
