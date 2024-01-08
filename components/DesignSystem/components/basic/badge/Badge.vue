<template>
  <div
    class="group relative w-12 h-12 rounded-full flex justify-center items-center"
  >
    <i :class="`la-${icon}`" class="las la-2x"></i>
    <span
      class="absolute top-0 right-0 h-5 w-5 rounded-full text-xs ring-2 ring-white bg-blue-400 text-white font-bold flex items-center justify-center"
    >
      {{ count }}
    </span>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

// Props are packed into an object
const props = defineProps({
  icon: {
    type: String,
    default: "",
  },
  count: {
    type: Number,
    default: 0,
  },
});

// State using Composition API
const icon = ref(props.icon);
const count = ref(props.count);
</script>
