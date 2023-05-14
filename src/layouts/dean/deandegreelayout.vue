<template>
    
    <v-layout ref="app">
      <v-main>
        <v-card height="">
          <h1>Degree Table</h1>
              <v-table height="300" fixed-header>
                  <thead>
                  <tr>
                      <th class="text-left">
                      {{ tabletitle1 }}
                      </th>
                      <th class="text-left">
                      {{ tabletitle2 }}
                      </th>
                      <th class="text-left">
                      {{ tabletitle3 }}
                      </th>

                  </tr>
                  </thead>
                  <tbody>
                  <tr
                      v-for="degree in prop.Degrees"
                      :key="degree">

                      <td>{{ degree.degree_id }}</td>
                      <td>{{ degree.degree_name }}</td>
                      <td>{{ degree.degree_major }}</td>

                  </tr>
                  </tbody>
              </v-table>
        </v-card>
      </v-main>
    </v-layout>
  </template>

<script setup lang="ts">
import {ref} from 'vue'


const tabletitle1 = ref('ID')
const tabletitle2 = ref('Degree Name')
const tabletitle3 = ref('Major')

const prop = defineProps(['Degrees'])
</script>