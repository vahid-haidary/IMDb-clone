export default async function MoviePage({ params }) {
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  const movie = await res.json();

  const defaultImgUrl = "/no-photos.svg";
  const imgUrl = movie.backdrop_path || movie.poster_path;


  return (
    <div className="w-full mt-9">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6 gap-3">
        <img
          src={
            imgUrl
              ? `https://image.tmdb.org/t/p/w500/${imgUrl}`
              : defaultImgUrl
          }
          className="rounded-lg h-[300px] w-[530px] max-w-[535px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
          style={{ maxWidth: "100%" }}
        ></img>
        <div className="p-2 max-h-[300px] overflow-auto ">
          <h2 className="text-xl mb-3 font-bold">
            {movie.title || movie.name}
          </h2>
          <p className="text-lg mb-3">{movie.overview}</p>
          <p className="mb-3">
            <span className="font-semibold mr-1 text-lg">
              Date Released:
            </span>
            {` ${movie.release_date || movie.first_air_date}`}
          </p>
          <div className="font-bold flex items-center">
              <span className="font-semibold mr-1 text-lg bg-amber-600 rounded-md p-1">
                IMDb
              </span>
              <span className="text-2xl">
                {movie.vote_average ? `: ${movie.vote_average.toFixed(1)}` : 'N/A'}
              </span>
              &nbsp;&nbsp;/10
            </div>
        </div>
      </div>
    </div>
  );
}