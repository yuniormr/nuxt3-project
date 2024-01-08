<script setup lang="ts">
import DsTitle from "~/components/DesignSystem/Elements/basic/title/DsTitle.vue";
import DsContent from "~/components/DesignSystem/Elements/basic/content/DsContent.vue";
import DsAlert from "~/components/DesignSystem/Elements/basic/alert/DsAlert.vue";
import Radio from "~/components/DesignSystem/Elements/form/radio/Radio.vue";</script>

<template>
  <!--  <div class="flex gap-2">-->
  <!--    <DsTitle type="h4" text="Servicio de informacion entregado por " />-->
  <!--    <DsLink title="Instituto de Prevision Social" class="underline" />-->
  <!--  </div>-->
  <p class="font-bold">Servicio de informacion entregado por
    <NuxtLink to="#" class="underline text-blue-700">Instituto de Prevision Social</NuxtLink>
  </p>
  <h1 class="text-3xl font-bold">Formulario de contacto</h1>
  <div class="h-12 w-full bg-gray-300 text-center my-3 flex justify-center items-center my-8">
    Steep 1
  </div>
  <DsTitle type="h3" text="Estamos aqui para ayudarte" marginBottom="5"/>
  <DsAlert
      contentText="prueba"
      class="border border-blue-700"
      :has-font-awesome="true"
      title-text=""

  />
  <DsContent text="¿Cual es tu nacionalidad?*" marginTop="8" marginBottom="3"></DsContent>
  <Radio radio-text="Chileno" marginBottom="3"/>
  <br>
  <Radio radio-text="Extranjero" marginBottom="10"/>

  <DsAlert
      class="border border-yellow-400"
      :has-font-awesome="true"
      title-text="Importante:"
      titleColor="#111"
  />

  


</template>
