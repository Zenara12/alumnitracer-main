<template>
    <DeanAlumniUsers 
    :alumnilist = "alumnilist"
    :userslist = "userslist"
    />
</template>

<script lang="ts" setup>
import DeanAlumniUsers from '@/layouts/dean/deanalumniuserslayout.vue'
import { ref } from 'vue'

const alumnilist = ref([]);
const userslist = ref([]);

const fetchUsers= async () => {
    const res = await fetch('api/users/')

    const data = await res.json()
    userslist.value = data
    //console.log(userslist)
    return data
}
fetchUsers()

const fetchAlumni= async () => {
    const res = await fetch('api/alumni/')

    const data = await res.json()
    alumnilist.value = data
    //console.log(alumnilist)
    return data
}
fetchAlumni()
</script>
  