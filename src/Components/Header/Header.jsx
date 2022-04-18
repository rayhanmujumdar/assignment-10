import React, { useState } from 'react';
import CustomLink from '../CustomLink/CoustomLink';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Header = () => {
    const [open,setOpen] = useState(false)
    const navBar = (open) => {
        setOpen(open)
    }
    return (
        <div className='sticky top-0 z-30'> 
            <div onClick={() => navBar(!open)} className='md:hidden p-4 bg-yellow-700'>
                    {
                        open ? <XIcon className='w-6 text-white'></XIcon> : <MenuIcon className='w-6 text-white'></MenuIcon>
                    }
            </div>
            <nav onClick={() => navBar()}  className={`bg-slate-500 rounded-md md:bg-slate-100 md:flex justify-center border-b-2 border-red-100 py-6  md:static absolute w-full duration-300 ${open ? 'top-20' : 'top-[-200px] delay-300'}`}>
                <CustomLink to='/'>HOME</CustomLink>
                <CustomLink to='/reviews'>REVIEWS</CustomLink>
                <CustomLink to='/dashboard'>DASHBOARD</CustomLink>
                <CustomLink to='/blogs'>BLOGS</CustomLink>
                <CustomLink to='/about'>ABOUT</CustomLink>
            </nav>
        </div>
    );
};

export default Header;