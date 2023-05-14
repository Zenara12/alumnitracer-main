import { ref,computed,watch } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '@/store/supabase.js'

export const useDeanStore = defineStore("dean", () => {
  const dean = ref({

    //Dean datas
    dean_id:0,
    first_name:'',
    last_name:'',
    email : ''
    
  });

  if(localStorage.getItem("dean")){
    dean.value = JSON.parse(localStorage.getItem("dean"));
  }

  watch(
    dean,
    (deanVal) =>{
      localStorage.setItem("dean",JSON.stringify(deanVal))
    },
    {deep:true}
  );

  const getThis_deanData = async (id: number) =>{
    try{
      const { data: dean, error ,status} = await supabase
              .from('College_Dean')
              .select("*")
              .eq('user_id', id)
        const DeanData = dean
        // if(DeanData !== null){
        // //DeanData.then((dean_data:any)=>{
        //     let first_name = DeanData[0]['first_name']
        //     let last_name = DeanData[0]['last_name']
        //     let dean_id = DeanData[0]['dean_id']
        //     let email = DeanData[0]['email']

        //     deanStoreData(first_name,last_name,dean_id,email)
        // //});
        // }
    //console.log(DeanData)
      return (DeanData)
    }
    catch(e){
      if (e instanceof Error) {
        alert(e.message)
      }
    }
  };

  const deanStoreData = (
    firstname: string,
    lastname: string,
    dean_id:number,
    email:string
    ) =>{

    dean.value.dean_id = dean_id
    dean.value.first_name = firstname
    dean.value.last_name = lastname
    dean.value.email = email

  };

  const deanLogout = () =>{
    dean.value.dean_id = 0
    dean.value.first_name = ''
    dean.value.last_name = ''
    dean.value.email = ''
  };
  
  return{
    dean,
    deanStoreData,
    deanLogout,
    getThis_deanData,
  };
});