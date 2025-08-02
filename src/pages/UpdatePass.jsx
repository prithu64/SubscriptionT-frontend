import axios from "axios";
import { useState } from "react"
import { useParams } from "react-router-dom";


function UpdatePass() {
const [password,setPassword] = useState(null);
const {token} = useParams();

const handleUpdate = async()=>{
    try {
     if(password.length >= 6){
      const response = await axios.post(`https://subscriptiont-backend.onrender.com/api/v1/user/changepass/${token}`,{
      password : password
      })
      console.log("response : ",response.data.message)
      if(response.data.message === "Success"){
        alert("Password changed Successfully")
      }
    }else{
        alert("Password min 6 characters required")
    }
    } catch (error) {
        alert("something went wrong")
        console.log("error: ",error)
    }
    
}

  return (
    <div className='min-h-screen flex justify-center items-center dark:bg-black/90 dark:text-white'>
        <div className="flex flex-col space-y-3">
            <input type='password' onChange={(e)=>{setPassword(e.target.value)}} placeholder='password' className='border p-2 rounded-md'/>
            <button className="border rounded-sm py-1 cursor-pointer dark:bg-white dark:text-black dark:hover:bg-white/40 transition duration-200" onClick={handleUpdate}>Update</button>
        </div>
    </div>
  )
}

export default UpdatePass