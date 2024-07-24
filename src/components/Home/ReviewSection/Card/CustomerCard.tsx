import Image from 'next/image'
import React from 'react'
import PersonCard from './PersonCard'

const CustomerCard = () => {
  return (
    <div>
        {/* main div with content  */}

        <div className='flex gap-20'>
            {/* content div  */}
<div className='flex-1 flex justify-center items-center'>
    <p className='font-semibold text-3xl w-[70%]'>
Techling is loved by thousands of customers worldwide and trusted by major companies
    </p>
</div>
<div className='flex-1 flex gap-2'>
<Image src={'/images/reviewsection/quotespic.png'} width={50} height={50} alt='Quotes pic' className='h-8 w-8'/>
<div className='flex flex-col gap-2 mt-4'>
{/* images div  */}
<div className='flex gap-2'>
    <Image src={'/images/reviewsection/star.png'} width={20} height={20} alt='star pic'/>
    <Image src={'/images/reviewsection/star.png'} width={20} height={20} alt='star pic'/>
    <Image src={'/images/reviewsection/star.png'} width={20} height={20} alt='star pic'/>
    <Image src={'/images/reviewsection/star.png'} width={20} height={20} alt='star pic'/>
    <Image src={'/images/reviewsection/star.png'} width={20} height={20} alt='star pic'/>
</div>
<div>
    <p className='text-[var(--text-light)]'>
    "Thanks to Techling (Private) Limited, the client's customer count has grown 24 times, and they have onboarded three enterprise partners since the web app's launch. Techling (Private) Limited's team is exceptionally talented and takes pride in their work, allowing them to deliver quality outputs."
    </p>
</div>
{/* person div  */}
<div className='flex gap-4 justify-between items-center mt-4'>
    {/* arrow  */}
    <p>{"<"}</p>
    {/* person card  */}
    <PersonCard/>
    {/* active arrow div  */}
    <p className='px-4 py-2 text-lg flex justify-center items-center bg-[var(--primary-color)] rounded-full text-white'>{">"}</p>
</div>
</div>
</div>
        </div>
    </div>
  )
}

export default CustomerCard