import FormHeaderLable from "../components/FormHeaderLable";
import FormBtnCompo from "../components/FormBtnCompo"
import FormInputCompo from "../components/FormInputCompo"
import FormSemiHeader from "../components/FormSemiHeader"
import FormBtmCompo from "../components/FormBtmCompo";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useEffect, useState } from "react";
import LinkCompo from "../components/LinkCompo";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signin() {

  const navigate  = useNavigate()
  
  const [passwordType,setPasswordType] = useState("password");
  const [username,setUsername] = useState(null);
  const [password,setPassword] = useState(null);
  const [responseState,setResponseState] = useState(false);
  const [showPopUp,setPopUp] = useState(false)
  const [resMessage,setResMessage] = useState(null)

  const handleSignin = async()=>{
    if(!username || !password){
      alert("all fields required")
      return;
    }
    if(username.length <= 3){
      alert("username min 4 characters")
      return;
    }
    if(password.length <= 5){
      alert("password min 6 characters")
      return;
    }

    setResponseState(true)

     try {
    const response = await axios.post("https://subscriptiont-backend.onrender.com/api/v1/user/signin",{
      username,
      password
    })
    
    setResMessage(response.data.message)
    setPopUp(true)
    

    const token  = response.data.data.accessToken;
    
    localStorage.setItem("token",token)
    setTimeout(()=>{setResponseState(false)},5000)
    
   setTimeout(()=>{
    navigate("/dashboard")
   },3000) 
  } catch (error) {
    setResponseState(false)
    console.log("error : ",error)
  }
}

 useEffect(()=>{
 const timeout =  setTimeout(()=>setPopUp(false),2000)
  return ()=> clearTimeout(timeout)
 },[showPopUp])


  return (
       <div className="dark:bg-black/90 min-h-screen flex justify-center items-center">
        <div>
          <div className="space-y-4 border dark:border-white/30  rounded-md px-4 py-6">
            <div>
               <FormHeaderLable label={"Sign In"} />
            </div>
            <div>
                <FormSemiHeader  label={"username"}/>
                <FormInputCompo onChange={(e)=>{setUsername(e.target.value)}}  placeholder={"username"} type={"text"}/>

                <FormSemiHeader  label={"password"}/>
                 <div >
                  <div className="relative">
                    <FormInputCompo onChange={(e)=>{setPassword(e.target.value)}} placeholder={"password"} type={passwordType}/>

                     <div className="absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer">
                            {
                             passwordType === "password"?<FaEyeSlash onClick={()=>{
                            setPasswordType("text")
                            }} className="dark:text-white"/>:<FaEye onClick={()=>{
                            setPasswordType("password")
                            }} className="dark:text-white"/>

                            }
                     </div>
                  </div>
                  <LinkCompo label={"Forgot Password ? "} to={"/forgotpassword"} />
                </div>
                
            </div>
            <div>
              <FormBtnCompo disabled={responseState} onClick={handleSignin} label={responseState?"Signing in...":"Sign in"} />
              <FormBtmCompo to={"/signup"} text={"Don't have an account ? "} totext={" Sign up "} />
            </div>            
          </div>
        </div>    
       
       <div className={`fixed top-10 z-50 flex justify-center ${showPopUp?"opacity-100 scale-100":"opacity-0 scale-95"} transition-all duration-300 ease-in-out`}>
         <div className="dark:text-white p-2 shadow-lg rounded">
            🎉{resMessage}
         </div>
       </div>

    </div>
  )
}

export default Signin;