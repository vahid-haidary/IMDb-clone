
export default async function MoviePage({ params }) {
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  const movie = await res.json();

  return (
    <div className='w-full mt-9'>
      <div className='p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6 gap-3'>
        <img
          src={`https://image.tmdb.org/t/p/w500/${
            movie.backdrop_path || movie.poster_path
          }`}

          className='rounded-lg h-[300px]'
          style={{ maxWidth: '100%' }}
        ></img>
        <div className='p-2 max-h-[300px] overflow-auto '>
          <h2 className='text-xl mb-3 font-bold'>
            {movie.title || movie.name}
          </h2>
          <p className='text-lg mb-3'>{movie.overview}</p>
          <p className='mb-3'>
            <span className='font-semibold mr-1 text-lg'>Date Released:</span>
            {` ${movie.release_date || movie.first_air_date}`}
          </p>
          <p className="font-bold">
            <span className='font-semibold mr-1 text-lg bg-amber-600 rounded-md p-1'>IMDb</span>
            {`: ${movie.vote_average.toFixed(1)} /10`}
          </p>
        </div>
      </div>
    </div>
  );
}
