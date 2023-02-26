import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService, topRatedMoviesService} from "../../../services";

const initialState = {
    topRatedMovies: [],
    errors: null,
    loading: false
}
const getAll = createAsyncThunk("topRatedMoviesSlice/getAll",
    async (_, {rejectWithValue}) => {
        try {
            await new Promise(resolve => setTimeout(() => resolve(), 500))
            const {data: {results}} = await topRatedMoviesService.getAll()
            return results
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    })

const topRatedMoviesSlice = createSlice({
    name: "topRatedMoviesSlice",
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.topRatedMovies = action.payload
            state.loading = false
        })
        .addCase(getAll.rejected, (state, action) => {
            state.errors = action.payload
            state.loading = false
        })
        .addCase(getAll.pending, (state) => {
            state.loading = true
        })

})

const {reducer: topRatedMoviesReducer} = topRatedMoviesSlice
const topRatedMoviesActions = {
    getAll
}

export {
    topRatedMoviesActions,
    topRatedMoviesReducer
}
