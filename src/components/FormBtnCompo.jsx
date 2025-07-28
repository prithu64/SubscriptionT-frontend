function FormBtnCompo({label,onClick,disabled}) {
  return (
    <div className="flex justify-center">
        <button onClick={onClick} disabled={disabled} className={`${disabled? "cursor-not-allowed opacity-50":"cursor-pointer"} dark:text-black font-semibold outline-none rounded-md dark:bg-white/85 border text-white bg-black/85 text-center px-8 py-1.5 w-full`}>{label}</button>
    </div>
  )
}

export default FormBtnCompo