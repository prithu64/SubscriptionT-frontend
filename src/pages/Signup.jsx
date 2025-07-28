import { useEffect, useState } from "react"
import FormBtmCompo from "../components/FormBtmCompo"
import FormBtnCompo from "../components/FormBtnCompo"
import FormHeaderLable from "../components/FormHeaderLable"
import FormInputCompo from "../components/FormInputCompo"
import FormSemiHeader from "../components/FormSemiHeader"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import axios from 'axios'
import { useNavigate } from "react-router-dom"



function Signup() {

  const [passwordType,setPasswordType] = useState("password");
  const [username,setUsername] = useState(null);
  const [email,setEmail] = useState(null);
  const [password,setPassword] = useState(null);
  const [responseState,setResponseState] = useState(false)
  const [showPopUp,setPopUp] = useState(false) 
  const [resMessage,setResMessage] = useState(null)
  const navigate = useNavigate()


    useEffect(()=>{
   if(showPopUp){
   const timeout = setTimeout(()=>setPopUp(false),2000);
    return ()=>clearTimeout(timeout)
   }
  },[showPopUp])

  const handleSignup = async()=>{
    if(!username || !password || !email ){
      alert("all input fields are needed")
      return
    }
    if(username.length <= 3){
     alert("Username minimum 4 characters")
     return;
    }
    if(password.length <= 5 ){
      alert("Password minimum 6 characters")
     return;
    }
      setResponseState(true);

      try {
      const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
      username,
      password,
      email
    })
      //console.log("response : : ",response.data)
      setResMessage(response.data.message)
      setResponseState(false)
      setPopUp(true)

      const usertoken = response.data.data.accessToken;
      localStorage.setItem("token",usertoken)
      
      setTimeout(() => {
        navigate("/dashboard")
      }, 3000);
    
    
    } catch (error) {
      setResponseState(false)
      console.log(error)
    }    
 }


  return (
    <div className="dark:bg-black/90 min-h-screen flex justify-center items-center ">
        <div>
          <div className="space-y-4 border dark:border-white/30  rounded-md px-4 py-6">
            <div>
               <FormHeaderLable label={"Sign Up"} />
            </div>
            <div>
                <FormSemiHeader  label={"username"}/>
                <FormInputCompo onChange={(e)=>{setUsername(e.target.value)}} placeholder={"username"} type={"text"}/>

                <FormSemiHeader  label={"email"}/>
                <FormInputCompo onChange={(e)=>{setEmail(e.target.value)}}  placeholder={"email"} type={"email"}/>

                <FormSemiHeader label={"password"}/>
                <div >
                  <div className="relative">
                    <FormInputCompo onChange={(e)=>{setPassword(e.target.value)}} placeholder={"password"} type={passwordType}/>

                     <div  className="absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer">
                            {
                             passwordType === "password"?<FaEyeSlash onClick={()=>{
                            setPasswordType("text")
                            }} className="dark:text-white"/>:<FaEye onClick={()=>{
                            setPasswordType("password")
                            }} className="dark:text-white"/>

                            }
                     </div>
                  </div>

                </div>
               
            </div>
            <div>
              <FormBtnCompo disabled={responseState} onClick={handleSignup} label={responseState?"Signing up": "Sign up"} />
              <FormBtmCompo  to={"/signin"} text={"Already a user ? "} totext={" Sign in "} />
            </div>            
          </div>
        </div>   

      
         <div className={`fixed  ${showPopUp ? "opacity-100 scale-100 ":"opacity-0 scale-95"} top-10  flex items-top justify-center  z-50 transition-all duration-300 ease-in-out `}>
            <div className=" rounded  text-black dark:text-white  p-2 shadow-lg">
             🎉 {resMessage}
          </div>
         </div>
        

    </div>
  )
}

export default Signup