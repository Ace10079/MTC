import React from 'react'
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const navigate = useNavigate();

  const handleRegisterClick = () => {
    // Navigate to the RegisterPage
    navigate('/signup');
  };
  const handleDashboardClick = () => {
    // Navigate to the RegisterPage
    navigate('/dashboard');
  };

  return (
    <div className='flex lg:flex-row flex-col justify-center gap-10'>
    <div className='h-48 w-96 flex mt-36 '>
      <img src="/mtclogo.gif" alt="Next.js logo" />
    </div>
    <div className='flex flex-col mt-16 border-solid border-2 border-black rounded-lg'>
    <div className='ml-20 mr-20 mt-10 mb-10 '>
      <h2 className='text-2xl mb-4 text-black font-bold'>Login</h2>
      <form className='flex flex-col gap-4 '>
        <div>
          <input 
            type="text" 
            id="phone" 
            name="phone" 
            placeholder="Enter phone number"
            className='border border-gray-300 rounded-lg py-2 px-6 w-full' 
          />
        </div>
        <div>
          <input 
            type="password" 
            id="password" 
            name="password" 
            placeholder="Password"
            className='border border-gray-300 rounded-lg py-2 px-6 w-full' 
          />
          <div className='text-right mt-2'>
            <a href="#" className='text-blue-500'>Forgot Password?</a>
          </div>
        </div>
        <button type="submit" onClick={handleDashboardClick} className='bg-[#71BF51] rounded-lg text-white p-2 mt-8'>Login</button>
      </form>
      <p className="mt-12">
          Didn’t have an account? 
          <button className=" ml-1" onClick={handleRegisterClick} >Register Now</button>
        </p>
    </div>
    </div>
   
  </div>
  )
}

export default LoginPage
