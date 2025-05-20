<template>
  <default-layout>
    <router-view></router-view>
  </default-layout>
  <cart-modal />
  <cart-button />
  <app-burger />
</template>

<script setup>
import { DefaultLayout } from '@/app/layouts'
import { CartButton } from '@/features'
import { AppBurger, CartModal } from '@/widgets'
import { catEntity } from '@/entities'
import { onMounted } from 'vue'

const { setAvailableCats } = catEntity.useStore()

onMounted(() => setAvailableCats())
</script>

<style lang="scss">
@import url('@/assets/css/main.scss');
</style>
