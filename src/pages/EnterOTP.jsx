function EnterOTP() {
  return (
    <div className='dark:bg-black/90 dark:text-white min-h-screen flex justify-center items-center'>
        <div className='flex flex-col space-y-4 text-center border px-3 py-5 rounded-md dark:border-white/60' >
            <h1>Enter OTP</h1>
            <input placeholder='eg:120843' type='number' className='border p-2 rounded-md dark:border-white/40'/>
            <button className='border py-1 cursor-pointer dark:bg-white dark:text-black dark:hover:bg-gray-600 dark:hover:text-white rounded-md '>Submit</button>
        </div>
    </div>
  )
}

export default EnterOTP