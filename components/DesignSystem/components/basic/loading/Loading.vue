<script lang="ts" setup>
import type { IStyleString } from "~/interfaces/elements";
import { loadingTextAlignmentClasses } from "~/components/DesignSystem/components/basic/loading/library";
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
} from "~/components/DesignSystem/common/propsStyle";

type ILoading = "left" | "center" | "right";
type IType = "spinner" | "dots";
defineProps({
  type: {
    type: String as () => IType,
    default: "spinner",
  },
  isDefaultText: {
    type: Boolean,
    default: false,
  },
  text: {
    type: String,
    default: "Cargando datos...",
  },
  textAlignment: {
    type: String as () => ILoading,
    default: "center",
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
  <div
    v-if="type === 'spinner'"
    :class="[
      'flex',
      loadingTextAlignmentClasses[textAlignment],
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
  >
    <img
      alt="Cargando datos"
      class="motion-safe:animate-spin h-10 w-10 mr-3"
      src="~/public/images/spinner.png"
    />
    <span
      v-if="isDefaultText && type === 'spinner'"
      class="text-primary-500 text-xs"
      >{{ text }}</span
    >
  </div>
  <img
    v-if="type === 'dots'"
    alt="Cargando datos"
    class="w-8"
    src="~/public/images/loading-dots.gif"
  />
</template>

<style scoped></style>
