import React from 'react';
import { navData } from '../data';

export default function Nav() {
  return (
    <nav className='w-full h-full'>
    <ul className='h-full flex flex-col justify-center items-center gap-y-6'>
    {navData.map((item,i)=>{
      return(
          <li key={i}>
          <a href={item.href} className='text-xl capitalize font-primary italic hover:text-dark transition-all duration-300'>{item.name}</a>
          </li>
      )
    })}
    </ul>
    </nav>
  )
}

