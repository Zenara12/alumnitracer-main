<template>
    <Doughnut
      :options="chartOptions"
      :data="chartData"
    />

  </template>

<script setup lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

const chartData =  {
        labels:['VueJs', 'PHP', 'ReactJs', 'Java'],
        datasets:[{
            backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
            data: [40, 20, 80, 10]
        }]
        };

const chartOptions = {
        responsive: true
      };



</script>
  