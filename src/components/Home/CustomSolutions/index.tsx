import React from 'react'
import MainCard from './Cards/MainCard/MainCard'
import SubCard from './Cards/SubCard/SubCard'
import { greatAdvantages, greatValues } from '@/constants/customSolutionArrays'

const CustomSolutions = () => {
  return (
    <section className='mt-14'>
        {/* custom solution text div  */}
        <div>
            <div className='flex justify-center'>
                <div className='flex flex-col gap-5'>
            <p className='text-[var(--secondary-color)] text-5xl font-bold'>Custom solutions for your tech challenges</p>
            <p className='text-center'>Let's tackle your digital hurdles together, with a tailored solution for your specific needs.</p>
                </div>
            </div>
            {/* solution card component  */}
            <div className='flex flex-col gap-5'>
                <MainCard/>
                <SubCard reverse={false} quesArray={greatAdvantages} image='/images/subCardPic1.png' cardTitleColored={'Great'} cardTitle={'Advantages'}/>
                <SubCard reverse={true} quesArray={greatValues} image='/images/subCardPic2.png' cardTitleColored={'Great'} cardTitle={'Values'}/>
            </div>
        </div>
    </section>
  )
}

export default CustomSolutions