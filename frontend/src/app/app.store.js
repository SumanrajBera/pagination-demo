import { configureStore } from '@reduxjs/toolkit'
import fetchReducer from '../state/fetch.slice.js'

export const store = configureStore({
    reducer: {
        fetch: fetchReducer
    }
})