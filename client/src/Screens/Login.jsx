import React from 'react';
import IntroText from '../Components/IntroText';
import { useFormik } from 'formik';
import { validateLoginSchema } from '../Validation/validate';

const Login = () => {

    const formik = useFormik({
        initialValues : {
            email : '' , password : ''
        },
        validationSchema : validateLoginSchema,
        onSubmit : (values) => {
            console.log(values);
        }
    })
  return (
    <>
        <div className='flex flex-col md:flex-row min-h-screen'>

            <IntroText isSignup={false}/>

            <div className='md:w-1/2 flex items-center justify-center p-8 shadow-md  bg-neutral-100'>
                <div className='w-full md:w-2/3'>
                    <h2 className='text-3xl text-amber-500 font-bold mb-8'>Sign in to your account</h2>

                    <form onSubmit={formik.handleSubmit}>
                        <div className='mb-4'>
                            <input type="email" name="email" id="" placeholder='Email'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={`w-full p-3 border mb-2 border-gray-300 rounded ${
                                formik.touched.email && formik.errors.email ? 'border-red-500' : ''
                            }`}
                            />
                            {formik.touched.email && formik.errors.email &&(
                                <div className='text-red-500  text-left'>{formik.errors.email}</div>
                            )}
                        </div>

                        <div className='mb-4'>
                            <input type="password" name="password" id="" placeholder='Password'
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={`w-full p-3 border mb-2 border-gray-300 rounded ${
                                formik.touched.password && formik.errors.password ? 'border-red-500' : ''
                            }`}
                            />
                            {formik.touched.password && formik.errors.password &&(
                                <div className='text-red-500 text-left'>{formik.errors.password}</div>
                            )}
                        </div>

                        <button 
                        type='submit' className='bg-custom-amber mt-3 rounded-full text-white px-14 py-4 
                        text-lg font-bold hover:bg-amber-600'>
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login