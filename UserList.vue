<template>
    <div>
      <h1>Users:</h1>
      <ul>
        <li v-for="user in users" :key="user.id">{{ user.name }}</li>
      </ul>
      <button @click="fetchUsers">Fetch Users</button>
    </div>
  </template>
  
  <script>
  import { defineComponent, ref } from 'vue';
  import { useUserStore } from '@/store/userStore';
  
  export default defineComponent({
    setup() {
      const userStore = useUserStore();
      const users = ref([]);
  
      const fetchUsers = async () => {
        await userStore.fetchUsers();
        users.value = userStore.users;
      };
  
      return {
        users,
        fetchUsers,
      };
    },
  });
  </script>
  