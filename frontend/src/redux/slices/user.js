import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const initialState = {
  loading: false,
  hasErrors: false,
}

const userSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state) => {
      state.loading = true
    },
    loginSuccess: (state, { payload }) => {
      state.products = payload
      state.loading = false
      state.hasErrors = false
    },
    loginError: (state) => {
      state.loading = false
      state.hasErrors = true
    },
  },
})

export const { login, loginSuccess, loginError } = userSlice.actions

export const userSelector = (state) => state.products

export default userSlice.reducer

export function loginUser(email, password) {
  return async (dispatch) => {
    dispatch(login())

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      const { data } = await axios.post(
        '/api/users/login',
        { email, password },
        config
      )
      dispatch(loginSuccess(data))
    } catch (error) {
      dispatch(loginError())
    }
  }
}
