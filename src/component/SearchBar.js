import React from 'react';


const SearchBar = (props) =>{
    const onChangeInput = (keyword) =>{
        props.onInputChange(keyword);
    }
    return (  
    <div className="row mt-3 justify-content-center">
        <div className="col-8">
            <div className="input-group mb-3">
                <input onChange = {(e) => onChangeInput(e.target.value)} type="text" className="form-control" placeholder={props.placeholder} id="search-input"/>
                <div className="input-group-append">
                <button className="btn btn-outline-dark" type="button" id="search-button">{props.buttonText}</button>
                </div>
            </div>
        </div>
    </div>)
}

export default SearchBar;