function FormBtnCompo({label,onClick,disabled}) {
  return (
    <div className="flex justify-center">
        <button onClick={onClick} disabled={disabled} className={`${disabled? "cursor-not-allowed opacity-50":"cursor-pointer"}  font-semibold outline-none rounded-md dark:bg-white dark:text-black dark:hover:bg-gray-600 dark:hover:text-white border text-center px-8 py-1.5 w-full`}>{label}</button>
    </div>
  )
}

export default FormBtnCompo