import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {LOGIN_URL} from '../urls';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getLogin = createAsyncThunk(
  'getLogin',
  async (
    userCredential: {
      username: string;
      usersecret?: string;
      userpassword: string;
    },
    {rejectWithValue},
  ) => {
    try {
      const response = await axios.post(LOGIN_URL, userCredential);

      const token = response.data.auth_token;

      await AsyncStorage.setItem('@security_Key', token);
    } catch (error) {
      console.error(error);
      return rejectWithValue({message: 'Fetch login failed'});
    }
  },
);
