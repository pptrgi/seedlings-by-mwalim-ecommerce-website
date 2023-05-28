import {useState} from 'react';
import { Link } from 'react-router-dom';
import {IoIosCart, IoMdMenu} from 'react-icons/io';
import {BiX} from 'react-icons/bi';
import { useSelector, useDispatch } from 'react-redux';
import seedlingsLogo from '/images/logos/seedlingsLogo.png'
import {BiUser, BiCartAlt, BiCategory} from 'react-icons/bi'
import { FaRegUserCircle, FaUserAlt } from 'react-icons/fa';


function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const productItems = useSelector(state => state.seedling.productData)
  const userInfo = useSelector(state => state.seedling.userInfo)

  return (
    <div className='bg-bodyColor w-screen py-[0.75rem] sm:py-[1rem] fixed top-0 left-0 z-40'>
      <div>
        <div className='container flex justify-between items-center'>
          <Link to='/' className=' w-[7rem] h-[1.75rem] sm:w-48 sm:h-8'>
            <img src={seedlingsLogo} className='-mt-[0.25rem] sm:-mt-[0.85rem] object-cover' alt="SeedlingsByMwalimLogo" loading='priority'/>
          </Link>
          <div className='hidden justify-center gap-6 items-center text-normalFontSize sm:flex'>
            <a href="#products" className='text-titleColor font-normalWeight hover:text-ctaColor'>Fruits</a>
            <a href="#products" className='text-titleColor font-normalWeight hover:text-ctaColor'>Trees</a>
            <a href="#products" className='text-titleColor font-normalWeight hover:text-ctaColor'>Flowers</a>
            <Link to='/contacts'> <span className='text-titleColor font-normalWeight hover:text-ctaColor'>Contact Us</span></Link>
            <Link to='/cart'>
              <div className='relative group w-8'>
                <span className='text-titleColor text-[1.125rem] group-hover:text-ctaColor'><IoIosCart /></span>
                <span className='absolute -top-2 right-0 bg-ctaColor w-4 h-4 rounded-full text-whiteColor text-center text-[10px]'>{productItems.length}</span>
              </div>
            </Link>
            <Link to='/login'>
              {userInfo ? <img src={userInfo.image} alt="" className='w-8 h-8 rounded-full'/> : <span className='p-6 px-4 py-2 bg-ctaColor text-normalFontSize text-bodyColor rounded-md cursor-pointer hover:bg-titleColor'>Login</span> }
            </Link>
            <div>
              {userInfo && <span className='text-textColor text-smallFontSize'>{`Hi, ${userInfo.name.split(" ")[0]}`}</span>}
            </div>
          </div>
          { showMenu &&
            <div className='z-50 sm:hidden sm:z-0'>
              <div className='absolute top-0 left-0 w-3/4 min-h-screen bg-bodyColor border-r-[1px] border-r-gray-200'>
                <div className='pt-[3rem]'>
                  <span onClick={e => setShowMenu(false)} className='flex justify-end items-center px-6 text-textColor hover:text-titleColor'><BiX className='w-8 h-8'/></span>
                </div>
                <div onClick={e => setShowMenu(false)} className='pt-[2rem] pb-[1rem] px-12 flex justify-end items-center'>
                  <div className='flex gap-3 items-center'>
                    <div>
                      {userInfo && <span className='text-textColor text-smallFontSize'>{`Hi, ${userInfo.name.split(" ")[0]}`}</span>}
                    </div>
                    <Link to='/cart'>
                      <div className='relative group w-8'>
                        <span href="" className='text-titleColor font-mediumWeight text-[1.125rem] group-hover:text-ctaColor'><IoIosCart /></span>
                        <span className='absolute -top-3 right-1 bg-ctaColor w-4 h-4 rounded-full text-whiteColor text-center text-[10px]'>{productItems.length}</span>
                      </div>
                    </Link>
                  </div>
                </div>
                <Link to='/' onClick={e => setShowMenu(false)} className='pb-[1rem] px-4 flex justify-start items-center'>
                  <img src={seedlingsLogo} className='w-36 h-[3.5rem] cursor-pointer' alt="SeedlingsByMwalimLogo" />
                </Link>
                <div onClick={e => setShowMenu(false)} className='flex flex-col gap-3 flex-items px-6 text-normalFontSize'>
                  <a href="#products" className='text-textColor font-normalWeight hover:text-titleColor'>Fruits</a>
                  <a href="#products" className='text-textColor font-normalWeight hover:text-titleColor'>Trees</a>
                  <a href="#products" className='text-textColor font-normalWeight hover:text-titleColor'>Flowers</a>
                  <a href="#products" className='text-textColor font-normalWeight hover:text-titleColor'>Vegetables</a>
                  <Link to='/contacts'> <span className='text-textColor font-normalWeight hover:text-titleColor'>Contact Us</span></Link>
                </div>
                <div onClick={e => setShowMenu(false)} className='flex justify-start items-center gap-4 px-4 pt-[3rem]'>
                  {userInfo ? 
                  <Link to='/login'><span className='p-6 px-4 py-2 bg-ctaColor text-normalFontSize text-bodyColor rounded-md cursor-pointer hover:bg-titleColor'>Logout</span></Link> 
                  : 
                  <Link to='/login'><span className='p-6 px-4 py-2 bg-ctaColor text-normalFontSize text-bodyColor rounded-md cursor-pointer hover:bg-titleColor'>Login</span></Link> }
                </div>
              </div>
            </div>
          }
          <div className='sm:hidden'>
            <div className='flex justify-center items-center gap-5'>
              <a href='#categories' className='group flex flex-col gap-[1px] items-center'>
                <span className='text-titleColor text-smallFontSize group-hover:text-ctaColor'><BiCategory /></span>
                <span className='text-textColor text-tinyFontSize group-hover:text-ctaColor'>Category</span>
              </a>
              <Link to='/cart' className='relative group flex flex-col gap-[1px] items-center'>
                <span className='text-titleColor text-smallFontSize group-hover:text-ctaColor'><IoIosCart /></span>
                <span className='absolute -top-3 right-2 bg-ctaColor w-4 h-4 rounded-full text-whiteColor text-center text-[10px]'>{productItems.length}</span>
                <span className='text-textColor text-tinyFontSize group-hover:text-ctaColor'>Cart</span>
              </Link>
              <Link to='/login' className='group flex flex-col gap-[1px] items-center'>
                {userInfo ? <span className='text-titleColor text-smallFontSize group-hover:text-ctaColor'><FaRegUserCircle /></span> : <span className='text-titleColor text-smallFontSize group-hover:text-ctaColor'><BiUser /></span>}
                {userInfo ? <span className='text-textColor text-tinyFontSize'>{`Hi, ${userInfo.name.split(" ")[0]}`}</span> : <span className='text-textColor text-tinyFontSize group-hover:text-ctaColor'>Account</span> }
              </Link>
              <div onClick={e => setShowMenu(true)} className='group flex flex-col gap-[1px] items-center'>
                <span className='text-titleColor text-smallFontSize group-hover:text-ctaColor'><IoMdMenu /></span>
                <span className='text-textColor text-tinyFontSize group-hover:text-ctaColor'>Menu</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header