import FormHeaderLable from "../components/FormHeaderLable";
import FormBtnCompo from "../components/FormBtnCompo"
import FormInputCompo from "../components/FormInputCompo"
import FormSemiHeader from "../components/FormSemiHeader"
import FormBtmCompo from "../components/FormBtmCompo";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

function Signin() {
  
  const [passwordType,setPasswordType] = useState("password");

  return (
       <div className="dark:bg-black/90 h-screen flex justify-center items-center">
        <div>
          <div className="space-y-4 border dark:border-white/30  rounded-md px-4 py-6">
            <div>
               <FormHeaderLable label={"Sign In"} />
            </div>
            <div>
                <FormSemiHeader  label={"username"}/>
                <FormInputCompo  placeholder={"username"} type={"text"}/>

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
              <FormBtnCompo label={"Sign in"} />
              <FormBtmCompo to={"/signup"} text={"Don't have an account ? "} totext={" Sign up "} />
            </div>            
          </div>
        </div>   
    </div>
  )
}

export default Signin;