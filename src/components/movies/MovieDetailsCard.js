import React from "react";

const MoviesDetailsCard=(props)=>{
    
    const baseImageURL = `https://image.tmdb.org/t/p/w500`;

return(
<>
<div id="movie-card-list">
        <div
          className="movie-card"
          data-movie="Blade Runner"
          style={{
            backgroundImage: `url(${baseImageURL}${props.movie.poster_path})`,
          }}
        >
          <div className="movie-card__overlay"></div>
          <div className="movie-card__share">
          <button className="movie-card__icon">
              <i className="material-icons">save</i>
            </button>
            <button className="movie-card__icon">
              <i className="material-icons">&#xe253;</i>
            </button>
            <button className="movie-card__icon">
              <i className="material-icons">&#xe80d;</i>
            </button>
          </div>
          <div className="movie-card__content">
            <div className="movie-card__header">
              <h1 className="movie-card__title">{props.movie.title}</h1>
              {props.movie.genres && (
                <h4 className="movie-card__info">
                  {" "}
                  {` ${props.movie.genres[0]?.name || ""} ${
                    props.movie.genres[1]?.name || ""
                  } ${props.movie.genres[2]?.name || ""}`}
                </h4>
              )}
            </div>
            <p className="movie-card__desc">{props.movie.overview}</p>
            <button
              className="btn btn-outline movie-card__button"
              type="button"
            >
              Watch Trailer
            </button>
          </div>
        </div>
      </div>
</>
)
}

export default MoviesDetailsCard;