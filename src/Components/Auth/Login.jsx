import React, {useState} from 'react'


function Login({handleLogin}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email,password)
        console.log("Email is", email)
        console.log("Password is", password)

       

        setEmail("")
        setPassword("")
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
        <form 
        onSubmit={(e)=>{
            submitHandler(e)
        }}
        
        className='flex flex-col items-center justify-center'>
            <input
            value={email}
            onChange={(e) =>{
                setEmail(e.target.value)
            }}
            
            required className=' outline-none border-2 bg-transparent border-emerald-600 textxl py-3 px-5 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' />
            <input 
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            
            required className=' outline-none border-2 bg-transparent border-emerald-600 textxl py-3 px-5 rounded-full mt-3 placeholder:text-gray-400' type="password" placeholder='Enter password' />
            <button className='  mt-4 text-white outline-none  bg-emerald-600 textxl py-3 px-9 rounded-full placeholder:text-white' >Log in</button>
        </form>

        </div>
    </div>
  )
}

export default Login
