import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    pizzas: [],
    load: false
}


export const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        setPizzas: (state, action) => {
            state.pizzas = action.payload
        },
        toggleLoad: (state, action) => {
            state.load = action.payload
        }
    },
})

export const { setPizzas, toggleLoad } = pizzasSlice.actions

export default pizzasSlice.reducer