import React, {useState, useEffect} from 'react'
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import Navbar from './Navbar';
import Modal from './Modal';
import Table from './Table';
import {searchMovie, searchMovieDetail} from '../api/omdb';



export default () =>{
    const [keyword, setKeyword] = useState('avengers');
    const [movies, setMovies] = useState([]);
    const [modalMovie, setModalMovie] = useState('');

    const onInputChange = (keyword) =>{
        setKeyword(keyword);
    }

    const onDetailClick = (imdbID) =>{
        console.log(imdbID);
        searchMovieDetail(imdbID)
        .then((result)=>{
            setModalMovie(result.data);
        })
        .catch((err) =>{
            console.log(err);
        })
        
    }
    useEffect(()=>{
        console.log(keyword);
        console.log(movies);
        if(keyword && !movies.Search){
            console.log("keyword && !movies.length");
            searchMovie(keyword)
            .then((result)=>{
                setMovies(result.data);
            }).catch((err)=>{
                console.log(err);
            })
        }else{
            console.log("else timout");
            const timeoutId = setTimeout(()=>{
                if(keyword){
                    searchMovie(keyword)
                    .then((result)=>{
                        setMovies(result.data);
                    }).catch((err)=>{
                        console.log(err);
                    })
                }
            }, 500)

            return ()=>{
                clearTimeout(timeoutId);
            }
        }
      
    }, [keyword]);


    return( <div>
            <Navbar title = "OMDB API"/>
                <div className = "mt-3 container">
                    <SearchBar onInputChange = {onInputChange} buttonText = "Search" placeholder = "Search Movie"/>
                    <MovieList onDetailClick = {onDetailClick} movies = {movies} />
                    <Modal>
                        <Table movie = {modalMovie}/>
                    </Modal>
                </div>  
            </div>);
}