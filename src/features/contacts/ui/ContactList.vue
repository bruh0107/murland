<template>
  <div class="flex flex-col gap-2.5">
    <contact-item
      v-for="(contact, index) in contacts"
      :key="index"
      :icon="contact.icon"
      :text="contact.text"
    />
  </div>
</template>

<script setup>
import { ContactItem } from '@/shared/index.js'
import { storeToRefs } from 'pinia'
import { contactEntity } from '@/entities'
import { computed } from 'vue'

const props = defineProps({
  isShort: { type: Boolean, default: false },
})
const { contacts: storedContacts } = storeToRefs(contactEntity.useStore())

const contacts = computed(() => {
  const data = storedContacts.value

  return [
    { icon: 'phone', text: data?.phone },
    { icon: 'email', text: data?.email },
    !props.isShort && { icon: 'map', text: data?.address },
    !props.isShort && { icon: 'clock', text: data?.working_time },
  ].filter(Boolean)
})
</script>

<style scoped lang="scss"></style>
