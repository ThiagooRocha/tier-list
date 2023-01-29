import { configureStore } from "@reduxjs/toolkit";
import { TierListLineReducer } from "./features/reduxTierListLine";

export const store = configureStore({
    reducer: {
        tierListLine: TierListLineReducer
    }
})