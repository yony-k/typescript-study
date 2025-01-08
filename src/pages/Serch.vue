<template>
  <div>{{ props.keyword }}</div>
</template>

<script setup>
const props = defineProps({
  keyword: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
