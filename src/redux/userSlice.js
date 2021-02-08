import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: "user",
    initialState: {
        id: 0,
        name: "",
        accounts: [],
        transactions: [],
        piggys: []
    },
    reducers: {
        setId: (state, action) => {
            state.id = action.payload
        },
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
        },
        addTransaction: (state, action) => {
            state.transactions.push(action.payload)
        },
        updateAccountTotal: (state, action) => {
            let account = state.accounts.find((acc) => acc.id === action.payload.id)
            account.total = action.payload.total
        },
        deleteTransaction: (state, action) => {
            const newtransactions = state.transactions.filter((tran) => tran.id !== action.payload.id)
            state.transactions = newtransactions
        },
        addAccount: (state, action) => {
            state.accounts.push(action.payload)
        },
        deleteAccount: (state, action) => {
            const accounts = state.accounts.filter((acc) => acc.id !== action.payload.id)
            state.accounts = accounts
        }
    },
})

export const {  setAccounts, 
                setPiggy, 
                setTransactions, 
                setName, 
                addPiggy, 
                deletePiggy, 
                updatePiggy, 
                addTransaction,
                updateAccountTotal,
                deleteTransaction,
                addAccount,
                deleteAccount,
                setId} = userSlice.actions;

export default userSlice.reducer;