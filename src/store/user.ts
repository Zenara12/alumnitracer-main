import { ref,computed,watch } from 'vue'
import { defineStore } from 'pinia'
import { useAlumniStore }  from '@/store/alumni'
import { useDeanStore }  from '@/store/dean'
import router from '@/router';
import { supabase } from '@/store/supabase.js'

const alumniStore = useAlumniStore()
const deanStore = useDeanStore()

export const useUserStore = defineStore("user", () => {
  const user = ref({
    user_ID:0,
    username:'',
    role:'',
    status:true,
    first_name:'',
    last_name:''
  });

  if(localStorage.getItem("user")){
    user.value = JSON.parse(localStorage.getItem("user"));
  }

  watch(
    user,
    (userVal) =>{
      localStorage.setItem("user",JSON.stringify(userVal))
    },
    {deep:true}
  );


  const userLogin = async (username: any,pasword: any) =>{
    const { data: Users, error ,status} = await supabase
        .from('Users')
        .select("*")
        .eq('Username', username.value)
        .eq('Password', pasword.value)

    const UserData = Users
    let loggedMessage = ''
    
    //console.log(username.value+''+pasword.value)
    //console.log(UserData)
    if(UserData !== null){
      let userID=UserData[0]['user_id']
      let role=UserData[0]['Role']
      let remarks=UserData[0]['Remarks']
      let username=UserData[0]['Username']
      let firstname=''
      let lastname=''
      
      if(remarks === true){
        if(role === 'alumni'){
          const AlumniData: any = alumniStore.getThis_AlumniData(userID)
          //console.log(AlumniData)
          if(AlumniData !== null){
            AlumniData.then((values: any)=>{
              firstname = values[0]['first_name']
              lastname = values[0]['last_name']
              //console.log(firstname)
             userStoreData(userID,username,role,firstname,lastname)
             
            });
            
          }
          
        }
        else if(role === 'dean'){
          const DeanData = deanStore.getThis_deanData(userID)
          //console.log(userID)
          if(DeanData !== null){
            DeanData.then((values: any)=>{
              firstname = values[0]['first_name']
              lastname = values[0]['last_name']
              userStoreData(userID,username,role,firstname,lastname)
            });
          }
        }
        
      }
      else{
       loggedMessage ='Your account is not yet approve, contact your college dean or wait for approval.'
       alert(loggedMessage)
      }
    }
    else{
      loggedMessage = 'User does not exist'
      alert(loggedMessage)
    }
  }

  const userStoreData = (
    userID: number,
    username: string,
    role: string,
    first_name:string,
    last_name:string
    ) =>{

    user.value.user_ID = userID
    user.value.username = username
    user.value.role = role
    user.value.first_name = first_name
    user.value.last_name = last_name

    user.value.status = false
    
    alert('Welcome '+first_name+' '+ last_name)

    router.push('/')
    //console.log(first_name)
    //console.log(localStorage)
  };

  const userLogout = () =>{
    user.value.user_ID = 0
    user.value.username = ''
    user.value.role = ''
    user.value.first_name = ''
    user.value.last_name = ''
    user.value.status=true

    localStorage.clear()
    alert('User Log-out')
    //console.log(localStorage)
    router.push('/signin')
  };
  
  return{
    user,
    userStoreData,
    userLogout,
    userLogin
  };
});