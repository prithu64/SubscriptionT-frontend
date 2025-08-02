import FormSemiHeader from '../components/FormSemiHeader'
import FormInputCompo from '../components/FormInputCompo'
import FormBtnCompo from '../components/FormBtnCompo'
import { useState } from 'react'
import axios from 'axios'

function ForgotPassword() {
  const [email,setEmail] = useState(null);
  const sendlink = async() =>{
    try {
     await axios.post("http://localhost:3000/api/v1/user/resetlink",{
     email
    })
     console.log("email sent")
     alert("Check your mail : link expired in 15 min")
    } catch (error) {
      console.log("error : ",error)
    }
  }
  return (
    <div className='h-screen flex justify-center items-center dark:bg-black/90'>
        <div className='border dark:border-white/30 px-3 py-5 rounded-md'>
           <FormSemiHeader label={"Enter registered email to recieve OTP"} />
           <FormInputCompo onChange={(e)=>{
            setEmail(e.target.value)
           }} type={"email"} placeholder={"ex-abc@gmail.com"} />
           <FormBtnCompo  label={"Send"} onClick={sendlink}/>
        </div>
    </div>
  )
}

export default ForgotPassword