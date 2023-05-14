<template>
    <v-navigation-drawer
      color="grey-darken-2"
      location="left"
      permanent
      :rail="rail"
      v-model="drawer"
      v-if="userStore.user.user_ID !== 0"
    >
        <template v-slot:prepend>
          <v-list-item
            v-if="userStore.user.user_ID !== 0"
            lines="two"
            @click="profile"
            prepend-avatar="https://randomuser.me/api/portraits/men/81.jpg"
            :title="userStore.user.first_name+' '+userStore.user.last_name"
            subtitle="Profile"
          >
          <template v-slot:append>
            <v-btn
              variant="text"
              color="black"
              icon="mdi-chevron-left-circle-outline"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>
        </template>
        <v-divider></v-divider>
  
        <v-list-item
          v-if="userStore.user.status"
          block
          variant="plain"
          to="/signin"
          prepend-icon="mdi-login"
        >
            Sign in
        </v-list-item>

        <v-list-item
          v-else
          block
          variant="plain"
          prepend-icon="mdi-logout"
          @click="logout"
        >
            Sign out
        </v-list-item>
        <v-divider></v-divider>
        <v-list density="compact" nav v-if="userStore.user.role === 'dean'">

            <v-list-group
            value="Dean Menu"
            prepend-icon="mdi-menu"
            >
              
              <template v-slot:activator="{ props }">
                <v-list-item
                  v-bind="props"
                  title="Dean Menu"
                ></v-list-item>
              </template>

              <v-list-item
                v-for="([title,route,icon]) in DeanMenu"
                :key="title"
                :title="title"
                :value="title"
                :prepend-icon="icon"
                :to="route"
              ></v-list-item>
            </v-list-group>
 
        </v-list>
      </v-navigation-drawer>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import { useUserStore }  from '@/store/user'
//import { useAlumniStore }  from '@/store/alumni'
import router from '@/router'

const userStore = useUserStore()
const rail=ref(false)
const drawer=ref(true)
//const alumniStore = useAlumniStore()

const profile = () =>{
  if(userStore.user.role === 'alumni'){router.push('/alumniprofile')}
}

const logout = () =>{
  userStore.userLogout()
}
//console.log(localStorage)
const DeanMenu = [
  ['Dashboard','/deandashboard','mdi-view-dashboard'],
  ['Users','/deanalumniusers','mdi-account-group'],
  ['Degree','/deandegree','mdi-book'],
  ['Reports','/deanreports','mdi-chart-box']]

</script>