import {ref, computed} from "@vue/reactivity"
import {defineStore} from "pinia"

export const useWindows = defineStore('windows', () => {
    const about = ref(false)
  
    return { about }
  })