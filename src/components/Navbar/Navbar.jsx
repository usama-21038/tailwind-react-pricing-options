import React from 'react';

const navData = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Services", path: "/services" },
    { id: 3, name: "About", path: "/about" },
    { id: 4, name: "Blog", path: "/blog" },
    { id: 5, name: "Contact", path: "/contact" }
];

const Navbar = () => {
    return (
        <nav>

            <ul className='flex'>
                {
                    navData.map((route) => <Link key={route.id} route={route}></Link>)
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
        </nav>
    );
};

export default Navbar;