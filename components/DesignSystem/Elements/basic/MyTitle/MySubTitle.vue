<script lang="ts" setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  customClass: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <h2 :class="['SubTitle', customClass]">{{ text }}</h2>
</template>
