<script lang="ts" setup>
const days = Array.from({ length: 31 }, (_, index) => String(index + 1));
const startYear = 1900;
const endYear = 2024;
const years = Array.from({ length: endYear - startYear + 1 }, (_, index) =>
  String(startYear + index),
);
defineProps({
  isHideLabel: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  labelText: {
    type: String,
    default: "Fecha",
  },
});
const selectedDay = ref(null);
const selectedMonth = ref(null);
const selectedYear = ref(null);
const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

function getCompleteDate() {
  if (selectedDay.value && selectedMonth.value && selectedYear.value) {
    return `${selectedYear.value}-${selectedMonth.value}-${selectedDay.value}`;
  }
  return null;
}

watchEffect(() => {
  const completeDate = getCompleteDate();
  if (completeDate) {
    emit("getDate", completeDate);
  }
});
const emit = defineEmits(["getDate"]);
</script>

<template>
  <div>
    <span v-if="!isHideLabel" class="mb-2">{{ labelText }}</span>
    <div class="grid grid-cols-3 gap-2">
      <div class="w-full">
        <label class="mb-2" for="selectDay">Día</label>
        <select
          id="selectDay"
          v-model="selectedDay"
          :disabled="disabled"
          aria-label="Día"
          class="w-full hover:border-dark-500 font-roboto border p-2 block mb-2 rounded"
          @change="getCompleteDate"
        >
          <option disabled selected value="">Selecciona día</option>
          <option v-for="day in days" :key="day" :value="day">{{ day }}</option>
        </select>
      </div>
      <div class="w-full">
        <label class="mb-2" for="selectMonth">Mes</label>
        <select
          id="selectMonth"
          v-model="selectedMonth"
          :disabled="disabled"
          aria-label="Mes"
          class="w-full hover:border-dark-500 font-roboto border p-2 block mb-2 rounded"
          @change="getCompleteDate"
        >
          <option disabled selected value="">Selecciona mes</option>
          <option v-for="month in months" :key="month" :value="month">
            {{ month }}
          </option>
        </select>
      </div>
      <div class="w-full">
        <label class="mb-2" for="selectYear">Año</label>
        <select
          id="selectYear"
          v-model="selectedYear"
          :disabled="disabled"
          aria-label="Año"
          class="w-full hover:border-dark-500 font-roboto border p-2 block mb-2 rounded"
          @change="getCompleteDate"
        >
          <option disabled selected value="">Selecciona año</option>
          <option v-for="year in years" :key="year" :value="year">
            {{ year }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>
