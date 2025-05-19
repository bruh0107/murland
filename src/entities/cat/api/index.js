import { api } from '@/shared'

export const getCats = (params) => api.get('cats', { params }).then(({ data }) => data)

export const createCat = (model) =>
  api.post('admin/cats', model, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })

export const getParents = () => api.get('parents').then(({ data }) => data.parents)

export const getChild = (id) => api.get(`cats/children/${id}`).then(({ data }) => data)

export const getParent = (id) => api.get(`cats/parents/${id}`).then(({ data }) => data)
