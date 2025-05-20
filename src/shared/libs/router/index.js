export const Routes = {
  landing: {
    path: '/',
    name: 'landing',
  },
  catalog: {
    path: '/catalog',
    name: 'catalog',
  },
  cat: {
    path: '/cats/:id',
    name: 'cat.detail',
  },
  admin: {
    path: '/admin',
    defaultPath: '/admin',
    name: 'admin',
    children: {
      login: 'admin.login',
      cats: 'admin.cats',
      'add-cat': 'admin.add-cat',
      'edit-cat': 'admin.edit-cat',
      parents: 'admin.parents',
      orders: 'admin.order',
      contacts: 'admin.contacts',
    },
  },
}
