const navItems = [
  { title: 'О породах', href: '#breeds' },
  { title: 'Котята', href: '/catalog' },
  { title: 'Производители', href: '#parents' },
  { title: 'Выпускники', href: '#graduates' },
  { title: 'О нас', href: '#about-us' },
]

const adminNavItems = [
  { title: 'Котята', to: 'admin.cats' },
  { title: 'Родители', to: 'admin.parents' },
  { title: 'Заявки', to: 'admin.orders' },
  { title: 'Контакты', to: 'admin.contacts' },
]

export const useStore = () => {
  return { navItems, adminNavItems }
}
