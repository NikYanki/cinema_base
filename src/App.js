import "./App.css"

import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {Layout} from "./components";
import {
    GenresPage,
    HomePage,
    MovieDetailsPage,
    MoviesByGenrePage,
    MoviesListPage,
    MyProfilePage,
    NotFoundPage
} from "./pages";

const App = () => {

    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
            </Route>
            <Route path={'genres'} element={<GenresPage/>}>
                <Route path={':id'} element={<MoviesByGenrePage/>}/>
            </Route>
            <Route path={'moviesList'} element={<MoviesListPage/>}/>
            <Route path={'myProfile'} element={<MyProfilePage/>}/>
            <Route path={'movies/:id'} element={<MovieDetailsPage/>}/>
            <Route path={'*'} element={<NotFoundPage/>}/>
        </Routes>
    );
};

export {App}


