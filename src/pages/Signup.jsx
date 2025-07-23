import BtnCompo from "../components/FormBtnCompo"
import HeaderLable from "../components/FormHeaderLable"
import InputCompo from "../components/InputCompo"
import SemiHeader from "../components/FormSemiHeader"

function Signup() {
  return (
    <div className="dark:bg-black/90 h-screen flex justify-center items-center">
        <div>
          <div className="space-y-4 border dark:border-white/30  rounded-md px-4 py-6">
            <div>
               <HeaderLable label={"Sign Up"} />
            </div>
            <div>
                <SemiHeader  label={"username"}/>
                <InputCompo  placeholder={"username"} type={"text"}/>

                <SemiHeader  label={"email"}/>
                <InputCompo  placeholder={"email"} type={"email"}/>

                <SemiHeader  label={"password"}/>
                <InputCompo  placeholder={"username"} type={"password"}/>
            </div>
            <div>
              <BtnCompo label={"Sign up"} />
            </div>            
          </div>
        </div>   
    </div>
  )
}

export default Signup