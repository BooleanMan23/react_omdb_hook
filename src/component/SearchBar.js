import React from 'react';

const SearchBar = (props) =>{
    return (  
    <div class="row mt-3 justify-content-center">
        <div class="col-8">
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder={props.placeholder} id="search-input"/>
                <div class="input-group-append">
                <button class="btn btn-outline-dark" type="button" id="search-button">{props.buttonText}</button>
                </div>
            </div>
        </div>
    </div>)
}

export default SearchBar;