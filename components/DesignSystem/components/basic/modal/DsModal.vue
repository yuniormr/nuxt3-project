<script lang="ts" setup>
defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  isFooter: {
    type: Boolean,
    default: true,
  },
  isHeader: {
    type: Boolean,
    default: true,
  },
});
const emit = defineEmits(["close", "actionButton"]);

function closeModal() {
  emit("close");
}

function handleActionButton() {
  emit("actionButton");
}
</script>
<template>
  <div v-if="isOpen" class="container max-w-[800px] mx-auto h-[100vh]">
    <section class="my-4">
      <div
        id="modal-js-example"
        :class="[
          'flex modal items-center flex-col justify-center overflow-hidden fixed z-40 bottom-0 left-0 right-0 top-0 ',
        ]"
        aria-labelledby="title_modal_example1"
        aria-modal="true"
        role="dialog"
      >
        <div
          class="modal-background bg-black/80 absolute bottom-0 left-0 right-0 top-0"
        ></div>
        <div
          class="max-h-fit relative flex flex-col w-full overflow-hidden md:my-0 md:mx-auto max-w-screen-md"
        >
          <section
            v-if="isHeader"
            class="py-10 px-5 bg-white grow shrink overflow-auto"
          >
            <h1 v-if="!$slots.header">
              Aquí va un header espero por el diseño.
            </h1>
            <slot name="header"></slot>
          </section>
          <section class="py-10 px-5 bg-white grow shrink overflow-auto">
            <slot></slot>
          </section>
          <footer
            v-if="isFooter"
            class="bg-neutral-100 border border-t-neutral-300 text-center md:text-right p-5"
          >
            <div v-if="!$slots.footer">
              <button
                aria-labelledby="form_modal_example1"
                class="modal-close font-roboto border border-primary-500 text-primary-500 bg-white px-3 py-2 hover:bg-primary-900 hover:text-white"
                title="Cancelar los cambios realizados y cerrar modal"
                type="reset"
                @click="closeModal"
              >
                Cancelar
              </button>
              <button
                aria-labelledby="form_modal_example1"
                class="font-roboto border border-primary-500 bg-primary-500 text-white px-3 py-2 hover:bg-primary-900"
                title="Guardar los cambios realizados"
                type="submit"
                @click="handleActionButton"
              >
                Guardar
              </button>
            </div>
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    </section>
  </div>
</template>
