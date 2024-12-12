import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialState:{
        isSideBarOpen: true
    },
    reducers:{
        sideBarOpen: (state)=> {
        state.isSideBarOpen = !state.isSideBarOpen
        },
        closedSidebar: (state)=> {
            state.isSideBarOpen = false
        }
    }
})

export const {sideBarOpen,closedSidebar} = appSlice.actions
export default appSlice.reducer