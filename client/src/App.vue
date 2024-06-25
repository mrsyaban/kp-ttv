<script setup lang="ts">
import PatientTable from './components/PatientTable.vue'

</script>

<template>
  <div class="p-12 flex flex-col w-full gap-4">
    <div class="flex justify-end w-full">
      <div class="p-2 bg-green-700 px-6 font-semibold rounded-md text-white">
        Create new record
      </div>
    </div>
    <PatientTable />
  </div>
</template>