import { MainCardTextProps } from '@/types/mainCardTextType'
import React from 'react'

const MainCardText = ({title,subTitle,message}:MainCardTextProps) => {
  return (
    // main div 
    <div className='-ml-14'>
        {/* div with content  */}
        <div className='p-5 bg-[var(--background-light)] flex flex-col '>
                {/* title tag p  */}
                <h3 className='text-[var(--primary-color)] font-semibold text-lg'>{title}</h3>
                <h6 className='font-semibold'>{subTitle}</h6>
                <p className='text-sm mt-2'>{message}</p>
        </div>
    </div>
  )
}

export default MainCardText