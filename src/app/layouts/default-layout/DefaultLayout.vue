<template>
  <div class="default-layout">
    <app-header />
    <slot />
    <app-footer />
  </div>
</template>

<script setup>
import { AppHeader, AppFooter } from '@/widgets'
</script>

<style scoped lang="scss"></style>
