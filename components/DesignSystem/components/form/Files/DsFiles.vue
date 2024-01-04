<script lang="ts" setup>
const selectedFileName = ref("");
type IButtonColor = "primary" | "secondary";

const buttonColorClasses = {
  primary: "bg-primary-500",
  secondary: "bg-gray-500",
};
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
    default: false,
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
    default: "text",
  },
  buttonText: {
    type: String,
    default: "Buscar",
  },
});

const handleFileInputChange = (event: any) => {
  const fileInput = event.target;
  if (fileInput.files.length > 0) {
    selectedFileName.value = fileInput.files[0].name;
  } else {
    selectedFileName.value = "";
  }
};
</script>
<template>
  <div id="app">
    <label v-if="!isHideLabel" class="block mb-1" for="file">{{
      labelText
    }}</label>
    <div class="flex">
      <input
        id="file"
        :disabled="disabled"
        class="hidden"
        type="file"
        @change="handleFileInputChange"
      />

      <input
        v-model="selectedFileName"
        :placeholder="isHidePlaceHolderText ? '' : placeHolderText"
        class="hover:border-dark-500 border p-2 rounded font-roboto"
        readonly
        type="text"
      />
      <label
        :class="[
          'rounded-e font-roboto border border-primary-500 text-white  px-3 py-2 hover:bg-primary-900 hover:text-white cursor-pointer',
          buttonColorClasses[buttonColor],
        ]"
        for="file"
      >
        <i class="las la-search"></i> {{ buttonText }}
      </label>
    </div>
  </div>
</template>
