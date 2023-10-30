import { createSlice } from '@reduxjs/toolkit';
import { axiosGet } from '@/pages/api/ApiService';

const dataSlice = createSlice({
  name: 'gainer_losers_data',
  initialState: {
    loading: false,
    error: null,
    topgainers:null,
    toplosers:null,
    lastupdated:'',
    suggested_stocks:null,
    expirationTime:null
  },
  reducers: {
    setData: (state, action) => {
      state.loading = false;
      state.error = null;
      state.suggested_stocks=action.payload.suggested_stocks;
      state.topgainers = action.payload.top_gainers;
      state.toplosers = action.payload.top_losers;
      state.lastupdated = action.payload.last_updated;
      state.expirationTime = new Date().toISOString();
    },
    setLoading: (state) => {
      state.loading = true;
      state.error = null;
      state.topgainers=null;
      state.toplosers=null;
      state.lastupdated=null;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = true;
      state.topgainers=null;
      state.toplosers=null;
      state.lastupdated=null;
    },
  },
});

export const { setData, setLoading, setError } = dataSlice.actions;

export const fetchDataAsync = (data) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const result = await axiosGet(data);
    if (result.data) {
      dispatch(setData(result.data));
    } else {
      dispatch(setError(result.message));
    }
  } catch (error) {
    dispatch(setError(error.messsage));
  }
};

export default dataSlice.reducer;
