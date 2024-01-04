<script lang="ts" setup>
import { ref } from "vue";
import { menuItems } from "~/components/DesignSystem/components/menu/sideMenu/data";
import type { ISideMenuData } from "~/components/DesignSystem/components/menu/sideMenu/interfaces";
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

const subMenuVisibility = ref<{ [key: string]: boolean }>({});
const subSubMenuVisibility = ref<{ [key: string]: boolean }>({});

defineProps({
  dataSideMenu: {
    type: Array as () => ISideMenuData[],
    default: menuItems,
  },
  isHideTitle: {
    type: Boolean,
    default: false,
  },
  textAlignment: {
    type: String as () => ITextAlignment,
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
});

const toggleSubMenu = (id: string) => {
  subMenuVisibility.value[id] = !subMenuVisibility.value[id];
};

const isSubMenuVisible = (id: string) => {
  return subMenuVisibility.value[id] || false;
};
const toggleSubSubMenu = (id: string) => {
  subSubMenuVisibility.value[id] = !subSubMenuVisibility.value[id];
};

const isSubSubMenuVisible = (id: string) => {
  return subSubMenuVisibility.value[id] || false;
};

const subMenuIconClass = (id: string) => {
  return `las la-angle-${isSubMenuVisible(id) ? "up" : "down"} text-xs ml-1`;
};
const subSubMenuIconClass = (id: string) => {
  return `las la-angle-${isSubSubMenuVisible(id) ? "up" : "down"} text-xs ml-1`;
};

function isHasMenu(objeto: object) {
  return "subMenu" in objeto;
}
</script>
<template>
  <div
    :class="[
      'container max-w-[800px] mx-auto',
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
  >
    <hr class="my-4" />

    <nav aria-label="Menú" class="my-3 block" role="navigation">
      <ul>
        <li v-for="item in dataSideMenu" :key="item.id" class="block">
          <NuxtLink
            :class="[
              'block text-base py-3 px-3 border-b border-gray-300 w-full text-left hover:text-primary-500',
              {
                'text-primary-900 border-primary-500': isSubMenuVisible(
                  item.id,
                ),
              },
              { underline: item.isUnderline },
            ]"
            :target="item.isTargetBlank ? '_blank' : '_self'"
            :to="item.link || '#'"
            @click="toggleSubMenu(item.id)"
          >
            <i v-if="item.icon" :class="item.icon + ' text-base mr-1'"></i>
            {{ !isHideTitle ? item.label : "" }}
            <i v-if="isHasMenu(item)" :class="subMenuIconClass(item.id)"></i>
          </NuxtLink>
          <!--            second level-->
          <ul v-if="isHasMenu(item) && isSubMenuVisible(item.id)" :id="item.id">
            <li v-for="subItem in item.subMenu" :key="subItem.id">
              <NuxtLink
                :class="[
                  'block text-base py-3 px-3 border-b border-primary-500 w-full text-left  hover:text-primary-900',
                  { 'text-primary-900': isSubMenuVisible(item.id) },
                  { underline: subItem.isUnderline },
                ]"
                :target="subItem.isTargetBlank ? '_blank' : '_self'"
                :to="subItem.link || '#'"
                @click="toggleSubSubMenu(subItem.id)"
              >
                <i class="las la-angle-right text-base mr-1"></i>
                <i
                  v-if="subItem.icon"
                  :class="subItem.icon + ' text-base mr-1'"
                ></i>
                {{ !isHideTitle ? subItem.label : "" }}
                <i
                  v-if="isHasMenu(subItem)"
                  :class="['text-xs ml-1', subSubMenuIconClass(subItem.id)]"
                ></i>
              </NuxtLink>
              <ul
                v-if="isHasMenu(subItem) && isSubSubMenuVisible(subItem.id)"
                :id="subItem.id"
              >
                <!--                third level-->
                <li v-for="subSubItem in subItem.subMenu" :key="subSubItem.id">
                  <NuxtLink
                    :class="[
                      'block text-base py-3 px-3 border-b border-primary-900 w-full text-left bg-primary-500 text-white hover:bg-primary-900',
                      { underline: subSubItem.isUnderline },
                    ]"
                    :target="subSubItem.isTargetBlank ? '_blank' : '_self'"
                    :to="subSubItem.link"
                  >
                    <i class="las la-arrow-right text-base mr-1"></i>
                    <i
                      v-if="subSubItem.icon"
                      :class="subSubItem.icon + ' text-base mr-1'"
                    ></i>
                    {{ !isHideTitle ? subSubItem.label : "" }}
                  </NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>
