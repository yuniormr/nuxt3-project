<script lang="ts" setup>
import type { IStyleString } from "~/interfaces/elements";
import {
  borderBottomClasses,
  borderClasses,
  borderLeftClasses,
  borderRightClasses,
  borderTopClasses,
  fontClasses,
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
  titleClasses,
} from "~/components/DesignSystem/common/propsStyle";

type ITitle = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type IFont = "roboto" | "robotoSlab";
type ITextColor = "default" | "primary";

const textColorClasses = {
  default: "text-dark",
  primary: "text-primary-500",
};

defineProps({
  type: {
    type: String as () => ITitle,
    default: "h1",
  },
  letter: {
    type: String as () => IFont,
  },
  text: {
    type: String,
    default: "Encabezado UiKit",
  },
  textColor: {
    type: String as () => ITextColor,
    default: "default",
  },
  hasFontAwesome: {
    type: Boolean,
    default: false,
  },
  lineAwesomeLeft: {
    type: String,
    default: "las la-info-circle",
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
  <component
    :is="`${type}`"
    :class="[
      textColorClasses[textColor],
      titleClasses[type],
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
      borderLeftClasses[borderLeft],
      borderBottomClasses[borderBottom],
      'font-bold',
    ]"
  >
    <i v-if="hasFontAwesome" :class="lineAwesomeLeft"></i>
    {{ text }}
  </component>
</template>
