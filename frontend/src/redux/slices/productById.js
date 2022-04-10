import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const initialState = {
  loading: false,
  hasErrors: false,
  product: [],
}

const productDetailsSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProduct: (state) => {
      state.loading = true
    },
    getProductsSuccess: (state, { payload }) => {
      state.product = payload
      state.loading = false
      state.hasErrors = false
    },
    getProductsError: (state) => {
      state.loading = false
      state.hasErrors = true
    },
  },
})

export const { getProduct, getProductsSuccess, getProductsError } =
  productDetailsSlice.actions

export const productSelector = (state) => state.product

export default productDetailsSlice.reducer

export function fetchProduct(id) {
  return async (dispatch) => {
    dispatch(getProduct())

    try {
      const { data } = await axios.get(`/api/products/${id}`)

      dispatch(getProductsSuccess(data))
    } catch (error) {
      dispatch(getProductsError())
    }
  }
}
