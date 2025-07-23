import FormHeaderLable from "../components/FormHeaderLable";
import BtnCompo from "../components/FormBtnCompo"
import InputCompo from "../components/InputCompo"
import SemiHeader from "../components/FormSemiHeader"

function Signin() {
  return (
       <div className="dark:bg-black/90 h-screen flex justify-center items-center">
        <div>
          <div className="space-y-4 border dark:border-white/30  rounded-md px-4 py-6">
            <div>
               <FormHeaderLable label={"Sign In"} />
            </div>
            <div>
                <SemiHeader  label={"username"}/>
                <InputCompo  placeholder={"username"} type={"text"}/>

                <SemiHeader  label={"password"}/>
                <InputCompo  placeholder={"username"} type={"password"}/>
            </div>
            <div>
              <BtnCompo label={"Sign in"} />
            </div>            
          </div>
        </div>   
    </div>
  )
}

export default Signin;