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
    const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/ttv`);
    ttvDatas.value = response.data; // Assuming the API returns an array of invoices
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
        <TableHead>Blood Pressure</TableHead>
        <TableHead class="text-right">
          Pulse
        </TableHead>
        <TableHead class="text-right">
          Breathing Rate
        </TableHead>
        <TableHead class="text-right">
          Temperature
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="data in ttvDatas" :key="data.Id">
        <TableCell class="font-medium">
          {{ data.Id }}
        </TableCell>
        <TableCell>{{ data.Name }}</TableCell>
        <TableCell>{{ data.BloodPressure }}</TableCell>
        <TableCell class="text-right">
          {{ data.PulseRate }}
        </TableCell>
        <TableCell class="text-right">
          {{ data.BreathingRate }}
        </TableCell>
        <TableCell class="text-right">
          {{ data.Temperature }}
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>