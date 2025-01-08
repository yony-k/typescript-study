<template>
  <div class="q-pa-md">
    <q-layout view="lHh lpr lFf" class="shadow-2 rounded-borders">
      <q-header elevated>
        <q-toolbar>
          <q-btn flat round dense icon="home" class="q-mr-sm" @click="goHome()" />
          <q-toolbar-title>Quasar 게시판</q-toolbar-title>
          <q-btn push color="white" text-color="primary" label="게시판" @click="goBoard()" />
        </q-toolbar>
      </q-header>
      <q-page-container>
        <q-page class="content">
          <router-view />
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup leng="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.push('/')
}

const goBoard = () => {
  router.push('/board/new')
}
</script>
<style lang="scss" scoped>
.content {
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f3f4f6;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>
