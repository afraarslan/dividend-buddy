import * as $PA from './actions';

const initialState = {
    allStocks: [], // [{ticker : .., name : ...}]
    // filteredStocks: [],
    // addedStocks: [], // {stock : {ticker : .., name : ...}, count : XXX}
    // dividends: {
    //   annually: null,
    //   monthly: null,
    //   daily: null,
    // },
    // selectedStock: null,
    // selectedStockInfo: null,
  };

export default function reducer(state = initialState, action) {
    const { payload } = action
    switch (action.type) {
        case $PA.STORE_ALL_STOCKS: {
            return {
                ...state,
                allStocks: payload,
            };
        }
        default: {
            return state;
        }
    }
}