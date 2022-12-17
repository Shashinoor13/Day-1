import React from 'react'
import Search from './Search'
import Login from './Login'
import Icon from './Icon'



const Nav = () => {
  return (
    
    <nav className='p-12 background shadow flex-row font-[Monaco] md:flex md:items-center md:justify-between transition-all ease-in duration-500'>
        <div className='flex justify-between items-center '>
            <span className="text-2xl cursor-pointer">
                <img className="h-12 inline rounded-full " src="/assets/logo.png" alt='logo' ></img>
            </span> 
            <span className='text-3xl cursor-pointer mx-2 md:hidden block' onClick={console.log('Not Working ')} >
                <Icon/>
             </span>
        </div>

        <ul className='md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-inherit w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-100 top-[-400px] transition-all ease-in duration-500'>
            <li className='px-10 md:my-0 '>
                <Search/>
            </li>
            <li className='bcolor rounded-lg input  hover:bg-green-100'>
                <Login/>
            </li>
        </ul>
    </nav>
  )
}

export default Nav;

