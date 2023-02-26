import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesService} from "../../../services";

const initialState = {
    pages:null,
    movies: [],
    errors: null,
    loading: false
};

const getAll = createAsyncThunk("moviesSlice/getAll",
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getAll(page)
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    });

const moviesSlice = createSlice({
    name: "moviesSlice",
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.movies = action.payload.results
            state.pages = action.payload.total_pages
            state.loading = false
        })
        .addCase(getAll.rejected, (state, action) => {
            state.errors = action.payload
            state.loading = false
        })
        .addCase(getAll.pending, (state) => {
            state.loading = true
        })

});

const {reducer: moviesReducer} = moviesSlice
const moviesActions = {
    getAll
};

export {
    moviesActions,
    moviesReducer
};
