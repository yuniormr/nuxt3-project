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
  sizeTextAreaClasses,
} from "~/components/DesignSystem/common/propsStyle";
import type { ISizeText, IStyleString } from "~/interfaces/elements";

const props = defineProps({
  value: {
    type: String,
  },
  size: {
    type: String as () => ISizeText,
    default: "normal",
  },
  radius: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  readOnly: {
    type: Boolean,
    default: false,
  },
  required: {
    type: Boolean,
    default: false,
  },
  placeHolderTextValue: {
    type: String,
  },
  margin: String as () => IStyleString,
  marginTop: String as () => IStyleString,
  marginLeft: String as () => IStyleString,
  marginRight: String as () => IStyleString,
  marginBottom: {
    type: String as () => IStyleString,
    default: "2",
  },
  padding: {
    type: String as () => IStyleString,
    default: 2,
  },
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
const textAreaValue = ref(props.value);
</script>

<template>
  <textarea
    v-model="textAreaValue"
    :class="[
      sizeTextAreaClasses[size],
      'border',
      'block',
      { rounded: radius },
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
    :disabled="disabled"
    :placeholder="placeHolderTextValue ?? 'Textarea'"
    :readonly="readOnly"
    :required="required"
    >{{ exampleTextValue ?? "" }}</textarea
  >
</template>

<style scoped></style>