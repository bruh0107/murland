import { api } from '@/shared'

export const getChildren = ({ breed, gender } = {}) =>
  api.get('cats/children', { params: { breed, gender } }).then(({ data }) => data)

export const getChild = (id) => api.get(`cats/children/${id}`).then(({ data }) => data)

export const getParents = ({ breed, gender } = {}) =>
  api.get('cats/parents', { params: { breed, gender } }).then(({ data }) => data)

export const getParent = (id) => api.get(`cats/parents/${id}`).then(({ data }) => data)

export const getGraduates = () => api.get('cats/graduates').then(({ data }) => data)
