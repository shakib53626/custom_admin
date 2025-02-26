// stores/counter.js
import { defineStore } from 'pinia'

export const useSettingStore = defineStore('setting', {
  state: () => ({
    sidebarOpen : false,
  }),

  persist: true,
  
  actions: {

  },
})