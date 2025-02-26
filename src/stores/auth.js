// stores/counter.js
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn : false,
  }),

  persist: true,
  
  actions: {

  },
})