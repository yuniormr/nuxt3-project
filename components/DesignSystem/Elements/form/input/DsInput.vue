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
import type { ISize, IStyleString, ITextType } from "~/interfaces/elements";

defineProps({
  types: {
    type: String as () => ITextType,
    default: "text",
  },
  inputSize: {
    type: String as () => ISize,
    default: "normal",
  },
  rounded: {
    type: Boolean,
    default: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  readOnly: {
    type: Boolean,
    default: false,
  },
  placeholderText: {
    type: String,
    default: "Input default",
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
  <div class="mb-4">
    <input
      :class="[
        elementsSizes[inputSize],
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
        { rounded: rounded },
        'shadow appearance-none border py-2 px-3 focus:outline-none focus:shadow-outline',
      ]"
      :disabled="disabled"
      :placeholder="`${placeholderText}`"
      :readonly="readOnly"
      :type="`${types}`"
    />
  </div>
</template>

<style scoped></style>
