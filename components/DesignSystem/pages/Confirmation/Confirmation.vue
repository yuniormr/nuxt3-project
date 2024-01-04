<script lang="ts" setup>
import DsTitle from "~/components/DesignSystem/Elements/basic/title/DsTitle.vue";
import DsContent from "~/components/DesignSystem/Elements/basic/content/DsContent.vue";
import DsButton from "~/components/DesignSystem/components/basic/button/DsButton.vue";

defineProps({
  title: {
    type: String,
    default: "Confirme la información de su solicitud",
  },
  mainText: {
    type: String,
    default: `Está a un paso de enviar si solicitud. Verifique que la información
    ingresada está corre cta. Si los datos están bien, presione “Confirmar”.`,
  },
  isCardBorder: {
    type: Boolean,
    default: false,
  },
  isButton: {
    type: Boolean,
    default: true,
  },
  textSubmit: {
    type: String,
    default: "Confirmar",
  },
});
const emit = defineEmits(["buttonClick"]);

function handleClick() {
  emit("buttonClick");
}
</script>

<template>
  <div class="container max-w-[800px] mx-auto">
    <section>
      <DsTitle :text="title" letter="robotoSlab" margin-bottom="4" type="h2" />
      <DsContent :text-content="mainText" margin-bottom="4" />

      <div :class="`border p-4 mb-4 ${isCardBorder ? 'rounded' : ''}`">
        <DsTitle
          letter="robotoSlab"
          margin-bottom="3"
          text="Información del beneficiario"
          type="h3"
        />
        <hr class="my-4" />
        <ul class="text-neutral-500 mb-5">
          <li class="mb-2">
            Nombre
            <strong class="block">Marcelo Alarcón</strong>
          </li>
          <li class="mb-2">
            RUN
            <strong class="block">12.345.678-9 </strong>
          </li>
          <li class="mb-2">
            Dirección
            <strong class="block">Av. Los Leones 234, Providencia RM. </strong>
          </li>
          <li class="mb-2">
            Teléfono
            <strong class="block">+56 9 92742455 </strong>
          </li>
          <li class="mb-2">
            Correo electrónico
            <strong class="block">marceloa@correo.com</strong>
          </li>
          <li class="mb-2">
            Grupo familiar
            <strong class="block">Confirmado </strong>
          </li>
        </ul>
      </div>
      <!--      <button-->
      <!--        class="font-roboto border border-primary-500 bg-primary-500 text-white px-3 py-2 hover:bg-primary-900 rounded mb-4"-->
      <!--      >-->
      <!--        Confirmar <i class="las la-arrow-right ml-1"></i>-->
      <!--      </button>-->
      <DsButton
        v-if="isButton"
        :text="textSubmit"
        awesome-right="las la-arrow-right"
        background-color="primary"
        text-color="white"
        @click="handleClick"
      />
    </section>
  </div>
</template>

<style scoped></style>
