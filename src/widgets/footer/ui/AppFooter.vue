<template>
  <footer class="footer">
    <div class="footer-inner inner">
      <div class="footer-content">
        <div class="flex justify-between">
          <footer-navigation />
          <img
            src="@/assets/img/footer-logo.png"
            class="h-[97px] lg:hidden text-secondary object-contain"
            alt="cat-photo"
          />
        </div>
        <img
          src="@/assets/img/footer-logo.png"
          class="w-[320px] h-[242px] max-lg:hidden text-secondary object-contain"
          alt="cat-photo"
        />
        <div>
          <nav class="footer-socials">
            <a :href="formattedLink(contacts.vk)" target="_blank">
              <app-icon class="footer-socials__item" name="vk" />
            </a>
            <a :href="formattedLink(contacts.telegram)" target="_blank">
              <app-icon class="footer-socials__item" name="tg" />
            </a>
            <a :href="formattedLink(contacts.whatsapp)" target="_blank">
              <app-icon class="footer-socials__item" name="whatsapp" />
            </a>
          </nav>
          <p class="footer-years">© 20XX-2025 «HamumAby»</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { contactEntity } from '@/entities'
import { FooterNavigation } from '@/features'
import { AppIcon } from '@/shared'
import { storeToRefs } from 'pinia'

const { contacts } = storeToRefs(contactEntity.useStore())

/** @param {string} link */
const formattedLink = (link) => {
  if (!link?.startsWith('https://')) {
    return `https://${link}`
  }

  return link
}
</script>

<style scoped lang="scss">
.footer {
  @apply bg-primary px-7 pt-7 pb-9 lg:px-5 lg:py-[5.25rem];

  &-inner {
    @apply lg:max-w-[1624px];
  }

  &-content {
    @apply flex flex-col gap-[1.625rem] lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-[132px] lg:items-end;
  }

  &-socials {
    @apply flex gap-2.5 lg:gap-4 justify-end pb-3 mb-3;
    border-bottom: 1px solid var(--secondary-color);

    &__item {
      @apply w-6 lg:w-[50px] h-6 lg:h-[50px];
    }
  }

  &-years {
    @apply font-extrabold text-[0.688rem] text-end text-[rgba(253,225,185,0.5)] lg:text-sm lg:text-secondary;
  }
}
</style>
