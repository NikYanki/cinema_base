import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genresService} from "../../../services";

const initialState = {
    genres: [],
    errors: null,
    loading: false,
}

const getAll = createAsyncThunk("genresSlice/getAll",
    async (_, {rejectWithValue}) => {
        try {
            const {data: {genres}} = await genresService.getAll()
            return genres
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    });

const genresSlice = createSlice({
    name: "genresSlice",
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.genres = action.payload
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

const {reducer: genresReducer} = genresSlice;
const genresActions = {
    getAll,

};

export {
    genresActions,
    genresReducer
};
