import { combineReducers } from "redux";
import profileReducer from "./modules/profile/reducers";
import stocksReducer from "./modules/stocks/reducers";

const reducers = combineReducers({
    profile: profileReducer,
    stocks: stocksReducer,
})

export default reducers;