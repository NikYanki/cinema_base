import React from 'react';
import {Header} from "../../components/Header/Header";
import {useSelector} from "react-redux";

const NotFoundPage = () => {
    const {darkMode} = useSelector(state => state.theme);
    return (
        <div className={darkMode ? "dark-style" : "light-style"}>
            <Header/>
            <h1>oops!not found: 404</h1>
        </div>
    );
};

export {NotFoundPage}
