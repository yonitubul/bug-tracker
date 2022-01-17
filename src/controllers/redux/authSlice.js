import {createSlice} from '@reduxjs/toolkit'

const initialState ={
    admin:false,
    loggedIn:false
};
const slice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        signIn:(state,action)=>{
            
        },
        signOut:(state)=>{},
        createUser:(state,action)=>{}        


    }
});

export default slice.reducer;
export const {signIn, signOut, createUser} = slice.actions;