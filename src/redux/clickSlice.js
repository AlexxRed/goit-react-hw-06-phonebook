import { createSlice } from '@reduxjs/toolkit';


// const increment = createAction ('clicks/increment');

// const clickReducer = createReducer(0, {
//     [increment]: (state, action) => {
//         // return {value: state.value + action.payload,}
//         state.value += action.payload
//     }
// });
const initialState = { value: 0 };

export const clickSlice = createSlice({
    name: 'clicks',
    initialState,
    reducers: {
        increment(state, action) {
            state.value += action.payload;
        },
        reset(state) {
            state.value = 0;
        }
    }
});

export const { increment, reset } = clickSlice.actions;

export const getClicks = state => state.clicks.value;