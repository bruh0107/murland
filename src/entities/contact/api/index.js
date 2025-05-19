import { api } from '@/shared'

export const getContacts = () => api.get('contacts').then(({ data }) => data)

export const updateContacts = (model) =>
  api.patch('admin/contacts', {
    phone: model.phone,
    email: model.email,
    address: model.address,
    work_hours: model.work_hours,
  })
