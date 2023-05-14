<template>


<v-card 
    theme="" 
    color="#BDBDBD"
    class="margin"
    >
    <v-img
    class="align-end text-white"
    height="200"
    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    cover
    >
    <v-avatar :color="(gender === 'Male') ?'info' : 'error'" size="80">
    <v-icon icon="mdi-account-circle" size="80"></v-icon>
    </v-avatar>
    <v-card-title>{{ firstname+ ' '+lastname }}</v-card-title>
    </v-img>
    <v-card-title >
        Basic info
        <v-btn
        icon="mdi-pencil-box"
        flat
        variant="plain"
        rounded="0"
        density="compact"
        :ripple="false"
        @click="dialog = true"
        ></v-btn>        
    </v-card-title>
    
    <v-card-text>
        <div>
        <v-icon icon="mdi-cake" size="20"></v-icon>
        {{ dateofbirth }}
        </div>
        <div>
        <v-icon :icon="(gender === 'Male')?'mdi-gender-male':'mdi-gender-female'" size="20"></v-icon>
        {{ gender }}
        </div>
        <div>
        <v-icon icon="mdi-map-marker" size="20"></v-icon>
        {{ address }}</div>
    </v-card-text>
</v-card>

<!-- modal dialog -->

<div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
      persistent
    >
      <v-card>
        <template v-slot:prepend>
            <div>
                Basic Info
            </div>
        </template>
        <template v-slot:append>
            <v-btn
                size="small"
                rounded="xl"
                color="error"
                @click="dialog = false"
                icon="$close"
            ></v-btn>
        </template>
            
        <v-card-text>
            <v-form fast-fail @submit.prevent>
                <v-text-field
                    v-model="firstname"
                    label="First name"
                    :rules="firstnamerules"
                ></v-text-field>

                <v-text-field
                    v-model="lastname"
                    label="Last name"
                    :rules="lastnamerules"
                ></v-text-field>

                <!-- <v-select
                    v-model="gender"
                    :item="genderitems"
                    label="Gender"
                    required
                >
                </v-select> -->

                <v-radio-group
                    v-model="gender"
                    inline
                >
                <template v-slot:label>
                    <div><strong>Gender</strong></div>
                </template>
                    <v-radio label="Male" value="Male"></v-radio>
                    <v-radio label="Female" value="Female"></v-radio>
                </v-radio-group>

                <div>
                    <v-text-field
                        label="Birthday"
                        type="date"
                        v-model="dateofbirth"
                        ></v-text-field>
                </div>

                <v-text-field
                    v-model="address"
                    label="Address"
                    :rules="addressrules"
                ></v-text-field>

                <v-btn 
                    color="primary"
                    type="submit" 
                    block class="mt-2"
                >Save</v-btn>
            </v-form>
        </v-card-text>
        <v-card-actions>
          
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>


</template>

<script setup lang="ts">
import {ref,onMounted} from 'vue'
import { useUserStore }  from '@/store/user'
import {useAlumniStore} from '@/store/alumni'

const userStore = useUserStore()
const alumniStore = useAlumniStore()

const dialog = ref(false)

const firstname = ref('')
const lastname = ref('')
const gender = ref('')
const dateofbirth = ref()
const address = ref('')

const firstnamerules = [
        (value: string | any[]) => {
            if (value?.length > 1) return true

            return 'First name must be at least 2 characters.'
        },
    ]

const lastnamerules = [
        (value: string | any[]) => {
          if (value?.length > 1) return true

          return 'First name must be at least 2 characters.'
        },
    ]

const addressrules = [
        (value: string | any[]) => {
          if (value?.length > 0) return true

          return 'Please Fill this field'
        },
    ]



onMounted(async ()=>{

    const basicinfo = alumniStore.getThis_AlumniData(userStore.user.user_ID)
    firstname.value = userStore.user.first_name
    lastname.value = userStore.user.last_name

    basicinfo.then((values:any)=>{
        address.value = values[0]['address']
        gender.value = values[0]['gender']
        dateofbirth.value = values[0]['date_of_birth']
    });
    
})

</script>