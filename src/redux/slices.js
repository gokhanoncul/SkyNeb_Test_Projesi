import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 }

// takes the first 15 asks and bids values
export const orderBookSlice = createSlice({
    name : "orderBook",
    initialState,
    reducers : {

        orderBook : (state, action) => {
           
            (action.payload.asks && action.payload.bids) &&  (state.value = {
                asks: action.payload.asks.slice(0, 14),
                bids: action.payload.bids.slice(0, 14)
            })
          }
    }

})

// uses the last 30 data
export const liveOrderSlice = createSlice({
    name : "liveOrder",
    initialState,
    reducers : {

        liveOrder : (state, action) => {
            const  newArray = state.value; // defined newArray and assigned from the state

            if(action.payload.constructor === Object && Object.keys(action.payload).length > 0){

                if(newArray.length >= 30 ){  // Subtracts or add an element from the array when the number of data is 30.
                    newArray.shift()
                }else{
                    newArray.push(action.payload)
                }

                state.value = newArray

            }   
        }
     }
})

export const liveTradeSlice = createSlice({
    name : "liveTrade",
    initialState,
    reducers : {

        liveTrade : (state, action) => {}      
    }

})

//export actions
export const { orderBook } = orderBookSlice.actions;
export const { liveOrder } = orderBookSlice.actions;
export const { liveTrade } = orderBookSlice.actions;

// export reducers 
export const orderBookRed = orderBookSlice.reducer;
export const liveOrderRed = liveOrderSlice.reducer;
export const liveTradeRed = liveTradeSlice.reducer;
