import { combineReducers } from "redux";
import profileReducer from "./modules/profile/reducer";
import stocksReducer from "./modules/stocks/reducer";

const reducers = combineReducers({
    profile: profileReducer,
    stocks: stocksReducer,
})

export default reducers;