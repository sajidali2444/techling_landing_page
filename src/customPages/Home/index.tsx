import CustomSolutions from '@/components/Home/CustomSolutions'
import EngagementModel from '@/components/Home/EngagementModel'
import HeroSection from '@/components/Home/Hero'
import PartnerSection from '@/components/Home/PartnerSection'
import ReviewSection from '@/components/Home/ReviewSection'
import SpecializeStaff from '@/components/Home/SpecializeStaff/SpecializeStaff'
import React from 'react'

const HomePage = () => {
  return (
    <div>    
      <HeroSection/>
      <PartnerSection/>
      <CustomSolutions/>
      <EngagementModel/>
      <SpecializeStaff/>
      <ReviewSection/>
    </div>
  )
}

export default HomePage