import FormSemiHeader from "./FormSemiHeader";


function UpdateModal({modal,setModal}) {

  if(!modal)return null;  
  return (
    <div className={` ${
        modal ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"} w-full h-full fixed bg-black/50 backdrop-blur-sm  flex items-center justify-center z-50 inset-0  transition-all duration-300 ease-in-out `}>
         <div className="max-w-xl relative flex flex-col gap-y-4 ">
            <div onClick={()=>{setModal(false)}} className="absolute right-4 -top-6 cursor-pointer text-xl">
                X
            </div>
            <div className="flex flex-col gap-x-4 mx-auto">
                <FormSemiHeader label={"Username"} />
                <div className="flex ">
                      <input placeholder="username" type="text" className="border rounded-md p-2 min-w-xs mr-3" />
                </div>
            </div>

            <div className="flex flex-col gap-x-4 mx-auto">
                <FormSemiHeader label={"email"} />
                <div className="flex ">
                  <input placeholder="email" type="text" className="border rounded-md p-2 min-w-xs mr-3" />
                </div>
            </div>
            <button className="border  mx-auto w-[140px] py-2">Update</button>
         </div>         
    </div>
  )
}

export default UpdateModal