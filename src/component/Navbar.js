import React from 'react';

const Navbar = ({title}) =>{
    return (  
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <a className="navbar-brand" href="#">{title}</a>
        </div>
    </nav>)
}

export default Navbar;