import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CirclesWithBar } from "react-loader-spinner";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  // console.log(imdbID);

  useEffect(() => {
    const fetchMovie = async () => {
      const movie = await fetch(
        `https://www.omdbapi.com/?i=${imdbID}&apikey=6d071c82`
      );
      const res = await movie.json();

      setMovieDetails(res);
      console.log("data", res);
    };

    fetchMovie();
  }, [imdbID]);

  if (!movieDetails) {
    return (
      <div className=" flex items-center justify-center">
        <CirclesWithBar
          height="100"
          width="100"
          color="#4fa94d"
          outerCircleColor="#4fa94d"flex
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

  return (
    <React.Fragment>
      {movieDetails && (
        <section className="text-gray-600  body-font overflow-hidden noto-sans-pp ">
          <div className="container px-5 py-24 mx-auto ">
            <div className="lg:w-4/5 mx-auto flex flex-wrap p-4 bg-customGray  rounded-md">
              <img
                alt={movieDetails.Title}
                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src={movieDetails.Poster}
              />
              <div className="lg:w-1/2 w-full p-2 md:p-4 lg:p-4 mt-6 lg:mt-0 text-gray-200 text-xl lg:text-2xl leading-10">
                <h1 className="text-gray-200 text-2xl lg:text-3xl title-font font-bold mb-1">
                  {movieDetails.Title}
                </h1>
                <div className="mt-12">
                  <strong>📆 Released Year:</strong> {movieDetails.Released}
                </div>
                <div className="mt-1">
                  <strong>👥 Actors:</strong> {movieDetails.Actors}
                </div>
                <div className="mt-1">
                  <strong>🎬 Director:</strong> {movieDetails.Director}
                </div>
                <div className="mt-1">
                  <strong>🎭 Genre:</strong> {movieDetails.Genre}
                </div>
                <div className="mt-1">
                  <strong>✍️ Writer:</strong> {movieDetails.Writer}
                </div>
                <div className="mt-1">
                  <strong>🗺️ Language:</strong> {movieDetails.Language}
                </div>
                <div className="mt-1">
                  <strong>⏰ Duration:</strong> {movieDetails.Runtime}
                </div>
                <div className="mt-1">
                  <strong>📝 Story:</strong> {movieDetails.Plot}
                </div>
                <div className="mt-1">
                  <strong>🌍 Country:</strong> {movieDetails.Country}
                </div>
                <div className="mt-1">
                  <strong>⭐ IMDB Rating:</strong> {movieDetails.imdbRating}
                </div>
                <div className="mt-1">
                  <strong>👍 IMDB Votes:</strong> {movieDetails.imdbVotes}
                </div>
                <div className="mt-1">
                  <strong>💰 Box Office collection:</strong>{" "}
                  {movieDetails.BoxOffice}
                </div>
                <div className="mt-1">
                  <strong>🏆 Awards:</strong> {movieDetails.Awards}
                </div>
                <div className="mt-1">
                  <strong>
                    ⭐ Ratings by {movieDetails.Ratings[1].Source}:
                  </strong>{" "}
                  {movieDetails?.Ratings[1]?.Value}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </React.Fragment>
  );
};

export default MovieDetail;
