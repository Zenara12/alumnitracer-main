<template>
  <v-sheet rounded color="#E0E0E0" max-width="500"
  class="d-flex align-center justify-center flex-wrap text-center mx-auto"
  >
    <form @submit.prevent="submit" class="sign">
      <h1>Sign-in</h1>
      <v-text-field
        v-model="username.value.value"
        :counter="10"
        :error-messages="username.errorMessage.value"
        label="Username/Email"
      ></v-text-field>

      <v-text-field
        v-model="password.value.value"
        :counter="8"
        :error-messages="password.errorMessage.value"
        label="Password"
        type="password"
      ></v-text-field>

      <v-btn
        class="me-4"
        type="submit"
      >
        Sign-in
      </v-btn>

      <v-btn to="/signup">
        Sign-up
      </v-btn>
    </form>
  </v-sheet>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'
import { supabase } from '@/store/supabase.js'
import { useUserStore }  from '@/store/user'
import { useAlumniStore }  from '@/store/alumni'
import { useDeanStore }  from '@/store/dean'
//import { userDeanStore }  from '@/store/dean'
import router from '@/router'

const userStore =useUserStore()
const alumniStore = useAlumniStore()
const deanStore = useDeanStore()

const { handleSubmit} = useForm({
      validationSchema: {
        username (value: string | any[]) {
          if (value?.length > 0) return true

          return 'Please Enter Username'
        },
        password (value: string | any[]) {
          if (value?.length > 0 /*&& /[0-9-]+/.test(value)*/) return true

          return 'Please enter Password'
        },
      },
    })
    let username = useField('username')
    let password = useField('password')

    const submit = handleSubmit(async () => {

        const Username = username.value
        const Password = password.value

        const login = userStore.userLogin(Username,Password)
        
    })
    //console.log(sessionStorage)
</script>

<style scope>
.sign{
  margin: 20px;
  justify-content: center;
  width: 100%;
  background-color: #BDBDBD;
  padding: 10px;
}
</style>