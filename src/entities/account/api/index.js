import { api } from '@/shared'

export const login = async (model) => {
  return await api.post('admin/login', {
    login: model.login,
    password: model.password,
  })
}
