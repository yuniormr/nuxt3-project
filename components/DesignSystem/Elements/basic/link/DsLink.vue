<script lang="ts" setup>
import type { IFont } from "~/interfaces/elements";
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
  textAlignmentClasses,
} from "~/components/DesignSystem/common/propsStyle";
import { colorLinkClasses } from "./library";
import type {
  ILink,
  ISizeLink,
} from "~/components/DesignSystem/Elements/basic/link/interface";
import type { IStyleString, ITextAlignment } from "~/interfaces/elements";
import DsTitle from "~/components/DesignSystem/Elements/basic/title/DsTitle.vue";

defineOptions({
  inheritAttrs: false,
});
defineProps({
  color: {
    type: String as () => ISizeLink,
    default: "primary",
  },
  isTargetBlank: {
    type: Boolean,
    default: false,
  },
  href: {
    type: String,
    default: "#",
  },
  title: {
    type: String,
    default: "Enlace",
  },
  bold: {
    type: Boolean,
    default: false,
  },
  letter: {
    type: String as () => IFont,
    default: "roboto",
  },
  size: {
    type: String as () => ILink,
  },
  isRectangle: {
    type: Boolean,
    default: false,
  },
  isUnderlined: {
    type: Boolean,
    default: false,
  },
  hasLineAwesome: {
    type: Boolean,
    default: false,
  },
  lineAwesome: {
    type: String,
    default: "las la-angle-right",
  },
  lineAwesomeColor: {
    type: String as () => ISizeLink,
    default: "primary",
  },
  lineAwesomeSize: {
    type: String as () => ILink,
  },
  isDiplayBlock: {
    type: Boolean,
    default: false,
  },
  hasTitleAsComponent: {
    type: Boolean,
    default: false,
  },
  titleHasIcon: {
    type: Boolean,
    default: false,
  },
  titleLineAwesome: {
    type: String,
    default: "las la-check-circle",
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
  textAlignment: {
    type: String as () => ITextAlignment,
  },
});
</script>

<template>
  <NuxtLink
    v-if="isRectangle && !hasTitleAsComponent"
    :class="[
      `px-4 py-1.5 bg-primary-500 block hover:bg-primary-900  ${
        bold ? 'font-bold' : 'font-normal'
      }`,
      { underline: isUnderlined },
      fontClasses[letter],
      size,
      { 'text-white': isRectangle },
      colorLinkClasses[color],
    ]"
    :target="isTargetBlank ? '_blank' : '_self'"
    :to="href || '#'"
    >{{ title
    }}<i v-if="hasLineAwesome" :class="lineAwesome" aria-hidden="true"></i>
  </NuxtLink>

  <NuxtLink
    v-if="!isRectangle && !hasTitleAsComponent"
    :class="[
      `hover:text-primary-900 ${bold ? 'font-bold' : 'font-normal'}`,
      fontClasses[letter],
      size,
      colorLinkClasses[color],
      { block: isDiplayBlock },
      { underline: isUnderlined },
      textAlignmentClasses[textAlignment],
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
    :target="isTargetBlank ? '_blank' : '_self'"
    :to="href || '#'"
    class="decoration-inherit"
  >
    {{ title }}
    <i
      v-if="hasLineAwesome"
      :class="[
        lineAwesome,
        lineAwesomeSize,
        colorLinkClasses[lineAwesomeColor],
      ]"
      aria-hidden="true"
    ></i>
  </NuxtLink>

  <NuxtLink
    v-if="hasTitleAsComponent"
    :class="[
      `hover:text-primary-900 ${bold ? 'font-bold' : 'font-normal'}`,
      fontClasses[letter],
      size,
      colorLinkClasses[color],
      textAlignmentClasses[textAlignment],
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
    class="flex justify-between"
  >
    <DsTitle
      :class="[colorLinkClasses[color], { underline: isUnderlined }]"
      :has-font-awesome="titleHasIcon"
      :text="title"
      :title-line-awesome="titleLineAwesome"
      class="inline"
    />
    <i
      v-if="hasLineAwesome"
      :class="[
        lineAwesome,
        lineAwesomeSize,
        colorLinkClasses[lineAwesomeColor],
      ]"
      aria-hidden="true"
    ></i>
  </NuxtLink>
</template>

<style scoped></style>
