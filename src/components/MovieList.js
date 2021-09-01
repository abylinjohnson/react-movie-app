import React from "react";
const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;
  return (
    <>
      {props.movies.map((movies, index) => (
        <div className="d-flex justify-content-start m-3 movie-list image-container">
          <img src={movies.Poster} alt="movie"></img>
          <div
            onClick={() => props.handleFavouritesClick(movies)}
            className="overlay d-flex align-items-center justify-content-center"
          >
            <FavouriteComponent />
          </div>
        </div>
      ))}
    </>
  );
};
export default MovieList;
