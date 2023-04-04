import axios from './../../axios.js'
import { createAsyncThunk } from '@reduxjs/toolkit'
 
export const userLogin = createAsyncThunk(
    'auth/login',
    async ({ email, password }, { rejectWithValue }) => {
      try { 
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        }
        const { data } = await axios.post(
          `users/login`,
          { email, password },
          config
        )

        console.log(data)
        // store user's token in local storage
        localStorage.setItem('userToken', data.token)
        return data 
      } catch (error) {
        // return custom error message from API if any
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message)
        } else {
          return rejectWithValue(error.message)
        }
      }
    }
  )
export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ name, email, password,passwordConfirm }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      await axios.post(
        '/users/signup',
        { name, email, password ,passwordConfirm},
        config
      )
    } catch (error) { 
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)