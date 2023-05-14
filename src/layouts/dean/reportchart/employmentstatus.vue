<template>
    <Bar
      id="employmentstatus"
      :options="chartOptions"
      :data="chartData"
    />

  </template>

<script setup lang="ts">
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData =  {
        labels:[ 'Employed', 'Unemployed'],
        datasets:[{
            label:'',
            backgroundColor: ['blue','red'],
            borderColor:'',
            data:[5,1]
        }]
        };

const chartOptions = {
        responsive: true
      };



</script>
  