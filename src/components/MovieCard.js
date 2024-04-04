import React, { useState } from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const [hover, setHover] = useState(false);
  //   const movieID = movie.imdbID;
  //   console.log(movie.imdbID);
  //   console.log(movie);
  return (
    <Link to={`/movie/${movie.imdbID}`}>
      <div
        className="md:w-[400px] lg:w-[400px] md:h-[580px] lg:h-[580px] mx-6 my-6 relative rounded-xl overflow-hidden shadow-lg transition cursor-pointer duration-400 ease-in-out transform hover:scale-105"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div
          className={`absolute top-0 left-0 w-full text-start text-orange-300 text-xl font-normal noto-sans-pp ${
            hover ? "opacity-1" : "opacity-0"
          } bg-gradient-to-b from-transparent to-gray-900 transition-opacity duration-400 ease-in-out`}
        >
          <p className="p-4 text-amber-100">{movie.Year}</p>
        </div>
        <div>
          <img
            src={movie.Poster}
            alt="bhbfhjbf"
            className={`w-full h-full opacity-100 ${
              hover ? "opacity-30" : ""
            } transition-opacity duration-400 ease-in-out`}
          />
        </div>
        <div
          className={`absolute bottom-0 left-0 right-0 text-start p-4 z-10 ${
            hover ? "bg-transparent" : "bg-customGray"
          } p-4 transition duration-400 ease-in-out`}
        >
          <span className="font-raleway uppercase text-xl tracking-wider font-normal text-gray-200">
            Movie
          </span>
          <h3 className="mt-1 font-bold text-3xl text-orange-200">
            {movie.Title}
          </h3>
        </div>
      </div>
    </Link>

    // <div className="w-[310px] h-[460px] rounded-xl shadow-md overflow-hidden mt-10">
    //   <img
    //     className="lg:h-[360px] md:h-36 w-full object-cover object-center"
    //     src="https://dummyimage.com/720x400"
    //     alt="blog"
    //   />
    //   <div className="p-6 bg-customGray text-start">
    //     <h2 className="tracking-widest text-xl title-font font-medium text-movie mb-1 ">
    //       MOVIE
    //     </h2>
    //     <h1 className="title-font text-3xl font-bold text-orange-200 mb-3">
    //       The Avengers
    //     </h1>

    //   </div>
    // </div>
  );
};

export default MovieCard;
