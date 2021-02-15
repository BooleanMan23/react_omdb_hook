import React from 'react'
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import Navbar from './Navbar';
import Modal from './Modal';
import Test from './Test';
export default () =>{
                                                           
    return( <div>
            <Navbar title = "OMDB API"/>
                <div className = "mt-3 container">
                    <SearchBar buttonText = "Search" placeholder = "Search Movie"/>
                    <MovieList/>
                    <Modal/>
                </div>  
            </div>);
}