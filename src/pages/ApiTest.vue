<script setup lang="ts">
import { ref } from 'vue'
import type { Album } from 'stores/api-test'
import { useAlbum } from 'stores/api-test'

const { fetchAlbums, getAlbums } = useAlbum()

const test = ref<Album[]>([])

fetchAlbums().then(() => {
  test.value = getAlbums()
  console.log('vue 결과:', test.value)
})
</script>

<template>
  <div></div>
</template>

<style lang="scss" scoped></style>
