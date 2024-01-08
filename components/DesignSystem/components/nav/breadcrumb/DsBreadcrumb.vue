<script lang="ts" setup>
import type { IBreadcrumb } from "~/components/DesignSystem/components/nav/breadcrumb/interface";
import { tabsData } from "~/components/DesignSystem/components/nav/breadcrumb/data";

defineProps({
  breadcrumbData: {
    type: Array as () => IBreadcrumb[],
    default: tabsData,
  },
  hideSeparator: {
    type: Boolean,
    default: false,
  },
});
const selectedItemIndex = ref(1);

function selectItem(index: number) {
  selectedItemIndex.value = index;
}
</script>

<template>
  <nav class="my-3 block" role="navigation">
    <ol class="flex">
      <li v-for="item in breadcrumbData">
        <i
          v-if="item.icon"
          :class="`las la-${item.icon} ${
            item.id !== selectedItemIndex ? 'text-base text-primary-500' : ''
          }`"
        ></i>
        <NuxtLink
          :class="[
            ' font-roboto px-3 ',
            {
              'border-r border-gray-300':
                item.id !== breadcrumbData.length && !hideSeparator,
            },
            {
              'text-primary-500 hover:text-primary-900 text-base underline  ':
                item.id !== selectedItemIndex,
            },
          ]"
          :to="item.link"
          href="#"
          @click="selectItem(item.id)"
          >{{ item.label }}
        </NuxtLink>
      </li>
    </ol>
  </nav>
</template>
