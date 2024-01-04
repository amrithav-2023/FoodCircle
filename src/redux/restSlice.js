import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


//api call using thunk
export const fetchRestaurent = createAsyncThunk('restaurentList/fetchRestaurent',()=>{
    const result = axios.get('/restaurant.json').then(response=>response.data.restaurants)
    console.log(result);
    return result
})

const restSlice = createSlice({
    name:'restaurentList',
    initialState:{ //tpromise based,result comes three states resolve,reject,pending, three keys to store three type of result
        loading:false, //pending state
        allRestaurent:[], //resolve state
        searchRestaurent:[],
        error:"" //reject state
    },
    //when we get data from methods having asynchronous functions (when we get data through api call) we use extraReducers in place of reducer key
    extraReducers : (builder)=>{
        //builder holds value/response from the thunk
        builder.addCase(fetchRestaurent.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(fetchRestaurent.fulfilled,(state,action)=>{
            state.loading = false
            state.allRestaurent = action.payload //positive response in payload
            state.searchRestaurent=action.payload
            state.error = ""
        })
        builder.addCase(fetchRestaurent.rejected,(state,action)=>{
            state.loading = false
            state.allRestaurent = ""
            state.error = action.error.message //negetive response in error.message
        })
    },

    reducers:{
        search : (state,action)=>{
           state.allRestaurent = state.searchRestaurent.filter(item=>item.neighborhood.toLowerCase().includes(action.payload))
        }
    }

})

export const {search} = restSlice.actions
export default restSlice.reducer