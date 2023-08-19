import React from 'react';
import { newsletterData } from '../data';

export default function Newsletter() {
  const {title,subtitle,placeholder,btnText} =newsletterData
  return (
    <div className='bg-none lg:bg-newsletter lg:bg-cover lg:h-[220px] bg-center lg:px-24 xl:bg-auto'>
    <div className='flex flex-col lg:flex-row justify-between items-center h-full'>
    <div className='text-center lg:text-left mb-4'>
    <h3 className='text-[26px]  font-primary italic text-white capitalize mb-2'>{title}</h3>
    <p>{subtitle}</p>
    </div>
    <form className='flex flex-col lg:flex-row lg:gap-x-[18px] gap-y-4'>
    <input type='text' className='input bg-transparent placeholder:font-light placeholder:text-white/20 text-white focus:ring-1 focus:ring-accent border border-white/20 transition-all' placeholder={placeholder}/>
    <button className='btn capitalize w-full lg:max-w-[204px]'>{btnText}</button>
    </form>
    </div>
    </div>
  )
}
