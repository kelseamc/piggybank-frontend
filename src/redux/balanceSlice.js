import { createSlice } from '@reduxjs/toolkit'

const balanceSlice = createSlice( {
    name: "balance",
    initialState: {
        total: 0,
        assign: 0,
    },
    reducers: {
        setTotal: (state, action) => {
            state.total = action.payload
        },
        setAssign: (state, action) => {
            state.assign = action.payload
        },
        subtractAssign: (state, action) => {
            state.assign -= action.payload
        },
        addAssign: (state, action) => {
            state.assign += action.payload
        },
        addTotal: (state, action) => {
            state.total += action.payload
        },
        subtractTotal: (state, action) => {
            state.total -= action.payload
        }
        
     },
})

export const { setAssign, setTotal, subtractAssign, addAssign, addTotal, subtractTotal} = balanceSlice.actions
export default balanceSlice.reducer