import React from 'react'
import { Link } from "react-router-dom";
import Auth from './Auth';

const NavBar = () => {
    return (
        <div className="ui menu">
                <Link to="/">
                    <div className="item">Plantly</div>
                </Link>
            <div className="right menu">
                <Link to="/">
                    <div className="item ui olive basic button">
                    <Auth />
                    </div>
                </Link>

                <Link to="/create">
                <div className="item ui grey basic button">New Plant</div>
                </Link>
            </div>
            
        </div>
    )
}

export default NavBar