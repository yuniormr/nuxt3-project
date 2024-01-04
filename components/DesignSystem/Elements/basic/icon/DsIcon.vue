<script lang="ts" setup>
import type {
  IColor,
  IIconSize,
  IStyleString,
  ITextAlignment,
} from "~/interfaces/elements";
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
  textAlignmentClasses,
  textColorClasses,
  textSizeClasses,
} from "~/components/DesignSystem/common/propsStyle";

defineProps({
  awesomeText: {
    type: String,
    default: "las la-search",
  },
  color: {
    type: String as () => IColor,
    default: "dark",
  },
  size: {
    type: String as () => IIconSize,
    default: "base",
  },
  margin: String as () => IStyleString,
  marginTop: String as () => IStyleString,
  marginLeft: String as () => IStyleString,
  marginRight: String as () => IStyleString,
  marginBottom: {
    type: String as () => IStyleString,
    default: "2",
  },
  padding: String as () => IStyleString,
  paddingTop: {
    type: String as () => IStyleString,
    default: "1",
  },
  paddingBottom: {
    type: String as () => IStyleString,
    default: "1",
  },
  paddingRight: {
    type: String as () => IStyleString,
    default: "2",
  },

  paddingLeft: {
    type: String as () => IStyleString,
    default: "2",
  },
  textAlignment: {
    type: String as () => ITextAlignment,
  },
  border: {
    type: String as () => IStyleString,
  },
  borderBottom: {
    type: String as () => IStyleString,
  },
  borderTop: {
    type: String as () => IStyleString,
  },
  borderLeft: {
    type: String as () => IStyleString,
  },
  borderRight: {
    type: String as () => IStyleString,
  },
});
</script>

<template>
  <i
    :class="[
      awesomeText,
      textColorClasses[color],
      textSizeClasses[size],
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
      textAlignmentClasses[textAlignment],
      borderClasses[border],
      borderTopClasses[borderTop],
      borderRightClasses[borderRight],
      borderLeftClasses[borderLeft],
      borderBottomClasses[borderBottom],
    ]"
  ></i>
</template>
<style scoped></style>
