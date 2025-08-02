import { useState } from "react";
import FormSemiHeader from "./FormSemiHeader";
import axios from "axios";



function UpdateModal({modal,setModal,refatch}) {
  const [username,setUsername] = useState(null)
  const [email,setEmail] = useState(null)
  
  const handleUpdate = async()=>{
    const token = localStorage.getItem("token")
    const payload = {}
    if(username) payload.username = username;
    if(email)  payload.email = email;
    
    if(Object.keys(payload).length===0){
      alert("Atleast one input required")
      return; 
    }

    try {
        const response = await axios.post("https://subscriptiont-backend.onrender.com/api/v1/user/updateuser",payload,
       {
        headers:{
          authorization : `Bearer ${token}`
        }
       })
      
       setTimeout(()=>{
         alert(response.data.data)
       },1000)  
       
       refatch()
    } catch (error) {
      console.log("error :: ",error)
      alert("Error updating the user")
    }
  }


  if(!modal)return null;  
  return (
    <div className={` ${
        modal ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"} w-full h-full fixed text-white bg-black/50 backdrop-blur-sm  flex items-center justify-center z-50 inset-0  transition-all duration-300 ease-in-out `}>
         <div className="max-w-xl relative flex flex-col gap-y-4 ">
            <div onClick={()=>{setModal(false)}} className="absolute right-4 -top-6 cursor-pointer text-xl">
                X
            </div>
            <div className="flex flex-col gap-x-4 mx-auto">
                <FormSemiHeader label={"Username"} />
                <div className="flex ">
                   <input placeholder="username" onChange={(e)=>{setUsername(e.target.value)}} type="text" className="border rounded-md p-2 min-w-xs mr-3" />
                </div>
            </div>

            <div className="flex flex-col gap-x-4 mx-auto">
                <FormSemiHeader label={"email"} />
                <div className="flex ">
                  <input placeholder="email" onChange={(e)=>{setEmail(e.target.value)}} type="email" className="border rounded-md p-2 min-w-xs mr-3" />
                </div>
            </div>
            <button onClick={handleUpdate} className="border  mx-auto w-[140px] py-2">Update</button>
         </div>         
    </div>
  )
}

export default UpdateModal