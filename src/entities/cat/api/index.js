import { api } from '@/shared'

export const getCats = (params) => api.get('cats', { params }).then(({ data }) => data)

export const createCat = (model) =>
  api.post('admin/create', {
    name: model.name,
    gender: model.gender,
    birth_date: model.birth_date,
    color: model.color,
    breed_id: model.breed_id,
    status: model.status,
    file: model.file,
  })

export const getParents = () => api.get('parents').then(({ data }) => data)

export const getChild = (id) => api.get(`cats/children/${id}`).then(({ data }) => data)

export const getParent = (id) => api.get(`cats/parents/${id}`).then(({ data }) => data)
