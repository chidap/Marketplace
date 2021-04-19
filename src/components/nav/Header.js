import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    
    return (
        <nav className = "navbar navbar-dark bg-info" >
            <div className="container-fluid">
                <Link className = "navbar-brand" to = "/">Logo</Link>
                <div >
                    <ul className ="nav justify-content-end">
                    <Link className = "nav-link text-white" to = "/">Home</Link>
                    <Link className = "nav-link text-white" to = "/login">Login</Link>
                    <Link className = "nav-link text-white" to = "/register">Register</Link>
                    </ul>
                </div>
                
            </div>
        </nav>
    )
};

export default Header;