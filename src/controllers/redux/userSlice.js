import {createSlice} from '@reduxjs/toolkit'

const initialState={
    
}

const slice = createSlice({
    name: "user",
    initialState,
    reducers:{
        getUsers: (state)=>{
            state.push({name:"Yoni Tubul"});
            state.push({name:"Jack Ma"});
            
        }

    }
});

export default slice.reducer;
export const {getUsers} = slice.actions;