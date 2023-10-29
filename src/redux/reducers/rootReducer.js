import { combineReducers } from '@reduxjs/toolkit';
import dataReducer from '../api/gainerLosers';
import stockData from '../api/stockdetails'
const rootReducer = combineReducers({
  data: dataReducer,
  stockData:stockData,
});

export default rootReducer;
