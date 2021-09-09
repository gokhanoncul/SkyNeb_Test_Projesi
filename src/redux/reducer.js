import { createReducer } from '@reduxjs/toolkit'
import { orderBook, liveOrder, liveTrade } from "./actions";

// takes the first 15 asks and bids values
// use orderBook action
export const orderBookReducer = createReducer(initialState, {
    [orderBook]: (state, action) => {

        (action.payload.asks && action.payload.bids) &&  (state.value = {
            asks: action.payload.asks.splice(0, 14),
            bids: action.payload.bids.splice(0, 14)
        })
    }
  });


// uses the last 30 data
// use liveOrder action
export const liveOrderReducer = createReducer(initialState, {
    [liveOrder]: (state, action) => {

        const newArray = state.value; // defined newArray and assigned from the state

        if(action.payload.constructor == Object && Object.keys(action.payload).length > 0){
 
            if(newArray.length >= 30 ){ // Subtracts or add an element from the array when the number of data is 30.
                newArray.shift()
            }else{
                newArray.push(action.payload)
            }

     
    }
}});
  
// use liveTrade action
export const liveTradeReducer = createReducer(initialState, {
    [liveTrade]: (state, action) => {}
  });
  
