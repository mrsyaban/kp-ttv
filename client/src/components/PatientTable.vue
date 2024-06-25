<script setup lang="ts">
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { TTV } from '../types/ttv.td';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table'

const ttvDatas = ref<TTV[]>([]);

onMounted(async () => {
  try {
    console.log(import.meta.env.VITE_SERVER_URL)
    const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/ttv`);
    ttvDatas.value = response.data.data.map((item: any) => ({
        Id: item._id,
        Name: item.name,
        sistole: item.sistole,
        diastole: item.diastole,
        PulseRate: item.pulseRate,
        BreathingRate: item.breathingRate,
        Temperature: item.temperature,
    }));
  } catch (error) {
    console.error('Error fetching invoices:', error);
  }
});
</script>

<template>
  <Table>
    <TableCaption>TTV records.</TableCaption>
    <TableHeader class="bg-gray-300">
      <TableRow>
        <TableHead class="w-[100px]">
          No
        </TableHead>
        <TableHead>Patient Name</TableHead>
        <TableHead class="text-center">Blood Pressure</TableHead>
        <TableHead class="text-center">
          Pulse
        </TableHead>
        <TableHead class="text-center">
          Breathing Rate
        </TableHead>
        <TableHead class="text-center">
          Temperature
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="(data, index) in ttvDatas" :key="data.Id">
        <TableCell class="font-medium">
          {{ index + 1 }}
        </TableCell>
        <TableCell>{{ data.Name }}</TableCell>
        <TableCell class="text-center">{{ `${data.sistole}/${data.diastole}` }}</TableCell>
        <TableCell class="text-center">
          {{ data.PulseRate }}
        </TableCell>
        <TableCell class="text-center">
          {{ data.BreathingRate }}
        </TableCell>
        <TableCell class="text-center">
          {{ data.Temperature }}
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>