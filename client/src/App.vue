<script setup lang="ts">
import PatientTable from './components/PatientTable.vue'
import axios from 'axios'

const createNewRecord = () => {
  console.log('Creating new record...');
  (async () => {
    try {
      const randomSystole = Math.floor(Math.random() * (140 - 90 + 1)) + 90;
      const randomDiastole = Math.floor(Math.random() * (90 - 60 + 1)) + 60;
      const randomPulseRate = Math.floor(Math.random() * (100 - 60 + 1)) + 60;
      const randomBreathingRate = Math.floor(Math.random() * (20 - 12 + 1)) + 12;
      const randomTemperature = (Math.random() * (38.5 - 36.0) + 36.0).toFixed(1);
  
      const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/ttv`, {
          name: 'New Patient',
          sistole: randomSystole,
          diastole: randomDiastole,
          pulseRate: randomPulseRate,
          breathingRate: randomBreathingRate,
          temperature: randomTemperature,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log('New record created:', response.data);
      location.reload();
    } catch (error) {
      console.error('Error creating new record:', error);
    }
  })()
}

</script>

<template>
  <div class="p-12 flex flex-col w-full gap-4">
    <div class="flex justify-end w-full">
      <div @click="createNewRecord" class="p-2 cursor-pointer hover:bg-opacity-65 bg-green-700 px-6 font-semibold rounded-md text-white">
        Create random new record
      </div>
    </div>
    <PatientTable />
  </div>
</template>