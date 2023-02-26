import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesByGenresService} from "../../../services";

const initialState = {
    pages:null,
    moviesByGenre: [],
    errors: null,
    loading: false
};

const getByGenreId = createAsyncThunk("moviesByGenreSlice/getByGenreId",
    async ({id,page}, {rejectWithValue}) => {
        try {
            return await moviesByGenresService.getByGenreId(id, page)
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    });

const moviesByGenreSlice = createSlice({
    name: "moviesByGenreSlice",
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getByGenreId.fulfilled, (state, action) => {
            state.moviesByGenre = action.payload.results
            state.pages =action.payload.total_pages
            state.loading = false
        })
        .addCase(getByGenreId.rejected, (state, action) => {
            state.errors = action.payload
            state.loading = false
        })
        .addCase(getByGenreId.pending, (state) => {
            state.loading = true
        })

});

const {reducer: moviesByGenreReducer} = moviesByGenreSlice;
const moviesByGenreActions = {
    getByGenreId
};

export {
    moviesByGenreActions,
    moviesByGenreReducer
};
