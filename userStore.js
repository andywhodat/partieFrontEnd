// src/store/userStore.js

import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
  state: () => ({
    users: [],
  }),

  actions: {
    async fetchUsers() {
      try {
        // Simulate fetching data from an API
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();

        // Update the state with fetched data
        this.users = data;
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
  },
});
