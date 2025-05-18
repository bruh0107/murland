<template>
  <div class="cats">
    <div>
      <div class="cats-inner inner">
        <div class="flex justify-between mb-[60px]">
          <h2 class="cats-title">Все заявки</h2>
        </div>
        <div>тут заявки будут</div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.cats {
  @apply my-[45px] px-5;

  &-inner {
    @apply max-w-[1650px] py-[60px];
  }

  & > div {
    @apply rounded-[30px];
    background: url('@/assets/icons/paws.svg'), var(--secondary-color);
  }

  &-title {
    @apply font-second text-5xl text-primary;
  }
}
</style>
