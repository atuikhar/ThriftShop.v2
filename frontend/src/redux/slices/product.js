import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const initialState = {
  loading: false,
  hasErrors: false,
  products: [],
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProducts: (state) => {
      state.loading = true
    },
    getProductsSuccess: (state, { payload }) => {
      state.products = payload
      state.loading = false
      state.hasErrors = false
    },
    getProductsError: (state) => {
      state.loading = false
      state.hasErrors = true
    },
  },
})

export const { getProducts, getProductsSuccess, getProductsError } =
  productsSlice.actions

export const productsSelector = (state) => state.products

export default productsSlice.reducer

export function fetchProducts() {
  return async (dispatch) => {
    dispatch(getProducts())

    try {
      const { data } = await axios.get('/api/products')

      dispatch(getProductsSuccess(data))
    } catch (error) {
      dispatch(getProductsError())
    }
  }
}
