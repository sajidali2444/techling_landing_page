import Image from 'next/image'
import React from 'react'
import MainCardText from './MainCardText'


const MainCard = () => {
  return (
    <section>
        <div className='h-[550px] flex mt-10 items-center px-20'>
            {/* image div  */}
            <div className='h-full w-[45%]'>
                <Image src={'/images/solutionMainCardPic.png'} width={100} height={100} alt='solution image' className='h-full w-full'/>
            </div>
            {/* card text div  */}
            <div className='flex-1 flex flex-col gap-4'>
                <MainCardText title='End-to-End' subTitle='Your project, our expertis' message='From concept to deployment, our End-to-End services ensure that every detail is meticulously handled, delivering scalable, high-quality software solutions tailored to your business needs.'/>
                <MainCardText title='Staff Augmentation' subTitle='Scale your team with top talent' message='Enhance your team’s capabilities with our expert professionals. Our staff augmentation services provide the flexibility and expertise you need to meet your project goals efficiently.'/>
                <MainCardText title='Dedicated Teams' subTitle='Boost your project’s potential' message='Build and integrate a dedicated team of specialists for long-term projects that drive your company’s digital transformation'/>
            </div>
        </div>
    </section>
  )
}

export default MainCard