import { configureStore } from "@reduxjs/toolkit";
import { TierListLineReducer } from "./features/reduxTierListLine";
import { ListItemsReducer } from "./features/reduxListItems";

export const store = configureStore({
    reducer: {
        tierListLine: TierListLineReducer,
        listItems: ListItemsReducer
    }
})