import Image from 'next/image';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'
import imgqw from "../../../public/P.png"

const Navbar = () => {

    const CustomLink = ({href, title, className=""}) => {

       
        return(
            <>
            <Link href={href} className={`${className} relative group hover:text-red-600`} >{title}
            
            
            </Link>

            
            </>
        )

    }




  return (
    <header className='w-full !pl-8 px-32 py-3  font-medium flex items-center justify-between bg-light border border-s-orange-50'>
        <nav>
            <Link href={`/`} >
        
               <h1 className='text-black text-2xl font-bold'>PANDAFILMS</h1>
            </Link>
        </nav>

        <nav className=''>
            <CustomLink href="/" title="Home" className='mr-3 font-semibold'/>
            <CustomLink href="/about" title="About" className='mx-3 font-semibold'/>
            <CustomLink href="/movie" title="Movie" className='mx-3 font-semibold'/>
            <CustomLink href="/contacts" title="Contacts" className='ml-3 font-semibold'/>
            
        </nav>

    </header>
  )
}

export default Navbar