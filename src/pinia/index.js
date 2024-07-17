import { createPinia } from 'pinia'
import { useSampleStore } from '@/pinia/modules/sample'
import { createPersistedState } from 'pinia-plugin-persistedstate'

const store = createPinia()
store.use(createPersistedState({
  storage: localStorage,
  auto: true
}))

export { store, useSampleStore }
