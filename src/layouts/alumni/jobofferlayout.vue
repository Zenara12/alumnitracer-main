<template>
      
  <v-btn
    v-if="displayButtons"
    color="primary"
    @click="toggleAddDialog"
  >
  <v-icon icon="mdi-plus"></v-icon>
    Add Job
  </v-btn>

  <div class="text-center">
    <v-dialog
      v-model="showDialog"
      width="auto"
      >
      <JobofferOverlay
      :currentmodal="CurrentModal"
      :currentmodalevent="CurrentModalEvent"
      :updateTitle="updateTitle"
      :updateName="updateName"
      :updateContent="updateContent"
      :updateId="updateId"
      @SaveJoboffer="pushJoboffer"
      @closeDialog="closeDialog"
      @update-joboffer = "UpdateJoboffer"/>
    </v-dialog>
  </div>

  <v-card
    v-for="(joboffer,index) in joboffers"
    :key="joboffer"
    border
    class="mb-2"
    density="compact"
    prepend-avatar="https://randomuser.me/api/portraits/women/10.jpg"
    :subtitle="`${joboffer.name}`"
    :title="`${joboffer.title}`"
    variant="text"
  >
    <!-- <v-img src="https://picsum.photos/512/128?image=660" aspect-ratio="4/3" width="200" cover></v-img> -->

    <v-card-text>
      {{ joboffer.content }}
    </v-card-text>

    <template v-slot:actions>
      <!-- <v-btn color="primary" variant="text">View More</v-btn> -->
      <v-btn v-if="displayButtons" @click="toggleUpdateDialog(joboffer.id,joboffer.name,joboffer.title,joboffer.content)"><v-icon icon="mdi-pencil"></v-icon></v-btn>
      <v-btn v-if="displayButtons" @click="$emit('delete-joboffer',joboffer.id,index)"><v-icon icon="mdi-delete"></v-icon></v-btn>
    </template>
  </v-card>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import JobofferOverlay from '@/layouts/alumni/jobofferoverlay/jobofferoverlay.vue'


const showDialog = ref(false)
const updateTitle = ref('')
const updateName = ref('')
const updateContent = ref('')
const updateId =ref(0)
const CurrentModal = ref('Submit Post')
const CurrentModalEvent = ref(true)

const prop = defineProps(['joboffers','displayButtons'])
const emit = defineEmits(['delete-joboffer','update-joboffer','save-joboffer'])

const UpdateJoboffer = (jobofferData:any) =>{
  emit('update-joboffer',jobofferData)
}

const toggleAddDialog = () =>{
  showDialog.value = true
  CurrentModal.value = "Submit Post"
  CurrentModalEvent.value =true
}
const toggleUpdateDialog = (id:number,name:string,title:string,content:string) =>{
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

const pushJoboffer = (JobofferData: any) =>{
  emit('save-joboffer',JobofferData)
}

</script>