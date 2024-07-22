"use client"
import Link from 'next/link';
import { FiThumbsUp } from 'react-icons/fi';
import LazyLoad from 'react-lazy-load';

export default function Card({ result }) {
  return (
    <div className='group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200'>
      <Link href={`/movie/${result.id}`}>

      <LazyLoad >
        <img
          src={`https://image.tmdb.org/t/p/w300/${
            result.backdrop_path || result.poster_path
            }`}
            className='sm:rounded-t-lg group-hover:opacity-60 transition-opacity duration-300 max-sm:w-full '
            alt="Pic"
            ></img>
            </LazyLoad>

        <div className='p-2'>
          <h2 className='text-lg font-bold truncate'>
            {result.title || result.name}
          </h2>
          <p className='line-clamp-2 text-md'>{result.overview}</p>

          <div className='flex items-center justify-between  pt-4'>
            {result.release_date || result.first_air_date}

            <div className="flex gap-2 items-center">
            <FiThumbsUp className='h-5 ml-3' />
            {result.vote_count}
            </div>
            
          </div>

        </div>
      </Link>
    </div>
  );
}
