import {AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch}  from 'react-icons/ai'
import {BsFillCartFill, BsFillSaveFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {MdFavorite,MdHelp} from 'react-icons/md'
import {FaWallet,FaUserFriends} from 'react-icons/fa'
import { useState } from 'react'
const Navbar = () => {

   const [nav,setNav] = useState(false)
    
  return (
    <div className='max-w[1640px] mx-auto flex justify-between items-center p-4'>
        {/* left side */}
      <div className='flex items-center'>
            <div onClick={()=>setNav(!nav)} className='cursor-pointer'>
            <AiOutlineMenu size={30} />
            </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>Best <span className='font-bold'>Eats</span></h1>
            <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                <p className='bg-black text-white rounded-full p-2'>Delivery</p>
                <p className='p-2'>Pickup</p>
            </div>
      </div>

      {/* search-input */}
      
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]' >
        <AiOutlineSearch size={25}/>
        <input type="text" className='bg-transparent p-2 focus:outline-none' placeholder='search foods' />
      </div>

      {/* card button */}

      <button className='bg-black text-white hidden md:flex items-center p-2 rounded-full'>
        <BsFillCartFill size={20} className='mr-2' />Cart
      </button>

      {/* mobile menu */}
      {/* overlay */}
      {nav ?  <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'>  </div>:"" }
    

      {/* side drawer menu */}
      <div className={nav?'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300':'hidden'}>
        <AiOutlineClose onClick={()=>setNav(!nav)} size={30} className='absolute right-4 top-4 cursor-pointer' />
        <h2 className='text-2xl p-4'>Best <span className='font-bold'>Eats</span></h2>
        <nav>
            <ul className='flex flex-col p-4 text-gray-800'>
                <li className='flex text-xl py-4'><TbTruckDelivery className='mr-4' size={25}/>Orders</li>
                <li className='flex text-xl py-4'><MdFavorite className='mr-4' size={25}/>Favourites</li>
                <li className='flex text-xl py-4'><FaWallet className='mr-4' size={25}/>Wallet</li>
                <li className='flex text-xl py-4'><MdHelp className='mr-4' size={25}/>Help</li>
                <li className='flex text-xl py-4'><AiFillTag className='mr-4' size={25}/>Promotions</li>
                <li className='flex text-xl py-4'><BsFillSaveFill className='mr-4' size={25}/>Best One</li>
                <li className='flex text-xl py-4'><FaUserFriends className='mr-4' size={25}/>Invite Friends</li>    
            </ul>
        </nav>
      </div>

    </div>
  )
}

export default Navbar
