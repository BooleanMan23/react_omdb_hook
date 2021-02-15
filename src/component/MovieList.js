import React from 'react';

const MovieList = () =>{
    return ( <div className="row" id="movie-list">
                <div className = "col-md-4"> 
                    <div className="card mb-3" >
                    <img className="card-img-top" src="poster.jpg" alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Test Poster</h5>
                            <h6 className = "card-subtitle mb-2 text-muted" ></h6>
                            <a  href = "#" data-toggle="modal" data-target="#movieModal" className="card-link see-detail">See Detail</a>
                        </div>
                    </div>
                </div>
            </div>
            );
}

export default MovieList;