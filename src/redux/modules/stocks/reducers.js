import * as $SA from './actions';

const initialState = {
  allStocks: [], // [{ticker : .., name : ...}]
  filteredStocks: [],
  // addedStocks: [], // {stock : {ticker : .., name : ...}, count : XXX}
  // dividends: {
  //   annually: null,
  //   monthly: null,
  //   daily: null,
  // },
  selectedStock: null,
  selectedStockInfo: null,
};

export default function reducer(state = initialState, action) {
  const {payload} = action;
  switch (action.type) {
    case $SA.STORE_ALL_STOCKS: {
      return {
        ...state,
        allStocks: payload,
        filteredStocks: payload,
      };
    }
    case $SA.FILTER_STOCKS: {
      const filtered = !payload
        ? state.allStocks
        : state.allStocks.filter((stock) =>
            stock.ticker.startsWith(payload.toUpperCase()),
          );
      return {
        ...state,
        filteredStocks: filtered,
      };
    }
    case $SA.RESET_STOCKS: {
      return {
        ...state,
        filteredStocks: state.allStocks,
      };
    }
    case $SA.SET_SELECTED_STOCK: {
      return {
        ...state,
        selectedStock: payload,
      };
    }
    case $SA.RESET_SELECTED_STOCK: {
      return {
        ...state,
        selectedStock: null,
      };
    }
    default: {
      return state;
    }
  }
}
