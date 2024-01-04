<script lang="ts" setup>
import { ref } from "vue";
import type { IStyleString, ITextAlignment } from "~/interfaces/elements";
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
} from "~/components/DesignSystem/common/propsStyle";

type IAccordion = "standard" | "card";
defineProps({
  type: {
    type: String as () => IAccordion,
    default: "standard",
  },
  triggerText: {
    type: String,
    default: "Conocer más",
  },
  collapseTitle: {
    type: String,
    default: "Información del solicitante",
  },
  children: {
    type: String,
    default: "Contenido",
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
  textAlignment: {
    type: String as () => ITextAlignment,
  },
  border: {
    type: String as () => IStyleString,
    default: "1",
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

const collapsedStates = ref<{ [key: number]: boolean }>({
  1: true,
  2: true,
});

const toggleCollapse = (id: number) => {
  collapsedStates.value[id] = !collapsedStates.value[id];
};

const isCollapsed = (id: number) => {
  return collapsedStates.value[id];
};
</script>
<template>
  <div
    v-if="type === 'standard'"
    :class="[
      'collapsed',
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
  >
    <div class="collapse-trigger">
      <button
        class="flex justify-between items-center w-full border border-neutral-300 bg-neutral-100 py-2 px-4"
        @click="toggleCollapse(1)"
      >
        <h2 class="text-xl font-robotoSlab text-neutral-700">
          {{ collapseTitle }}
        </h2>
        <i
          :class="[
            'las',
            'la-angle-down',
            'text-xs',
            'font-bold',
            { 'transform rotate-180': isCollapsed(1) },
          ]"
          aria-hidden="true"
        ></i>
      </button>
    </div>
    <div
      v-if="!isCollapsed(1)"
      id="collapse_content_example1"
      class="border-x border-b border-neutral-300 p-4"
    >
      <div class="colap-cont">{{ children }}</div>
    </div>
  </div>

  <div
    v-if="type === 'card'"
    :class="[
      'collapsed  border-neutral-300 rounded-lg overflow-hidden',
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
  >
    <div class="collapse-trigger">
      <button
        class="flex justify-between items-center w-full py-3 px-4 border-l-8 border-primary-500"
        type="button"
        @click="toggleCollapse(2)"
      >
        <h2 class="text-2xl font-robotoSlab text-neutral-700">
          {{ collapseTitle }}
        </h2>
        <span class="text-primary-500"> {{ triggerText }}</span>
      </button>
    </div>
    <div
      v-if="!isCollapsed(2)"
      id="collapse_content_example2"
      class="border-l-8 border-primary-500 p-4"
    >
      <div class="colap-cont">{{ children }}</div>
    </div>
  </div>
</template>
