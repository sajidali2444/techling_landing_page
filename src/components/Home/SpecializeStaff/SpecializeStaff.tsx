import React from 'react'
import StaffCard from './Card/StaffCard'
import { SpecializedStaff } from '@/constants/StaffConstants/specializedStaffArray'
import { TechnologyStack } from '@/constants/StaffConstants/technologyStackArray'
import TechnologyCard from './Card/TechnologyCard'

const SpecializeStaff = () => {
  return (
    <section className='px-20 mt-5 bg-[var(--background-light)]'>
        {/* main div with color  */}
        <div className=''>
            {/* text div  */}
                <div className='pt-14 flex justify-center'>
                    <h2 className='text-5xl font-bold'>
                    We Provide Specialized Staff 
                    </h2>
                </div>

                {/* cards of staff  */}
                <div className='grid grid-cols-3 gap-y-8 gap-x-5 mt-5'>
                {SpecializedStaff.map((item,index)=><StaffCard key={index} imagePath={item.imagePath} title={item.title}/>)}
                </div>


{/* technology stack div  */}
<div className='pt-14 flex justify-center'>
<h2 className='text-5xl font-bold'>
Our Specialized Technology Stack
                    </h2>
</div>

{/* technology stack pics maping  */}
<div className='grid grid-cols-4 mt-10 place-items-center relative'>
    {TechnologyStack.map((item,index)=><TechnologyCard imagePath={item.imagePath} key={index}/>)}
    <p className='text-3xl font-bold absolute right-0'>{'>'}</p>
</div>



        </div>
    </section>
  )
}

export default SpecializeStaff