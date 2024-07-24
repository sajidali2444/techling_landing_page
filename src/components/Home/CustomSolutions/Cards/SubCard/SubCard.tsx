'use client'
import { SubCardProps } from '@/types/SubCardType'
import React, { useState } from 'react'
import BlueArrow from '../../../../../../public/svgs/blueArrow'
import Image from 'next/image'

const SubCard = ({reverse,cardTitleColored,cardTitle,quesArray,image}:SubCardProps) => {
    const [selectedQues,setSelectedQues] = useState<number | null>(0)
  return (
    <section className='px-20'>       
        {/* card main div  */}
        <div className={`bg-[var(--background-light)] flex ${reverse?'flex-row-reverse':''}`}>
            <div className='flex-1 flex flex-col gap-10 px-10 mt-5'>

                <div>
                    <p className='text-3xl'> <span className='text-[var(--primary-color)] font-semibold'>{cardTitleColored}</span> {cardTitle}</p>
                </div>
                {/* arraymaping  */}
                <div className='flex flex-col gap-5'>
                        {quesArray.map((element,index)=> <div onClick={()=>setSelectedQues(selectedQues==index?null:index)} className=''> <div key={index} className='flex gap-3 items-center cursor-pointer'>
                            <p className={`${selectedQues==index?"":'rotate-180'} transition-all duration-200`}>
                            <BlueArrow/>
                            </p>
                            <p className='font-semibold text-lg'>{element.title}</p>
                        </div>
                            <p className={`${selectedQues==index?"block":'hidden'} pl-8 text-sm transition-all duration-500`}>{element.message}</p>
                        </div>)}
                </div>

            </div>
            <div className='flex-1'>
                <Image src={image} width={100} height={100} className='w-full h-full' alt={image}/>
            </div>
        </div>

    </section>
  )
}

export default SubCard