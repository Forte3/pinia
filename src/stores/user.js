import { defineStore } from "pinia";
import { ref } from 'vue';

export const useUserStore = defineStore("user", () => {
  const user = ref({
    name: '章三',
    age: 18,
  });

  function isLoginIn() {
    return user.value !== null;
  }

  return {
    user,
    isLoginIn,
  }
})