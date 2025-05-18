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
      login: 'login',
      cats: 'cats',
      'add-cat': 'add-cat',
      parents: 'parents',
      'add-parents': 'add-parents',
      orders: 'orders',
      contacts: 'contacts',
    },
  },
}
