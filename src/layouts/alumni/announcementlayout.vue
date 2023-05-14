<template>
      
    <v-btn
      v-if="displayButtons"
      color="primary"
      @click="toggleAddDialog"
    >
    <v-icon icon="mdi-plus"></v-icon>
      Add Announcement
    </v-btn>

    <div class="text-center">
      <v-dialog
        v-model="showDialog"
        width="auto"
        >
        <AnnouncementOverlay
        :currentmodal="CurrentModal"
        :currentmodalevent="CurrentModalEvent"
        :updateTitle="updateTitle"
        :updateName="updateName"
        :updateContent="updateContent"
        :updateId="updateId"
        @SaveAnnouncement="pushAnnouncement"
        @closeDialog="closeDialog"
        @UpdateAnnouncement = "UpdateAnnouncement"/>
      </v-dialog>
    </div>

    <v-card
      v-for="(announcement,index) in announcements"
      :key="announcement"
      border
      class="mb-2"
      density="compact"
      prepend-avatar="https://randomuser.me/api/portraits/men/10.jpg"
      :subtitle="`${announcement.name}`"
      :title="`${announcement.title}`"
      variant="text"
    >
      <!-- <v-img src="https://picsum.photos/512/128?image=660" aspect-ratio="4/3" width="200" cover></v-img> -->

      <v-card-text>
        {{ announcement.content }}
      </v-card-text>

      <template v-slot:actions>
        <!-- <v-btn color="primary" variant="text">View More</v-btn> -->
        <v-btn v-if="displayButtons" @click="toggleUpdateDialog(announcement.name,announcement.title,announcement.content,announcement.id)"><v-icon icon="mdi-pencil"></v-icon></v-btn>
        <v-btn v-if="displayButtons" @click="$emit('delete-announcement',announcement.id,index)"><v-icon icon="mdi-delete"></v-icon></v-btn>
      </template>
    </v-card>
  </template>

<script setup lang="ts">
import {ref} from 'vue'
import AnnouncementOverlay from '@/layouts/alumni/announcementoverlay/announcementoverlay.vue'

const prop = defineProps(['announcements','displayButtons'])
const emit = defineEmits(['delete-announcement','update-announcement','save-announcement'])

const showDialog = ref(false)
const updateTitle = ref('')
const updateName = ref('')
const updateContent = ref('')
const updateId =ref(0)
const CurrentModal = ref('Submit Post')
const CurrentModalEvent = ref(true)

const UpdateAnnouncement = (AnnouncementData:any) =>{
  emit('update-announcement',AnnouncementData)
}

const toggleAddDialog = () =>{
  showDialog.value = true
  CurrentModal.value = "Submit Post"
  CurrentModalEvent.value =true
}
const toggleUpdateDialog = (name:string,title:string,content:string,id:number) =>{
  showDialog.value = true
  CurrentModal.value = "Update Post"
  updateTitle.value = title
  updateName.value = name
  updateContent.value = content
  updateId.value =id
  CurrentModalEvent.value =false
}

const closeDialog = () => {
  showDialog.value = false
  updateTitle.value=''
  updateName.value=''
  updateContent.value=''
  CurrentModalEvent.value = true
}

const pushAnnouncement = (announcementData: any) =>{
  emit('save-announcement',announcementData)
}

</script>