import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: "user",
    initialState: {
        id: 3,
        name: "",
        accounts: [],
        transactions: [],
        piggys: []
    },
    reducers: {
        setAccounts: (state,action) => {
            state.accounts = action.payload
        },
        setTransactions: (state, action) => {
            state.transactions = action.payload
        },
        setPiggy: (state, action) => {
            state.piggys = action.payload
        },
        setName: (state, action) => {
            state.name = action.payload
        },
        addPiggy: (state, action) => {
            state.piggys.push(action.payload)
        },
        deletePiggy: (state, action) => {
            const newpiggys = state.piggys.filter((pig) => pig.id !== action.payload)
            state.piggys = newpiggys
        },
        updatePiggy: (state, action) => {
            const pig = state.piggys.find((pig) => pig.id === action.payload.id)
            pig.current_balance = action.payload.current_balance
        }

    },
})

export const { setAccounts, setPiggy, setTransactions, setName, addPiggy, deletePiggy, updatePiggy} = userSlice.actions;

export default userSlice.reducer;