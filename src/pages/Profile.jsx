import { useEffect, useState } from "react"
import FormSemiHeader from "../components/FormSemiHeader"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import UpdateModal from "../components/UpdateModal"
import { TbPasswordUser } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import { FaPenToSquare } from "react-icons/fa6";


function Profile() {
  
 const [user,setUser] = useState(null)
 const navigate = useNavigate()
 const [modal,setModal] = useState(false)

 const getUser = async()=>{
    const token = localStorage.getItem("token")
    try {
         const response = await axios.get("https://subscriptiont-backend.onrender.com/api/v1/user/getuser",{
        headers : {
            authorization : `Bearer ${token}`
        }
    })

    console.log("API response : ",response.data.data)
    setUser(response.data.data)
    } catch (error) {
        console.log("error::",error)
    }
 }

 const deleteUser = async()=>{
    const confirmDelete = window.confirm("Are you sure you want to delete your account ? ")
   
    if(confirmDelete){
         try {
      const token = localStorage.getItem("token")

      await axios.delete("https://subscriptiont-backend.onrender.com/api/v1/user/deleteuser",{
        headers : {
          authorization : `Bearer ${token}`
        }
      })
     localStorage.removeItem("token")
     navigate("/",{replace:true})
 
    } catch (error) {
      console.log("error : ",error)
    }
    }
 }

 useEffect(()=>{
   getUser()
 },[])

  return (
    <div className='dark:bg-black/90 dark:text-white min-h-screen flex flex-col justify-center items-center px-2'>
     
      
      <div className="border dark:border-white/40 px-3 py-6 rounded-md">
         <h1 className=" text-xl text-center  mb-8 rounded-full">User Profile</h1>
        <div className="flex flex-col gap-y-8 ">
            
            <div className="flex flex-col gap-x-4 mx-auto ">
                <FormSemiHeader label={"Username"} />
                <div className="flex ">
                      <input placeholder={user?.username || "Loading..."} readOnly={true} type="text" className="border rounded-md p-2 min-w-2xs " />
                </div>
            </div>

            <div className="flex flex-col gap-x-4 mx-auto">
                <FormSemiHeader label={"email"} />
                <div className="flex ">
                  <input placeholder={user?.email || "Loading..."} readOnly={true} type="text" className="border rounded-md p-2 min-w-2xs " />
                </div>
            </div>

            <div className="mx-auto space-x-4">
                <button onClick={()=>navigate("/forgotpassword")} className=" px-3 py-2 border dark:hover:bg-gray-600 transition-transform duration-200 cursor-pointer">
                  <TbPasswordUser size={20}/>
                </button>
                <button onClick={deleteUser}  className="px-3 py-2 border dark:hover:bg-gray-600 transition-transform duration-200 cursor-pointer">
                  <MdDelete size={20}/>
                </button>
                <button onClick={()=>setModal(true)} className="px-3 py-2 border dark:hover:bg-gray-600 transition-transform duration-200 cursor-pointer">
                  <FaPenToSquare size={20}/>
                </button>
            </div>

             <UpdateModal refatch = {getUser} modal={modal} setModal={setModal}/>
             
            
        </div>
      
      </div>

    </div>
  )
}

export default Profile