import Image from 'next/image'
import React from 'react'
import Qa from "../../../public/Q.png"
import Link from 'next/link'

const HeroScn = ({title}) => {
  return (
    <div className='flex'>

        <div className='flex flex-col w-[50%] items-start pl-40 pt-40'>
            <h1 className='capitalize text-bold text-4xl text-dark shadow-lg'>
                {title}
                
            </h1>
            <p className='capitalize text-xs font-semibold my-3 w-70%]'>
            From award-winning Dramas to blockbuster action movies ve got you covered. Browse our
selection Of the latest and greatest movies. and find your new favorite 
            </p>
            
            <Link href={`/movie`} className='bg-black rounded-full text-white font-semibold p-3 hover:bg-white hover:text-black'>
                Explore movies
            </Link>

        </div>
        <div className='w-[50%] pt-14 pl-24 relative left-10'>
            <Image src={Qa} alt='hi' width={400} height={400} />
        </div>
    </div>
  )
}

export default HeroScn
