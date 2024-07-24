import { StaffCardProps } from '@/types/StaffTypes/staffCardType'
import Image from 'next/image'
import React from 'react'

const StaffCard = ({imagePath,title}:StaffCardProps) => {
  return (
    <div className='bg-white rounded-lg px-5 py-3 border-l-[10px] border-l-[var(--primary-color)] flex items-center gap-10'>
<Image src={imagePath} width={45} height={45} alt={title}/>
<p className='font-semibold text-lg'>{title}</p>
    </div>
  )
}

export default StaffCard