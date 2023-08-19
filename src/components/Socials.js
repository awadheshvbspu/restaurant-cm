import React from 'react';
import { socialData } from '../data';

export default function Socials() {
  return (
    <div className='flex gap-x-[10px]'>
    {socialData.map((item,i)=>{
      return(
        <a href={item.href} className='border border-white/20 rounded-full w-[35px] h-[35px] flex items-center justify-center text-lg hover:text-accent hover:border-accent transition-all'>{item.icon}</a>
      )
    })}
    </div>
  )
}

