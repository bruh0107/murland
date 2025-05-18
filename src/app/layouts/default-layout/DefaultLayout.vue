<template>
  <div class="default-layout">
    <app-header v-if="!route.name?.startsWith('login')" />
    <slot />
    <app-footer v-if="!route.name?.startsWith('login')" />
  </div>
</template>

<script setup>
import { AppHeader, AppFooter } from '@/widgets'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style scoped lang="scss"></style>
