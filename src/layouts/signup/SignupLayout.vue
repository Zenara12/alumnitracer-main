<template>
  
    <form @submit.prevent="submit" class="sign">
      <h1>Sign-up</h1>
      <v-text-field
        v-model="firstname.value.value"
        :error-messages="firstname.errorMessage.value"
        label="Firstname"
      ></v-text-field>

      <v-text-field
        v-model="lastname.value.value"
        :error-messages="lastname.errorMessage.value"
        label="Lastname"
      ></v-text-field>

      <v-select
        v-model="gender.value.value"
        :items="genderitems"
        :error-messages="gender.errorMessage.value"
        label="Gender"
      ></v-select>

      <div>
        <input 
          v-model="birthDATE.value.value"
          required
          type="date"
          max="2003-12-31" />Date of Birth
      </div><br>

      <v-text-field
        v-model="nationality.value.value"
        :error-messages="nationality.errorMessage.value"
        
        label="Nationality"
      ></v-text-field>

      <v-text-field
        v-model="address.value.value"
        :error-messages="address.errorMessage.value"
        
        label="Address"
      ></v-text-field>

      <v-text-field
        v-model="email.value.value"
        :error-messages="email.errorMessage.value"
        label="Email"
      ></v-text-field>

      <v-text-field
        v-model="phone.value.value"
        :counter="11"
        :error-messages="phone.errorMessage.value"
        label="Phone Number"
      ></v-text-field>

      <v-select
        v-model="degreeobtained.value.value"
        :items="degreeobtaineditems"
        :error-messages="degreeobtained.errorMessage.value"
        item-title="degree_NAME"
        item-value="degree_ID"
        label="Select Degree Obtained"
      ></v-select>

      <div>
        <input 
          v-model="graduationDATE.value.value"
          required
          type="date"/>Graduation Date
      </div><br>

      <v-select
        v-model="employmentstatus.value.value"
        :items="employmentstatusitems"
        :error-messages="employmentstatus.errorMessage.value"
        label="Select Employment Status"
      ></v-select>
      
      <v-text-field
        v-model="password.value.value"
        :counter="8"
        :error-messages="password.errorMessage.value"
        label="Password"
        type="password"
      ></v-text-field>

      <v-text-field
        v-model="confirmpassword.value.value"
        :counter="8"
        :error-messages="confirmpassword.errorMessage.value"
        label="Confirm Password"
        type="password"
      ></v-text-field>
  
      <v-btn
        class="me-4"
        type="submit"
      >
        Sign-up
      </v-btn>
  
      <v-btn to="/">
        Sign-in
      </v-btn>
    </form>
  </template>

<script setup lang="ts">
import { ref,onMounted } from 'vue'
import { useField, useForm } from 'vee-validate'
import { supabase } from '@/store/supabase.js'
import { createCipheriv } from 'crypto'
import router from '@/router'
//import * as yup from 'yup';
let n1 = ref('')
let n2 = ref('')

const { handleSubmit } = useForm({
        
        validationSchema: {
          firstname (value: string | any[]) {
            //return true

            if (value?.length >= 1) return true
  
            return 'Please fill up this field'
          },
          lastname (value: string | any[]) {
            //return true

            if (value?.length >= 1) return true
  
            return 'Please fill up this field'
          },
          gender (value: any) {
            if (value) return true

            return 'Select Gender.'
          },
          employmentstatus (value: any) {
            if (value) return true

            return 'Select Employment Status.'
          },
          nationality (value: string | any[]) {
            //return true

            if (value?.length >= 1) return true
  
            return 'Please fill up this field'
          },
          degreeobtained (value: any) {
            if (value) return true

            return 'Select Degree Obtained'
          },
          address (value: string | any[]) {
            //return true

            if (value?.length >= 1) return true
  
            return 'Please fill up this field'
          },
          phone (value: string | any[]) {
            //return true
            if (value?.length <= 11 && /^[0][1-9]\d{9}$|^[1-9]\d{9}$/.test(value)) return true
  
            return 'Please Enter A valid Phone Number'
          },
          password (value: string | any[]) {
            //return true

            if (value?.length > 4 && /[0-9-]+/.test(value)){ 
              n1.value =value
              return true
            }
            else{
              return 'Password needs to be at least 5 characters AND numbers.'
            }
          },
          confirmpassword (value: string | any[]) {
            //return true

              n2.value = value
            if (n2.value === n1.value){ 
              //console.log('true')
              return true
            }
            else{
              return 'Password Does Not Match'
            }
          },
          email (value: string) {
            //return true
            if (/^[a-zA-Z0-9.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true
  
            return 'Must be a valid e-mail.'
          },
          birthDATE () {
            return true
  
          },
          graduationDATE () {
            return true
  
          },
        },
      })


const firstname = useField('firstname')
const lastname = useField('lastname')
const gender = useField('gender')
const employmentstatus = useField('employmentstatus')
const nationality = useField('nationality')
const phone = useField('phone')
const address = useField('address')
const password = useField('password')
const confirmpassword = useField('confirmpassword')
const email = useField('email')
const birthDATE = useField('birthDATE')
const graduationDATE = useField('graduationDATE')
const degreeobtained =useField('degreeobtained')

const genderitems = ref([
  'Male',
  'Female',
])

const employmentstatusitems = ref([
  'Employed',
  'Unemployed',
  'Self Employed'
])

const degreeobtaineditems = ref([{ degree_ID:0, degree_NAME: '' }])


const submit = handleSubmit(async values => {
        const degreeid = degreeobtained.value
        const formData = values

        try{
          const Data_IDS = ref<Array<any>>([{}])
          const { data, error,status } = await supabase
                .from('Degree')
                .select(`degree_id,
                Major(major_id,college_id,
                  College(college_id,dean_id))`)
                .eq('degree_id',degreeid.value)

                Data_IDS.value=data
            //console.log(formData.graduationDATE,)
          if(Data_IDS?.value !== null){
            const { data, error } = await supabase
            .from('Alumni')
            .insert([
              {
                first_name: formData.firstname,
                last_name: formData.lastname,
                gender: formData.gender,
                date_of_birth: formData.birthDATE,
                nationality: formData.nationality,
                address: formData.address,
                email: formData.email,
                phone: formData.phone,
                degree_obtained_id: formData.degreeobtained,
                graduation_date: formData.graduationDATE,
                employment_status: formData.employmentstatus,
                major_id:Data_IDS.value[0].Major.major_id,
                dean_id:Data_IDS.value[0].Major.College.dean_id,
                college_id:Data_IDS.value[0].Major.College.college_id,
              },
            ]).select()

            //console.log(data)

            if(data?.length >0 ){
              
              const { data, error,status } = await supabase
                .from('Users')
                .insert([
                  { 
                    Username: '',
                    Password: formData.password,
                    Email:formData.email,
                    Role: 'alumni',
                    Remarks:false
                  },
                ])
                //console.log(data)
                
                if(status == 201){
                  alert('You Have Sign-Up Please Wait for approval')
                  if(true) router.push('/')
                }

            }
            else{
              alert(error)
            }


          }
          else{
            alert(error)
          }
        }catch(error){
          alert(error)
        }
        
        

})

onMounted(async ()=>{
      
      let { data: Degrees } = await supabase
        .from('Degree')
        .select('*')
        //console.log(Degrees)
        if(Degrees?.length !== 0){
        
          degreeobtaineditems.value.shift()
          Degrees?.forEach((Degree)=>{
            const degreeID = Degree.degree_id
            const degreeNAME = Degree.degree_name
            degreeobtaineditems.value.push({degree_ID:degreeID,degree_NAME:degreeNAME})

          })
          
        }

});



</script>

<style scope>
.sign{
  margin: auto;
  justify-content: center;
  width: 50%;
}
</style>