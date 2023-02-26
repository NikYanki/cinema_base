import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../../services";

const initialState = {
    movie: null,
    errors: null,
    loading: false
}
const getMovieById = createAsyncThunk("movieDetailsSlice/getMovieById",
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getById(id)
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    })

const movieDetailsSlice = createSlice({
    name: "movieDetailsSlice",
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getMovieById.fulfilled, (state, action) => {
            state.movie = action.payload
            state.loading = false
        })
        .addCase(getMovieById.rejected, (state, action) => {
            state.errors = action.payload
            state.loading = false
        })
        .addCase(getMovieById.pending, (state) => {
            state.loading = true
        })

})

const {reducer: movieDetailsReducer} = movieDetailsSlice
const movieDetailsActions = {
    getMovieById
}

export {
    movieDetailsActions,
    movieDetailsReducer
}
