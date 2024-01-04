<script lang="ts" setup>
import DsContent from "~/components/DesignSystem/Elements/basic/content/DsContent.vue";
import DsTitle from "~/components/DesignSystem/Elements/basic/title/DsTitle.vue";
import { propCommon } from "~/components/DesignSystem/common/propsStyle";

type ITypes = "info" | "danger" | "success";
type ITextColor = "default" | "primary";
type ILineAwesome =
  | "las la-exclamation-circle"
  | "las la-exclamation-triangle"
  | "las la-check-circle"
  | "las la-check-square"
  | "las la-times-circle";

const alertTipes = {
  info: "bg-cyan-500",
  danger: "bg-danger-100",
  success: "bg-success-100",
};

const titleColorClasses = {
  default: "text-dark",
  primary: "text-primary-500",
};

const props = defineProps({
  alertTypes: {
    type: String as () => ITypes,
    default: "info",
  },
  hasFontAwesome: {
    type: Boolean,
    default: true,
  },
  fontAwesome: {
    type: String as () => ILineAwesome,
    default: "las la-info-circle",
  },
  isRadius: {
    type: Boolean,
  },
  titleText: {
    type: String,
    default: "Información",
  },
  contentText: {
    type: String,
    default:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil harum assumenda fugiat consequatur sunt,\n" +
      "      labore, inventore cumque illo deleniti itaque, provident excepturi. Dicta nulla nesciunt eaque iste repudiandae\n" +
      "      tempora quod?",
  },
  titleColor: {
    type: String as () => ITextColor,
    default: "primary",
  },

  ...propCommon,
});
</script>

<template>
  <div
    :class="[alertTipes[alertTypes], { rounded: isRadius }]"
    aria-label="Cuadro de información importante"
    class="p-4 mb-3"
    role="alert"
  >
    <DsTitle
      :class="titleColorClasses[titleColor]"
      :has-font-awesome="hasFontAwesome"
      :line-awesome-left="fontAwesome"
      :text="titleText"
      letter="robotoSlab"
      type="h3"
    />
    <DsContent :text-content="contentText" />
  </div>
</template>

<style scoped></style>