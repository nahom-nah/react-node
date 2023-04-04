import { createSlice } from '@reduxjs/toolkit'
import { registerUser } from './authActions'
import { userLogin } from './authActions'
const initialState = {
  loading: false,
  userInfo: null,
  userToken: null,
  error: null,
  success: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [userLogin.pending]: (state) => {
        state.loading = true
        state.error = null
      },
      [userLogin.fulfilled]: (state, { payload }) => {
        state.loading = false
        state.userInfo = payload
        state.userToken = payload.userToken
      },
      [userLogin.rejected]: (state, { payload }) => {
        state.loading = false
        state.error = payload
      },
    [registerUser.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true 
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  },
})
export default authSlice.reducer