// "use client"
import Image from "next/image";

import Link from "next/link";



const Movie = async () => {

  

  const url = process.env.RAPID_KEY;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fa61ebd167msh469c3c0172baf0cp1c225ejsn56ec52af9d74',
		'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
	}
};

const res = await fetch(url,options);
const data = await res.json();
const taha = data.titles;
console.log(taha)




  return (
    < >
    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 min-h-screen">
    <h1 className={`flex items-center justify-center text-4xl underline-offset-8 underline text-black font-bold py-8`}>MOVIES & SERIES</h1>
    
    <div  className="flex flex-wrap">
      {taha.map((abc) => (
        <>
        <Link class="w-1/4 rounded overflow-hidden px-3  py-2" href={`movie/${abc.jawSummary.id}`}>
        
  <img class="w-full" src={abc.jawSummary.backgroundImage.url} alt="Sunset in the mountains"/>
  <div class="px-6 py-6 text-black">
    <div class="font-bold text-xl mb-2">{abc.jawSummary.title}</div>
    <p class="text-gray-700 text-base">
    
    </p>
  </div>
  

</Link>
</>
        
      )
     ) }
    </div>
    
    </div>
    </>
  )
}

export default Movie