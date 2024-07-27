"use client"
import Link from 'next/link';
import { LiaImdb } from "react-icons/lia";
import LazyLoad from 'react-lazy-load';

export default function Card({ result }) {
  const defaultImgUrl = '/no-photos.svg';
  const imgUrl = result.backdrop_path || result.poster_path;

  return (
    <div className='flex flex-col group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200'>
      <Link href={`/movie/${result.id}`}>

      <LazyLoad >
        <img
          src={imgUrl ? `https://image.tmdb.org/t/p/w300/${imgUrl}` : defaultImgUrl }
            className='w-full h-[130px] text-center font-bold text-xl sm:rounded-t-lg group-hover:opacity-60 transition-opacity duration-300 max-sm:w-full  shadow-[0_3px_10px_rgb(0,0,0,0.2)] '
            alt=""
            ></img>
            </LazyLoad>

        <div className='p-2'>
          <h2 className='text-lg font-bold truncate pb-2'>
            {result.title || result.name}
          </h2>
          <p className='h-12 line-clamp-2 text-md'>{result.overview}</p>

          <div className='flex items-center justify-between font-bold pt-4'>
          {result.release_date && new Date(result.release_date).getFullYear()}
          {result.first_air_date && new Date(result.first_air_date).getFullYear()}

            <div className="flex gap-2 items-center">
            <LiaImdb  className='h-5 w-7 ml-3 bg-amber-600 rounded-md' />
            {result.vote_average.toFixed(1)}
            </div>
            
          </div>

        </div>
      </Link>
    </div>
  );
}
