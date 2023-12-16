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
                primary: '#001f3f',
                secondary: '#FFFAEE',
            },

            style : {
                border: '1px solid #001f3f',
                padding: '16px',
                color: '#001f3f',
            }
        }}/>
    </>
  )
}

export default ToastComponent