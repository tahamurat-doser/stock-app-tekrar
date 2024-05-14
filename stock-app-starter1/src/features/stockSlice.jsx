import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  purchases: [],
  sales: [],
  firms: [],
  products: [],
  brands: [],
  categories: [],
  loading: false,
  error: false,
};

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
fetchStart: (state ) => {
    state.loading = true
},
/* getFirmsSuccess: (state, {payload}) => {
    state.loading = false
    state.firms = payload
},
getSalesSuccess: (state, {payload}) => {
    state.loading = false
    state.sales = payload
}, */
getStockSuccess: (state, {payload: {path, stockData}}) => {
    state.loading = false
    state[path] = stockData
},
fetchFail: (state ) => {
    state.loading = true
    state.error =true
},


  },
});

export const {fetchStart,fetchFail,getStockSuccess} = stockSlice.actions;

export default stockSlice.reducer;
