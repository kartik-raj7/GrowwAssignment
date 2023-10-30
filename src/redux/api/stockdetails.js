import { createSlice } from '@reduxjs/toolkit';
import { axiosGet } from '@/pages/api/ApiService';

const StocksSlice = createSlice({
  name: 'stock_data',
  initialState: {
    loading: false,
    error: null,
    stock_details: {},
    expirationTime:null,
  },
  reducers: {
    setData: (state, action) => {
      console.log(action.payload)
      const { symbol, type, data } = action.payload;

      state.loading = false;
      state.error = null;
      if (state.stock_details[symbol]) {
        state.stock_details[symbol] = {
          ...state.stock_details[symbol],
          [type]: data,
        };
      } else {
        state.stock_details = {
          ...state.stock_details,
          [symbol]: {
            [type]: data,
          },
        };
      }
      state.expirationTime = new Date().toISOString();
    },
    setLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setData, setLoading, setError } = StocksSlice.actions;

export const fetchStockDetailsAsync = (data, type, symbol) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const result = await axiosGet(data);
    if (result.data) {
      dispatch(setData({ symbol, type, data: result.data }));
    } else {
      dispatch(setError(result.message));
    }
  } catch (error) {
    dispatch(setError('Something went wrong'));
  }
};

export const fetchImageDetailsASync = (data,type,symbol) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const result = await axiosGet(data,'imagedetails');
    if (result.data) {
      dispatch(setData({ symbol, type, data: result.data }));
    } else {
      dispatch(setError(result.message));
    }
  } catch (error) {
    dispatch(setError('Something went wrong'));
  }
};
export default StocksSlice.reducer;
