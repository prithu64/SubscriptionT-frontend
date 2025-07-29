import { useEffect, useState } from "react"
import FormSemiHeader from "../components/FormSemiHeader"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import UpdateModal from "../components/updateModal"



function Profile() {
  
 const [user,setUser] = useState(null)
 const navigate = useNavigate()
 const [modal,setModal] = useState(false)

 const getUser = async()=>{
    const token = localStorage.getItem("token")
    try {
         const response = await axios.get("http://localhost:3000/api/v1/user/getuser",{
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
    try {
      const token = localStorage.getItem("token")
      await axios.delete("http://localhost:3000/api/v1/user/deleteuser",{
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


 useEffect(()=>{
   getUser()
 },[])

 useEffect(()=>{
    console.log("user ::",user)
 },[user])

  return (
    <div className='dark:bg-black/90 dark:text-white min-h-screen flex flex-col justify-center items-center'>
      <h1>User Profile</h1>
      
      <div>
        <div className="flex flex-col gap-y-6">
            
            <div className="flex flex-col gap-x-4 mx-auto">
                <FormSemiHeader label={"Username"} />
                <div className="flex ">
                      <input placeholder={user?.username || "Loading..."} readOnly={true} type="text" className="border rounded-md p-2 min-w-xs mr-3" />
                </div>
            </div>

            <div className="flex flex-col gap-x-4 mx-auto">
                <FormSemiHeader label={"email"} />
                <div className="flex ">
                  <input placeholder={user?.email || "Loading..."} readOnly={true} type="text" className="border rounded-md p-2 min-w-xs mr-3" />
                </div>
            </div>

            <div className="mx-auto space-x-2">
                <button className="w-[150px] py-2 border dark:hover:bg-gray-600 transition-transform duration-200 cursor-pointer">
                  Change Password
                </button>
                <button onClick={deleteUser}  className="w-[150px] py-2 border dark:hover:bg-gray-600 transition-transform duration-200 cursor-pointer">
                  Delete User
                </button>
                <button onClick={()=>setModal(true)} className="w-[150px] py-2 border dark:hover:bg-gray-600 transition-transform duration-200 cursor-pointer">
                  Update
                </button>
            </div>

             <UpdateModal modal={modal} setModal={setModal}/>
             
            
        </div>
      
      </div>

    </div>
  )
}

export default Profile