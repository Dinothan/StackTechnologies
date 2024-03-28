import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getAuthentication} from '../../utils/auth';

interface AuthState {
  isAuthenticated: boolean;
  username: string | undefined;
}

const initialState: AuthState = {
  isAuthenticated: false,
  username: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<string | undefined>) {
      const auth = getAuthentication().then((res: any) => {
        return res;
      });
      state.isAuthenticated =
        auth.toString().length > 0 !== null ? true : false;
      state.username = action.payload;
    },
  },
});

export const {loginSuccess} = authSlice.actions;

export default authSlice.reducer;
