function FormBtnCompo({label}) {
  return (
    <div className="flex justify-center">
        <button className="dark:text-black font-semibold outline-none rounded-md dark:bg-white/85 border text-white bg-black/85 text-center px-8 py-1.5 w-full cursor-pointer">{label}</button>
    </div>
  )
}

export default FormBtnCompo