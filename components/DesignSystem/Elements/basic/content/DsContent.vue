<script lang="ts" setup>
import {
  marginClasses,
  marginTopClasses,
  marginRightClasses,
  marginBottomClasses,
  marginLeftClasses,
  paddingClasses,
  paddingTopClasses,
  paddingRightClasses,
  paddingBottomClasses,
  paddingLeftClasses,
  borderClasses,
  borderTopClasses,
  borderRightClasses,
  borderBottomClasses,
  borderLeftClasses,
  textWeightClasses,
  fontClasses,
} from "~/components/DesignSystem/common/propsStyle";
import { defineProps } from "vue";
import type {
  IFont,
  IFontSize,
  IFontWeight,
  IStyleString,
} from "~/interfaces/elements";

const textSizeClasses = {
  s0: "text-xs",
  s1: "text-sm",
  s2: "text-base",
  s3: "text-lg",
  s4: "text-xl",
  s5: "text-2xl",
  s6: "text-3xl",
  s7: "text-4xl",
  s8: "text-5xl",
  s9: "text-6xl",
};

defineProps({
  text: {
    type: String,
    default:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione omnis fugit aliquid reiciendis exercitationem pariatur sunt quibusdam, ea quo facere, maiores nemo itaque sequi corrupti, vitae eius enim magnam? Nemo.\n",
  },
  letter: {
    type: String as () => IFont,
    default: "roboto",
  },
  textSize: {
    type: String as () => IFontSize,
    default: "s2",
  },
  textWeight: {
    type: String as () => IFontWeight,
    default: "w4",
  },
  margin: String as () => IStyleString,
  marginTop: String as () => IStyleString,
  marginLeft: String as () => IStyleString,
  marginRight: String as () => IStyleString,
  marginBottom: String as () => IStyleString,
  padding: String as () => IStyleString,
  paddingTop: String as () => IStyleString,
  paddingRight: String as () => IStyleString,
  paddingBottom: String as () => IStyleString,
  paddingLeft: String as () => IStyleString,
  border: String as () => IStyleString,
  borderTop: String as () => IStyleString,
  borderRight: String as () => IStyleString,
  borderBottom: String as () => IStyleString,
  borderLeft: String as () => IStyleString,
});
</script>

<template>
  <p
    :class="[
      textSizeClasses[textSize],
      textWeightClasses[textWeight],
      fontClasses[letter],
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
      borderBottomClasses[borderBottom],
      borderLeftClasses[borderLeft],
    ]"
  >
    {{ text }}
  </p>
</template>
