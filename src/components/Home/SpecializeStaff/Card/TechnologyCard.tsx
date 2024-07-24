import Image from 'next/image'
import React from 'react'

const TechnologyCard = ({imagePath}:{imagePath:string}) => {
  return (
    <div>
        <Image src={imagePath} width={150} height={150} alt='tech pic'/>
    </div>
  )
}

export default TechnologyCard