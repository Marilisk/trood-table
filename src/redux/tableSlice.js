import { createSlice } from "@reduxjs/toolkit";

const tableSlice = createSlice({
    name: 'table',
    initialState: {
        items: [
            { id: 1, name: 'Pyshky.net', status: 'green', type: 'TRST', conditions: 'x2,6 months', volume: 120000, roi: 4, free: 20, hedge: 20 },
            { id: 2, name: 'NFT-Flowershop', status: 'yellow', type: 'THT', conditions: 'x4,2 years', volume: 80000, roi: 23, free: 12, hedge: 0 },
            { id: 3, name: 'TokenHunt.club', status: 'green', type: 'THC', conditions: 'x2,1 year', volume: 120000, roi: 23, free: 2, hedge: 20 },
            { id: 4, name: 'Web3 P2P University', status: 'red', type: 'TRST', conditions: 'x2,1 years', volume: 200000, roi: 6, free: 1, hedge: 0 },
        ],
        sort: 'name',
        reverseSort: false,
        filters: {
            status: 'All',
            type: 'All',
        }
    },
    reducers: {
        onSort(state, action) {
            if (state.sort === action.payload) {
                state.reverseSort = !state.reverseSort;
            } else {
                state.sort = action.payload;
                state.reverseSort = false;
            }
            state.items.sort((a, b) => {
               return (state.reverseSort? a[state.sort] > b[state.sort] : !(a[state.sort] > b[state.sort])) ? 1: -1;
            });
        },
        onFilter(state, action) {
            state.filters[action.payload.property] = action.payload.value;            
        },
        onBuy(state, action) {
            console.log(action.payload); 
        },
    }
})

export const {onSort, onFilter, onBuy} = tableSlice.actions;
export default tableSlice.reducer;