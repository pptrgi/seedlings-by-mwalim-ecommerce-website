import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productData: [],
    userInfo: null,
    navName: {
        name: "All"
    }
}

export const seedlingSlice = createSlice({
    name: "seedling",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.productData.find(product => product.id == action.payload.id)
            if (item) {
                item.quantity += action.payload.quantity
            }
            else {
                state.productData.push(action.payload)
            }
        },
        resetCart: (state) => {
            state.productData = []
        },
        deleteCartItem: (state, action) => {
            state.productData = state.productData.filter(item => item.id != action.payload)
        },
        incrementQty: (state, action) => {
            const item = state.productData.find(item => item.id == action.payload)
            if (item){
                item.quantity ++
            }
        },
        decrementQty: (state, action) => {
            const item = state.productData.find(item => item.id == action.payload)
            if (item.quantity == 1 ) {
                item.quantity = 1
            } else {
                item.quantity --
            }
        },
        addUser: (state, action) => {
            state.userInfo = action.payload
        }, 
        removeUser: (state) => {
            state.userInfo = null
        },
        changeNavName: (state, action) => {
            state.navName.name = action.payload
        }
    }
}) 

export const {addToCart, resetCart, deleteCartItem, incrementQty, decrementQty, addUser, removeUser, changeNavName} = seedlingSlice.actions;
export default seedlingSlice.reducer;