import axios from 'axios';
const KEY = '89ceba30';

export const searchMovie =  async (keyword) =>{
    const response = await axios.get('http://www.omdbapi.com/', {
                params:{
                    s : keyword,
                    apikey : KEY
                }
    })
    return response;
}

export const searchMovieDetail =  async (imdbID) =>{
    const response = await axios.get('http://www.omdbapi.com/', {
                params:{
                    i : imdbID,
                    apikey : KEY
                }
    })
    return response;
}


