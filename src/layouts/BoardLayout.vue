<template>
  <div>
    <div>
      <q-tabs v-model="tab" no-caps class="bg-orange text-white shadow-2">
        <q-tab name="mails" label="최신" @click="goNewBoard()" />
        <q-tab name="alarms" label="인기" @click="goBestBoard()" />
      </q-tabs>
      <div class="q-pa-md">
        <div class="q-gutter-md">
          <q-input
            v-model="keyword"
            debounce="500"
            filled
            placeholder="Search"
            @keydown.enter="goSerch()"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
      </div>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()

const keyword = ref<string>('')

const goNewBoard = () => {
  router.push('/board/new')
}

const goBestBoard = () => {
  router.push('/board/best')
}

const goSerch = () => {
  alert(keyword.value)
  router.push({ name: 'serch', params: { keyword: keyword.value } })
}
</script>

<style lang="scss" scoped></style>
