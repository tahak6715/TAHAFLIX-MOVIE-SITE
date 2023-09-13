import Image from 'next/image'
import HeroScn from './components/HeroScn'
import Loading from './loading'

export default function Home() {
  return (
    <div className='bg-gradient-to-r from-violet-500 to-fuchsia-500 min-h-screen'>
 <HeroScn title={`LETS WATCH MOVIE TOGETHER`}/>
 <Loading/>
 </div>
  )
}
