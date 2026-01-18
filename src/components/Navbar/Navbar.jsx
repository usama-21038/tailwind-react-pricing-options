import React, { useState } from 'react';
import Link from './Link';
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const navData = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Services", path: "/services" },
    { id: 3, name: "About", path: "/about" },
    { id: 4, name: "Blog", path: "/blog" },
    { id: 5, name: "Contact", path: "/contact" }
];

const Navbar = () => {

    const [open, setOpen]=useState(false);
    const links= navData.map((route) => <Link key={route.id} route={route}></Link>)
    

    return (
        <nav className='flex justify-between mx-10 mt-4'>
            <span className='flex items-center'>
                <span onClick={()=>setOpen(!open)}>
                    {
                        open ?
                <h1 className='md:hidden'><IoClose /></h1>
                : <h1 className='md:hidden'><IoIosMenu /></h1>
                    }
                </span>
                <ul className={`md:hidden absolute duration-1000 ${open?'top-8' : '-top-40'} bg-tomato-500`}>
                    {links}
                </ul>
                
                <h1 className='ml-2'>My Navbar</h1>
            </span>
            <ul className='md:flex hidden'>
                {
                   links
                }
            </ul>




            {/* <ul className='flex'>
                {
                    navData.map((link)=><li className='mr-10'><a href={link.path}>{link.name}</a></li>)
                }
            </ul> */}


            {/* <ul className='flex gap'>
                <li className='mr-10'><a href="/">Home</a></li>
                <li className='mr-10'><a href="/about">About</a></li>
                <li className='mr-10'><a href="/blog">Blog</a></li>
            </ul> */}
            <button>Sign In</button>
        </nav>
    );
};

export default Navbar;