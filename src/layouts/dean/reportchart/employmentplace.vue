<template>
    
    <Pie
      id="employmentplace"
      :options="chartOptions"
      :data="chartData"
    />

  </template>

<script setup lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

const chartData =  {
        labels:[ 'Local', 'International'],
        datasets:[{
            backgroundColor: ['green','yellow'],
            data:[1,5]
        }]
        };

const chartOptions = {
        responsive: true,
        maintainAspectRatio: false
      };



</script>
  