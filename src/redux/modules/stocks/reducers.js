import * as $SA from './actions';

const initialState = {
  allStocks: [], // [{ticker : .., name : ...}]
  filteredStocks: [],
  addedStocks: [], // {stock : {ticker : .., name : ...}, count : XXX}
  dividends: {
    annually: null,
    monthly: null,
    daily: null,
  },
  selectedStock: null,
  selectedStockInfo: null,
};

const dividendCalculator = function (accumulator, stockInfo) {
  return accumulator + stockInfo.stock.dividend * stockInfo.count;
};

function calculateDividens(addedStocks) {
  let annuallyDividendsTotal = addedStocks.reduce(dividendCalculator, 0);

  return {
    annually: annuallyDividendsTotal,
    monthly: annuallyDividendsTotal / 12,
    daily: annuallyDividendsTotal / 365,
  };
}

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
      let selectedStock = payload;
      let selectedStockInfo = state.addedStocks.find((stockData) =>
        stockData.stock.ticker.startsWith(selectedStock.ticker.toUpperCase()),
      );
      return {
        ...state,
        selectedStock,
        selectedStockInfo,
      };
    }
    case $SA.RESET_SELECTED_STOCK: {
      return {
        ...state,
        selectedStock: null,
        selectedStockInfo: null,
      };
    }
    case $SA.ADD_OR_EDIT_STOCK_TO_SELECTED: {
      let stockToAddOrEdit = payload.stock;
      let newStockCount = payload.count;
      let stockInfo = state.addedStocks.find(
        (stockData) =>
          stockData.stock.ticker == stockToAddOrEdit.ticker.toUpperCase(),
      );

      let isEditMode = !!stockInfo;
      let updatedAddedStocks;

      if (!isEditMode) {
        const newStockData = {stock: stockToAddOrEdit, count: newStockCount};
        updatedAddedStocks = [...state.addedStocks, newStockData];
      } else {
        updatedAddedStocks = state.addedStocks.map((stockData) => {
          if (stockData.stock.ticker == stockToAddOrEdit.ticker.toUpperCase()) {
            return {
              ...stockData,
              count: newStockCount,
            };
          } else {
            return stockData;
          }
        });
      }
      return {
        ...state,
        addedStocks: updatedAddedStocks,
        dividends: calculateDividens(updatedAddedStocks),
        selectedStock: null,
        selectedStockInfo: null,
      };
    }
    default: {
      return state;
    }
  }
}
