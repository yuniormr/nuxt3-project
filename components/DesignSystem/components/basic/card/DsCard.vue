<script lang="ts" setup>
import type { IStyleString } from "~/interfaces/elements";
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
} from "~/components/DesignSystem/common/propsStyle";

import DsLink from "~/components/DesignSystem/Elements/basic/link/DsLink.vue";
import DsContent from "~/components/DesignSystem/Elements/basic/content/DsContent.vue";
import DsTag from "~/components/DesignSystem/Elements/basic/tag/DsTag.vue";

type IContentTopColor = "primary" | "dark";

const contentTopColorClasses = {
  dark: "text-dark-500",
  primary: "text-primary-500",
};

const props = defineProps({
  isRadius: {
    type: Boolean,
    default: true,
  },
  hasContentTop: {
    type: Boolean,
    default: true,
  },
  topColor: {
    type: String as () => IContentTopColor,
    default: "primary",
  },
  hasContentBottom: {
    type: Boolean,
    default: true,
  },
  isTargetBlank: {
    type: Boolean,
    default: false,
  },
  textTop: {
    type: String,
    default: "Lorem ipsum",
  },
  titleText: {
    type: String,
    default: "Título demo",
  },
  textBottom: {
    type: String,
    default:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error dolor soluta doloremque",
  },
  hasLineAwesome: {
    type: Boolean,
    default: true,
  },
  hasTag: {
    type: Boolean,
    default: true,
  },
  tagText: {
    type: String,
    default: "Tag example",
  },
  titleHasIcon: {
    type: Boolean,
    default: false,
  },
  lineAwesome: {
    type: String,
    default: "las la-check-circle",
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
  <div
    :class="[
      { 'rounded-lg': isRadius },
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
    class="p-4 border border-primary mb-3"
  >
    <span
      v-if="hasContentTop"
      :class="[contentTopColorClasses[topColor], 'font-roboto']"
      class="mb-2"
      >{{ textTop }}</span
    >
    <DsLink
      :bold="true"
      :has-line-awesome="hasLineAwesome"
      :has-title-as-component="true"
      :is-diplay-block="true"
      :is-target-blank="isTargetBlank"
      :title="titleText"
      :title-has-icon="titleHasIcon"
      :title-line-awesome="lineAwesome"
      color="dark"
      href=""
      letter="robotoSlab"
      size="text-2xl"
    >
    </DsLink>
    <DsContent v-if="hasContentBottom" :text="textBottom" class="mb-2" />
    <DsTag
      v-if="hasTag"
      :text-tag="tagText"
      background-color="neutral"
      letter="robotoSlab"
      tag-text-color="primary"
    />
  </div>
</template>

<style scoped></style>
