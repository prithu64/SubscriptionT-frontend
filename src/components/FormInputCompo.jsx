function FormInputCompo({placeholder,type,onChange}) {
  return (
    <div>
        <input placeholder={placeholder} onChange={onChange} type={type} className="border dark:border-white/30 dark:text-white/50 dark:focus:text-white min-w-2xs rounded-md px-1 py-2 mb-2 mt-1 "/>
    </div>
  )
}

export default FormInputCompo