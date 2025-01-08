<template>
  <q-page class="row items-center justify-evenly">
    <example-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    ></example-component>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Todo, Meta } from 'components/models'
import ExampleComponent from 'components/ExampleComponent.vue'

import type { Album } from 'stores/api-test'
import { useAlbum } from 'stores/api-test'

const { fetchAlbums, getAlbums } = useAlbum()

const test = ref<Album[] | null>([])

fetchAlbums().then(() => {
  test.value = getAlbums()
  console.log('vue 결과:', test.value)
})

const todos = ref<Todo[]>([
  {
    id: 1,
    content: 'ct1',
  },
  {
    id: 2,
    content: 'ct2',
  },
  {
    id: 3,
    content: 'ct3',
  },
  {
    id: 4,
    content: 'ct4',
  },
  {
    id: 5,
    content: 'ct5',
  },
])

const meta = ref<Meta>({
  totalCount: 1200,
})
</script>
