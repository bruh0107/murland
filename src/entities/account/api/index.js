import { api } from '@/shared'

export const getContacts = () => api.get('work/contact').then(({ data }) => data)
