<script setup>
import SearchNote from "./components/SearchNote.vue";
import NoteList from "./components/NoteList.vue";
import AddNote from "./components/AddNote.vue";
import { useUserStore } from './stores/user';

const userStore = useUserStore();
</script>

<template>
  <main>
    <h1>我的笔记本</h1>
    <SearchNote />
    <NoteList />
    <AddNote />
    <p>当前登录用户:{{ userStore.user.name }}</p>
  </main>
</template>

<style scoped>
main {
  width: 600px;
  margin: 0 auto;
  height: 100%;
  display: grid;
  justify-items: center;
  padding: 48px 0;
}
</style>
