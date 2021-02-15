import React from 'react';

const MovieList = (props) =>{
    const renderMovies = (movies) =>{
        if(movies.Response === "False"){
            return (
                <h3 className="mx-auto">No Results!</h3>
            )
        }else if(movies.Response === "True"){
           return movies.Search.map((movie) =>{
               return (
                <div key = {movie.imdbID} className = "col-md-4"> 
                             <div className="card mb-3" >
                             <img className="card-img-top" src={movie.Poster} alt="Card image cap"/>
                                 <div className="card-body">
                                     <h5 className="card-title">{movie.Title}</h5>
                                     <a onClick =  {()=>onDetailClick(movie.imdbID)} href = "#" data-toggle="modal" data-target="#movieModal" className="card-link see-detail">See Detail</a>
                                 </div>
                             </div>
                    </div>
               )
           })
        }else{
            return (
                <div></div>
            )
        }
    } 

    const onDetailClick = (imdbID) =>{
        props.onDetailClick(imdbID);
    }
    
    return ( <div className="row" id="movie-list">
                {renderMovies(props.movies)}
             
            </div>
            );
}

export default MovieList;