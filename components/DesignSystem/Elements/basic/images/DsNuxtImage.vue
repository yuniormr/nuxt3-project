<script lang="ts" setup>
import {
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
  sizeImagesClasses,
} from "~/components/DesignSystem/common/propsStyle";
import type { IStyleString } from "~/interfaces/elements";

type ISize =
  | "xSmall"
  | "small"
  | "medium"
  | "large"
  | "xLarge"
  | "xxLarge"
  | "auto";

const props = defineProps({
  radius: {
    type: Boolean,
  },
  size: {
    type: String as () => ISize,
  },
  alt: {
    type: String,
    default: "Text for description",
  },
  margin: String as () => IStyleString,
  marginTop: String as () => IStyleString,
  marginLeft: String as () => IStyleString,
  marginRight: String as () => IStyleString,
  marginBottom: {
    type: String as () => IStyleString,
  },
  padding: String as () => IStyleString,
  paddingTop: {
    type: String as () => IStyleString,
  },
  paddingBottom: {
    type: String as () => IStyleString,
  },
  paddingRight: {
    type: String as () => IStyleString,
  },

  paddingLeft: {
    type: String as () => IStyleString,
  },
  src: {
    type: String,
    default: "/images/sample-image.jpg",
  },
});
const imageSrc = computed(() => {
  return props.src;
});


</script>

<template>
  <NuxtImg
    :alt="alt"
    :class="[
      { rounded: radius },
      sizeImagesClasses[size],
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
    ]"
    :src="`${imageSrc}`"
  />
</template>

<style scoped></style>
