import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';
import {updateTuitThunk,createTuitThunk,deleteTuitThunk, findTuitsThunk} from "../services/tuits-thunks";

const currentUser = {
  "userName": "NASA",
  "handle": "@nasa",
  "image": "nasa.png",
};

const templateTuit = {
  ...currentUser,
  "topic": "Space",
  "time": "2h",
  "liked": false,
  "replies": 0,
  "retuits": 0,
  "likes": 0,
}

const initialState = {
  tuits: [],
  loading: false
}


const tuitsSlice = createSlice({
  name: 'tuits',
  initialState,
  extraReducers: {
    [findTuitsThunk.pending]:
        (state) => {
          state.loading = true
          state.tuits = [] },
    [findTuitsThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.tuits = payload },
    [findTuitsThunk.rejected]:
        (state, action) => {
          state.loading = false
          state.error = action.error
        },
    [deleteTuitThunk.fulfilled] :
        (state, { payload }) => {
          state.loading = false
          state.tuits = state.tuits.filter(t => t._id !== payload)
        },

    [createTuitThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.tuits.push(payload)
        },

    [updateTuitThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id)
          state.tuits[tuitNdx] = { ...state.tuits[tuitNdx], ...payload }
        }

  },


  reducers:{ }
  //     {
  //   deleteTuit(state, action) {
  //     const index = state.findIndex(tuit =>
  //         tuit._id === action.payload);
  //     state.splice(index, 1);
  //   },
  //   createTuit(state, action) {
  //     state.unshift({
  //       ...action.payload,
  //       ...templateTuit,
  //       _id: (new Date()).getTime(),
  //     })
  //   },
  //   tuitFlipLike(state,action){
  //     const cur=state.find((t)=>t._id===action.payload._id);
  //     cur.liked?cur.likes--:cur.likes++;
  //     cur.liked=!cur.liked;
  //   }
  // }
});

export const {createTuit, deleteTuit,tuitFlipLike} = tuitsSlice.actions;
export default tuitsSlice.reducer;