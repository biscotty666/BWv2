"use client"
import pb from '@/lib/pocketbase'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import useLogout from '@/hooks/useLogout'
import useLogin from '@/hooks/useLogin'
import useVerified, { requestVerification } from '@/hooks/useVerified'


const Auth = () => {

  const logout = useLogout()
  const {data: isVerified} = useVerified()
  const { mutate: login, isLoading, isError } = useLogin()
  const { register, handleSubmit, reset } = useForm()

  const [dummy, setDummy] = useState(0)
  
  const isLoggedIn = pb.authStore.isValid

  console.log(useVerified());

  async function onSubmit(data) {
    login({email: data.email, password: data.password})
    reset()
  }

  if (isLoggedIn)
    return (
      
      <div className="pocketbase dark:text-light">
        <h1>Logged In: {pb.authStore.model.email}</h1>
        <p>Verified: {isVerified.toString()}</p>

        {!isVerified && <button onClick={requestVerification}>Send verification email</button>}
        <button onClick={logout}><span className="dark:text-light">Log Out</span></button>
      </div>
      
      )

  return (
    <>
    <div className="pocketbase">
    <h1 className="dark:text-light">Please Log In</h1>
    {isLoading && <p>Loading...</p>}
    {isError && <p style={{color: red}}>Invalid email or password</p>}

    <form onSubmit={handleSubmit(login)}>
      <input type="text" placeholder="email" {...register("email")} />
      <input type="password" placeholder="password" {...register("password")} />
      <button type="submit" disabled={isLoading} className="dark:text-light">
        {isLoading ? "Loading" : "Login"}
      </button>
    </form>
    </div>
    </>
  )
}

export default Auth