<script setup lang="ts">
import DsNuxtImage from "~/components/DesignSystem/Elements/basic/images/DsNuxtImage.vue";
</script>

<template>
  <div>
    <NuxtLink to="/request" class="text">Solicitud</NuxtLink>
    |
    <NuxtLink to="/query">Consulta</NuxtLink>
  </div>

  <br>
  <div class="bg-blue-400 p-10">
    <DsNuxtImage />
  </div>

</template>
