import React from 'react'
import { Toaster } from 'react-hot-toast';

const ToastComponent = () => {
  return (
    <>
        <Toaster 
        position='top-right'
        toastOptions={{
            duration : 3000,
            iconTheme : {
                primary: '#713200',
                secondary: '#FFFAEE',
            },

            style : {
                border: '1px solid #713200',
                padding: '16px',
                color: '#713200',
            }
        }}/>
    </>
  )
}

export default ToastComponent