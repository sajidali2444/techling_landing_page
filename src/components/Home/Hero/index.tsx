import Image from 'next/image'
import React from 'react'
import TechlingWhiteLogo from '../../../../public/svgs/techlingWhiteLogo'

const HeroSection = () => {
  return (
    <section className='bg-gradient-to-r from-[#D1E5FF] to-[#FDEED6] h-[700px]'>
        <div className=' flex flex-col gap-5 pt-16'>
        {/* free trail div section  */}
        <div className='p-2 flex justify-center'>
            <p className='uppercase text-sm font-semibold'>
            we offer 1 month <span className='bg-[var(--main-yellow)] rounded-full text-white px-3 py-1'>FREE TRIAL</span> Pricing starts from <span className='text-[var(--primary-color)] font-bold'>$2000</span>
            </p>
        </div>

    {/* scale development section div  */}
    <div className='flex justify-center'>
        <p className='leading-tight text-5xl font-bold text-center'>Scale your <span className='text-[var(--primary-color)]'> Development Team </span>with <br /> top <span className='text-[var(--primary-color)]'> Software Engineers</span></p>
    </div>

    {/* boost team para div  */}
    <div className='flex justify-center'>
        <p className='w-[65%] text-center'>Boost your team's velocity with our highly skilled Engineers. We see around corners, create solutions for your problems, foster effective collaboration, and drive your projects forward</p>
    </div>

{/* input with connect button div  */}
<div className='flex justify-center mt-2'>
    <div className='w-[45%] bg-white h-12 rounded-full flex items-center'>
        <input type="text" placeholder='Email address' className='bg-transparent ml-5 outline-none grow'/>
        <button className='h-full px-10 font-semibold text-white bg-[var(--primary-color)] rounded-full'>
                Let's Connect
        </button>
    </div>
</div>

{/* video section  */}
<div className='flex justify-center mt-10'>
    <div className='w-[70%] h-[550px] bg-slate-500 rounded-md relative'>
        <Image src={'/images/videoPoster.png'} width={550} height={550} alt='video poster' className='w-full h-full'/>
    <p className='absolute left-10 top-10'>
        <TechlingWhiteLogo/>
    </p>
    </div>
</div>

    </div>
    </section>
  )
}

export default HeroSection