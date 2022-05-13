import { configureStore,  createSlice } from '@reduxjs/toolkit';


// const increment = createAction ('clicks/increment');

// const clickReducer = createReducer(0, {
//     [increment]: (state, action) => {
//         // return {value: state.value + action.payload,}
//         state.value += action.payload
//     }
// });
const initialState = { value: 0 };

const clickSlice = createSlice({
    name: 'clicks',
    initialState,
    reducers: {
        increment(state, action) {
            state.value += action.payload;
        }
    }
});

export const { increment } = clickSlice.actions;

export const store = configureStore({
    reducer: {
        clicks: clickSlice.reducer,
    }
});