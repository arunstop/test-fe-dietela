import { defineStore } from 'pinia'
import { Result } from '../types/result'

export const useCounterStore = defineStore('counter', {
  state: (): { result: Result | null } => ({ result: null }),
  // getters: {
  //   doubleCount: (state) => state.count * 2,
  // },
  actions: {
    init() {},
    prev() {},
    next() {},
  },
})
