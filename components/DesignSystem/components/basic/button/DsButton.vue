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
  propCommon,
  textAlignmentClasses,
} from "~/components/DesignSystem/common/propsStyle";

type IButton = "anchor" | "button" | "submit";
type ITextColor = "white" | "primary";
type IBackgroundColor = "primary" | "danger" | "white";
type IBorderColor = "primary" | "danger";

const textColorClasses = {
  white: "text-white",
  primary: "text-primary-500",
};
const backgroundColorClasses = {
  white: "bg-white",
  primary: "bg-primary-500",
  danger: "bg-danger-500",
};
const borderColorClasses = {
  primary: "border-primary-500",
  danger: "border-danger-500",
};

const props = defineProps({
  awesomeRight: {
    type: String,
    default: null,
  },
  text: {
    type: String,
    default: "default",
  },
  awesomeLeft: {
    type: String,
    default: null,
  },
  urlImageLeft: {
    type: String,
    default: null,
  },
  urlImageRight: {
    type: String,
    default: null,
  },
  link: {
    type: String,
    default: "#",
  },

  type: {
    type: String as () => IButton,
    default: "button",
  },
  textColor: {
    type: String as () => ITextColor,
    default: "primary",
  },
  backgroundColor: {
    type: String as () => IBackgroundColor,
  },
  borderColor: {
    type: String as () => IBorderColor,
    default: "primary",
  },
  isSmall: {
    type: Boolean,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  isRadius: {
    type: Boolean,
  },
  isLinkBlank: {
    type: Boolean,
  },

  ...propCommon,
});
const urlImageLeft = computed(() => {
  return props.urlImageLeft;
});
const urlImageRight = computed(() => {
  return props.urlImageRight;
});
const emit = defineEmits(["click"]);

function handleClick() {
  emit("click");
}
</script>

<template>
  <!--  button component-->
  <button
    v-if="type !== 'anchor'"
    :class="[
      'flex  items-center font-roboto   px-3 py-2 hover:bg-primary-900 hover:text-white',
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
      textColorClasses[textColor],
      backgroundColorClasses[backgroundColor],
      borderColorClasses[borderColor],
      { 'text-xs': isSmall },
      { 'rounded-lg': isRadius },
      { 'opacity-50': disabled },
    ]"
    :disabled="disabled"
    :type="type"
    @click="handleClick"
  >
    <i v-if="awesomeLeft && !urlImageLeft" :class="[awesomeLeft, 'mr-1']"></i
    ><img
      v-if="urlImageLeft"
      :src="`${urlImageLeft}`"
      alt="icon left image"
      aria-hidden="true"
      class="w-6 mr-2 icon-svg icon-blue"
    />
    {{ text
    }}<img
      v-if="urlImageRight"
      :src="`${urlImageRight}`"
      alt="icon right image"
      aria-hidden="true"
      class="w-6 ml-2 icon-svg icon-blue"
    /><i
      v-if="awesomeRight && !urlImageRight"
      :class="[awesomeRight, 'ml-1']"
    ></i>
  </button>
  <!--  link component-->
  <NuxtLink
    v-if="type === 'anchor'"
    :class="[
      'flex items-center  min-w-min font-roboto  px-3 py-2 hover:bg-primary-900 hover:text-white',
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
      textColorClasses[textColor],
      backgroundColorClasses[backgroundColor],
      borderColorClasses[borderColor],
      { 'text-xs': isSmall },
      { 'rounded-lg': isRadius },
      { 'opacity-50': disabled },
    ]"
    :disabled="disabled"
    :target="isLinkBlank ? '_blank' : '_self'"
    :to="link"
    :type="type"
  >
    <i v-if="awesomeLeft && !urlImageLeft" :class="[awesomeLeft, 'mr-1']"></i
    ><img
      v-if="urlImageLeft"
      :src="`${urlImageLeft}`"
      alt="icon left image"
      aria-hidden="true"
      class="w-6 mr-2 icon-svg icon-blue"
    />
    {{ text
    }}<img
      v-if="urlImageRight"
      :src="`${urlImageRight}`"
      alt="icon right image"
      aria-hidden="true"
      class="w-6 ml-2 icon-svg icon-blue"
    /><i
      v-if="awesomeRight && !urlImageRight"
      :class="[awesomeRight, 'ml-1']"
    ></i>
  </NuxtLink>
</template>
