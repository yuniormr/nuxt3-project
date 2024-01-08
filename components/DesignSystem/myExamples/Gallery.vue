<script lang="ts" setup>
import { ref } from "vue";
import images from "./data";
import type {
  IFixedSquare,
  IGalleryData,
} from "~/components/DesignSystem/myExamples/interfaces";
import { sizeImagesClasses } from "~/components/DesignSystem/common/propsStyle";

type IColumns = 1 | 2 | 3 | 4;
const columnClasses = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
};

interface IImages {
  id: number;
  url: string;
  description: string;
  alt: string;
}

defineProps({
  galleryData: {
    type: Array as () => IGalleryData[],
    default: images,
  },
  column: {
    type: Number as () => IColumns,
    default: null,
  },
  fixedSquare: {
    type: String as () => IFixedSquare,
    default: null,
  },
});

const selectedImage = ref<IImages | null>(null);
const isImageLoaded = ref(false);

const openModal = (image: IImages) => {
  selectedImage.value = image;
};

const closeModal = () => {
  selectedImage.value = null;
  isImageLoaded.value = false;
};

function modalImageLoaded() {
  isImageLoaded.value = true;
}
</script>
<template>
  <div class="relative p-2">
    <div
      :class="[
        'grid gap-4 min-w-[250px]',
        { 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4': !column },
        columnClasses[column],
      ]"
    >
      <div v-for="image in galleryData" :key="image.id" class="relative">
        <img
          :class="[
            ' object-cover rounded-lg',
            { 'w-full h-full': !fixedSquare },
            sizeImagesClasses[fixedSquare],
          ]"
          :src="image.url"
          alt="Image"
        />
        <div
          class="overlay absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50 flex items-center justify-center"
        >
          <button
            class="text-white font-bold uppercase"
            @click="openModal(image)"
          >
            Ver detalle
          </button>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div
        v-if="selectedImage"
        class="fixed top-0 left-0 w-full h-screen flex items-center justify-center"
      >
        <div
          class="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"
        ></div>

        <div class="modal bg-white rounded-lg z-20 overflow-hidden">
          <div class="flex justify-end">
            <button
              aria-label="Cerrar"
              class="close-modal p-2 bg-white rounded-full text-sm mr-4"
              @click="closeModal"
            >
              <i aria-hidden="true" class="las la-times block text-3xl"></i>
            </button>
          </div>
          <div class="p-4">
            <img
              :src="selectedImage.url"
              alt="Selected Image"
              class="w-[90vw] max-w-[600px] h-auto object-cover rounded-lg mb-4"
              @load="modalImageLoaded"
            />
            <p
              v-if="isImageLoaded"
              class="w-[90vw] max-w-[600px] text-justify overflow-hidden whitespace-nowrap"
            >
              <span
                :class="{
                  'animate-typing': isImageLoaded,
                  'opacity-0': !isImageLoaded,
                }"
                class="inline-block"
              >
                {{ selectedImage.description }}
              </span>
            </p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
