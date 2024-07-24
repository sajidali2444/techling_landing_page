import { imagesPaths } from '@/constants/partnerImages'
import Image from 'next/image'
import React from 'react'

const PartnerSection = () => {
  return (
    <section className='mt-80 flex flex-col gap-5'>
      {/* text div */}
      <div className='pt-10 flex justify-center'>
        <p>
        Discover global leaders who have partnered with us.
        </p>
      </div>

    {/* PARTNERS IMAGES DIV  */}
    <div className='flex justify-center'>
      <div className='flex gap-10'>
        {
          imagesPaths.map((item,index)=><Image key={index} src={item.path} width={150} height={150} alt={item.name} className={` ${index==imagesPaths.length-1?"": 'border-r-2 border-slate-400 pr-5'}`}/>)
        }
      </div>
    </div>

      </section>
  )
}

export default PartnerSection