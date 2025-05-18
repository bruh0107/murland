<template>
  <div class="default-layout">
    <app-header v-if="!route.name?.startsWith('admin')" />
    <admin-header v-else-if="route.name !== 'admin.login'" />
    <slot />
    <app-footer v-if="!route.name?.startsWith('admin')" />
  </div>
</template>

<script setup>
import { AppHeader, AppFooter, AdminHeader } from '@/widgets'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style scoped lang="scss"></style>
