import { EngagementMessageArr } from '@/constants/engagementMessage'
import React from 'react'
import BracketSVG from '../../../../public/svgs/bracketSvg'
import Image from 'next/image'
import Link from 'next/link'

const EngagementModel = () => {
  return (
    <section className='px-20 my-14'>
        {/* text divs  */}
        <div className='flex flex-col gap-3 items-center'>
            <h3 className='text-[var(--secondary-color)] font-bold text-5xl text-center'>
            Our engagement model
            </h3>
            <p className='text-center w-[70%] text-[var(--text-light)]'>
            We’re genuine team augmentation partners. Preparation, open-mindedness, and transparency are keys to scaling your team fast with the best-fit offshore developers
            </p>
            {/* maping the models  */}
            <div className='flex gap-5 mt-8'>
                {EngagementMessageArr.map((item,index)=><div key={index} className='flex-1 flex gap-6 justify-center'> 
                  <div className='flex flex-col gap-4 items-center'>
                    <Image src={item.icon} width={60} height={60} alt={item.title}/>
                  <p className='w-[70%] text-center font-semibold'>
                  {item.title}
                  </p>
                  <p className='text-center'>
                  {item.message}
                  </p>
                </div>
                <div className='flex-1'> 
                <BracketSVG/>
                </div>
                </div>)}
            </div>

{/* lets connect button div  */}
<div className='mt-5'>
  <button className='px-8 py-2 rounded-full bg-[var(--primary-color)] text-white'><Link href={'#'}>Let's Connect</Link></button>
</div>
   </div>
    </section>
  )
}

export default EngagementModel