import React from 'react'
import {SiGoogle} from 'react-icons/si'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { addUser, removeUser } from '../redux/seedlingSlice';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const auth = getAuth()
    const provider = new GoogleAuthProvider()

    const handleGoogleLogin = e => {
        e.preventDefault()
        signInWithPopup(auth, provider).then(result => {
            // The signed-in user info.
            const user = result.user;

            dispatch(addUser({
                id: user.uid,
                name: user.displayName,
                email: user.email,
                image: user.photoURL
            }))

            setTimeout(() => {
                navigate('/')
            }, 1000)
        }).catch(error => console.log('Sign-in error:', error))
    }

    const hangleSignOut = () => {
        signOut(auth).then(() => {
            dispatch(removeUser())
            toast.info("Signed out successfully")
        }).catch(error => console.log('Sign-out error:', error))
    }
  return (
    <div className='pt-[6rem] pb-[4rem]'>
        <h2 className='text-h3FontSize text-center font-mediumWeight mb-[0.5rem]'>Sign In</h2>
        <div className='flex justify-center items-center'>
          <p className='text-smallerFontSize text-textColor font-normalWeight max-w-sm text-center leading-tight px-4 lg:max-w-md'>We'll use Google SignIn-With-Popup to sign you in</p>
        </div>
        <div className='container pt-[4rem]'>
            <div className='flex justify-center items-center'>
                <div className='flex flex-col gap-[2rem] items-center sm:flex-row'>
                    <div onClick={handleGoogleLogin} className='flex space-x-[0.25rem] items-center border-2 border-gray-200 px-[1.5rem] py-[0.75rem] rounded-lg hover:border-ctaColor'>
                        <span className='w-8'><SiGoogle /></span>
                        <span className='text-textColor text-normalFontSize'>Sign-in with Google</span>
                    </div>
                    <div onClick={hangleSignOut}>
                        <span className='bg-titleColor px-[1.5rem] py-[0.75rem] text-white text-normalFontSize rounded-lg hover:bg-ctaColor'>Sign Out</span>
                    </div>
                </div>
            </div>
        </div>
        <ToastContainer
            position='top-left'
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='dark'
        />
    </div>
  )
}

export default Login