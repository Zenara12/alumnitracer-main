<template>
    
        <v-card>
            <v-toolbar
            flat
            color="Green-grey"
            dark
            >
            <v-toolbar-title>{{ currentmodal }}</v-toolbar-title>
            </v-toolbar>
        <v-card-text>
          <v-container>
            <v-row>
                <v-text-field
                  v-model="Currenttitle"
                  variant="filled"
                  label="Title"
                  required
                ></v-text-field>
                <v-container>
                    <v-textarea
                    v-model="Currentcontent"
                    variant="filled"
                    label="Content"
                    required
                    ></v-textarea>
                </v-container>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="$emit('closeDialog')"
          >
            Close
          </v-btn>
          <v-btn
          v-if="prop.currentmodalevent == true"
            color="blue-darken-1"
            variant="text"
            @click="Pushannouncement"
          >
          Post
          </v-btn>
          <v-btn
            v-else
            color="blue-darken-1"
            variant="text"
            @click="UpdateAnnouncement"
          >
          Update
          </v-btn>
        </v-card-actions>
      </v-card>
      
  </template>

<script lang="ts" setup>
import {ref} from 'vue'
    
    const prop = defineProps(['currentmodal','currentmodalevent','updateTitle','updateName','updateContent','updateId'])
    const emit = defineEmits(['SaveAnnouncement','closeDialog','UpdateAnnouncement'])
 
    const Currenttitle = ref(prop.updateTitle)
    const Currentcontent = ref(prop.updateContent)
         
    const Pushannouncement = () => {
        
        const AnnouncementData = {
            title:Currenttitle.value,
            name:'Noli Pernes',
            content:Currentcontent.value
        }

        emit('SaveAnnouncement',AnnouncementData)
        emit('closeDialog')
    }
    const UpdateAnnouncement = () =>{
      const AnnouncementData = {
            id:prop.updateId,
            title:Currenttitle.value,
            name:prop.updateName,
            content:Currentcontent.value
        }
      emit('UpdateAnnouncement',AnnouncementData)
      emit('closeDialog')
    }

    
</script>