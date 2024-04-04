import { useEffect, useState } from "react";
import searchIcon from "./search.svg";
import "./App.css";
import MovieCard from "./components/MovieCard";
import { CirclesWithBar } from "react-loader-spinner";

function App() {
  const [movies, setMovies] = useState("");
  const [searchedMovie, setSearchedMovie] = useState("");

  const searchMovieHandler = (e) => {
    setSearchedMovie(e.target.value);
    console.log(e.target);
  };

  const movieHandler = () => {
    fetchMovie(searchedMovie);
  };

  const fetchMovie = async (movie) => {
    const movies = await fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=6d071c82&s=${movie}`
    );
    const res = await movies.json();
    console.log(res);
    setMovies(res.Search);
  };

  useEffect(() => {
    fetchMovie("Spider Man");
  }, []);

  if (!movies) {
    return (
      <div className="flex items-center justify-center">
        <CirclesWithBar
          height="100"
          width="100"
          color="#4fa94d"
          outerCircleColor="#4fa94d"
          innerCircleColor="#4fa94d"
          barColor="#4fa94d"
          ariaLabel="circles-with-bar-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }
  console.log(movies);
  return (
    <div className="container flex flex-col text-center justify-center p-6 lg:p-16">
      <h1 className="text-4xl lg:text-7xl font-bold text-orange-100 workbench-pp tracking-wide leading-10 mb-10">
        MoviesFlix
      </h1>
      <div className="w-[100%] lg:w-[70%] m-auto relative p-4  shadow-lg rounded-full bg_color">
        <input
          placeholder="Search for movies"
          className="bg-inherit block w-full rounded-md border-none outline-none py-1.5 pl-7 pr-20 text-gray-400 text-xl lg:text-2xl placeholder:text-gray-400 placeholder:text-xl sm:leading-6"
          onChange={searchMovieHandler}
          xl
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <img
            src={searchIcon}
            className="p-4 cursor-pointer"
            alt="searchIcon"
            onClick={movieHandler}
          />
        </div>
      </div>
      {movies?.length > 0 ? (
        <div className="mt-20 lg:mt-32">
          <div className="m-auto">
            <div className="md:grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
              {movies.map((movie) => (
                <MovieCard key={movie.Title} movie={movie} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center mt-20">
          <span className="font-bold text-3xl text-orange-200 noto-sans-pp">
            Movie not found!
          </span>
        </div>
      )}
    </div>
  );
}

export default App;

