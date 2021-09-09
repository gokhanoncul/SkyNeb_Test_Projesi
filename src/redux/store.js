import { configureStore } from "@reduxjs/toolkit";

import { orderBookRed } from "./slices";
import { liveOrderRed } from "./slices";
import { liveTradeRed } from "./slices";

export const store = configureStore({
    reducer : {
        orderBookReducer : orderBookRed,
        liveOrderReducer : liveOrderRed,
        liveTradeReducer : liveTradeRed
    }
});

console.log(store.getState());

