<template>
  <v-layout ref="app">
      <v-main max-height="400px">
        <v-sheet
          class="pa-2 ma-2">
        <h1>Announcements</h1>
        
        <AlumniAnnouncement
          :announcements="announcements"
          :displayButtons="displayButtons"
          @save-announcement="saveAnnouncement"
          @delete-announcement="deleteAnnouncement"
          @update-announcement="updateAnnouncement"
          />
          </v-sheet>
    </v-main>
  </v-layout>
</template>
  
<script lang="ts" setup>
import AlumniAnnouncement from '@/layouts/alumni/announcementlayout.vue'
import {ref} from 'vue'

const announcements = ref([])
const displayButtons = ref(true)

const fetchAnnouncements= async () => {
    const res = await fetch('api/announcements/')

    const data = await res.json()
    announcements.value = data

    return data
}

fetchAnnouncements()

const saveAnnouncement = async (AnnouncementData:any) =>{

    const res = await fetch('api/announcements',{
      method:'POST',
      headers: {
         'Content-type':'application/json' 
      },
      body:JSON.stringify(AnnouncementData)
    })

    const data = await res.json()
    announcements.value.unshift(data)
}

const updateAnnouncement = async (AnnouncementData:any) =>{

    const res = await fetch(`api/announcements/${AnnouncementData.id}`,{
      method:'PUT',
      headers: {
         'Content-type':'application/json' 
      },
      body:JSON.stringify(AnnouncementData)
    })

    const data = await res.json()

    announcements.value = announcements.value.map(announcement => announcement.id !== AnnouncementData.id ? announcement : AnnouncementData)
}

const deleteAnnouncement= async (AnnouncementID:number,index: number) =>{
  
  if(confirm('Are you Sure?')){
    const res = await fetch(`api/announcements/${AnnouncementID}`,{
      method:'DELETE',
    })
    res.status === 200 ? announcements.value.splice(index,1):alert('Error')
  }
}

// const announcements = ref([
//   {
//     id: 1,
//     title: 'Do the dishes',
//     name:'Jack The Lumber',
//     content:'Lorem ipsum dolor sit amet consectetur, adipisicing elit.?',
//   },
//   {
//     id: 2,
//     title: 'Driving',
//     name:'Joseph Ken',
//     content:'We Driving Crazy',
//   },
//   {
//     id: 3,
//     title: 'Travel',
//     name:'Joshua Tayag',
//     content:'Up uup and Away',
//   },
//   {
//     id: 4,
//     title: 'Vue JS',
//     name:'William Inclino',
//     content:'conts life = ref(life)',
//   },
//   {
//     id: 5,
//     title: 'Faithful',
//     name:'Marc Vegas',
//     content:'Allah',
//   },
//   {
//     id: 6,
//     title: 'blank',
//     name:'Unknown',
//     content:'blank',
//   },
// ]) 

</script>
  