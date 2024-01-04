<script lang="ts" setup>
import { data } from "~/components/DesignSystem/components/basic/gallery/data";
import { sizeImagesClasses } from "~/components/DesignSystem/common/propsStyle";
import type { IGalleryData } from "~/components/DesignSystem/components/basic/gallery/interface";

type IColumn = 1 | 2 | 3 | 4;
type IFixedSquare =
  | "xxSmall"
  | "xSmall"
  | "small"
  | "medium"
  | "large"
  | "xLarge"
  | "default";

defineProps({
  columns: {
    type: Number as () => IColumn,
    default: 4,
  },
  isRounded: {
    type: Boolean,
    default: false,
  },
  fixedSquare: {
    type: String as () => IFixedSquare,
    default: "default",
  },
  galleryData: {
    type: Array as () => IGalleryData[],
    default: data,
  },
});
const isModal = ref(false);

function handleClick() {
  isModal.value = !isModal.value;
}
</script>

<template>
  <div class="container max-w-[800px] mx-auto">
    <div class="mb-4">
      <div :class="[`w-max grid grid-cols-${columns} gap-4`]">
        <button
          v-for="el in galleryData"
          :key="el.id"
          :class="[
            'overflow-hidden',
            { rounded: isRounded },
            sizeImagesClasses[fixedSquare],
          ]"
          @click="handleClick"
        >
          <img :alt="el.alt" :src="el.src" />
        </button>
      </div>
    </div>

    <div
      v-show="isModal"
      id="modal"
      aria-labelledby="modal-title"
      aria-modal="true"
      class="relative z-10"
      role="dialog"
    >
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      ></div>
      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 relative"
        >
          <div class="absolute top-4 right-5">
            <button
              aria-label="Cerrar"
              class="close-modal p-2 bg-white rounded-full text-sm mr-4"
              @click="handleClick"
            >
              <i aria-hidden="true" class="las la-times block"></i>
            </button>
          </div>
          <div class="w-[90%] flex">
            <button class="text-white text-xl p-3">
              <i class="las la-angle-left"></i>
            </button>
            <div class="text-center bg-neutral-700">
              <img
                alt="Descripción de la imagen"
                class="inline-block"
                src="/images/sample-image.jpg"
              />
              <p class="text-white bg-neutral-900 p-3 text-left">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
                voluptatem vitae odit temporibus quasi commodi deleniti,
                provident nesciunt quibusdam maxime impedit. Sit hic aut nisi
                veniam necessitatibus magni facilis iusto?
              </p>
            </div>
            <button class="text-white text-xl p-3">
              <i class="las la-angle-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
