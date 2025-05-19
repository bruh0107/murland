<template>
  <nav class="footer-navigation">
    <router-link
      v-for="(item, index) in navItems"
      :key="index"
      :to="item.href"
      class="footer-navigation__item"
    >
      {{ item.title }}
    </router-link>
  </nav>
</template>

<script setup>
const navItems = [
  { title: 'Главная', href: '#' },
  { title: 'Почему именно мы?', href: '#banner' },
  { title: 'Родители малышей', href: '#parents' },
  { title: 'Котята', href: '/catalog' },
  { title: 'Свяжитесь с нами', href: '#contacts' },
]
</script>

<style scoped lang="scss">
.footer-navigation {
  @apply flex flex-col gap-1.5;
  &__item {
    @apply text-[0.625rem] font-bold text-secondary lg:text-xl;
  }
}
</style>
