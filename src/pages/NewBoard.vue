<template>
  <div class="q-pa-md">
    <BoardItem v-for="(p, i) in postList" :key="i" :postData="p"></BoardItem>
  </div>
</template>

<script setup>
import { api } from 'src/boot/axios';
import { onMounted, ref } from 'vue';
import BoardItem from 'src/components/BoardItem.vue';

//글 목록 변수 설정
const postList = ref([]);

// 글 목록 요청
async function getPost() {
  try {
    const response = await api.get('/posts');
    postList.value = response.data;
    console.log('결과:', response.data);
  } catch (error) {
    alert('글 불러오기 실패');
    console.error('글 불러오기 에러: ', error);
  }
}

// 로드된 후 바로 요청
onMounted(() => {
  getPost();
});
</script>

<style lang="scss" scoped></style>
