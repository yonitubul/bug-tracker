import {createSlice} from "@reduxjs/toolkit"
import {retrieveBugs} from "../bugController"

const initialState=[]

const slice = createSlice({
    name: "bug",
    initialState,
    reducers:{
        getBugs : state=>retrieveBugs(),
        createBug : (state, action)=>{ },
        updateBug:(state, action)=>{},
        completeBug:(state,action)=>{},
    }
})
export default slice.reducer;
export const {getBugs,createBug,updateBug,completeBug} = slice.actions;