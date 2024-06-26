import { createPinia } from 'pinia'
import { useSampleStore } from '@/pinia/modules/sample'

const store = createPinia()

export { store, useSampleStore }
