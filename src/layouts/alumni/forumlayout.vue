<template>
      
  <v-btn
    v-if="displayButtons"
    color="primary"
    @click="toggleAddDialog"
  >
  <v-icon icon="mdi-plus"></v-icon>
    Add Forum Topic
  </v-btn>

  <div class="text-center">
    <v-dialog
      v-model="showDialog"
      width="auto"
      >
      <ForumOverlay
      :currentmodal="CurrentModal"
      :currentmodalevent="CurrentModalEvent"
      :updateTitle="updateTitle"
      :updateName="updateName"
      :updateContent="updateContent"
      :updateId="updateId"
      @SaveForum="pushForum"
      @closeDialog="closeDialog"
      @UpdateForum = "UpdateForum"/>
    </v-dialog>
  </div>

  <v-card
    v-for="(forum,index) in forums"
    :key="forum"
    border
    class="mb-2"
    density="compact"
    prepend-avatar="https://randomuser.me/api/portraits/women/10.jpg"
    :subtitle="`${forum.name}`"
    :title="`${forum.title}`"
    variant="text"
  >
    <!-- <v-img src="https://picsum.photos/512/128?image=660" aspect-ratio="4/3" width="200" cover></v-img> -->

    <v-card-text>
      {{ forum.content }}
    </v-card-text>

    <template v-slot:actions>
      <!-- <v-btn color="primary" variant="text">View More</v-btn> -->
      <v-btn  v-if="displayButtons" @click="toggleUpdateDialog(forum.id,forum.name,forum.title,forum.content)"><v-icon icon="mdi-pencil"></v-icon></v-btn>
      <v-btn v-if="displayButtons" @click="$emit('delete-forum',forum.id,index)"><v-icon icon="mdi-delete"></v-icon></v-btn>
    </template>
  </v-card>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import ForumOverlay from '@/layouts/alumni/forumoverlay/forumoverlay.vue'


const showDialog = ref(false)
const updateTitle = ref('')
const updateName = ref('')
const updateContent = ref('')
const updateId =ref(0)
const CurrentModal = ref('Submit Post')
const CurrentModalEvent = ref(true)

const prop = defineProps(['forums','displayButtons'])
const emit = defineEmits(['delete-forum','update-forum','save-forum'])

const UpdateForum = (ForumData:any) =>{
  //console.log(ForumData)
  emit('update-forum',ForumData)
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

const pushForum = (forumData: any) =>{
  emit('save-forum',forumData)
}

</script>