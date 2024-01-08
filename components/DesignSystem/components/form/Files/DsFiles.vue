<script lang="ts" setup>
import type { Ref } from "vue";
import DsButton from "~/components/DesignSystem/components/basic/button/DsButton.vue";

type IButtonColor = "white" | "primary" | "danger";

interface FileInputRef extends Ref<HTMLInputElement | null> {}

defineProps({
  isHideLabel: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  isHidePlaceHolderText: {
    type: Boolean,
    default: true,
  },
  buttonColor: {
    type: String as () => IButtonColor,
    default: "primary",
  },
  labelText: {
    type: String,
    default: "Attach document",
  },
  placeHolderText: {
    type: String,
    default: "No hay archivo seleccionado",
  },
  buttonText: {
    type: String,
    default: "Examinar",
  },
});
const emit = defineEmits(["onSelectedDsFile"]);
const selectedFileName = ref(null);
const refFileName: FileInputRef = ref(null);

const openFilePicker = () => {
  // document.getElementById("file").click();
  refFileName.value?.click();
};

const handleFileChange = (event: { target: { files: any[] } }) => {
  const file = event.target.files[0];
  selectedFileName.value = file.name;
  emit("onSelectedDsFile", file);
};
</script>
<template>
  <div id="app">
    <label v-if="!isHideLabel" class="block mb-1">{{ labelText }}</label>
    <div class="flex">
      <input
        id="file"
        ref="refFileName"
        :disabled="disabled"
        class="hidden"
        name="file"
        type="file"
        @change="handleFileChange"
      />
      <!--      no puse el genérico porque no se le agregó propiedades lógicas como value-->
      <input
        :placeholder="!isHidePlaceHolderText ? '' : placeHolderText"
        :value="selectedFileName"
        class="hover:border-dark-500 border p-2 rounded rounded-e-none font-roboto w-full"
        disabled
        readonly
      />
      <DsButton
        :background-color="buttonColor"
        :text="buttonText"
        awesome-left="las la-search"
        text-color="white"
        @click="openFilePicker"
      />
    </div>
  </div>
</template>
