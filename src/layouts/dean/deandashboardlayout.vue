<template>
    
    <v-layout ref="app">
      <v-main align-center justify-center>
        <v-card max-height="" align-center justify-center>
        <v-alert
          icon="mdi-account-box"
          title="Users"
          text="Total: 4"
          type="info"
          variant="outlined"
        ></v-alert>
        <v-alert
          icon="mdi-calendar-alert-outline"
          title="Announcements"
          text="Total: 4"
          type="success"
          variant="outlined"
        ></v-alert>
        <v-alert
          icon="mdi-tooltip"
          title="Forum Topics"
          text="Total: 5"
          type="error"
          variant="outlined"
        ></v-alert>
        <v-alert
          icon="mdi-toolbox"
          title="Jobs Post"
          text="Total: 4"
          type="warning"
          variant="outlined"
        ></v-alert>
      </v-card>
      </v-main>
    </v-layout>
  </template>

<script setup lang="ts">

</script>