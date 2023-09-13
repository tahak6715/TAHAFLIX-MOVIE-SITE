import Image from 'next/image';
import React from 'react'

const MovieA = async ({params}) => {
    const id = params.id;

    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fa61ebd167msh469c3c0172baf0cp1c225ejsn56ec52af9d74',
		'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
	}
};

const res = await fetch(url,options);
const data = await res.json();
const taha = data[0].details.genres;
console.log(data[0].details)


  return (
    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 min-h-screen pt-28 pl-24 flex">
        <div>
    <h1 className='text-4xl font-bold'>
        {data[0].details.title}

    </h1>
    <h2 className='font-semibold w-[50%] py-6'>
        {data[0].details.synopsis}
    </h2>
    <h3 className='flex'>
        {taha.map((arr) => (
            <p className='bg-black p-2 text-white font-medium mx-1 rounded-full' key={arr.id}>
                {arr.name}
            </p>

        ))}
    </h3>
    </div>
    <div className='pt-6 relative -left-20 '>
        <Image className='rounded-2xl' src={data[0].details.backgroundImage.url} alt='movie_image' width={500} height={400}/>
    </div>

    </div>
  )
}

export default MovieA
