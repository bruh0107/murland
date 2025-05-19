import { api } from '@/shared'

export const getCats = (params) => api.get('cats', { params }).then(({ data }) => data)

export const getAdminCats = () => api.get('admin/cats').then(({ data }) => data)

export const createCat = (model) =>
  api.post('admin/cats', model, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })

export const updateCat = (id, model) =>
  api.patch(`admin/cats/${id}`, model)

export const deleteCat = (id) => api.delete(`admin/cats/${id}`)

export const getParents = () => api.get('parents').then(({ data }) => data.parents)

export const getOneCat = (id) => api.get(`cats/${id}`).then(({ data }) => data)
