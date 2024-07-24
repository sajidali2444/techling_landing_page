import Image from 'next/image'
import React from 'react'

const PersonCard = () => {
  return (
    <div>
        <div className='flex gap-3'>
<Image src={'/images/reviewsection/chexaiceo.png'} width={50} height={50} alt='Ai Owner'/>
<div className='flex flex-col gap-2'>
    {/* name  */}
    <h3 className='font-semibold text-lg'>Muhammad Dhamrah</h3>
    <p className='text-[var(--text-light)] text-sm'>CEO | Chex.AI</p>
</div>
        </div>
        <div className='flex gap-4 mt-6'>
<div className='h-3 w-3 bg-[var(--primary-color)] rounded-full '></div>
<div className='h-3 w-3 bg-[var(--background-light)] rounded-full '></div>
<div className='h-3 w-3 bg-[var(--background-light)] rounded-full '></div>
<div className='h-3 w-3 bg-[var(--background-light)] rounded-full '></div>
<div className='h-3 w-3 bg-[var(--background-light)] rounded-full '></div>
        </div>
    </div>
  )
}

export default PersonCard