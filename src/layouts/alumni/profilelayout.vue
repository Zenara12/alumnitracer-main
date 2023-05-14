<template>
    
    <v-layout ref="app">
      <v-main>
        <v-sheet
        class="align-center justify-center text-red mx-auto margin"
        elevation="4"
        rounded
        width="100%"
        >
          
        <BasicInfo
        />
          

          <v-card
          theme="" 
          color="#BDBDBD"
          class="margin"
          >
            <v-card-title >
              Contact info
              <v-btn
                icon="mdi-pencil-box"
                flat
                variant="plain"
                rounded="0"
                density="compact"
                :ripple="false"
              ></v-btn> 
            </v-card-title>
            
            <v-card-text>
              <div>
                <v-icon icon="mdi-email" size="20"></v-icon>
                {{ email }}</div>
              <div>
                <v-icon icon="mdi-phone" size="20"></v-icon>
                +63 {{ phone }}</div>  
            </v-card-text>
          </v-card>

          <v-card 
          theme="" 
          color="#BDBDBD"
          class="margin"
          >
            <v-card-title>
              Educational Attainment
            </v-card-title>
              <v-card
                width=""
                :subtitle="'AY:'+graduation_date"
                prepend-icon="mdi-book-education"
                color="#FFFFFF00"
              >
                <template v-slot:title>
                  {{ degreeID }}
                  <v-btn
                    icon="mdi-pencil-box"
                    flat
                    variant="plain"
                    rounded="0"
                    density="compact"
                    size="20"
                    location="right"
                    :ripple="false"
                  ></v-btn>
                </template>
              </v-card>
            
          </v-card>

          <v-card
            width=""
            title="Employment Status"
            prepend-icon="mdi-account-hard-hat"
            color="#BDBDBD"
          >
          <template v-slot:subtitle>
            {{ employmentstatus }}
              <v-btn
                icon="mdi-pencil-box"
                flat
                variant="plain"
                rounded="0"
                density="compact"
                :ripple="false"
              ></v-btn>
          </template>
              
        </v-card>

        
          <v-card 
          theme="" 
          color="#BDBDBD"
          subtitle=" "
          class="margin"
          >
            <template v-slot:title>
              Work History
              <v-btn
                icon="mdi-note-plus"
                color="#0D47A1"
                :ripple="false"
                variant="plain"
              ></v-btn> 
            </template>

            <v-card
              theme="" 
              color="#BDBDBD"
              class="margin"
            >
              <template v-slot:title>
                Job title
                  <v-btn
                    icon="mdi-pencil-box"
                    flat
                    variant="plain"
                    rounded="0"
                    density="compact"
                    :ripple="false"
                  ></v-btn>
              </template>
              <template v-slot:subtitle>
                <div>San Lorenzo Ruiz College of Ormoc</div>
                <div>
                  <v-icon icon="mdi-calendar"></v-icon>
                  September 2023 - Current
                </div>
                <div>
                  <v-icon icon="mdi-map-marker"></v-icon>
                  Address
                </div>
              </template>
            </v-card>
            
          </v-card>

        </v-sheet>
      </v-main>
    </v-layout>
  </template>

<script setup lang="ts">
import { onMounted,ref } from 'vue';
import { useUserStore }  from '@/store/user'
import { useAlumniStore }  from '@/store/alumni'
import BasicInfo from '@/layouts/alumni/profile/profilebasicinfo.vue'
import router from '@/router'

const userStore = useUserStore()
const alumniStore = useAlumniStore()

const userID = ref()
const alumni_id = ref()

const nationality = ref()
const email = ref()
const phone = ref()
const degreeID = ref()
const graduation_date= ref()
const employmentstatus = ref()

// onMounted(async ()=>{

//   userID.value = userStore.user.user_ID
//   alumni_id.value = alumniStore.alumni.alumni_id
//   nationality.value = alumniStore.alumni.nationality
//   email.value = alumniStore.alumni.email
//   phone.value = alumniStore.alumni.phone
//   degreeID.value = alumniStore.alumni.degreeID.toLocaleString()
//   graduation_date.value= alumniStore.alumni.graduation_date
//   employmentstatus.value = alumniStore.alumni.employmentstatus

// //console.log(dateofbirth.value.toString())
    
// });


</script>

<style scoped>

.margin{
  margin-top: 10px;
}
div{
  margin: 5px;
}
</style>