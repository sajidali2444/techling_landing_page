'use client'
import Image from 'next/image'
import {navLinks} from '@/constants/navLinks'
import Link from 'next/link'
import { useState } from 'react'


const HomeNavbar = () => {
  const [activeLink,setActiveLink] = useState(0)
  return (
    <div>
        {/* navbar main div */}
        <header className='p-5 flex justify-evenly items-center'>
        {/* image div  */}
        <div>
            <Image src={'/images/mainlogo.png'} width={100} height={60} alt='Techling Logo'/>
        </div>

{/* navigation buttons div  */}
<nav className='flex gap-10'>
      {navLinks.map((ele,ind)=><Link key={ind} href={ele.href} className={`text-sm ${activeLink==ele.id?'text-[var(--primary-color)]':''}`}>
        {ele.title}
      </Link>)}
</nav>


{/* get in touch button div  */}
<div>
<Link className='rounded-md bg-[var(--primary-color)] text-white px-5 py-2' href={'#'}>
Get In Touch
</Link>
</div>

        </header>
    </div>
  )
}

export default HomeNavbar