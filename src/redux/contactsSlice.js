import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    items: [],
    filter: ''
};

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact(state, action) {
            state.items.push(action.payload);
        },
        removeContact(state, action) {
            state.items.filter(contact => contact.id !== action.payload);
        },
        filterContacts(state, action) {
            state.items = action.payload
        }
    }
});

export const { addContact, removeContact,filterContacts } = contactsSlice.actions;










// const increment = createAction ('clicks/increment');

// const clickReducer = createReducer(0, {
//     [increment]: (state, action) => {
//         // return {value: state.value + action.payload,}
//         state.value += action.payload
//     }
// });
// const initialState = { value: 0 };


// export const clickSlice = createSlice({
//     name: 'clicks',
//     initialState,
//     reducers: {
//         increment(state, action) {
//             state.value += action.payload;
//         },
//         reset(state) {
//             state.value = 0;
//         }
//     }
// });

// export const { increment, reset } = clickSlice.actions;

// export const getClicks = state => state.clicks.value;