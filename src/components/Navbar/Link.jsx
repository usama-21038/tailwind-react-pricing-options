import React from 'react';

const Link = ({route}) => {
    return (
       <li className='mr-10 px-4 hover:bg-amber-300 hover:text-black'>
        <a href={route.path}>{route.name}</a>
       </li>
    );
};

export default Link;