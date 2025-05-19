<template>
  <div class="orders">
    <div>
      <div class="orders-inner inner">
        <div class="flex justify-between mb-[60px]">
          <h2 class="orders-title">Все заявки</h2>
        </div>
        <div class="orders-list">
          <div class="orders-list__item" v-for="order in orders" :key="order.id">
            <div class="flex justify-between">
              <p class="text-[#C4C1C1]">Заявка #{{ order.id }}</p>
              <div class="flex gap-2.5" v-if="order.status === 'pending'">
                <app-icon @click="orderApprove(order.id)" class="w-6 h-6 text-[#41A341] cursor-pointer" name="check" />
                <app-icon @click="orderDecline(order.id)" class="w-6 h-6 text-[#CC0000] cursor-pointer" name="cross-order" />
              </div>
              <p class="text-[#41A341]" v-else-if="order.status === 'approved'">{{ ORDER_STATUS.approved }}</p>
              <p class="text-[#CC0000]" v-else>{{ ORDER_STATUS.canceled }}</p>
            </div>
            <p>
              <span class="text-2xl font-bold text-primary" v-for="(cat, index) in order.cats">{{ cat.name }}<span v-if="order.cats?.length - 1 > index">, </span></span>
            </p>
            <div class="font-bold">
              <p>Имя: {{ order.name }}</p>
              <p>Номер: {{ order.phone }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {AppIcon, ORDER_STATUS} from "@/shared";
import { orderEntity } from '@/entities'
import {onMounted} from "vue";
import {storeToRefs} from "pinia";

const { orders } = storeToRefs(orderEntity.useStore())
const { getOrders, orderApprove, orderDecline } = orderEntity.useStore()

onMounted(() => getOrders())
</script>

<style scoped lang="scss">
.orders {
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

  &-list {
    @apply grid grid-cols-3 gap-5;
    &__item {
      @apply p-8 bg-background rounded-[32px] flex flex-col gap-6;
    }
  }
}
</style>
