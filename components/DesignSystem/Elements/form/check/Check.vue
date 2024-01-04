<script lang="ts" setup>
import {
  elementsSizes,
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
import type { ISize, IStyleString } from "~/interfaces/elements";

defineProps({
  checked: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  required: {
    type: Boolean,
    default: false,
  },
  checkText: {
    type: String,
    default: "Check text",
  },
  inputSize: {
    type: String as () => ISize,
    default: "normal",
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
});
</script>

<template>
  <input
    id="default-check"
    :checked="checked"
    :class="[
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
    :disabled="disabled"
    name="default-radio"
    type="checkbox"
    value=""
  />
  <label :class="[elementsSizes[inputSize], 'ms-2']" for="default-check">
    {{ checkText }}</label
  >
</template>
