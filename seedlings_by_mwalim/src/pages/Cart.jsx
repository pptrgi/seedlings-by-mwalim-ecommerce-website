import React from 'react'
import ShoppingCart from '../components/cart/ShoppingCart'
import CheckoutDetails from '../components/cart/CheckoutDetails'
import {IoIosArrowRoundBack, IoMdArrowBack, IoMdTrash} from 'react-icons/io'
import {FaRegTrashAlt} from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import {resetCart} from '../redux/seedlingSlice'
import { ToastContainer, toast } from 'react-toastify'
import { Link } from 'react-router-dom'


function Cart() {
  const productItems = useSelector(state => state.seedling.productData)
  const dispatch = useDispatch()
  return (
    <div className='pt-[6rem] pb-[4rem]'>
      <div className='container'>
        {productItems.length > 0 ? 
          <>
            <div className='grid grid-cols-1 gap-3 md:grid-cols-5'>
              <div className='md:col-span-3'>
                <h2 className='text-titleColor text-normalFontSize font-mediumWeight mb-[1rem]'>Shopping Cart</h2>
                <div className='flex flex-col space-y-4'>
                  {productItems.map(item => {
                    return (
                      <ShoppingCart key={item.id} item={item} />
                    )
                  })}
                </div>
              </div>
              <div className='md:col-span-2'>
                <h2 className='text-titleColor text-normalFontSize font-mediumWeight mb-[1rem]'>Checkout Totals</h2>
                <CheckoutDetails />
              </div>
            </div>
            <div className='flex flex-col space-y-[1rem] justify-center items-center md:space-y-0 md:space-x-[2rem] mt-[2rem] md:flex-row'>
              <Link to='/'>
                <div className='group flex space-x-[0.5rem] items-center px-[1rem] py-[0.5rem] bg-ctaColor rounded-lg '>
                  <span className='text-whiteColor text-normalFontSize font-semiBolded group-hover:-translate-x-1'><IoMdArrowBack /></span>
                  <span className='text-whiteColor text-smallFontSize font-semiBolded'>Continue shopping</span>
                </div>
              </Link>
              <div onClick={() => dispatch(resetCart()) & toast.error('Your cart is emptied')} className='flex space-x-[0.25rem] items-center bg-red-500 px-[1rem] py-[0.5rem] rounded-lg cursor-pointer hover:bg-red-600'>
                <span className='text-whiteColor text-smallFontSize'>reset cart</span>
                <span className='text-whiteColor text-smallFontSize'><FaRegTrashAlt /></span>
              </div>
            </div>
          </>
          :
          <div>
            <h2 className='text-textColor text-h3FontSize text-center pt-[4rem] mb-[1rem]'>Your cart is empty. Return ufanye shopping basi.</h2>
            <Link to='/' className='flex justify-center items-center'>
                <div className='group flex space-x-[0.5rem] items-center px-[1rem] py-[0.75rem] bg-ctaColor rounded-lg'>
                  <span className='text-whiteColor text-normalFontSize font-semiBolded group-hover:-translate-x-1'><IoMdArrowBack /></span>
                  <span className='text-whiteColor text-smallFontSize font-semiBolded'>Go shopping</span>
                </div>
              </Link>
          </div>
        }
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

export default Cart