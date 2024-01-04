<script lang="ts" setup>
import type { ISizeText } from "~/interfaces/elements";
import { sizeSelect } from "~/components/DesignSystem/Elements/form/select/library";
import type { ISelect } from "~/components/DesignSystem/Elements/form/select/interfaces";
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
import type { IStyleString } from "~/interfaces/elements";

const props = defineProps({
  size: {
    type: String as () => ISizeText,
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
  exampleText: {
    type: Boolean,
    default: true,
  },
  value: {
    type: Number,
    default: 0,
  },
  option: {
    type: Array as () => ISelect[],
    default: [
      { value: 1, text: "option 1" },
      { value: 2, text: "option 2" },
      {
        value: 3,
        text: "option 3",
      },
    ],
    required: true,
  },
  modelValue: {
    type: Number,
    default: null,
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
    default: "2",
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
const selectedOption = ref(props.value);
const emit = defineEmits(["update:modelValue"]);

function emitSelectedValue(e: { target: { value: any } }) {
  emit("update:modelValue", e.target.value);
}
</script>

<template>
  <select
    v-model="selectedOption"
    :class="[
      'block',
      'border',
      sizeSelect[size],
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
    :readonly="readOnly"
    :required="required"
    @change="emitSelectedValue"
  >
    <option :value="0" disabled selected>
      {{ exampleText ? "Selecciona una opción" : "" }}
    </option>
    <option v-for="el in option" :key="el.value" :value="el.value">
      {{ el.text }}
    </option>
  </select>
</template>