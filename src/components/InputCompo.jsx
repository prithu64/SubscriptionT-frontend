function InputCompo({placeholder,type}) {
  return (
    <div>
        <input placeholder={placeholder} type={type} className="border dark:border-white/30 dark:text-white/50 dark:focus:text-white min-w-xs rounded-md px-1 py-2 mb-2 mt-1 "/>
    </div>
  )
}

export default InputCompo