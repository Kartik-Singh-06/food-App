import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        restaurant: {},
        item: []
    },
    reducers: {
        setRestaurant: (state,action) =>{
            if(action?.payload?.id === state?.restaurant?.id){
                console.log("Same restuarant, no change required")
            }
            else{
                state.restaurant = action.payload
                state.item.length = 0
            } 
        },
        addItem: (state, action) => {
            // Mutating the state here
            state.item.push(action.payload)
        },
        removeItem: (state, action) => {
            let newState = []
            const itemToRemove = action.payload
            let isDeleted = false;
            for(let i=0;i<state.item.length;i++){
                if(state.item[i].card.info.id === itemToRemove.card.info.id){
                    if(!isDeleted){
                        isDeleted=true;
                    }
                    else{
                        newState.push(state.item[i])
                    }
                }
                else{
                    newState.push(state.item[i])
                }
            }
            state.item = newState
        },
        clearCart: (state) => {
            state.item.length = 0
        }
    }
})

export const { addItem, removeItem, clearCart, setRestaurant } = cartSlice.actions
export default cartSlice.reducer