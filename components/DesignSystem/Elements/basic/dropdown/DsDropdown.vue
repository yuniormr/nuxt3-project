<script lang="ts" setup>
import type { IStyleString } from "~/interfaces/elements";

import DsImages from "~/components/DesignSystem/Elements/basic/images/DsImages.vue";
import DsLink from "~/components/DesignSystem/Elements/basic/link/DsLink.vue";
import DsButton from "~/components/DesignSystem/components/basic/button/DsButton.vue";
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

type ITipes = "dropdown" | "dropup";
type IDropColors = "primary" | "white";

const DSupDownTypes = {
  dropdown: "top-full",
  dropup: "top-auto bottom-full",
};

const props = defineProps({
  DStypes: {
    type: String as () => ITipes,
    default: "dropdown",
  },
  DSbackgroundColor: {
    type: String as () => IDropColors,
    default: "primary",
  },
  DStextColor: {
    type: String as () => IDropColors,
    default: "white",
  },
  DStext: {
    type: String,
    default: "Primary",
  },
  DSawesome: {
    type: String,
    default: "las la-angle-down",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  isRadius: Boolean,

  margin: String as () => IStyleString,
  marginTop: String as () => IStyleString,
  marginLeft: String as () => IStyleString,
  marginRight: String as () => IStyleString,
  marginBottom: String as () => IStyleString,
  padding: String as () => IStyleString,
  paddingTop: String as () => IStyleString,
  paddingBottom: String as () => IStyleString,
  paddingRight: String as () => IStyleString,
  paddingLeft: String as () => IStyleString,
  border: String as () => IStyleString,
  borderBottom: String as () => IStyleString,
  borderTop: String as () => IStyleString,
  borderLeft: String as () => IStyleString,
  borderRight: String as () => IStyleString,
});

const showDrop = ref(false);
</script>

<template>
  <div
    :class="[
      { rounded: isRadius },
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
    class="inline-flex relative align-top"
  >
    <div class="dropdown-trigger" @click="showDrop = !showDrop">
      <DsButton
        :awesome-left="DSawesome"
        :background-color="DSbackgroundColor"
        :class="[{ rounded: isRadius }]"
        :disabled="disabled"
        :text="DStext"
        :text-color="DStextColor"
        aria-controls="dropdown_menu_example1"
        aria-haspopup="true"
        class="font-roboto border ps-3 pe-4 py-2 mb-0 hover:bg-primary-900"
      >
      </DsButton>
    </div>
    <div
      id="dropdown_menu_example1"
      :aria-hidden="!showDrop"
      :class="[{ hidden: !showDrop }, DSupDownTypes[DStypes]]"
      class="left-0 min-w-[12rem] pt-0 w-full absolute z-20"
      role="menu"
    >
      <div class="bg-primary-500 text-white" role="list">
        <a
          class="flex items-center text-sm py-1.5 px-4 relative whitespace-nowrap w-full hover:bg-primary-900"
          href="#"
          role="listitem"
          tabindex="0"
          title="Abrir sección"
        >
          <DsImages
            alt="Icono ClaveÚnica"
            class="w-4 mr-2"
            src="/images/claveunica-icon.svg"
          />
          Postular
          <i aria-hidden="true" class="las la-angle-right ml-2"></i>
        </a>
        <DsLink
          :class="['block py-1.5 px-4 relative whitespace-nowrap w-full']"
          :has-font-awesome="true"
          :is-rectangle="true"
          :is-underlined="false"
          href="#"
          size="text-sm"
          tabindex="0"
          title="Conocer estado"
        >
        </DsLink>
        <DsLink
          :class="['block py-1.5 px-4 relative whitespace-nowrap w-full']"
          :has-font-awesome="true"
          :is-rectangle="true"
          :is-underlined="false"
          href="#"
          size="text-sm"
          tabindex="0"
          title="Conocer resolución"
        >
        </DsLink>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
