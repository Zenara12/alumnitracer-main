import { ref,computed,watch } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '@/store/supabase.js'
// import { useUserStore }  from '@/store/user'

//const userStore =useUserStore()

export const useAlumniStore = defineStore("alumni", () => {
  const alumni = ref({

    //alumni datas
    alumni_id:0,
    first_name:'',
    last_name:'',
    gender:'',
    date_of_birth: '',
    address : '',
    nationality : '',
    email : '',
    phone : 0,
    degreeID : 0,
    graduation_date: '',
    employmentstatus: '',
    
  });

  if(localStorage.getItem("alumni")){
    alumni.value = JSON.parse(localStorage.getItem("alumni"));
  }

  watch(
    alumni,
    (alumniVal) =>{
      localStorage.setItem("alumni",JSON.stringify(alumniVal))
    },
    {deep:true}
  );

  const alumniStoreData = (
    firstname: string,
    lastname: string,
    alumni_id:number,
    gender:string,
    dateofbirth:string,
    address:string,
    nationality:string,
    email: string,
    phone:number,
    degreeID:number,
    graduationdate:string,
    employmentstatus:string,
    ) =>{

    alumni.value.first_name = firstname
    alumni.value.last_name = lastname
    alumni.value.alumni_id = alumni_id
    alumni.value.gender = gender
    alumni.value.date_of_birth = dateofbirth
    alumni.value.address = address
    alumni.value.nationality = nationality
    alumni.value.email = email
    alumni.value.phone = phone
    alumni.value.degreeID = degreeID
    alumni.value.graduation_date = graduationdate
    alumni.value.employmentstatus = employmentstatus

  };

  const getThis_AlumniData = async (id: number) =>{
    try{
      const { data: Alumni, error ,status} = await supabase
              .from('Alumni')
              .select("*")
              .eq('user_id', id)
        
        const AlumniData = Alumni

      return AlumniData
    }
    catch(error){
      if (error instanceof Error) {
        alert(error.message)
      }
    }
  };



  const alumniLogout = () =>{
    alumni.value.alumni_id = 0
    alumni.value.first_name = ''
    alumni.value.last_name = ''
    alumni.value.gender = ''
    alumni.value.date_of_birth = ''
    alumni.value.address = ''
    alumni.value.nationality = ''
    alumni.value.email = ''
    alumni.value.phone = 0
    alumni.value.degreeID = 0
    alumni.value.graduation_date = ''
    alumni.value.employmentstatus = ''
  };
  
  return{
    alumni,
    alumniStoreData,
    alumniLogout,
    getThis_AlumniData,
  };
});