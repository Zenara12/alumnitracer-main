<template>
    
    <v-layout ref="app">
      <!-- <v-app-bar color="grey-lighten-2" name="app-bar" class="justify-center">
        <div class="d-flex justify-center align-center w-100">

        </div>
      </v-app-bar> -->


      <v-main>
        <v-card width="">
          <v-tabs
            bg-color="deep-purple-darken-4"
            v-model="tab"
            center-active
          >
            <v-tab value="tab-1">Users</v-tab>
            <v-tab value="tab-2">Alumni</v-tab>
          </v-tabs>
          <v-window v-model="tab">
          <v-window-item
           value="tab-1"
          >
              <h1>User Table</h1>
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
                      v-for="userlist in prop.userslist"
                      :key="userlist">

                      <td>{{ userlist.username }}</td>
                      <td>{{ userlist.email }}</td>
                      <td>{{ userlist.role }}</td>

                  </tr>
                  </tbody>
              </v-table>
          </v-window-item>
          <v-window-item
          value="tab-2">
          <h1>Alumni Table</h1>
              <v-table height="300" fixed-header>
                  <thead>
                  <tr>
                      <th class="text-left">
                      {{ tabletitle4 }}
                      </th>
                      <th class="text-left">
                      {{ tabletitle5 }}
                      </th>
                      <th class="text-left">
                      {{ tabletitle6 }}
                      </th>
                      
                      <th>
                        Action
                      </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr
                      v-for="alumniuser in prop.alumnilist"
                      :key="alumniuser">

                      <td>{{ alumniuser.first_name }}</td>
                      <td>{{ alumniuser.last_name }}</td>
                      <td>{{ }}</td>
                      
                      <td>
                        <v-btn>Approve</v-btn>
                        <v-btn>Assign Officer Role</v-btn>
                      </td>
                  </tr>
                  </tbody>
              </v-table>
          </v-window-item>
        </v-window>
            
        </v-card>
      </v-main>
    </v-layout>
  </template>

<script setup lang="ts">
import {ref} from 'vue'

const tab = ref('tab-1')

const tabletitle1 = ref('Username')
const tabletitle2 = ref('E-mail')
const tabletitle3 = ref('Role')
const tabletitle4 = ref('Firstname')
const tabletitle5 = ref('Lastname')
const tabletitle6 = ref('Degree')
const prop = defineProps(['alumnilist','userslist'])

//console.log(prop.alumniusers)

</script>