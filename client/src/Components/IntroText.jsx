import React from 'react';
import { Link } from 'react-router-dom';

const IntroText = ({isSignup}) => {
  return (
    <>
        <div className='md:w-1/2 md:p-6 bg-custom-blue shadow-md text-white flex flex-col items-center justify-center'>
            <div className='text-center'>
                <h1 className="text-4xl font-bold">
                    {isSignup ? 'Welcome Back!' : 'Hello Friend!'}
                </h1>

                {isSignup ? (
                    <p className='text-lg mt-2'>
                        To keep connected with us, please login with your personal info.
                    </p>
                ) : (
                    <p className='text-lg mt-2'>
                        Enter your Details and start your journey with us.
                    </p>
                )}
            </div>

            {isSignup ? (
                <Link to={'/login'}>
                    <button className='bg-transparent border px-5 py-3 border-white text-white rounded mt-5 hover:bg-custom-amber hover:text-white'>
                        LOGIN
                    </button>
                </Link>
            ) : (
                <Link to={'/'}>
                    <button className='bg-transparent border px-5 py-3 border-white text-white rounded mt-5 hover:bg-custom-amber hover:text-white'>
                        SIGN UP
                    </button>
                </Link>
            )}
        </div>
    </>
  )
}

export default IntroText