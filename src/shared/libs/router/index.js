export const Routes = {
  landing: {
    path: '/',
    name: 'landing',
  },
  catalog: {
    path: '/catalog',
    name: 'catalog',
  },
  admin: {
    path: '/admin',
    defaultPath: '/admin',
    name: 'admin',
    children: {
      login: 'admin.login',
      cats: 'admin.cats',
      'add-cat': 'admin.add-cat',
      parents: 'admin.parents',
      'add-parents': 'admin.add-parents',
      orders: 'admin.orders',
      contacts: 'admin.contacts',
    },
  },
}
