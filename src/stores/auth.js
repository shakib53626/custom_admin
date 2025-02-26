// stores/counter.js
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn : true,
  }),

  persist: true,
  
  actions: {

  },
})