import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {searchFilmService} from "../../../services";

const initialState = {
    searchMovies: [],
    loading: null,
    error: null
};

const getMoviesBySearch = createAsyncThunk(
    'searchFilmSlice/getMoviesBySearch',
    async ({search}, {rejectWithValue}) => {
        try {
            const {results} = await searchFilmService.getBySearch(search)
            return results
        } catch (e) {
            rejectWithValue(e)
        }
    });

const searchFilmSlice = createSlice(
    {
        name: 'searchFilmSlice',
        initialState,
        reducers: {},
        extraReducers: builder => builder
            .addCase(getMoviesBySearch.pending, (state) => {
                state.loading = true
            })
            .addCase(getMoviesBySearch.fulfilled, (state, action) => {
                state.searchMovies = action.payload
                state.loading = false

            })
            .addCase(getMoviesBySearch.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false

            })
    });

const {reducer: searchReducer} = searchFilmSlice;

const searchActions = {
    getMoviesBySearch,
};

export {
    searchActions,
    searchReducer
};
