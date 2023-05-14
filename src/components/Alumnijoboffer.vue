<template>
  <v-layout ref="app">
    <v-main max-height="400px">
      <v-sheet
      class="pa-2 ma-2">
      <h1>Job Offers</h1>

          <Alumnijoboffer 
          :joboffers="joboffers"
          :displayButtons="displayButtons"
          @save-joboffer="saveJoboffer"
          @delete-joboffer="deleteJoboffer" 
          @update-joboffer="updateJoboffer"/>

       </v-sheet>
    </v-main>
  </v-layout>
</template>
  
<script lang="ts" setup>
  import Alumnijoboffer from '@/layouts/alumni/jobofferlayout.vue'
  import {ref} from 'vue'

const joboffers = ref([])
const displayButtons = ref(true)

const fetchJoboffers= async () => {
    const res = await fetch('api/joboffers/')

    const data = await res.json()
    joboffers.value = data
    return data
}

fetchJoboffers()

const saveJoboffer = async (pushJoboffer: any) =>{
    const res = await fetch('api/joboffers',{
      method:'POST',
      headers: {
         'Content-type':'application/json' 
      },
      body:JSON.stringify(pushJoboffer)
    })

    const data = await res.json()
    joboffers.value.unshift(data)
}

const updateJoboffer = async (JobofferData:any) =>{

  const res = await fetch(`api/joboffers/${JobofferData.id}`,{
      method:'PUT',
      headers: {
         'Content-type':'application/json' 
      },
      body:JSON.stringify(JobofferData)
    })

  const data = await res.json()

  joboffers.value = joboffers.value.map(joboffer => joboffer.id !== JobofferData.id ? joboffer : JobofferData)
}

const deleteJoboffer= async (JobofferID:number,JobofferIndex: number) =>{
  if(confirm('Are you Sure?')){
    const res = await fetch(`api/joboffers/${JobofferID}`,{
      method:'DELETE',
    })
    joboffers.value.splice(JobofferIndex,1)
  }
  
}

// const joboffers = ref([
//   {
//     id: 1,
//     title: 'Faithful',
//     name:'Marc Vegas',
//     content:'Allah',
//   },
//   {
//     id: 4,
//     title: 'Vue JS',
//     name:'William Inclino',
//     content:'conts life = ref(life)',
//   },
//   {
//     id: 3,
//     title: 'Travel',
//     name:'Joshua Tayag',
//     content:'Up uup and Away',
//   },
//   {
//     id: 5,
//     title: 'Faithful',
//     name:'Marc Vegas',
//     content:'Lorem ipsum dolor sit amet consectetur, adipisicing elit.?',
//   },
//   {
//     id: 6,
//     title: 'blank',
//     name:'Unknown',
//     content:'blank',
//   },
//   {
//     id: 2,
//     title: 'Driving',
//     name:'Joseph Ken',
//     content:'We Driving Crazy',
//   },
// ])
</script>