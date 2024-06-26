import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'

export const useSampleStore = defineStore('sample', () => {
  const id = ref('test')
  const count = ref(0)

  const countPlus = computed(() => count.value + 1)
  watch(
    () => count.value,
    (newCount, oldCount) => {
      console.log(`newCount: ${newCount}, oldCount: ${oldCount}`)
    },
    { flush: 'post' }
  )

  return {
    id,
    count,
    countPlus
  }
})
