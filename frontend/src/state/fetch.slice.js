import { createSlice } from "@reduxjs/toolkit";

const fetchSlice = createSlice({
    name: 'fetch',
    initialState: {
        total: 0,
        count: 0,
        records: [],
        isLoading: false
    },
    reducers: {
        setTotal: (state, action) => {
            state.total = action.payload
        },
        setCount: (state, action) => {
            state.count += action.payload
        },
        setRecords: (state, action) => {
            state.records = [...state.records, ...action.payload]
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload
        }
    }
})

export const { setCount, setRecords, setTotal, setLoading } = fetchSlice.actions
export default fetchSlice.reducer