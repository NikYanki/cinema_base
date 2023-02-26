import React from 'react';
import"./App.css"

import {Layout} from "./components/Layout/Layout";
import {Navigate, Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage/HomePage";
import {MovieDetailsPage} from "./pages/MovieDetailsPage/MovieDetailsPage";
import {NotFoundPage} from "./pages/NotFoundPage/NotFoundPage";

const App = () => {

    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<Navigate to={"home"}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
            </Route>
            <Route path={'movies/:id'} element={<MovieDetailsPage/>}/>
            <Route path={'*'} element={<NotFoundPage/>}/>
        </Routes>
    );
};
export {App}


