import React from 'react';
import logo from '../../logo/logo.png'
import {ThemeToggle} from "../ThemeToggle/ThemeToggle";
import './Header.css'
import {useNavigate} from "react-router-dom";
import {SearchFilms} from "../searcComponents/SearchFilms/SearchFilms";

const Header = () => {
    const navigate = useNavigate()
    return (
        <div className="headerContainer">
            <img src={logo} alt="logo"/>
            <div className="barAndToggle">
                <ThemeToggle/>
                <div className="barContainer">
                    <button onClick={() => {navigate("/home")}}>Home</button>
                    <button onClick={() => {navigate("/moviesList")}}>All movies</button>
                    <button onClick={() => {navigate("/genres")}}>Genres</button>
                    <button>My profile</button>
                </div>
            </div>

        </div>
    );
};

export {Header};
