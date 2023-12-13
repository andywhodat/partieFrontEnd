// Import Pinia
import { defineStore } from 'pinia';

// Define and export the counter store
export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    reset() {
      this.count = 0;
    },
  },
  getters: {
    isPositive() {
      return this.count > 0;
    },
  },
});
