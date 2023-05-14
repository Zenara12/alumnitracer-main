<template>
    <v-layout ref="app">
      <v-main max-height="400px">
        <v-sheet
          class="pa-2 ma-2">
        <h1>Forums</h1>
        
        <AlumniForum
          :forums="forums"
          :displayButtons="displayButtons"
          @save-Forum="saveForum"
          @delete-Forum="deleteForum"
          @update-forum="updateForum"
          />
          </v-sheet>
    </v-main>
  </v-layout>
</template>

<script lang="ts" setup>
  import AlumniForum from '@/layouts/alumni/forumlayout.vue'
  import {ref} from 'vue'

const forums = ref([])
const displayButtons = ref(true)

const fetchForums= async () => {
    const res = await fetch('api/forum/')

    const data = await res.json()
    forums.value = data
    return data
}

fetchForums()

const saveForum = async (pushForum:any) =>{
    
    const res = await fetch('api/forum',{
      method:'POST',
      headers: {
         'Content-type':'application/json' 
      },
      body:JSON.stringify(pushForum)
    })

    const data = await res.json()

    
    forums.value.unshift(data)

}

const updateForum = async (ForumData:any) =>{

  const res = await fetch(`api/forum/${ForumData.id}`,{
      method:'PUT',
      headers: {
         'Content-type':'application/json' 
      },
      body:JSON.stringify(ForumData)
    })

    const data = await res.json()

    forums.value = forums.value.map(forum => forum.id !== ForumData.id ? forum : ForumData)
}

const deleteForum= async (ForumID: number,index:number) =>{

  if(confirm('Are you Sure?')){
    const res = await fetch(`api/forum/${ForumID}`,{
      method:'DELETE',
    })
    res.status === 200 ?  forums.value.splice(index,1):alert('Error')

  }
}






// const forums = ref([
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
  