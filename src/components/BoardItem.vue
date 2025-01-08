<template>
  <div class="post" @click="dialog = true">
    <div>{{ data.title }}</div>
    <q-chip>
      <q-avatar>
        <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
      </q-avatar>
      {{ data.userId }}
    </q-chip>
  </div>

  <q-dialog v-model="dialog">
    <q-card>
      <q-card-section>
        <div class="text-h6">{{ data.body }}</div>
      </q-card-section>
      <q-card-section class="row items-center q-gutter-sm">
        <q-btn v-close-popup label="Close" color="primary" />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  postData: {
    type: Object,
    required: true,
  },
})

const data = ref({ ...props.postData })
const dialog = ref(false)
</script>

<style lang="scss" scoped>
.post {
  border: 2px solid black;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 8px;
  background-color: #f9f9f9;
  cursor: pointer; /* 마우스를 올리면 포인터 커서로 변경 */
  transition:
    background-color 0.3s,
    transform 0.2s; /* 부드러운 효과 추가 */
}

.post:hover {
  background-color: #e0e0e0; /* 배경 색상 변경 */
  transform: translateY(-2px); /* 살짝 위로 이동 */
}
</style>
