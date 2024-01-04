<script lang="ts" setup>
import {
  borderBottomClasses,
  borderClasses,
  borderLeftClasses,
  borderRightClasses,
  borderTopClasses,
  marginBottomClasses,
  marginClasses,
  marginLeftClasses,
  marginRightClasses,
  marginTopClasses,
  paddingBottomClasses,
  paddingClasses,
  paddingLeftClasses,
  paddingRightClasses,
  paddingTopClasses,
  sizeAvatarClasses,
} from "~/components/DesignSystem/common/propsStyle";
import type { IStyleString } from "~/interfaces/elements";

type ISize = "xSmall" | "small" | "medium" | "large" | "xLarge";

const props = defineProps({
  types: {
    type: String,
    default: "default",
  },
  size: {
    type: String as () => ISize,
    default: "large",
  },
  alt: {
    type: String,
    default: "Jimena Contreras",
  },
  src: {
    type: String,
    default: "/images/avatar.jpg",
  },
  margin: String as () => IStyleString,
  marginTop: String as () => IStyleString,
  marginLeft: String as () => IStyleString,
  marginRight: String as () => IStyleString,
  marginBottom: String as () => IStyleString,
  padding: String as () => IStyleString,
  paddingTop: String as () => IStyleString,
  paddingBottom: String as () => IStyleString,
  paddingRight: String as () => IStyleString,
  paddingLeft: String as () => IStyleString,
  border: String as () => IStyleString,
  borderBottom: String as () => IStyleString,
  borderTop: String as () => IStyleString,
  borderLeft: String as () => IStyleString,
  borderRight: String as () => IStyleString,
});

const imageSrc = computed(() => {
  return props.src;
});
</script>

<template>
  <img
    :alt="alt"
    :class="[
      sizeAvatarClasses[size],
      marginClasses[margin],
      marginTopClasses[marginTop],
      marginLeftClasses[marginLeft],
      marginRightClasses[marginRight],
      marginBottomClasses[marginBottom],
      paddingClasses[padding],
      paddingTopClasses[paddingTop],
      paddingLeftClasses[paddingLeft],
      paddingRightClasses[paddingRight],
      paddingBottomClasses[paddingBottom],
      borderClasses[border],
      borderTopClasses[borderTop],
      borderRightClasses[borderRight],
      borderLeftClasses[borderLeft],
      borderBottomClasses[borderBottom],
    ]"
    :src="`${imageSrc}`"
    class="mr-3 rounded-full"
  />
</template>

<style scoped></style>