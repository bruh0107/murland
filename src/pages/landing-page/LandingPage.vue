<template>
  <div class="flex flex-col gap-[6.25rem] pb-[100px]">
    <landing-banner />
    <landing-why-us />
    <landing-breeds />
    <landing-children />
    <landing-parents />
    <landing-contacts />
  </div>
</template>

<script setup>
import {
  LandingBanner,
  LandingWhyUs,
  LandingBreeds,
  LandingChildren,
  LandingParents,
  LandingContacts,
} from '@/widgets'
import { accountEntity } from '@/entities'
import { onMounted } from 'vue'

const { getContacts } = accountEntity.useStore()

onMounted(() => getContacts())
</script>

<style scoped lang="scss"></style>
