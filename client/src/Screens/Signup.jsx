import React from 'react';
import IntroText from '../Components/IntroText';
import { useFormik } from 'formik';
import { validateSignupSchema } from '../Validation/validate';
import {axios} from '../../Api/axios';
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues : {
            name : '', email : '' , password : ''
        },
        validationSchema : validateSignupSchema,
        onSubmit : async (values) => {
            try {
                const response = await axios.post('/auth/register', values)
            
                if(response.data.message){
                    navigate('/login');
                    toast.success(response.data.message);
                }
            } catch (error) {
                console.log(error);
                toast.error(error.response.data.error || error.message || 'An error occured');
            }
        }
    })
  return (
    <>
        <div className='flex flex-col md:flex-row min-h-screen'>

            <IntroText isSignup={true} />

            <div className='md:w-1/2 flex items-center justify-center  shadow-md  bg-neutral-100'>
                <div className='w-full md:w-2/3'>
                    <h2 className='text-3xl text-amber-500 font-bold mb-8'>Create Account</h2>

                    <form onSubmit={formik.handleSubmit}>
                        <div className='mb-4'>
                            <input type="text" name="" id="name" placeholder='Name'
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={`w-full p-3 border mb-2 border-gray-300 rounded ${
                                formik.touched.name && formik.errors.name ? 'border-red-500' : ''
                            }`}
                            />
                            {formik.touched.name && formik.errors.name &&(
                                <div className='text-red-500 text-left '>{formik.errors.name}</div>
                            )}
                        </div>

                        <div className='mb-4'>
                            <input type="email" name="email" id="email" placeholder='Email'
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
                            <input type="password" name="password" id="password" placeholder='Password'
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
                            Sign up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Signup