import image4 from "../../assets/image 4.png";
import image5 from "../../assets/image 5.png";
import image6 from "../../assets/image 6.png";
import image8 from "../../assets/image 8.png";
import image9 from "../../assets/image 9.png";
import image10 from "../../assets/image 10.png";
import "./Movies.css";

const Movies = () => {
  return (
    <main className="movies">
      <div className="movies__container">
        <img src={image4} alt="" />
        <div className="movie__info">
          <h3>Movie Title</h3>
          <div className="movie__results">
            <p className="movie__genre">
              <span className="red__subGroup">Genre: </span>
              Action-Adventure, Science Fiction
            </p>
            <p className="movie__date">
              <span className="red__subGroup">Release Date: </span>
              13th December 2016
            </p>
            <p className="movie__director">
              <span className="red__subGroup">Director: </span>
              Gareth Edwards
            </p>
          </div>
        </div>
      </div>
      <div className="movies__container">
        <img src={image5} alt="" />
        <div className="movie__info">
          <h3>Movie Title</h3>
          <div className="movie__results">
            <p className="movie__genre">
              <span className="red__subGroup">Genre: </span>
              Action-Adventure, Science Fiction
            </p>
            <p className="movie__date">
              <span className="red__subGroup">Release Date: </span>
              13th December 2016
            </p>
            <p className="movie__director">
              <span className="red__subGroup">Director: </span>
              Gareth Edwards
            </p>
          </div>
        </div>
      </div>
      <div className="movies__container">
        <img src={image6} alt="" />
        <div className="movie__info">
          <h3>Movie Title</h3>
          <div className="movie__results">
            <p className="movie__genre">
              <span className="red__subGroup">Genre: </span>
              Action-Adventure, Science Fiction
            </p>
            <p className="movie__date">
              <span className="red__subGroup">Release Date: </span>
              13th December 2016
            </p>
            <p className="movie__director">
              <span className="red__subGroup">Director: </span>
              Gareth Edwards
            </p>
          </div>
        </div>
      </div>
      <div className="movies__container">
        <img src={image8} alt="" />
        <div className="movie__info">
          <h3>Movie Title</h3>
          <div className="movie__results">
            <p className="movie__genre">
              <span className="red__subGroup">Genre: </span>
              Action-Adventure, Science Fiction
            </p>
            <p className="movie__date">
              <span className="red__subGroup">Release Date: </span>
              13th December 2016
            </p>
            <p className="movie__director">
              <span className="red__subGroup">Director: </span>
              Gareth Edwards
            </p>
          </div>
        </div>
      </div>
      <div className="movies__container">
        <img src={image9} alt="" />
        <div className="movie__info">
          <h3>Movie Title</h3>
          <div className="movie__results">
            <p className="movie__genre">
              <span className="red__subGroup">Genre: </span>
              Action-Adventure, Science Fiction
            </p>
            <p className="movie__date">
              <span className="red__subGroup">Release Date: </span>
              13th December 2016
            </p>
            <p className="movie__director">
              <span className="red__subGroup">Director: </span>
              Gareth Edwards
            </p>
          </div>
        </div>
      </div>
      <div className="movies__container">
        <img src={image10} alt="" />
        <div className="movie__info">
          <h3>Movie Title</h3>
          <div className="movie__results">
            <p className="movie__genre">
              <span className="red__subGroup">Genre: </span>
              Action-Adventure, Science Fiction
            </p>
            <p className="movie__date">
              <span className="red__subGroup">Release Date: </span>
              13th December 2016
            </p>
            <p className="movie__director">
              <span className="red__subGroup">Director: </span>
              Gareth Edwards
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Movies;
