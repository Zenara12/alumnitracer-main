<template>
    <v-layout ref="app">
      <v-main>
        <v-container>
          <v-row class="">
            <v-col 
            cols="auto">
              <v-sheet
              
              class="pa-2 ma-2">
                <h1>Announcements</h1>
                <AlumniAnnouncement
                :announcements="announcements"
                :displayButtons="displayButtons"
                />
              </v-sheet>

              <v-row no-gutters class="">
                <v-col
                  cols="6"
                >
                  <v-sheet class="pa-2 ma-2">
                    <h1>Jobs Offer</h1>
                    <Alumnijoboffer 
                      :joboffers="joboffers"
                      :displayButtons="displayButtons"
                      />
                  </v-sheet>
                </v-col>
                <v-spacer></v-spacer>
                <v-col
                  cols="6"
                >
                  <v-sheet class="pa-2 ma-2">
                    <h1>Forum</h1>
                    <AlumniForum
                    :forums="forums"
                    :displayButtons="displayButtons"
                    />
                  </v-sheet>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-main>

      
    </v-layout>
  </template>


<script lang="ts" setup>

import AlumniAnnouncement from '@/layouts/alumni/announcementlayout.vue'
import Alumnijoboffer from '@/layouts/alumni/jobofferlayout.vue'
import AlumniForum from '@/layouts/alumni/forumlayout.vue'
import {ref} from 'vue'

const announcements = ref([])
const forums = ref([])
const joboffers = ref([])
const displayButtons = ref(false)

const fetchAnnouncements= async () => {
    const res = await fetch('api/announcements/')

    const data = await res.json()
    announcements.value = data

    return data
}

const fetchJoboffers= async () => {
    const res = await fetch('api/joboffers/')

    const data = await res.json()
    joboffers.value = data
    return data
}


const fetchForums= async () => {
    const res = await fetch('api/forum/')

    const data = await res.json()
    forums.value = data
    return data
}

fetchForums()
fetchJoboffers()
fetchAnnouncements()

</script>