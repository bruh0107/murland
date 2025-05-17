import { api } from '@/shared'

export const sendApplication = ({ cats = [], name = '', phone = '' }) =>
  api.post('work/request', { cats, name, phone }).then(({ data }) => data)
