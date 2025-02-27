// stores/counter.js
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn   : false,
    getAuthStatus: false,
  }),

  persist: true,
  
  actions: {

  },
})