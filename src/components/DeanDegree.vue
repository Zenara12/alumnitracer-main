<template>
    <DeanDegree
    :Degrees="Degrees"/>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import DeanDegree from '@/layouts/dean/deandegreelayout.vue'

const Degrees = ref([]);

const fetchDegrees= async () => {
    const res = await fetch('api/degree/')

    const data = await res.json()
    Degrees.value = data
    //console.log(Degrees)
    return data
}
fetchDegrees()
</script>
  