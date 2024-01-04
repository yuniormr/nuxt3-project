<script lang="ts" setup>
import DsTitle from "~/components/DesignSystem/Elements/basic/title/DsTitle.vue";
import DsLink from "~/components/DesignSystem/Elements/basic/link/DsLink.vue";
import DsContent from "~/components/DesignSystem/Elements/basic/content/DsContent.vue";
import DsButton from "~/components/DesignSystem/components/basic/button/DsButton.vue";
import DsImages from "~/components/DesignSystem/Elements/basic/images/DsImages.vue";

defineProps({
  title: {
    type: String,
    default: "Example Telematic",
  },
  textButton: {
    type: String,
    default: "Print telematic",
  },
});
</script>

<template>
  <div class="container max-w-[800px] mx-auto">
    <!--    <DsTitle font-bold text="Telematic" type="h1" />-->
    <!--    <hr class="my-4" />-->

    <section>
      <DsLink
        letter="roboto"
        margin-bottom="3"
        title="Instituto de Previsión Social"
      />
      <DsTitle
        :text="title"
        font-bold
        letter="robotoSlab"
        margin-bottom="3"
        type="h2"
      />
      <!--                        <h2 class="text-base font-robotoSlab font-bold mb-5">-->
      <!--                          Comprobante consulta telemática-->
      <!--                        </h2>-->
      <DsTitle
        font-bold
        letter="robotoSlab"
        margin-bottom="5"
        text="Comprobante consulta telemática"
        type="h4"
      />
      <span
        class="font-roboto bg-neutral-100 rounded text-primary-500 text-xs px-2 py-1 mb-5 inline-block"
        >23/10/2020</span
      >
      <div class="mb-5">
        <span class="text-neutral-500 mb-2 font-roboto">Estimado</span>
        <strong class="block font-robotoSlab">Nombres Apellidos</strong>
      </div>
      <div class="mb-5">
        <span class="text-neutral-500 mb-2">Presente:</span>
        <DsContent
          letter="roboto"
          text-content=" En respuesta a su solicitud de certificado de imposiciones
          correspondiente al antiguo sistema previsional, señalamos que
          actualmente usted no cuenta con información sobre sus imposiciones en
          las bases de datos del Instituto de Previsión Social."
        />
      </div>

      <div
        aria-label="Cuadro de información importante"
        class="font-roboto bg-cyan-500 p-4 mb-3 rounded"
        role="alert"
      >
        <h2 class="text-primary-500 text-xl font-robotoSlab mb-3 font-bold">
          <i class="las la-info-circle mr-1 text-xl"></i>Recomendación
        </h2>
        <!--        <p class="font-roboto mb-2">-->
        <!--          En caso de contar con información previsional de alguna ex caja del-->
        <!--          sistema de reparto, puede dirigirse a una de nuestras oficinas-->
        <!--          ChileAtiende.-->
        <!--        </p>-->
        <DsContent
          margin-bottom="2"
          text-content=" En caso de contar con información previsional de alguna ex caja del
          sistema de reparto, puede dirigirse a una de nuestras oficinas
          ChileAtiende."
        />
        <!--        <p class="font-roboto mb-2">-->
        <!--          Al momento de su visita favor acudir con:-->
        <!--        </p>-->
        <DsContent
          margin-bottom="2"
          text-content="Al momento de su visita favor acudir con:"
        />
        <ul class="font-roboto list-disc ml-4">
          <li>Cédula de identidad.</li>
          <li>Poder notarial, si el trámite es realizado por un apoderado.</li>
          <li>
            Documento que compruebe trabajos o imposiciones de alguna Ex cajao
            Ex S.S.S.
          </li>
          <li>
            En caso de imponentes del ex servicio seguro social, libreta de
            imposiciones.
          </li>
        </ul>
      </div>
      <div>
        <DsImages
          class="inline-block"
          size="large"
          src="/images/logo-sucursal-virtual.png"
        />
        <DsTitle
          class="inline-block"
          letter="robotoSlab"
          margin-left="4"
          text="Instituto de Previsión Social"
          type="h3"
        />
      </div>
      <hr class="my-3" />
      <DsButton :text="textButton" />
    </section>
  </div>
</template>

<style scoped></style>
