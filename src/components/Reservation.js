import React, { useState } from 'react';
import { reservationData } from '../data';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import '../timepicker.css';
import { FaUser, FaCalendar, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../variants';

export default function Reservation() {
  const { title, subtitle, modelImg, btnText } = reservationData;
  const [startDate, setStartdate] = useState(new Date)

  const [value, setValue] = useState('04:15')
  return (
    <section className='relative top-96 z-30 pb-20 lg:py-[100px]'>

      <div className='container mx-auto'>
        <motion.div 
        variants={staggerContainer} initial='hidden' whileInView={'show'} 
        className='text-center'>
          <motion.h2  variants={fadeIn('up', 'tween', 0.2,1.6)} className='h2 capitalize'>{title}</motion.h2>
          <motion.p  variants={fadeIn('up', 'tween', 0.4,1.6)} className='mb-8 text-dark'>{subtitle}</motion.p>
          <div className='flex justify-center mb-8'>
          <img src={modelImg} alt=''/>
          </div>
        </motion.div>
        <motion.form  variants={fadeIn('up', 'tween', 0.7,1.6)} initial='hidden' whileInView={'show'}  >
          <div className='flex flex-col lg:flex-row gap-y-4 items-center justify-between mb-8 gap-x-2'>
            <div className=''>
              <div className='flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3'>
                <FaCalendar />
                <div>Choose Date</div>
              </div>
              <DatePicker className='input' selected={startDate} onChange={(date) => setStartdate(date)} />
            </div>
            <div>
              <div className='flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3'>
                <FaClock />
                <div>Choose Time</div>
              </div>
              <TimePicker className='input' clearIcon={false} clockIcon={false} onChange={setValue} value={value} />
            </div>
            <div>
              <div className='flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3'>
                <FaUser />
                <div> How Many people?</div>
              </div>
              <input className='input' type='text' placeholder='1' />
            </div>
          <div className='max-w-[316px] mx-auto flex justify-center items-center mt-7 '>
          <button className='btn capitalize w-full lg:w-auto'>{btnText}</button>
          </div>
          </div>

        </motion.form>
      </div>
    </section>
  )
}

