import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { accountEntity } from '@/entities'
import { useRouter } from 'vue-router'
import { Routes } from '@/shared'

export const useStore = defineStore('account-store', () => {
  const token = ref(localStorage.getItem('token'))
  const router = useRouter()

  const isAuth = computed(() => token.value)

  const login = async (model) => {
    const { data } = await accountEntity.login(model)

    token.value = data.token
    localStorage.setItem('token', token.value)
    await router.push({ name: `${Routes.admin.children.cats}` })
  }

  const logout = async () => {
    await accountEntity.logout()
    localStorage.removeItem('token')
    token.value = null

    router.push(Routes.landing.path)
  }

  return {
    isAuth,
    login,
    logout,
  }
})
