import React from 'react'
import CustomerCard from './Card/CustomerCard'

const ReviewSection = () => {
  return (
    <section className='px-20 my-14'>
        {/* picture with content div  */}
        <div className='reviewBackground h-[300px] rounded-lg flex items-center'>
<h2 className='text-white font-bold text-4xl text-center flex-1 flex justify-center'>Hire your Dream Web <br /> Development Team</h2>
        <div className='flex-1 flex justify-center'>
<button className='px-10 py-4 bg-[var(--primary-color)] text-white rounded-full'>Request Candidates</button>
        </div>
        </div>

<div className='mt-14'>
    <CustomerCard/>
</div>



    </section>
  )
}

export default ReviewSection