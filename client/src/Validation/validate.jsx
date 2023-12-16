import * as yup from 'yup';

export const validateSignupSchema = yup.object().shape({
    name : yup.string().required('Name is required'),
    email : yup.string().email('Invalid email').required('Email is required'),
    password : yup.string().min(5, 'Password must be atleast 6 characters')
    .required('Password is required')
})


export const validateLoginSchema = yup.object().shape({
    email : yup.string().email('Invalid email').required('Email is required'),
    password : yup.string().min(5, 'Password must be atleast 6 characters')
    .required('Password is required')
})

export const productValidateSchema = yup.object().shape({
    productName : yup.string().required('Name is required'),
    ramSize : yup.string().required('Specification is required'),
    stock : yup.number().integer().positive('Negative values not allowed').required('Stock is required'),
    price : yup.string().required('Price is required'),
    description : yup.string().required('Description is required')
})
