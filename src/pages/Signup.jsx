import { useState } from "react"
import FormBtmCompo from "../components/FormBtmCompo"
import FormBtnCompo from "../components/FormBtnCompo"
import FormHeaderLable from "../components/FormHeaderLable"
import FormInputCompo from "../components/FormInputCompo"
import FormSemiHeader from "../components/FormSemiHeader"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";



function Signup() {
 
  const [passwordType,setPasswordType] = useState("password");

  return (
    <div className="dark:bg-black/90 h-screen flex justify-center items-center ">
        <div>
          <div className="space-y-4 border dark:border-white/30  rounded-md px-4 py-6">
            <div>
               <FormHeaderLable label={"Sign Up"} />
            </div>
            <div>
                <FormSemiHeader  label={"username"}/>
                <FormInputCompo  placeholder={"username"} type={"text"}/>

                <FormSemiHeader  label={"email"}/>
                <FormInputCompo  placeholder={"email"} type={"email"}/>

                <FormSemiHeader  label={"password"}/>
                <div >
                  <div className="relative">
                    <FormInputCompo  placeholder={"username"} type={passwordType}/>

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

                </div>
               
            </div>
            <div>
              <FormBtnCompo label={"Sign up"} />
              <FormBtmCompo to={"/signin"} text={"Already a user ? "} totext={" Sign in "} />
            </div>            
          </div>
        </div>   
    </div>
  )
}

export default Signup