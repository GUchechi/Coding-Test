import { useState, useEffect } from "react";
import Spinner from "../Spinner";
import "./Movies.css";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch("https://swapi.dev/api/films/");
      const data = await response.json();
      setMovies(data.results);
      setIsLoading(false);
    };
    fetchMovies();
  }, []);

   // Sort movies by release date
   const sortedMovies = [...movies].sort(
    (b, a) => new Date(a.release_date) - new Date(b.release_date)
  );


  return isLoading ? (
    <Spinner />
  ) : (
    <main className="movies">
      {sortedMovies.map((movie) => (
        <div className="movies__container" key={movie.episode_id}>
          <div className="movie__image--card">
            <img
              src={`https://starwars-visualguide.com/assets/img/films/${movie.episode_id}.jpg`}
              alt={movie.title}
              className="movie__image"
            />
          </div>
          <div className="movie__info">
            <h3>{movie.title}</h3>
            <div className="movie__results">
              <p className="movie__genre">
                <span className="red__subGroup">Genre: </span>
                {`Action-Adventure, Science Fiction`}
              </p>
              <p className="movie__date">
                <span className="red__subGroup">Release Date: </span>
                {movie.release_date}
              </p>
              <p className="movie__director">
                <span className="red__subGroup">Director: </span>
                {movie.director}
              </p>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Movies;
