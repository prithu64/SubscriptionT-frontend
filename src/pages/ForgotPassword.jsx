import FormSemiHeader from '../components/FormSemiHeader'
import FormInputCompo from '../components/FormInputCompo'
import FormBtnCompo from '../components/FormBtnCompo'
import { useNavigate} from 'react-router-dom'

function ForgotPassword() {
  const navigate = useNavigate()
  return (
    <div className='h-screen flex justify-center items-center dark:bg-black/90'>
        <div className='border dark:border-white/30 px-3 py-5 rounded-md'>
           <FormSemiHeader label={"Enter registered email to recieve OTP"} />
           <FormInputCompo type={"email"} placeholder={"ex-abc@gmail.com"} />
           <FormBtnCompo label={"Send"} onClick={()=>{navigate("/otp")}}/>
        </div>
    </div>
  )
}

export default ForgotPassword