<template>
    
    <v-layout ref="app">
      <v-main>
        <v-card class="mx-auto"> 
          <h3>Alumni Employment Status</h3>
          <v-card max-width="500">
            
            <EmploymentStatus />
          </v-card>

          <v-divider :thickness="50" class="border-opacity-0"></v-divider>
          <h3>Alumni Employment Place</h3>
          <v-card max-width="500">
            
            <EmploymentPlace />
          </v-card>

          <h3>Alumni Skills Related</h3>
          <v-divider :thickness="50" class="border-opacity-0"></v-divider>
          <v-card max-width="500">
            <AlumniSkillsRelated />
          </v-card>
        </v-card>
      </v-main>
    </v-layout>
  </template>


<script setup lang="ts">

import EmploymentStatus from '@/layouts/dean/reportchart/employmentstatus.vue'
import EmploymentPlace from '@/layouts/dean/reportchart/employmentplace.vue'
import AlumniSkillsRelated from '@/layouts/dean/reportchart/alumniskillsrelated.vue'

</script>
