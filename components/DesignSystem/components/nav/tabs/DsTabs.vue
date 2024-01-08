<script lang="ts" setup>
import { tabs } from "~/components/DesignSystem/components/nav/tabs/data";
import type { IDsTab } from "~/components/DesignSystem/components/nav/tabs/interface";

defineProps({
  dataTab: {
    type: Array as () => IDsTab[],
    default: tabs,
  },
  radiusNone: {
    type: Boolean,
    default: false,
  },
  hideTextTag: { type: Boolean, default: false },
});
const activeTab = ref(1);

function setActiveTab(index: number): void {
  activeTab.value = index;
}
</script>
<template>
  <section class="my-4">
    <div class="tabs-container">
      <nav
        class="items-stretch flex justify-between overflow-hidden overflow-x-auto whitespace-nowrap mb-6"
      >
        <ul
          class="items-center border-b border-b-neutral-300 flex grow shrink-0 justify-start"
          role="tablist"
        >
          <li
            v-for="tab in dataTab"
            :key="tab.id"
            :class="{ '-mb-px': tab.id === activeTab }"
            role="presentation"
          >
            <a
              :class="{
                'bg-white border border-primary-500 border-b-transparent text-primary-500':
                  tab.id === activeTab,
                'bg-white  hover:bg-neutral-100 hover:text-primary-500':
                  tab.id !== activeTab,
                'rounded-t-lg': !radiusNone,
              }"
              class="flex font-roboto justify-center px-4 py-2"
              role="button"
              @click="setActiveTab(tab.id)"
              ><span class="flex items-center justify-center"
                ><i v-if="tab.icon" :class="['text-xl mr-2', tab.icon]"></i
                >{{ hideTextTag ? "" : tab.label }}</span
              >
            </a>
          </li>
        </ul>
      </nav>
      <section class="block">
        <div
          v-for="tab in dataTab"
          :key="tab.id"
          :class="{ hidden: tab.id !== activeTab }"
          class="font-roboto"
          role="treeitem"
        >
          <!--          {{ tab.component }}-->
          <component :is="tab.component"></component>
        </div>
      </section>
    </div>
  </section>
</template>
