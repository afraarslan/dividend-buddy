import * as $SA from './actions'
import { $A } from "../../helper";

export const loadAllStocks = (dispatch) => {
    return async (dispatch) => {
        try {
            const stocksResult = await fetch("http://localhost:8888/stocks/all").then((res) => res.json());
            dispatch($A($SA.STORE_ALL_STOCKS, stocksResult.data));
        } catch (error) {
            console.log('load-all-stocks error', error)
        }
    };
};