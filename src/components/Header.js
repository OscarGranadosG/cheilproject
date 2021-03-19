import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (  
        <nav className= "navbar navbar-expand-lg navbar-dark bg-success justify-content-between">
            <div className="container">
                <h1 className="text-light">Hoteles (Cheil prueba)</h1>
                <Link to={'/create'} className="btn btn-danger d-block d-md-inline-block ml-4">
                    Agregar hotel &#43;
                </Link>
            </div>
            
        </nav>
    );
}
 
export default Header;