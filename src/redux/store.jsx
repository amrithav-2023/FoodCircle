const { configureStore } = require("@reduxjs/toolkit");
import restSlice from "./restSlice";


const store = configureStore({
    reducer:{
        restSlice
    }
})

export default store